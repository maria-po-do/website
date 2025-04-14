import React from 'react';
import './globals.css';
import './custom-cursor.css';
import SvgIcons from './svg-icons';
import CustomCursor from './components/CustomCursor';
import type { Metadata } from "next";
import "./main-styles.css";

export const metadata: Metadata = {
  title: "Maria Podobrazhnykh",
  description: "Portfolio of Maria Podobrazhnykh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/main/Group_1321315021.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caladea:ital,wght@0,400;0,700;1,400;1,700&family=Onest:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* SVG иконки для курсора */}
        <SvgIcons />
        
        {/* Кастомный курсор */}
        <CustomCursor />
        
        {/* Основное содержимое страницы */}
        {children}
      </body>
    </html>
  );
}
