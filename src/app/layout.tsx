import type { Metadata } from "next";
import "./globals.css";
import "./cursor.css";
import "./main.css";

export const metadata: Metadata = {
  title: "Maria Podobrazhnykh - UX/UI Designer",
  description: "UX/UI Designer with an artistic education and over 7 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/main/Group_1321315021.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
