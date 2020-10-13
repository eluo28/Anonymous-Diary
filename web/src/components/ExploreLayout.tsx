import { Flex } from "@chakra-ui/core";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const ExploreLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
