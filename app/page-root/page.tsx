"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";

const PageRoot = () => {
  const route = useRouter();
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5} p={5}>
        <Flex gap={5}>
          <IconButton
            aria-label="go back"
            icon={<GoBackIcon />}
            onClick={() => route.back()}
          />
          <Heading>Zustand Examples</Heading>
        </Flex>
        <Box>
          <Text fontSize={"lg"} textAlign={"center"}>
            Simply Create a file at root of the project.{" "}
            <span className="underline underline-offset-8">
              eg: `&#123; $ProjectFolder &#125;/hooks/useUserStore.tsx`
            </span>
            . So you can call this state globally.
          </Text>
          <Text fontSize={"lg"} textAlign={"center"} pt={2}>
            Visit Docs to read Zustand Docs. And Visit Source to read Source Code.
          </Text>
        </Box>
        <Flex gap={5} flexWrap={"wrap"} justifyContent={"center"}>
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

const GoBackIcon = () => {
  return <Icon icon={"material-symbols:arrow-back-rounded"} fontSize={24} />;
};
