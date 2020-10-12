import { Flex } from '@chakra-ui/core';
import React from 'react'
import { Footer } from './Footer';
import { Navbar } from './Navbar';



export const ExploreLayout: React.FC<{}> = ({children}) => {
    return (

      <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
    >
      <Navbar />
      {children}
      <Footer />
    </Flex>


    );
}

