import {
  Box,
  BoxProps,
  Button,
  Flex,
  IconButton,
  Link,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/core";
import { AnimatePresence, motion, MotionProps } from "framer-motion";
import React, { useEffect } from "react";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Cookie from "js-cookie";

const anonymousText = Array.from("ANONYMOUS");
const diaryText = Array.from("DIARY");

const MotionBox = motion.custom<Omit<BoxProps, keyof MotionProps>>(Box);

const variants = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
};

const letterVariants = {
  before: {
    opacity: 0,
    x: -20,
    transition: {
      type: "tween",
      damping: 16,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      damping: 16,
      stiffness: 200,
    },
  },
};

const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.12 } },
};

type DiaryProps = {
  showDiary: (show: boolean) => void;
  diaryShow: boolean;
};

export const Sidebar: React.FC<DiaryProps> = ({ showDiary, diaryShow }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();

  const bg = useColorModeValue("gray.200", "gray.900");

  React.useEffect(() => {
    Cookie.set("diaryShow", diaryShow);
  }, [diaryShow]);

  return (
    <MotionBox height="100vh" width="30vw" bgColor={bg}>
      <MotionBox
        ml="16"
        mt="10"
        variants={variants}
        initial={"before"}
        animate={"after"}
        transition={{ duration: 2 }}
      >
        <MotionBox
          variants={containerVariants}
          initial={"before"}
          animate={"after"}
          display="flex"
        >
          <Box>
            {anonymousText.map((letter, index) => (
              <MotionBox key={index} variants={letterVariants} fontSize="3xl">
                {letter}
              </MotionBox>
            ))}
          </Box>
          <Box ml="10">
            {diaryText.map((letter, index) => (
              <MotionBox key={index} variants={letterVariants} fontSize="3xl">
                {letter}
              </MotionBox>
            ))}
          </Box>
        </MotionBox>

        {!data?.me ? (
          <Flex
            position="absolute"
            left="30vw"
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
          <>
            <Flex
              position="absolute"
              left="30vw"
              fontSize="xl"
              ml="-90px"
              top="10"
            >
              <Text>{data.me?.username}</Text>
            </Flex>

            <Flex
              position="absolute"
              left="30vw"
              top="45vh"
              transform="rotate(90deg)"
              fontSize="xl"
              ml="-55px"
            >
              <Link
                onClick={() => {
                  logout();
                  showDiary(true);
                }}
              >
                Logout
              </Link>
            </Flex>
          </>
        )}

        <Box position="absolute" bottom="10">
          <Text fontSize="4xl">Preserve Ideas</Text>
          <Text fontSize="2xl" mb="32" fontStyle="italic">
            Explore Lives
          </Text>

          <Box fontSize="md">
            <Text>me@edwinluo.com</Text>
          </Box>
        </Box>

        <Flex position="absolute" left="30vw" ml="-50px" bottom="3.5vh">
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
