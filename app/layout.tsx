import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Josefa Lizama — Software Engineer",
  description:
    "Software Engineer based in Santiago, Chile. I build products end-to-end, from Flutter mobile apps to Vue and Next.js web platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <noscript>
          <style>{`.reveal,.reveal--pop>*{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
