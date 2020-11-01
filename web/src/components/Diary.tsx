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

type DiaryProps = {
  showDiary: (show: boolean) => void;
};

export const Diary: React.FC<DiaryProps> = ({ showDiary }) => {
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
        <Flex
          position="absolute"
          left="50vw"
          display={{ base: "none", md: "flex" }}
          top="45vh"
          transform="rotate(-90deg)"
          fontSize="xl"
        >
          <Link onClick={() => showDiary(false)}>Explore</Link>
        </Flex>
      </MotionBox>
    </MotionBox>
  );
};
