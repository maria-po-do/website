import type { Metadata } from "next";
import "./main-styles.css";
import "./cursor.css";

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
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
