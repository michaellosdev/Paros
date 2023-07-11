import "./globals.css";

import Nav from "@/lib/components/Nav";
import TheLine from "@/lib/TheLine";
import Footer from "@/lib/components/Footer";
import Map from "@/lib/components/Map";
import { montserrat, kaushanScript } from "@/lib/fonts/Fonts";
import Contact from "@/lib/sections/Contact";

export const metadata = {
  title: "Paros Family Restaurant",
  description: "Home page for Paros Family Restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${kaushanScript.variable}`}
    >
      <body className="font-main">
        <Nav
          navLinks={[
            { name: "Home", path: "/" },
            { name: "Menu", path: "/menu" },
            { name: "Catering", path: "/catering" },
            { name: "Contact", path: "/contact" },
          ]}
        />
        {children}
        <Contact />
        <Map />
        <Footer />
      </body>
    </html>
  );
}
