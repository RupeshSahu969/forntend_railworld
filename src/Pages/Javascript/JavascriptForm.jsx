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

const JavascriptForm = () => {
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
        question: '1.Which HTML5 element is used for semantic grouping of navigation links? ',
        options: [
          'A)  <ul>',
          'B)<nav>',
          'C)<links>',
          'D) <header>',
        ],
      },
      {
        id: 2,
        question: '2.How can you create a responsive design in CSS? ',
        options: [
          'A) By using only fixed pixel measurements for widths and heights. ',
          'B) By applying the overflow: hidden property to all elements. ',
          'C) By using media queries to adjust styles based on screen size and orientation.',
          'D)  By using inline styles for all elements.',
        ],
      },
      {
        id: 3,
        question: '3.What does the CSS opacity property control?',
        options: [
          'A)The speed of animation effects.',
          'B)The positioning of an element within its container ',
          'C) The transparency level of an element. ',
          'D)The spacing between elements',
        ],
      },
      {
        id: 4,
        question:'4.What is a closure in JavaScript?',
        options: [
          'A)  It refers to a function that has not been defined yet. ',
          'B)  It is a way to bind variables and functions together into an object.',
          'C) It is an inner function that has access to its outer functions variables.',
          'D)   It is a term used for importing and exporting modules',
        ],
      },
      {
      id: 5,
      question:'5.How does the JavaScript async/await syntax simplify asynchronous code execution?',
      options: [
          'A) It replaces the need for callback functions with traditional loops.',
          'B)  It allows the use of await within synchronous functions',
          'C) It makes asynchronous code appear more like synchronous code by using async functions and await expressions (Answer)',
          'D) It enforces strict sequential execution of asynchronous tasks.',
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
          <Text  fontSize="24" fontWeight="bold">React Quiz</Text>
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

export default JavascriptForm
