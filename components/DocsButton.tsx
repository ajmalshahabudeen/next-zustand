'use client';
import { Button } from "@chakra-ui/react";

export const DocsButton = () => {
  return (
    <Button
      variant={"outline"}
      colorScheme="red"
      onClick={() => window.open("https://docs.pmnd.rs/zustand/getting-started/introduction")}
    >
      Docs
    </Button>
  );
};

