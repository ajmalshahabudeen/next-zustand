import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const PageOne = () => {
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page Two</Heading>
      </Center>
    </Box>
  );
};

export default PageOne;
