import React from 'react';
import {Formik,Form} from 'formik';
import {Box, Button, FormControl, FormLabel, Input} from "@chakra-ui/core";
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useMutation } from 'urql';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';

interface registerProps {}


export const Register: React.FC<registerProps> = ({}) => {
    const [,register] = useRegisterMutation();

        return (
            <Wrapper variant="small">
            <Formik 
            initialValues={{username:"",password:""}}
            onSubmit={async (values,{setErrors})=>{
                const response = await register(values);
                if(response.data?.register.errors){
                    setErrors(toErrorMap(response.data.register.errors));
                }
            }}
            >
                {({isSubmitting})=>(
                    <Form>
                        <InputField name="username" placeholder="username" label="Username"></InputField>
                        <Box mt={4}>
                        <InputField name="password" type="password" placeholder="password" label="Password"></InputField>
                        </Box>
                        <Button type="submit" mt={4} isLoading={isSubmitting} variantColor="teal" variant="outline">Register</Button>
                    </Form>
                )}
            </Formik>
            </Wrapper>
        );
}

export default Register