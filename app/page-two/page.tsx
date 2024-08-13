'use client'
import { useUserStore } from "@/hooks/userStore";
import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const PageOne = () => {
  return (
    <Box>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page Two</Heading>
        <ShowUser />
        <AddUser />
        <RemoveUser />
      </Center>
    </Box>
  );
};

export default PageOne;

function ShowUser() {
  const user = useUserStore((state:any) => state.user);
  return <h1>{user}</h1>;
}

function AddUser() {
  const addUser = useUserStore((state:any) => state.setUser);
  return <button onClick={() => addUser('new user')}>add user</button>;
}

function RemoveUser() {
  const removeUser = useUserStore((state:any) => state.removeUser);
  return <button onClick={() => removeUser()}>remove user</button>;
}