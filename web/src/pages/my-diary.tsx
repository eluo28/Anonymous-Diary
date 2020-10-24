import { Box } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../utils/createUrqlClient";

export const MyDiary: React.FC<{}> = ({}) => {
  return <Box height="100">column</Box>;
};

export default withUrqlClient(createUrqlClient)(MyDiary);
