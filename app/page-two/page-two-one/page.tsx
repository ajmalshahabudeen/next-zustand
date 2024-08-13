"use client";
import { useUserStore } from "@/hooks/userStore";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
} from "@chakra-ui/react";
import React from "react";

const PageOne = () => {
  const [message, setMessage] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(false);
  const addUser = useUserStore((state:any) => state.setUser);
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
        <form onSubmit={submit} className="flex gap-1">
          <FormControl isInvalid={valid}>
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter something..."
              width={"300px"}
              required
            />
            <FormErrorMessage>Please enter something</FormErrorMessage>
          </FormControl>
          <Button type="submit">Submit</Button>
        </form>
      </Center>
    </Box>
  );
};

export default PageOne;
