import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/core";
import { motion, MotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePostsQuery } from "../generated/graphql";

const MotionBox = motion.custom<Omit<BoxProps, keyof MotionProps>>(Box);

const variants = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
};

type DiaryProps = {
  showDiary: (show: string) => void;
  diaryShow: string;
};

export const Diary: React.FC<DiaryProps> = ({ showDiary, diaryShow }) => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const color = useColorModeValue("gray.100", "gray.900");
  const text = useColorModeValue("black", "gray.100");
  const header = useColorModeValue("gray.800", "gray.800");

  useEffect(() => {
    localStorage.setItem("diaryShow", diaryShow);
  }, [diaryShow]);

  return (
    <MotionBox
      flex={{ base: "none", lg: "1" }}
      height="100vh"
      overflowY="scroll"
      overflowX="hidden"
      pt={{ base: "75px", lg: "0" }}
    >
      <MotionBox
        variants={variants}
        initial={"before"}
        animate={"after"}
        transition={{ duration: 2 }}
      >
        <Flex
          position="absolute"
          left="30vw"
          display={{ base: "none", lg: "flex" }}
          top="45vh"
          transform="rotate(-90deg)"
          fontSize="xl"
        >
          <Link onClick={() => showDiary("true")}>Explore</Link>
        </Flex>

        <Box
          p={5}
          color="white"
          textAlign="center"
          display={{ base: "none", lg: "block" }}
          backgroundColor={header}
          top="0"
          position="sticky"
        >
          <Heading>My Diary</Heading>
        </Box>

        <VStack
          divider={<StackDivider borderColor={color} borderWidth="3px" />}
        >
          {data!.posts.posts.map((p) =>
            !p ? null : (
              <Box
                key={p.id}
                p={5}
                color={text}
                width={{ base: "100%", lg: "50vw" }}
                mx="auto"
                my={10}
              >
                <Heading borderBottom="2px" textAlign="center" mb={1} pb={1}>
                  {p.title}
                </Heading>

                <Text textAlign="center">
                  {new Date(parseInt(p.createdAt)).toLocaleDateString()}
                </Text>
                <Text mt={4} fontSize="lg" textAlign="center">
                  {p.textSnippet}
                </Text>
              </Box>
            )
          )}

          {data && data.posts.hasMore ? (
            <Button
              onClick={() => {
                setVariables({
                  limit: variables.limit,
                  cursor:
                    data.posts.posts[data.posts.posts.length - 1].createdAt,
                });
              }}
              isLoading={fetching}
              mt={4}
              mx="auto"
              mb={4}
            >
              Load More
            </Button>
          ) : null}
        </VStack>
      </MotionBox>
    </MotionBox>
  );
};
