"use client";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";
import { CodeBlock, dracula } from 'react-code-blocks';


const HomePage = () => {
  const route = useRouter();
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading as={"h1"}>Zustand in Next.js</Heading>
        <Text fontSize={"3xl"}>
          A global state management library for React.
        </Text>
        <CodeOne />
        <Button
          size={"lg"}
          variant={"outline"}
          rightIcon={<GetStartedIcon />}
          onClick={() => route.push("/page-root")}
        >
          Get Started
        </Button>
      </Center>
    </Box>
  );
};

export default HomePage;

const GetStartedIcon = () => {
  return (
    <Icon icon="material-symbols:play-arrow-outline-rounded" fontSize={24} />
  );
};

const CodeOne = () => {
  return (
    <Flex gap={5}>
      <CodeBlock
      text={"$ bun add zustand"}
      language={"bash"}
      showLineNumbers={false}
      theme={dracula}
    />
    <CodeBlock
      text={"$ npm i zustand"}
      language={"bash"}
      showLineNumbers={false}
      theme={dracula}
    />
    </Flex>
  )
}