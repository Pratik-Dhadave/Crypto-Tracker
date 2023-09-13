import React, { useEffect, useState } from 'react';
import {Badge, Box, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack} from "@chakra-ui/react";
import Loader from './Loader';
import axios from 'axios';
import { server } from '../index';
import {useParams} from "react-router-dom";
import ErrorComponent from './ErrorComponent';
import { color } from 'framer-motion';

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params = useParams();

  const currencysymbol = 
  currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";


  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id])
  if (error) return <ErrorComponent message={"error while fetching coin"} />

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? (<Loader/>) :(
          <>
          <Box width={"full"} borderWidth={1}>
            assa
          </Box>

        <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
           <HStack spacing={"4"}>
            <Radio value='inr'>₹</Radio>
            <Radio value='usd'>$</Radio>
            <Radio value='eur'>€</Radio>
          </HStack>
        </RadioGroup>

        <VStack spacing={"4"} p={"16"} alignItems={'flex-start'}>
          <Text fontSize={"small"} alignSelf={"center"} opacity={0.7}>Last updated on {Date(coin.market_data.last_updated).split("G")[0]}</Text>
          <Image src={coin.image.large}
          w={"16"} h={"16"}
          objectFit={"contain"}
          />

        <Stat>
          <StatLabel>{coin.name}</StatLabel>
          <StatNumber>{currencysymbol}{coin.market_data.current_price[currency]}</StatNumber>
          <StatHelpText>
            <StatArrow type={coin.market_data.price_change_percentage_24h>0 ?"increase":"decrease"}/>
            {coin.market_data.price_change_percentage_24h}%
          </StatHelpText>
        </Stat>

        <Badge 
        fontSize={"2xl"} 
        bgColor={"blackAlpha.800"} 
        color={"white"}> 
        {`#${coin.market_cap_rank}`}</Badge>

        <CustomBar 
        high={`${currencysymbol}${coin.market_data.high_24h[currency]}`} 
        low={`${currencysymbol}${coin.market_data.low_24h[currency]}`}/>
        </VStack>
          </>
        )
      }
    </Container>

  )
}

const CustomBar =({high,low})=>(
  <VStack w={"full"}>
    <Progress value={50} w={"full"} colorScheme={"teal"}/>
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={'red'}/>
      <Text fontSize={"sm"}>24H Range</Text>
      <Badge children={high} colorScheme={"green"}/>
    </HStack>
  </VStack>  
)

export default CoinDetails