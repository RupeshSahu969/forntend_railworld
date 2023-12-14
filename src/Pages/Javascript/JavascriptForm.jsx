import React from 'react';
import { Box, Heading, Text, Flex ,Center} from '@chakra-ui/react';
import MCQQuestion from './MCQQuestion';

const JavaScript = () => {
  return (
    
    <Box p={8}  border="1px solid #ddd" borderRadius="md">
      {/* Heading */}
      <Heading mb={4} textAlign="center">Railworld India Pvt. Ltd.</Heading>

      {/* Line with Time, Topic, and Name */}
      <Flex mb={4}>
        <Text flex={1}>Time: 3  min</Text>
        <Text flex={1} fontWeight="bold" textAlign="center" >
          Topic: HTML, CSS, JavaScript
        </Text>
      </Flex>

      
      <Box mb={8} />

      <Center>
      <Box width="50%">
      <MCQQuestion
        question=" Which HTML5 element is used for semantic grouping of navigation links?"
        options={['<ul>', '<nav>', '<links>', '<header>']}
      />
      <MCQQuestion
        question="How can you create a responsive design in CSS?"
        options={['a) By using only fixed pixel measurements for widths and heights.', 'b) By applying the overflow: hidden property to all elements.', 'c) By using media queries to adjust styles based on screen size and orientation.', 'd) By using inline styles for all elements.']}
      />
      <MCQQuestion
        question="What does the CSS opacity property control?"
        options={['a) The speed of animation effects.', 'b) The positioning of an element within its container.', 'c) The transparency level of an element.', 'd)The spacing between elements.']}
      />
      <MCQQuestion
        question="What is a closure in JavaScript?"
        options={['a) It refers to a function that has not been defined yet.', 'b)It is a way to bind variables and functions together into an object.', 'c) It is an inner function that has access to its outer functions variables.', 'd) It is a term used for importing and exporting modules']}
      />
      <MCQQuestion
        question="How does the JavaScript async/await syntax simplify asynchronous code execution?"
        options={['a) It replaces the need for callback functions with traditional loops.', 'b) It allows the use of await within synchronous functions', 'c) It makes asynchronous code appear more like synchronous code by using async functions and await expressions', 'd)It enforces strict sequential execution of asynchronous tasks.']}
      />
      </Box>
      </Center>
    </Box>
  );
};

export default JavaScript;
