import { Box, Flex, Hide, Link } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { Diary } from "../components/Diary";
import { Explore } from "../components/Explore";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [diaryShow, setDiaryShow] = useState(false);

  return (
    <Box display={{ base: "block", md: "flex" }}>
      <Hide below="md">
        <Sidebar />
      </Hide>
      <Hide above="md">
        <Navbar />
      </Hide>

      {diaryShow ? (
        <Diary showDiary={setDiaryShow} />
      ) : (
        <Explore showDiary={setDiaryShow} />
      )}
    </Box>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
