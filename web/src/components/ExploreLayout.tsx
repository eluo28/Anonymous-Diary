import { Flex } from "@chakra-ui/core";
import React from "react";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export const ExploreLayout: React.FC<{}> = ({ children }) => {
  return (
    <Flex>
      <Sidebar/>
      <Content />
    </Flex>
  );
};
