import { Box, Button, Checkbox } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { InputField } from "../components/InputField";
import { useCreatePostMutation, useMeQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const CreatePost: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  const [, createPost] = useCreatePostMutation();

  useEffect(() => {
    if (!fetching && !data?.me) {
      router.replace("/login");
    }
  }, [fetching, data, router]);

  return (

      <Formik
        initialValues={{ title: "", text: "", public: true }}
        onSubmit={async (values) => {
          const { error } = await createPost({ input: values });
          console.log(error);

          
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="title"
              placeholder="title"
              label="Title"
            ></InputField>
            <Box mt={4}>
              <InputField
                textarea
                name="text"
                placeholder="text..."
                label="Body"
              ></InputField>
            </Box>

            <Box mt={4}>
              <Checkbox defaultIsChecked>Public</Checkbox>
            </Box>

            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              colorScheme="teal"
              variant="outline"
            >
              Create Post
            </Button>
          </Form>
        )}
      </Formik>

  );
};

export default withUrqlClient(createUrqlClient)(CreatePost);
