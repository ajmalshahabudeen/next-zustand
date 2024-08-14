"use client";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const route = useRouter();
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Text fontSize={"5xl"}>Page Not Found</Text>
        <Button
          variant={"outline"}
          colorScheme="purple"
          onClick={() => route.replace("/")}
          size={"lg"}
        >
          Go Back
        </Button>
      </Center>
    </Box>
  );
};

export default NotFound;
