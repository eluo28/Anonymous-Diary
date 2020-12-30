import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Link,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/core";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { motion, MotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePostsQuery } from "../generated/graphql";
import Cookie from "js-cookie";

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
  showDiary: (show: boolean) => void;
  diaryShow: boolean;
};

export const Diary: React.FC<DiaryProps> = ({ showDiary, diaryShow }) => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const color = useColorModeValue("gray.200", "gray.900");
  const text = useColorModeValue("black", "gray.100");
  const header = useColorModeValue("#2C2F33", "#23272A");

  React.useEffect(() => {
    Cookie.set("diaryShow", diaryShow);
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
          <Link onClick={() => showDiary(true)}>Explore</Link>
        </Flex>

        <Flex
          p={5}
          textAlign="center"
          display={{ base: "none", lg: "flex" }}
          backgroundColor={header}
          top="0"
          position="sticky"
          justify="space-between"
          color="white"
          zIndex="10"
        >
          <Heading ml={4}>My Diary</Heading>
          <IconButton
            mr={4}
            aria-label="add"
            variant="ghost"
            icon={<AddIcon />}
          />
        </Flex>

        <VStack
          divider={<StackDivider borderColor={color} borderWidth="3px" />}
        >
          {data!.posts.posts.map((p) =>
            !p ? null : (
              <Box width="100%">
                <Flex
                  key={p.id}
                  color={text}
                  width={{ base: "100%", lg: "50vw" }}
                  direction="column"
                  mx="auto"
                >
                  <Box my={10} p={5}>
                    <Heading
                      borderBottom="2px"
                      textAlign="center"
                      mb={1}
                      pb={1}
                    >
                      {p.title}
                    </Heading>

                    <Text textAlign="center">
                      {new Date(parseInt(p.createdAt)).toLocaleDateString()}
                    </Text>
                    <Text mt={4} fontSize="lg" textAlign="center">
                      {p.textSnippet}
                    </Text>
                  </Box>
                </Flex>

                <Flex>
                  <IconButton
                    ml="auto"
                    mr="3"
                    aria-label="delete"
                    variant="ghost"
                    icon={<DeleteIcon />}
                  />
                </Flex>
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
