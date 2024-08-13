"use client";
import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const route = useRouter();
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Zustand in Next.js</Heading>
        <Button
          size={"lg"}
          variant={"outline"}
          rightIcon={<GetStartedIcon />}
          onClick={() => route.push("/page-one")}
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
