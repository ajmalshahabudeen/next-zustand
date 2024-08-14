import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider";
import { poppins } from "@/config/fonts";
import { Box } from "@chakra-ui/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SourceButton } from "@/components/SourceButton";
import { DocsButton } from "@/components/DocsButton";

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
          <Box position={"fixed"} top={0} right={0} p={10} display={"flex"} gap={5} justifyContent={"flex-end"} className="backdrop-blur-xl w-full z-40">
            <DocsButton />
            <SourceButton />
            <ThemeToggle />
          </Box>
          {children}
        </Providers>
      </body>
    </html>
  );
}
