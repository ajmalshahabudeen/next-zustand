"use client";
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

const PageRoot = () => {
  const route = useRouter();
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Zustand Examples</Heading>
        <Box>
          <Text>
            Simply Create a file at root of the project. <span className="underline underline-offset-8">eg: `&#123;
            $ProjectFolder &#125;/hooks/useUserStore.tsx`</span>. So you can call this state globally.
          </Text>
        </Box>
        <Flex gap={5}>
          <Button
            variant={"outline"}
            colorScheme="purple"
            onClick={() => route.push("/page-one")}
          >
            Page One
          </Button>
          <Button
            variant={"outline"}
            colorScheme="purple"
            onClick={() => route.push("/page-two")}
          >
            Page Two
          </Button>
          <Button
            variant={"outline"}
            colorScheme="purple"
            onClick={() => route.push("/page-three")}
          >
            Page Three
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default PageRoot;
