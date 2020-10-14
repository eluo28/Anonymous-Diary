import { Box, Text } from "@chakra-ui/core";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion.custom(Box);
const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Sidebar: React.FC<{}> = ({}) => {
  return (
    <MotionBox
      height="100vh"
      animate={{
        width: "50%",
      }}
      // @ts-expect-error
      transition={{ duration: 1 }}
    >
      <MotionBox
        ml="16"
        mt="10"
        initial="hidden"
        animate="visible"
        variants={variants}
        // @ts-expect-error
        transition={{ duration: 1 }}
      >
        <Text>Anonymous Diary</Text>

        <Box position="absolute" bottom="10">
          <Text fontSize="4xl" mb="32">
            Preserve Ideas
          </Text>
          <Text fontSize="md">me@edwinluo.com</Text>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};
