import React from 'react';
import {Box, Image, Text, filter} from "@chakra-ui/react";
import btc from "../assets/btc.png";
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>

      <motion.div 
      style={{
        height:"80vh",
      }}
      animate={{
        translateY:"20px",
      }}
      transition={{
        duration:2,
        repeat:Infinity,
        repeatType:"reverse",
      }}
      >
        <Image 
        w={"full"} 
        h={"full"} 
        objectFit={"contain"} 
        src={btc}
        // filter={"grayscale(1)"}
        />
      </motion.div>

      <Text 
      fontSize={["3xl","6xl"]}
      textAlign={"center"}
      fontWeight={"thin"}
      color={"whiteAlpha.700"}
      mt={"-10"}
      >Crypto Tracker</Text>
    </Box>
  )
}

export default Home