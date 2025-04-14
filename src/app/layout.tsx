import React from 'react';
import './globals.css';
import './custom-cursor.css';
import SvgIcons from './svg-icons';
import CustomCursor from './components/CustomCursor';
import type { Metadata } from "next";
import "./main-styles.css";
import "./cursor.css";

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
