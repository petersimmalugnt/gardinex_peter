import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import DebugGrid from "./components/DebugGrid/DebugGrid";
import CookiePopup from "./components/CookiePopup";


export const metadata: Metadata = {
  title: "Gardinex",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body>
        <DebugGrid columns={12}/>
        <CookiePopup />
        <Header
          showLargeLogo={false}
          cartLength={0}
          lang={"en"}
          currency={"eur"}
          invert={false}
        />
        {children}
      </body>
    </html>
  );
};