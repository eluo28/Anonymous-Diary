import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { useDeletePostMutation, usePostsQuery } from "../generated/graphql";
import { Box, Button, Flex, Heading, IconButton, Link, Stack, Text } from "@chakra-ui/core";
import { Layout } from "../components/Layout";
import NextLink from "next/link"

const Index = () => {
const [,deletePost] = useDeletePostMutation()

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
    <Layout>
      {!data && fetching ? (
        <div>loading...</div>
      ) : (
        <Stack spacing={8}>
          {data!.posts.posts.map((p) => !p?null:(
            <Box key={p.id} p={5} shadow="md" borderWidth="1px">
              <Heading>{p.title}</Heading>
              <Text mt={4}>{p.textSnippet}</Text>
              <IconButton icon="delete" aria-label="Delete Post"
              onClick={()=>{deletePost({id:p.id})}}
              ></IconButton>


            </Box>
          ))}
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
    </Layout>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
