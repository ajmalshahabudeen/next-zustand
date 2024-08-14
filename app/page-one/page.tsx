"use client";
import { useStore } from "@/hooks/store";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const PageOne = () => {
  const route = useRouter();

  return (
    <Box py={{ base: "8rem", md: "5rem" }}>
      <Center minH="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page One</Heading>
        <Text fontSize={{ base: "sm", md: "lg" }} border={"1px solid"} p={5}>
          Non persistent state. Refresh to reset the value.
        </Text>
        <BearCounter />
        <Controls />
        <CodeSection />
        <Flex gap={5}>
          <Button size={"lg"} variant={"outline"} onClick={() => route.back()}>
            Go Back
          </Button>
          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => route.push("/page-two")}
          >
            Next Page
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default PageOne;

function BearCounter() {
  const bears = useStore((state: any) => state.bears);
  return <Text fontSize={{ base: "xl", md: "5xl" }}>{bears} around here...</Text>;
}

function Controls() {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  return (
    <Button
      size={"lg"}
      variant={"outline"}
      colorScheme="teal"
      onClick={increasePopulation}
    >
      one up
    </Button>
  );
}

const CodeSection = () => {
  return (
    <Box maxW={{ base: "100%", md: "100%" }} mx={"auto"} p={5}>
      <Highlight
        query={"/hooks/useStore.tsx"}
        styles={{ bg: "red.100", px: 2, py: 1, rounded: "md" }}
      >
        /hooks/useStore.tsx
      </Highlight>
      <CodeBlock
        text={code}
        language={"typescript"}
        showLineNumbers={true}
        theme={dracula}
      />
    </Box>
  );
};

const code = `export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: State) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: any) => set({ bears: newBears }),
}));`;
