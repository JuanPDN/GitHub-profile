import type { Metadata } from "next";
import "./globals.css";
import { be_Vietnam_Pro } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "GitHub Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${be_Vietnam_Pro.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
