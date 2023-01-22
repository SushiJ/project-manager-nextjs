import "@/styles/global.css";
import { Inter } from "@next/font/google";
import clsx from "clsx";
import GlassPane from "@/components/GlassPane";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-inter",
});

export default function DashBoardRootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.variable, "dark")}>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="p-4 w-full h-full flex items-center justify-center">
          <Sidebar />
          <main className="w-full pl-6 h-full">{children}</main>
        </GlassPane>
        <div id="modal"></div>
      </body>
    </html>
  );
}
