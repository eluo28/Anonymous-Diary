import React from 'react';
import {Formik,Form} from 'formik';
import {FormControl, FormLabel, Input} from "@chakra-ui/core";
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {}


export const Register: React.FC<registerProps> = ({}) => {
        return (
            <Wrapper variant="small">
            <Formik 
            initialValues={{username:"",password:""}}
            onSubmit={(values)=>{
                console.log(values);
            }}
            >
                {(values, handleChange)=>(
                    <Form>
                        <InputField name="username" placeholder="username" label="Username"></InputField>
                        <InputField name="password" placeholder="password" label="Password"></InputField>
                    </Form>
                )}
            </Formik>
            </Wrapper>
        );
}

export default Register