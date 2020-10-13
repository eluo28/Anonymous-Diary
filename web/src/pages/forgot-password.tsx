import { Alert, AlertIcon, Box, Button, Flex, Heading } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { useForgotPasswordMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";


const ForgotForm = ()=>{
const [, forgotPassword] = useForgotPasswordMutation();
const [complete, setComplete] = useState(false);

return (
  <Box my={8} textAlign='left'>
    <Formik
      initialValues={{ email: "" }}
      onSubmit={async (values, { setErrors }) => {
        await forgotPassword(values);
        setComplete(true);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box>
            <InputField
              name="email"
              type="email"
              placeholder="email"
              label="Email"
            ></InputField>
          </Box>
          <Button
            type="submit"
            mt={4}
            isLoading={isSubmitting}
            colorScheme="teal"
            variant="outline"
          >
            Send Reset Email
          </Button>
          {complete ? (
            <Alert mt={4} status="success" variant="top-accent">
              <AlertIcon />
              An email was sent.
            </Alert>
          ) : null}
        </Form>
      )}
    </Formik>
  </Box>
);


}

export const ForgotPassword: React.FC<{}> = ({}) => {
  return(

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
          <Heading>Reset Password</Heading>
          <ForgotForm />
        </Box>
      </Box>
    </Flex>

  )
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);
