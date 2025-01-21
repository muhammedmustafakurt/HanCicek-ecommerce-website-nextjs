import Sidebar from "./companents/sidebar/sidebar";
import Footer from "./companents/footer/footer";
export const metadata = {
  title: "Han Çiçekçilik yönetim paneli",
  description: "Han Çiçekçilik & Organizasyon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Han Çiçekçilik yönetim paneli</title>
      </head>
      <body>
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
