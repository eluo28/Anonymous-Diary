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

import { usePostsQuery } from "../generated/graphql";

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
    <Box
      flex={{ base: "none", md: "1" }}
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
                <Heading borderBottom="2px" textAlign="center" mb={1} pb={1}>
                  {p.title}
                </Heading>

                <Text textAlign="center">
                  {new Date(parseInt(p.createdAt)).toLocaleDateString()}
                </Text>
                <Text mt={4} fontSize="lg">
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
      )}
    </Box>
  );
};
