import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { poppins } from "@/config/fonts";
import { Box } from "@chakra-ui/react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
        <Providers>
          <Box position={"fixed"} top={0} right={0} display={"flex"}>
            <ThemeToggle />
          </Box>
          {children}
        </Providers>
      </body>
    </html>
  );
}
