import { Alert, AlertIcon, Button, Link } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";

export const ChangePassword: NextPage = () => {
  const [, changePassword] = useChangePasswordMutation();
  const router = useRouter();
  const [tokenError, setTokenError] = useState("");

  return (

      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token:
              typeof router.query.token === "string" ? router.query.token : "",
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);

            if ("token" in errorMap) {
              setTokenError(errorMap.token);
            }

            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            //login after changing password
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              type="password"
              name="newPassword"
              placeholder="new password"
              label="New Password"
            ></InputField>

            {tokenError ? (
              <Alert status="error" mt={4} variant="left-accent">
                <AlertIcon />
                {tokenError}:&nbsp;
                <NextLink href="/forgot-password">
                  <Link>Get New Token</Link>
                </NextLink>
              </Alert>
            ) : null}

            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              variantColor="teal"
              variant="outline"
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>

  );
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
