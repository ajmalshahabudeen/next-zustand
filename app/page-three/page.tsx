"use client";
import { useFetchStore } from "@/hooks/useFetchStore";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Highlight,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    "zip-code": string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const PageThree = () => {
  const route = useRouter();
  const url =
    "https://raw.githubusercontent.com/ajmalshahabudeen/next-zustand/main/users.json";

  const fetchUrl = useFetchStore((state: any) => state.fetch);
  const isLoading = useFetchStore((state: any) => state.isLoading);
  const removeData = useFetchStore((state: any) => state.removeData);

  //   useEffect(() => {
  //     fetchUrl(url);
  //   }, []);
  return (
    <Box>
      <Center
        minH="100vh"
        flexDirection={"column"}
        gap={5}
        py={{ base: "8rem", md: "8rem" }}
      >
        <Heading>Page Three</Heading>
        <Text>Loading: {isLoading.toString()}</Text>
        <UserData />
        <Flex gap={5}>
          <Button variant={"outline"} onClick={() => fetchUrl(url)}>
            Fetch
          </Button>
          <Button variant={"outline"} onClick={() => removeData()}>
            Reset
          </Button>
        </Flex>
        <CodeSection />
        <Button size={"lg"} variant={"outline"} onClick={() => route.back()}>
          Go Back
        </Button>
      </Center>
    </Box>
  );
};

export default PageThree;

const UserData = () => {
  const userData = useFetchStore((state: any) => state.userData);
  return (
    <Box
      maxW={{ base: "100%", md: "100%" }}
      m={5}
      p={5}
      overflow={"auto"}
      border={"1px solid"}
      rounded={"md"}
    >
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </Box>
  );
};

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

const code = `export const useFetchStore = create(
  persist(
    (set) => ({
      isLoading: false,
      userData: {},
      setIsLoading: (isLoading: boolean) => set({ isLoading }),
      fetch: async (url: string) => {
        set({ isLoading: true });
        const response = await fetch(url);
        const data = await response.json();
        set({ userData: data, isLoading: false });
      },
      removeData: () => set({ userData: {} }),
    }),
    {
      name: "fetch-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);`;
