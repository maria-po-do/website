import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sailing with Maria - Adventures and Trips",
  description: "Join sailing adventures with Maria Podobrazhnykh. Discover beautiful destinations and experience unforgettable sailing trips.",
};

export default function SailingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 