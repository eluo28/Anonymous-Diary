import { withUrqlClient } from "next-urql";
import React from "react";
import { createUrqlClient } from "../utils/createUrqlClient";

export const MyDiary: React.FC<{}> = ({}) => {
  return <div>hi</div>;
};

export default withUrqlClient(createUrqlClient)(MyDiary);
