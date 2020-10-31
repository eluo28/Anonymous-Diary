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
import React, { InputHTMLAttributes, useState } from "react";
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

type ExploreProps = React.Dispatch<React.SetStateAction<boolean>> & {
  showDiary: (show: boolean) => void;
};

export const Explore: React.FC<ExploreProps> = (props) => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const bg = useColorModeValue("gray.200", "gray.700");
  const color = useColorModeValue("white", "gray.900");
  const text = useColorModeValue("black", "gray.100");

  return (
    <MotionBox
      flex={{ base: "none", md: "1" }}
      height="100vh"
      overflowY="scroll"
      bg={bg}
      overflowX="hidden"
      pt={{ base: "75px", md: "0" }}
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
            <Flex
              position="absolute"
              left="50vw"
              display={{ base: "none", md: "flex" }}
              top="45vh"
              transform="rotate(-90deg)"
              fontSize="xl"
            >
              <Link onClick={() => props.showDiary(true)}>My Diary</Link>
            </Flex>

            <VStack
              divider={<StackDivider borderColor={color} borderWidth="3px" />}
            >
              {data!.posts.posts.map((p) =>
                !p ? null : (
                  <Box
                    key={p.id}
                    p={5}
                    color={text}
                    width={{ base: "100%", md: "35vw" }}
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
