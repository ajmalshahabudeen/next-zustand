'use client'
import { Box, Button, useColorMode } from "@chakra-ui/react"
import { Icon } from "@iconify/react"

export const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Box p={10}>
        <Button colorScheme="teal" variant={"outline"} onClick={toggleColorMode}>
          {colorMode === 'light' ? <DarkIcon /> : <LightIcon />}
        </Button>
      </Box>
    )
  }

  const LightIcon = () => {
    return (
        <Icon icon={"circum:light"} fontSize={24} />
    )
  }
  const DarkIcon = () => {
    return (
        <Icon icon={"circum:dark"} fontSize={24}/>
    )
  }