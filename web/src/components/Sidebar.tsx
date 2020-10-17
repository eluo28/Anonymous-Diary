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
import { motion, MotionProps } from "framer-motion";
import React from "react";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const anonymousText = Array.from("ANONYMOUS");
const diaryText = Array.from("DIARY");

const MotionBox = motion.custom<Omit<BoxProps, keyof MotionProps>>(Box);
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
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
  after: { transition: { staggerChildren: 0.2 } },
};

export const Sidebar: React.FC<{}> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();
  const text = useColorModeValue("white", "black");

  return (
    <MotionBox
      height="100vh"
      initial={{ width: "0%" }}
      animate={{ width: "50vw" }}
      transition={{ duration: 1 }}
    >
      <MotionBox
        ml="16"
        mt="10"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 2 }}
      >
        {/* <Flex>
          <Text
            fontSize="4xl"
            sx={{ textOrientation: "upright", writingMode: "vertical-lr" }}
          >
            ANONYMOUS
          </Text>
          <Text
            fontSize="4xl"
            sx={{ textOrientation: "upright", writingMode: "vertical-lr" }}
          >
            DIARY
          </Text>
        </Flex> */}

        <MotionBox
          variants={containerVariants}
          initial={"before"}
          animate={"after"}
          transition={{ duration: "2" }}
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
            <Flex
              position="absolute"
              left="50vw"
              fontSize="xl"
              ml="-90px"
              top="10"
            >
              <Text>{data.me?.username}</Text>
            </Flex>

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
                <Link color={text}>My Diary</Link>
              </NextLink>
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
