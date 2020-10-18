import { Box, Flex, Hide } from "@chakra-ui/core";
import React from "react";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const ExploreLayout: React.FC<{}> = ({ children }) => {
  return (
    <Box display={{ base: "block", md: "flex" }}>
      <Hide below="md">
        <Sidebar />
      </Hide>
      <Hide above="md">
        <Navbar />
      </Hide>

      <Content />
    </Box>
  );
};
