import React, { useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

const ReactForm = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(""));
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
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/blockchan");
  };

  const questions = [
    {
      id: 1,
      question: "1. In React, what is the purpose of the forwardRef function?",
      options: [
        "A) Creating reusable components",
        "B) Passing props to child components",
        "C) Forwarding refs to child components",
        "D) Defining custom hooks",
      ],
    },
    {
      id: 2,
      question:
        "2. Which tool can be used to analyze the performance of React applications?",
      options: [
        "A) React Inspector",
        "B) Redux DevTools",
        "C) React Profiler",
        "D) React Monitor",
      ],
    },
    {
      id: 3,
      question:
        "3. What is the purpose of the shouldComponentUpdate method in React?",
      options: [
        "A) To fetch data from an API",
        "B) To determine if a component should re-render",
        "C) To update the component's state",
        "D) To define routing behavior",
      ],
    },
    {
      id: 4,
      question:
        "4.Which React Hook is used for handling the context in functional components?",
      options: [
        "A) useContext",
        "B) useReducer",
        "C) useCallback",
        "D) useMemo",
      ],
    },
    {
      id: 5,
      question: "5.What is React Native used for?",
      options: [
        "A) Building web applications with React",
        "B) Server-side rendering with React",
        "C) Building cross-platform mobile applications",
        "D) Unit testing React components",
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

    console.log("Selected Options:", selectedOptions);

    setIsSubmitted(true);
  };

  return (
    <>
      <Box p={4} m="auto" maxWidth="800px" textAlign="center">
        <Center>
          <Text fontSize="28" fontWeight="bold" mb="8">
            Railworld India Pvt Ltd
          </Text>
        </Center>
        <Flex justify="space-between" mb="2rem" align="center">
          <Text fontSize="24" fontWeight="bold">
            React Quiz
          </Text>
          <Text fontSize="22" fontWeight="bold" color={"red"}>
            Time Left: {formatTime(timeLeft)}
          </Text>
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

        <Flex justify="flex-start" mb={4}>
          <Button type="submit" colorScheme="teal" onClick={handleNext}>
            Next
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default ReactForm;
