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


const AngularForm = () => {
 
    const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(''));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds
  
    useEffect(() => {
      // Countdown timer
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      // Cleanup the timer on component unmount
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    
  
    const questions = [
      {
        id: 1,
        question: `1. What is the purpose of Angular's 'ngZone'?`,
        options: [
          'A) Handling HTTP requests',
          'B) Managing asynchronous operation',
          'C) Styling Components',
          'D) Defining routing configuration',
        ],
      },
      {
        id: 2,
        question: '2. Which decorator is used to define a custom structural directive in Angular?',
        options: [
          'A) @Component',
          'B) @Directive',
          'C) @Pipe',
          'D) @NgModule',
        ],
      },
      {
        id: 3,
        question: '3. In Angular, what is the purpose of the "Renderer2 service?',
        options: [
          'A) Managing global state',
          `B) Updating component's view`,
          'C) Handling routing navigation',
          'D) Making HTTP requests',
        ],
      },
      {
        id: 4,
        question:'4.Which Angular feature enables lazy loading of modules?',
        options: [
          'A) NgModule',
          'B) Route Guards',
          'C) Dependency Injection',
          'D) Router',
        ],
      },
      {
      id: 5,
      question:'5.What is Angular Ivy?',
      options: [
          'A) An Angular version control system',
          'B) A new rendering engine for Angular',
          'C) A state management library',
          'D) A code linter for Angular projects',
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
          <Text  fontSize="24" fontWeight="bold">Angular Quiz</Text>
          <Text fontSize="22" fontWeight="bold">Time Left: {formatTime(timeLeft)}</Text>
        </Flex>
        <Flex direction="column" align="start" mb={2}>
          {questions.map((question, index) => (
            <Box key={question.id} mb={4}>
              <Text mb={2} fontWeight="bold">{question.question}</Text>
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
           <Button type="submit" colorScheme="teal">
             Next
           </Button>
         </Flex>
      ) : null}
      </Box>
    );

}

export default AngularForm
