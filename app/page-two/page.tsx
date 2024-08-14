"use client";
import { useUserStore } from "@/hooks/userStore";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  Highlight,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const PageOne = () => {
  const route = useRouter();
  return (
    <Box py={{ base: '8rem', md: 0 }}>
      <Center h="100vh" flexDirection={"column"} gap={5}>
        <Heading>Page Two</Heading>
        <Text fontSize={"lg"} border={"1px solid"} p={5} textAlign={"center"}>
          Persistent state. Refresh the page to test. The value is stored in
          sessionStorage.
        </Text>
        <ShowUser />
        <AddUser />
        <RemoveUser />
        <CodeSection />
        <Flex gap={5}>
          <Button size={"lg"} variant={"outline"} onClick={() => route.back()}>
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
  return <Text fontSize={{ base: "xl", md: "5xl" }}>{user}</Text>;
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

const CodeSection = () => {
  return (
    <Box maxW={{ base: "100%", md: "100%" }} mx={"auto"} p={5}>
      <Highlight
        query={"/hooks/useUserStore.tsx"}
        styles={{ bg: "red.100", px: 2, py: 1, rounded: "md" }}
      >
        /hooks/useUserStore.tsx
      </Highlight>
      <CodeBlock
        text={code}
        language={"typescript"}
        showLineNumbers={true}
        theme={dracula}
      />
    </Box>
  );
};

const code = `export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user: any) => set({ user: user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);`;
