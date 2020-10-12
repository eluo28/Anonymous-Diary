import React from "react";
import { Formik, Form } from "formik";
import { Box, Button, Flex, Heading } from "@chakra-ui/core";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../utils/createUrqlClient";

const VARIANT_COLOR = 'teal'

const RegisterForm = ()=>{

  const [, register] = useRegisterMutation();
  const router = useRouter();
return( 
  <Box my={8} textAlign='left'>
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
              variantColor={VARIANT_COLOR}
              width = "full"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
      </Box>);
}



export const Register: React.FC<{}> = ({}) => {


  return (
    <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
      <Box 
        borderWidth={1}
        px={4}
        width='90%'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
        boxShadow='lg'
      >
        <Box p={4}>
          <Heading>Register</Heading>
          <RegisterForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default withUrqlClient(createUrqlClient)(Register);
