import { Box, Button, Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery();

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
        <Box mr="4">{data.me?.username}</Box>
        <Button variant="link" mr="4">Logout</Button>
      </Flex>
    );
  }

  return (
    <Flex p={4}>
      <Box ml="auto">{body}</Box>
    </Flex>
  );
};
