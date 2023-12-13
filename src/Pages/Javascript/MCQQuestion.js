import React from 'react';
import { Box, Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const MCQQuestion = ({ question, options }) => {
  return (
    <Box mb={4}>
      {/* Question */}
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        {question}
      </Text>

      {/* Options */}
      <RadioGroup>
        <Stack direction="column">
          {options.map((option, index) => (
            <Radio key={index} value={option}>
              {option}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default MCQQuestion;
