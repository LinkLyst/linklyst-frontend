import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

import { SidebarProvider } from "@/components/ui/sidebar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import Header from "@/components/layout/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "LinkLyst",
  description: "A social way to organize your web world",
  icons: {
    icon: [{ url: "/Ly.svg", type: "image/svg+xml" }],
    apple: "/Ly.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen overflow-hidden bg-primary text-white ${poppins.variable}`}
      >
        <SidebarProvider>
          <div className="flex h-full w-full">
            <aside className="hidden lg:block w-60 shrink-0 border-r border-zinc-800">
              <LeftSidebar />
            </aside>

            <div className="flex flex-1 flex-col overflow-hidden">
              <Header />

              <main className="flex-1 overflow-y-auto p-4 sm:px-8 sm:py-4">{children}</main>
            </div>

            <aside className="hidden xl:block w-84  border-l border-zinc-800 p-4">
              <h1>hellowlrd</h1>
            </aside>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
