import {
  Box,
  Button,
  createIcon,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { useDeletePostMutation, usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { ExploreLayout } from "../components/ExploreLayout";
import { DeleteIcon } from "@chakra-ui/icons";

const Posts = () => {
  const [, deletePost] = useDeletePostMutation();

  const [variables, setVariables] = useState({
    limit: 15,
    cursor: null as null | string,
  });
  const [{ data, fetching }] = usePostsQuery({
    variables,
  });

  if (!fetching && !data) {
    return <div>query failed</div>;
  }
  return (
    <Box>
      {!data && fetching ? (
        <div>loading...</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map((p) =>
            !p ? null : (
              <Box key={p.id} p={5} shadow="md" borderWidth="1px">
                <Heading>{p.title}</Heading>
                <Text mt={4}>{p.textSnippet}</Text>
                <IconButton
                  icon={<DeleteIcon />}
                  aria-label="Delete Post"
                  onClick={() => {
                    deletePost({ id: p.id });
                  }}
                ></IconButton>
              </Box>
            )
          )}
        </Stack>
      )}

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
      ) : null}
    </Box>
  );
};

const Index = () => {
  return (
    <ExploreLayout>
      <Posts />
    </ExploreLayout>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
