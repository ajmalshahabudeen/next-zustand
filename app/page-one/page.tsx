"use client";
import { useStore } from "@/hooks/store";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const PageOne = () => {
  const route = useRouter();

  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page One</Heading>
        <Text fontSize={"lg"} border={"1px solid"} p={5}>
          Non persistent state. Refresh to reset the value.
        </Text>
        <BearCounter />
        <Controls />
        <Flex gap={5}>
          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => route.back()}
          >
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
  return <Text fontSize={"5xl"}>{bears} around here...</Text>;
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
