import type { Metadata } from "next";
import '@/app/ui/global.css';
import { poppins } from "./ui/fonts";
import Navbar from "./components/navigation/navbar";


export const metadata: Metadata = {
  title: "Kye-Lee Low Portfolio",
  description: "Kye-Lee Low Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light bg-white dark:bg-gray-900 dark:text-gray-100">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
