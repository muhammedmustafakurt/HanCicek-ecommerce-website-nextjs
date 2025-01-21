'use server';
import argon2 from 'argon2';
import connectToDB from '../../db';

export async function loginUser(data: FormData) {
  const username = data.get('username') as string;
  const password = data.get('password') as string;

  if (!username || !password) {
    throw new Error('Kullanıcı adı ve şifre doldurulmalıdır.');
  }

  const db = await connectToDB();
  const collection = db.collection('admin');

  const user = await collection.findOne({ username });

  if (!user) {
    throw new Error('Kullanıcı bulunamadı.');
  }

  const isPasswordValid = await argon2.verify(user.password, password);

  if (!isPasswordValid) {
    throw new Error('Şifre hatalı.');
  }

  console.log('Kullanıcı Giriş Yaptı:', { username });

  return { success: true, username: user.username };
}
