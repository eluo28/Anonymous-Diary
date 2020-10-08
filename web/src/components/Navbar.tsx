import { Box, Button, Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from "../generated/graphql";
import { isServer } from "../utils/isServer";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({
    pause: isServer(),
  });
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();

  let body = null;

  if (fetching) {
    //data is loading
  } else if (!data?.me) {
    //user not logged in
    body = (
      <>
        <NextLink href="/login">
          <Link mr="4">Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link mr="4">Register</Link>
        </NextLink>
      </>
    );
  } else {
    //user logged in
    body = (
      <Flex>
        <Box>
          <NextLink href="/create-post">
            <Link mr="4">Create Post</Link>
          </NextLink>
        </Box>
        <Box mr="4">{data.me?.username}</Box>
        <Button
          variant="link"
          mr="4"
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
        >
          Logout
        </Button>
      </Flex>
    );
  }

  return (
    <Flex position="sticky" top="0" p={4} zIndex={2}>
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};
