import { Box, Flex, Hide, Link } from "@chakra-ui/core";
import { withUrqlClient } from "next-urql";
import React, { useEffect, useState } from "react";
import { Diary } from "../components/Diary";
import { Explore } from "../components/Explore";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [diaryShow, setDiaryShow] = useState("false");

  React.useEffect(() => {
    const parsedCount = localStorage.getItem("diaryShow") || "false";
    setDiaryShow(parsedCount);
  }, []);

  return (
    <Box display={{ base: "block", lg: "flex" }}>
      <Hide below="lg">
        <Sidebar showDiary={setDiaryShow} diaryShow={diaryShow} />
      </Hide>
      <Hide above="lg">
        <Navbar showDiary={setDiaryShow} diaryShow={diaryShow}/>
      </Hide>

      {diaryShow === "false" ? (
        <Diary showDiary={setDiaryShow} diaryShow={diaryShow} />
      ) : (
        <Explore showDiary={setDiaryShow} diaryShow={diaryShow} />
      )}
    </Box>
  );
};
export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
