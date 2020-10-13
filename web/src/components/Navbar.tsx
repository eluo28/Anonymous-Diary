import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  useColorMode,
  Text,
  Icon,
} from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

export const Navbar: React.FC<{}> = ({}) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      bg="teal.500"
      w="100%"
      mb={8}
      p={8}
    >
      <Box mr={6}>Logo</Box>

      <Box display={["block", "none"]} onClick={toggleMenu}>
        <Icon name="triangle-down" color="red.500" />
      </Box>

      <Box
        display={[show ? "block" : "none", "flex"]}
        width={["full", "auto"]}
        flexGrow={1}
        alignItems="center"
      >
        <Text mr={4} mt={[4, 0]}>
          Explore
        </Text>

        <IconButton
          mt={[4, 0]}
          aria-label="Dark Mode"
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Box>

      {!data?.me ? (
        <Box display={[show ? "block" : "none", "flex"]}>
          <NextLink href="/login">
            <Button bg="transparent" border="1px" mr={6}>
              Login
            </Button>
          </NextLink>

          <NextLink href="/register">
            <Button bg="transparent" border="1px">
              Register
            </Button>
          </NextLink>
        </Box>
      ) : (
        <Box
          display={[show ? "block" : "none", "flex"]}
          alignItems="center"
          mt={[4, 0]}
        >
          <Text mr={6}>{data.me?.username}</Text>

          <Button
            mt={[4, 0]}
            bg="transparent"
            border="1px"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </Box>
      )}
    </Flex>
  );
};
