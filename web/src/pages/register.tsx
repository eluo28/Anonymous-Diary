import React from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/core";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";
import { motion } from "framer-motion";

const MotionBox = motion.custom(Box);

const pageVariants = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
  },
};

const RegisterForm = () => {
  const [, register] = useRegisterMutation();
  const router = useRouter();
  return (
    <Box my={8} textAlign="left">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            //register worked
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="Enter your username"
              label="Username"
            ></InputField>
            <Box mt={4}>
              <InputField
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email"
              ></InputField>
            </Box>

            <Box mt={4}>
              <InputField
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password"
              ></InputField>
            </Box>
            <Button
              type="submit"
              mt={4}
              isLoading={isSubmitting}
              colorScheme="gray"
              width="full"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export const Register: React.FC<{}> = ({}) => {
  const bg = useColorModeValue("gray.300", "gray.700");
  const bg2 = useColorModeValue("white", "gray.900");
  const dividerColor = useColorModeValue("gray.300", "white");

  return (
    <MotionBox
      minHeight="100vh"
      width="full"
      alignItems="center"
      justifyContent="center"
      display="flex"
      initial="pageInitial"
      animate="pageAnimate"
      variants={pageVariants}
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
          <Heading>Register</Heading>
          <Divider borderWidth="1px" mt="1" borderColor={dividerColor} />
          <RegisterForm />
        </Box>
      </Box>
    </MotionBox>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
