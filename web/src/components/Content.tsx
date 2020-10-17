import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/core";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { usePostsQuery } from "../generated/graphql";

const MotionBox = motion.custom(Box);

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Content: React.FC<{}> = ({}) => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  const bg = useColorModeValue("gray.300", "gray.700");
  const color = useColorModeValue("white", "gray.800");
  const text = useColorModeValue("black", "gray.100");

  return (
    <MotionBox
      flex="1"
      height="100vh"
      overflowY="scroll"
      bg={bg}
      overflowX="hidden"
    >
      {!data && fetching ? (
        <div>loading...</div>
      ) : (
        <VStack
          divider={<StackDivider borderColor={color} borderWidth="3px" />}
          spacing={4}
        >
          {data!.posts.posts.map((p) =>
            !p ? null : (
              <MotionBox
                key={p.id}
                p={5}
                bg={color}
                color={text}
                minHeight="75vh"
                width="30vw"
                mx="auto"
                my={16}
              >
                <Heading borderBottom="2px" textAlign="center" mb={1} pb={1}>
                  {p.title}
                </Heading>

                <Text textAlign="center">
                  {new Date(parseInt(p.createdAt)).toLocaleDateString()}
                </Text>
                <Text mt={4} fontSize="lg">
                  {p.textSnippet}
                </Text>
              </MotionBox>
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
      )}
    </MotionBox>
  );
};
