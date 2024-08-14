'use client';
import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import React from "react";

export const SourceButton = () => {
  return (
    <Button
      variant={"outline"}
      colorScheme="purple"
      rightIcon={<SourceIcon />}
      onClick={() => window.open("https://github.com/ajmalshahabudeen/next-zustand")}
    >
      Source
    </Button>
  );
};

const SourceIcon = () => {
  return (
    <Icon icon={"material-symbols-light:arrow-outward-rounded"} fontSize={24} />
  );
};
