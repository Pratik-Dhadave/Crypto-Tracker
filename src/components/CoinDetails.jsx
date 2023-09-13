import React, { useEffect, useState } from 'react';
import {Box, Container, HStack, Radio, RadioGroup} from "@chakra-ui/react";
import Loader from './Loader';
import axios from 'axios';
import { server } from '../index';
import {useParams} from "react-router-dom";
import ErrorComponent from './ErrorComponent';

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const params = useParams();

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
          </>
        )
      }
    </Container>

  )
}

export default CoinDetails