'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import './footer.css';

const Footer: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const userCookie = getCookie('user');
    if (!userCookie) {
      router.push('/admin/login');
    }
  }, [router]);

  return (
    <div id="root">
      <main className="main-content">
        {/* Ana içerik buraya gelir */}
      </main>
      <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} huzur oto yedek parça. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
