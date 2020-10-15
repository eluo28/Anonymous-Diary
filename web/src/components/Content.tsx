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
  VStack,
} from "@chakra-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { usePostsQuery } from "../generated/graphql";

const MotionBox = motion.custom(Box);

export const Content: React.FC<{}> = ({}) => {
  const [variables, setVariables] = useState({
    limit: 10,
    cursor: null as null | string,
  });

  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  return (
    <Box flex="1" height="100vh" overflow="scroll" bg="gray.200">
      {!data && fetching ? (
        <div>loading...</div>
      ) : (
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
          m={10}
        >
          {data!.posts.posts.map((p) =>
            !p ? null : (
              <Box key={p.id} p={5} shadow="md" borderWidth="1px" bg="white">
                <Heading>{p.title}</Heading>
                <Text mt={4}>{p.textSnippet}</Text>
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
      )}
    </Box>
  );
};
