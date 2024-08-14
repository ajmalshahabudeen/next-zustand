"use client";
import { useUserStore } from "@/hooks/userStore";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const PageOne = () => {
  const [message, setMessage] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(false);
  const addUser = useUserStore((state:any) => state.setUser);
  const route = useRouter();
  const submit = (e: any) => {
    e.preventDefault();
    if (message.length > 0) {
      addUser(message);
      setMessage("");
    }
  };

  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page Two &gt; One</Heading>
        <Text fontSize={"lg"} border={"1px solid"} p={5}>
          Add a custom user name and go back
        </Text>
        <form onSubmit={submit} className="flex gap-1">
          <FormControl isInvalid={valid}>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter User Name"
              width={"300px"}
              required
            />
            <FormErrorMessage>Please enter User Name</FormErrorMessage>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
        <Flex gap={5}>
          <Button
            size={"lg"}
            variant={"outline"}
            onClick={() => route.back()}
          >
            Go Back
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default PageOne;
