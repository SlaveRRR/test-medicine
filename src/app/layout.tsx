import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/style.scss"

const font = Noto_Sans({weight:['400','500','700'],subsets:['cyrillic']})

export const metadata: Metadata = {
  title: "Next app for medicine",
  description: "Medicine app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          {children}  
        </body>
    </html>
  );
}
