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



const Index = () => {
  return (
    <ExploreLayout>
    </ExploreLayout>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
