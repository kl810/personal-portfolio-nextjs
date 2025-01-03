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
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        {/* <script src="https://kit.fontawesome.com/e1d9ec8da2.js" crossOrigin="anonymous"></script>  */}
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
