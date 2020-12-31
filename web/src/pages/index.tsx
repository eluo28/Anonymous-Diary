import { Box, Flex, Hide, Link } from "@chakra-ui/core";
import { parse } from "graphql";
import { withUrqlClient } from "next-urql";
import React, { useEffect, useState } from "react";
import { Diary } from "../components/Diary";
import { Explore } from "../components/Explore";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { createUrqlClient } from "../utils/createUrqlClient";
import Cookie from "js-cookie";
import cookie from "cookie";

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

const Index = ({ initialRememberValue }) => {
  const [diaryShow, setDiaryShow] = useState(initialRememberValue);

  React.useEffect(() => {
    Cookie.set("diaryShow", diaryShow);
  }, [diaryShow]);

  return (
    <Box display={{ base: "block", lg: "flex" }}>
      <Hide below="lg">
        <Sidebar showDiary={setDiaryShow} diaryShow={diaryShow} />
      </Hide>
      <Hide above="lg">
        <Navbar showDiary={setDiaryShow} diaryShow={diaryShow} />
      </Hide>

      {!diaryShow ? (
        <Diary showDiary={setDiaryShow} diaryShow={diaryShow} />
      ) : (
        <Explore showDiary={setDiaryShow} diaryShow={diaryShow} />
      )}
    </Box>
  );
};

Index.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  let undef = false;

  if (cookies.diaryShow === "undefined") {
    undef = true;
  }

  let res;

  if (undef) {
    res = true;
  } else {
    res = JSON.parse(cookies.diaryShow);
  }

  return {
    initialRememberValue: res,
  };
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
