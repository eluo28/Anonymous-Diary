import { Box, Hide } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Explore } from "../components/Explore";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  return (
    <Box display={{ base: "block", md: "flex" }}>
      <Hide below="md">
        <Sidebar />
      </Hide>
      <Hide above="md">
        <Navbar />
      </Hide>

      <Explore />
    </Box>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
