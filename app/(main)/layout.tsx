import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../components/Navbar"; // adjust path if needed

export const metadata: Metadata = {
  title: "Sheldon's Market",
  description: "Fresh from the farm, straight to you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 flex flex-col">
        
        <Navbar /> 

        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  );
}