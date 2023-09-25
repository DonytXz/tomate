import DashboardPage from "@/components/DashboardPage";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tomate",
  description: "Tomate taqueria app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-primary-black " lang="en">
      <body className={inter.className}>
        <DashboardPage>{children}</DashboardPage>
      </body>
    </html>
  );
}
