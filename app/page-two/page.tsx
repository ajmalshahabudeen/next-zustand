"use client";
import { useUserStore } from "@/hooks/userStore";
import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const PageOne = () => {
  const route = useRouter();
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page Two</Heading>
        <Text fontSize={"lg"} border={"1px solid"} p={5}>
          Persistent state. Refresh the page to test. The value is stored in
          sessionStorage.
        </Text>
        <ShowUser />
        <AddUser />
        <RemoveUser />
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
            onClick={() => route.push("/page-two/page-two-one")}
          >
            Next Page
          </Button>
        </Flex>
      </Center>
    </Box>
  );
};

export default PageOne;

function ShowUser() {
  const user = useUserStore((state: any) => state.user);
  return <Text fontSize={"5xl"}>{user}</Text>;
}

function AddUser() {
  const addUser = useUserStore((state: any) => state.setUser);
  return (
    <Button
      variant={"outline"}
      colorScheme="teal"
      onClick={() => addUser("new user")}
    >
      add user
    </Button>
  );
}

function RemoveUser() {
  const removeUser = useUserStore((state: any) => state.removeUser);
  return (
    <Button variant={"outline"} colorScheme="red" onClick={() => removeUser()}>
      remove user
    </Button>
  );
}
