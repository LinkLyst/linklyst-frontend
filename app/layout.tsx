import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose what you need
  variable: "--font-poppins" // optional but useful for Tailwind/CSS
});

import { SidebarProvider } from "@/components/ui/sidebar";
import LeftSidebar from "@/components/layout/LeftSidebar";

export const metadata: Metadata = {
  title: "LinkLyst",
  description: "A social way to organize your web world"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased flex min-h-screen !bg-primary text-white ${poppins.variable}`}>
        <SidebarProvider>
          {/* Left Sidebar */}
          <aside className=" w-60">
            <LeftSidebar />
          </aside>

          {/* Main Content */}
          <div className="flex-1 flex flex-col">
            <header className="border-b border-gray-400 text-sm font-medium ">
              <div className="flex items-center justify-center">
                <p className="w-full text-center pt-8 hover:bg-zinc-900 text-lg sidebar">
                  My Following
                </p>
                <p className="w-full text-center pt-8 text-lg">Feed</p>
              </div>
            </header>

            <main className="p-4 sm:p-6 overflow-auto flex flex-col basis-0 flex-auto">
              {children}
            </main>
          </div>

          {/* Right Sidebar */}
          <aside className="border-l border-gray-400 w-60 p-4"></aside>
        </SidebarProvider>
      </body>
    </html>
  );
}
