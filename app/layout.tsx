import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheldon's Market",
  description: "Fresh from the farm, straight to you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 flex flex-col">
        {children}
      </body>
    </html>
  );
}