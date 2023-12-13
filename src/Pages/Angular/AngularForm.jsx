import React from 'react';
import { Box, Heading, Text, Flex, Center } from '@chakra-ui/react';
import MCQQuestion from './MCQQuestion';

const Angular = () => {
  return (
    <Box p={8} mr={20} ml={60}>
      {/* Heading */}
      <Heading mb={4} textAlign={'center'}>Railworld India</Heading>

      {/* Line with Time, Topic, and Name */}
      <Flex mb={4}>
        <Text flex={1}>Time: 3  min</Text>
        <Text flex={1} textAlign="center">
          Topic: Angular
        </Text>
      </Flex>

      {/* Empty Space */}
      <Box mb={8} />

      {/* MCQ Questions */}
      <MCQQuestion
        question="What is the purpose of Angular's 'ngZone'?"
        options={['Handling HTTP requests', 'Managing asynchronous operation', 'Styling Components', 'Defining routing configurationer']}
      />
      <MCQQuestion
        question="Which decorator is used to define a custom structural directive in Angular?"
        options={['@Component', '@Directive', '@Pipe', '@NgModule']}
      />
      <MCQQuestion
        question="In Angular, what is the purpose of the 'Renderer2' service?"
        options={['Managing global state', "Updating component's view", 'Handling routing navigation', 'Making HTTP requests']}
      />
      <MCQQuestion
        question="Which Angular feature enables lazy loading of modules?"
        options={['NgModule', 'Route Guards', 'Dependency Injection', 'Router']}
      />
      <MCQQuestion
        question="What is Angular Ivy?"
        options={['An An angular version control system', 'A new rendering engine for angular', 'I state management library', 'A code linker for Angular projects']}
      />
    </Box>
  );
};

export default Angular;