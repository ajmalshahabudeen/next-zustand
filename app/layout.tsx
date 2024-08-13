import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { poppins } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Next Zustand",
  description: "Zustand state management library for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
