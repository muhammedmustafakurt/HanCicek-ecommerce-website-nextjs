'use server';
import connectToDB from '../../db';

export async function addProduct(data: FormData) {
  const slug = data.get('table') as string;
  const title = data.get('title') as string;
  const description = data.get('description') as string;
  const price = parseFloat(data.get('price') as string);
  const image = data.get('image') as string;
  const url = data.get('slug') as string;

  if (!slug || !title || !description || isNaN(price) || !image) {
    throw new Error('Tüm alanlar doldurulmalıdır.');
  }

  const db = await connectToDB();
  const collection = db.collection(slug);
  const collection2 = db.collection("products");

  // Yeni ürünü ekle
  const result1 = await collection.insertOne({
    title,
    description,
    price,
    image,
    url,
    createdAt: new Date(),
  });
  const result2 = await collection2.insertOne({
    title,
    description,
    price,
    image,
    url,
    createdAt: new Date(),
  });

  if (!result1.insertedId || !result2.insertedId) {
    throw new Error('Ürün eklenirken bir hata oluştu.');
  }

  console.log('Yeni Ürün Eklendi:', { slug, title, description, price, image });
}