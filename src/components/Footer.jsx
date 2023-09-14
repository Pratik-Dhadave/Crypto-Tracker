import { Avatar, Box, Stack, VStack,Text, HStack } from '@chakra-ui/react'
import React from 'react';
import pratik from "../assets/pratik.png";
const Footer = () => {
  return (
    <Box 
    bgColor={"blackAlpha.900"} 
    color={"whiteAlpha.700"}
    minH={"48"}
    px={"16"}
    py={["16","8"]}

    >
        <Stack direction={["column, row"]} h={"full"} alignItems={"center"}>
            <VStack w={"full"} alignItems={["center", "flex-start"]}>
                <Text fontWeight={"bold"}>About us</Text>
                <Text fontSize={"sm"} letterSpacing={"widest"} alignItems={["center", "left"]}>
                    This is one of the best cryprto currencies tracker webapp, where we give all infomation & guidence of crypto currencies 
                </Text>

                <Text fontWeight={"bold"}>About me</Text>
                <Text fontSize={["smaller","sm"]} letterSpacing={"widest"} alignItems={["center", "left"]}>
                    Hii i am july 2023 IT passout student & Full Stack Developer (MERN) who creates multiple webApps & Competitive coding also.  
                </Text>
            </VStack>
            <VStack>
                <Avatar boxSize={"28"} mt={["4","0"]} 
                name='Pratik Dhadave'
                src={pratik}/>
                <Text>Software Developer</Text>
            </VStack>
        </Stack>
        <HStack justifyContent={"center"} mt={"5"}>
               <Text> © 2023 Copyright: Pratik Dhadave </Text>
        </HStack>
    </Box>
  )
}

export default Footer