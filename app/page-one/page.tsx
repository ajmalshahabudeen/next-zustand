'use client'
import { useStore } from "@/hooks/store";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const PageOne = () => {
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page One</Heading>
        <BearCounter />
        <Controls />
      </Center>
    </Box>
  );
};

export default PageOne;

function BearCounter() {
  const bears = useStore((state:any) => state.bears)
  return <h1>{bears} around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state:any) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
