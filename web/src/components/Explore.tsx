import {
  Box,
  BoxProps,
  Button,
  Flex,
  Heading,
  Link,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/core";
import { motion, MotionProps } from "framer-motion";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { useMeQuery, usePostsQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

const MotionBox = motion.custom<Omit<BoxProps, keyof MotionProps>>(Box);

const variants = {
  before: {
    opacity: 0,
  },
  after: {
    opacity: 1,
  },
};

type ExploreProps = {
  showDiary: (show: string) => void;
  diaryShow: string;
};

export const Explore: React.FC<ExploreProps> = ({ showDiary, diaryShow }) => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const [{ data: me }] = useMeQuery({
    pause: isServer(),
  });

  const bg = useColorModeValue("white", "gray.700");
  const color = useColorModeValue("gray.200", "gray.900");
  const text = useColorModeValue("black", "gray.100");
  const header = useColorModeValue("#2C2F33", "#23272A");

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
        {!data && fetching ? (
          <div>loading...</div>
        ) : (
          <Box>
            {me.me ? (
              <Flex
                position="absolute"
                left="30vw"
                display={{ base: "none", lg: "flex" }}
                top="45vh"
                transform="rotate(-90deg)"
                fontSize="xl"
              >
                <Link onClick={() => showDiary("false")}>My Diary</Link>
              </Flex>
            ) : null}

            <Box
              p={5}
              color="white"
              textAlign="center"
              display={{ base: "none", lg: "block" }}
              backgroundColor={header}
              top="0"
              position="sticky"
            >
              <Heading>Explore</Heading>
            </Box>

            <VStack
              divider={<StackDivider borderColor={color} borderWidth="3px" />}
              bgColor={bg}
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
                  mb={4}
                  mx="auto"
                >
                  Load More
                </Button>
              ) : null}
            </VStack>
          </Box>
        )}
      </MotionBox>
    </MotionBox>
  );
};
