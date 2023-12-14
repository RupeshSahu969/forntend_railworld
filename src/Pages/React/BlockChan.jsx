import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Radio,
  RadioGroup,
  Stack,
  Button,
  Flex,
  Center,
  FormControl,
  FormLabel,
  UnorderedList,
  ListItem,
  Textarea,
} from "@chakra-ui/react";

const BlockChan = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(""));

  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [timeLeft, setTimeLeft] = useState(180); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) =>(prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
    

  }, []);


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <Box maxW="800px" m="auto" textAlign="center">
        <Text fontSize="28" fontWeight="bold" mb="6">
          Railworld India Pvt Ltd
        </Text>

        <Flex justifyContent="center" alignItems="center" mt="4">
          
          <Text
            fontSize="25px"
            fontWeight="bold"
            mb="4"
            textAlign="center"
            mr={{base:"3rem", md:"30rem"}}
          >
            Blockchain
          </Text>
          <Text fontSize="xl" fontWeight="bold" mb="4" color={"red"}>
          Time Left:- {formatTime(timeLeft)}
          </Text>
        </Flex>

        <Text fontSize="lg" ml={{base:"1rem", md:"0rem"}} fontWeight="bold" mb="10" textAlign={"start"}>
          Blockchain technology is a decentralized and distributed digital
          ledger system that records transactions across multiple computers.
          Each transaction, or block, is linked to the previous one through
          cryptographic hashes, forming a chain of blocks. This technology
          gained prominence with the rise of cryptocurrencies like Bitcoin, but
          its applications extend far beyond digital currencies. It is being
          explored for secure supply chain management, transparent voting
          systems, and even digital identity verification.
        </Text>

        <FormControl mt="4">
          <FormLabel fontSize="lg" mb="2" ml={{base:"1rem", md:"0rem"}}>
            1. What is blockchain technology, and how does it record
            transactions?
          </FormLabel>
          <UnorderedList styleType="none" pl="0">
            <ListItem mr={{base:"1rem", md:"0rem"}}>
              <Textarea rows="3" />
            </ListItem>
          </UnorderedList>
        </FormControl>

        <FormControl mt="4">
          <FormLabel fontSize="lg" mb="2" ml={{base:"1rem", md:"0rem"}}>
            2. Other than cryptocurrencies, name at least two other applications
            of blockchain technology.
          </FormLabel>
          <UnorderedList styleType="none" pl="0">
            <ListItem mr={{base:"1rem", md:"0rem"}}>
              <Textarea rows="3" />
            </ListItem>
          </UnorderedList>
        </FormControl>

        <FormControl mt="4">
          <FormLabel fontSize="lg" mb="2" ml={{base:"1rem", md:"0rem"}}>
            3. What is the significance of cryptographic hashes in blockchain
            technology?
          </FormLabel>
          <Textarea rows="3" />
        </FormControl>

        <FormControl mt="4">
          <FormLabel fontSize="lg" mb="2" ml={{base:"1rem", md:"0rem"}}>
            4. What is a "block" in the context of blockchain?
          </FormLabel>
          <Textarea rows="3" />
        </FormControl>

        <FormControl mt="4">
          <FormLabel fontSize="lg" mb="2" ml={{base:"1rem", md:"0rem"}}>
            5. Why is blockchain technology considered a decentralized system?
          </FormLabel>
          <Textarea rows="3" />
        </FormControl>

        <Flex justify="flex-start" mb={4} mt="2rem">
          <Button type="submit" colorScheme="teal" width={{base:"90%",md:"20%"}} m={{base:"auto"}}>
            Submit
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default BlockChan;
