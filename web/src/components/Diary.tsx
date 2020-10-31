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
import React, { useState } from "react";
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

export const Diary: React.FC<{}> = ({}) => {
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

  return <div>Diary</div>;
};
