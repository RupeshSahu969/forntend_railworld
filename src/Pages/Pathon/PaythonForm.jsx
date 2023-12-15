import React, { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';

import { useNavigate} from "react-router-dom"

const PythonForm = () => {
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(''));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180); 
  
    useEffect(() => {
    
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
    
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const navigate = useNavigate();

    const handleNext = () => {
      navigate("/blockchan");
    };



    const questions = [
      {
        id: 1,
        question: '1 in Python what is the purpose of the None keyword?',
        options: [
          'A) It is used to remove variables from memory',
          'B)It represents a value that is not assigned or available',
          'C)It is used to define a variable with no value',
          'D)It is an alias for the null keyword in other programming languages',
        ],
      },
      {
        id: 2,
        question: '2. What is the purpose of the next() function in Python?',
        options: [
          'A) It skips the next iteration of a loop.',
          'B) It fetches the next element from an iterable',
          'C) It generates the next number in a sequence',
          'D) It calculates the next power of a given number',
        ],
      },
      {
        id: 3,
        question: '3.What does the enumerate() function do in Python?',
        options: [
          'A) It creates an iterable from an enumeration',
          'B)  It generates all possible combinations of a list',
          'C) It returns an enumerated object that produces pairs of index and value',
          'D)It filters elements from a list based on a condition.',
        ],
      },
      {
        id: 4,
        question:'4.What is the purpose of the format() method for strings in Python?',
        options: [
          'A) It converts a string to uppercase ',
          'B)It removes whitespace characters from a string ',
          'C) It replaces placeholders in a string with formatted values ',
          'D)  It splits a string into a',
        ],
      },
      {
      id: 5,
      question:'5.What is the difference between a module and a package in Python?',
      options: [
          'A) A module is a collection of classes, while a package is a collection of functions',
          'B) A module is a single file containing Python code, while a package is a collection of modules organized in directories',
          'C) A module can be imported using the from keyword, while a package cannot',
          'D) A module can be executed directly while a package requires a main script',
        ],
      },
    ];
  
    const handleOptionChange = (index, option) => {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = option;
      setSelectedOptions(newSelectedOptions);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Display the selected options
      console.log('Selected Options:', selectedOptions);
  
      // Set submission flag
      setIsSubmitted(true);
    };
  
    return (
      <Box p={4} m="auto" maxWidth="800px" textAlign="center">
        <Center>
          <Text fontSize="28" fontWeight="bold" mb="8">
            Railworld India Pvt Ltd
          </Text>
        </Center>
        <Flex justify="space-between" mb="2rem" align="center">
          <Text  fontSize="24" fontWeight="bold">Python Quiz</Text>
          <Text fontSize="22" fontWeight="bold" color={"red"}>Time Left: {formatTime(timeLeft)}</Text>
        </Flex>
        <Flex direction="column" align="start" mb={2}>
          {questions.map((question, index) => (
            <Box key={question.id} mb={4}>
              <Text mb={2} fontWeight="bold" textAlign={"start"}>
                {question.question}
              </Text>
              <RadioGroup
                onChange={(value) => handleOptionChange(index, value)}
                value={selectedOptions[index]}
              >
                <Stack direction="column">
                  {question.options.map((option, optionIndex) => (
                    <Radio key={optionIndex} value={option}>
                      {option}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
            </Box>
          ))}
        </Flex>
        {!isSubmitted ? (
           <Flex justify="flex-start" mb={4}>
           <Button type="submit" colorScheme="teal" onClick={handleNext}>
             Next
           </Button>
         </Flex>
      ) : null}
      </Box>
    );
  
  
}

export default PythonForm
