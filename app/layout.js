import "./globals.css";

import Header from "@/components/Header";
import TheLine from "@/components/TheLine";
import Footer from "@/components/Footer";
import Map from "@/components/Map";

export const metadata = {
  title: "Paros Family Restaurant",
  description: "Home page for Paros Family Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TheLine />
        <Header />
        {children}
        <Map />
        <Footer />
      </body>
    </html>
  );
}
