import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  useColorModeValue,
} from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { motion } from "framer-motion";
import { withUrqlClient } from "next-urql";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { useLoginMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { toErrorMap } from "../utils/toErrorMap";

const MotionBox = motion.custom(Box);

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
};

const LoginForm = () => {
  const [, login] = useLoginMutation();
  const router = useRouter();

  return (
    <Box my={8} textAlign="left">
      <Formik
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login(values);
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            //login worked
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="usernameOrEmail"
              placeholder="Enter your username or email"
              label="Username/Email"
            ></InputField>
            <Box mt={4}>
              <InputField
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
              ></InputField>
            </Box>
            <Flex mt="4">
              <NextLink href="/forgot-password">
                <Link ml="auto">Forgot Password?</Link>
              </NextLink>
            </Flex>
            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              colorScheme="gray"
              width="full"
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export const Login: React.FC<{}> = ({}) => {
  const bg = useColorModeValue("gray.300", "gray.700");
  const bg2 = useColorModeValue("white", "gray.900");

  return (
    <MotionBox
      initial="pageInitial"
      animate="pageAnimate"
      variants={pageVariants}
      minHeight="100vh"
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={bg}
    >
      <Box
        borderWidth={1}
        px={4}
        width="90%"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
        bg={bg2}
      >
        <Box p={4}>
          <Heading>Login</Heading>
          <LoginForm />
        </Box>
      </Box>
    </MotionBox>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
