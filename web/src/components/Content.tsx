import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
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

  {
    /* 
      {data && data.posts.hasMore ? (
        <Flex>
          <Button
            onClick={() => {
              setVariables({
                limit: variables.limit,
                cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
              });
            }}
            isLoading={fetching}
            mt={4}
            mx="auto"
          >
            Load More
          </Button>
        </Flex>
      ) : null} */
  }

  //array of posts in data.posts.posts

  return (
    <Box flex="1" height="100vh" overflow="scroll">
      {!data && fetching ? (
        <div>loading...</div>
      ) : (
        <>
          {data!.posts.posts.map((p) =>
            !p ? null : (
              <Box key={p.id} bg="red.400">
                <Heading>{p.title}</Heading>
                <Text mt={4}>{p.textSnippet}</Text>
              </Box>
            )
          )}
        </>
      )}
    </Box>
  );
};
