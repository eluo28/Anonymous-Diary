import React from 'react';
import {Formik,Form} from 'formik';
import {Box, Button} from "@chakra-ui/core";
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
import { toErrorMap } from '../utils/toErrorMap';
import {useRouter} from "next/router";

interface registerProps {}


export const Register: React.FC<registerProps> = ({}) => {
    const [,register] = useRegisterMutation();
    const router = useRouter();

        return (
            <Wrapper variant="small">
            <Formik 
            initialValues={{username:"",password:""}}
            onSubmit={async (values,{setErrors})=>{
                const response = await register(values);
                if(response.data?.register.errors){
                    setErrors(toErrorMap(response.data.register.errors));
                }else if (response.data?.register.user){
                    //register worked
                    router.push("/");
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