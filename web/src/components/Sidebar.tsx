import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import { motion } from "framer-motion";
import React from "react";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const MotionBox = motion.custom(Box);
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Sidebar: React.FC<{}> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();
  const text = useColorModeValue("white", "black");

  return (
    <MotionBox height="100vh" width="50vw">
      <MotionBox
        ml="16"
        mt="10"
        initial="hidden"
        animate="visible"
        variants={variants}
        // @ts-expect-error
        transition={{ duration: 1 }}
      >
        <Text>Anonymous Diary</Text>

        {!data?.me ? (
          <Flex
            position="absolute"
            left="50vw"
            top="45vh"
            ml="-90px"
            transform="rotate(90deg)"
            fontSize="xl"
          >
            <NextLink href="/login">
              <Link>Login</Link>
            </NextLink>

            <Box>&nbsp;/&nbsp;</Box>

            <NextLink href="/register">
              <Link>Register</Link>
            </NextLink>
          </Flex>
        ) : (
          //   <Text mr={6}>{data.me?.username}</Text>
          <>
            <Text mt="4">{data.me?.username}</Text>

            <Flex
              position="absolute"
              left="50vw"
              top="45vh"
              transform="rotate(90deg)"
              fontSize="xl"
              ml="-55px"
            >
              <Link
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </Link>
            </Flex>

            <Flex
              position="absolute"
              left="50vw"
              top="45vh"
              transform="rotate(-90deg)"
              fontSize="xl"
            >
              <NextLink href="/my-diary">
                <Link
                  color={text}
                >
                  My Diary
                </Link>
              </NextLink>
            </Flex>
          </>
        )}

        <Box position="absolute" bottom="10">
          <Text fontSize="4xl" mb="32">
            Preserve Ideas
          </Text>

          <Box fontSize="md">
            <Text>me@edwinluo.com</Text>
          </Box>
        </Box>

        <Flex position="absolute" left="50vw" ml="-50px" bottom="4vh">
          <IconButton
            colorScheme="black"
            _focus={{ outline: "none" }}
            aria-label="Dark Mode"
            variant="ghost"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </Flex>
      </MotionBox>
    </MotionBox>
  );
};
