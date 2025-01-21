"use client";
import React, { useEffect, useState } from 'react';
import { loginUser } from './actions';
import { useRouter } from 'next/navigation';
import { getCookie, setCookie } from 'cookies-next'; // getCookie ekledik
import './style.css';

const LoginPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  // Eğer cookie varsa admin sayfasına yönlendirme
  useEffect(() => {
    const userCookie = getCookie('user');
    if (userCookie) {
      router.push('/admin?redirected=true');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    try {
      const user = await loginUser(formData);
      alert(`Hoş geldiniz, ${user.username}!`);

      // Kullanıcının login durumunu belirten bir cookie ayarla
      setCookie('user', user.username, { maxAge: 60 * 60 * 24 }); // 1 gün süreli

      // Login sonrası admin sayfasına yönlendir
      router.push('/admin?redirected=true');
    } catch  {
      alert("Giriş yaparken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label htmlFor="username">Kullanıcı Adı:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email or Phone"
          required
        />

        <label htmlFor="password">Şifre:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
