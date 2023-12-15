import React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
  Center,
  Button,
} from "@chakra-ui/react";

import FamilyDetails from "../FamilyDetails/FamilyDetails";

import { Form } from "react-router-dom";

const StudentDetails = () => {

  const MAX_FILE_SIZE = 500;

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (file) {
      const fileSizeInKB = file.size / 1024;

      if (fileSizeInKB > MAX_FILE_SIZE) {
        alert(
          `File size exceeds the limit. Maximum allowed size is ${MAX_FILE_SIZE} KB.`
        );

        e.target.value = null;
      } else {
      }
    }
  };

  return (
    <>
      <Box mt="0.5rem">
        <Text fontSize={"30px"} fontWeight={"bold"}>
          Railworld India PVT.LTd
        </Text>
        <Text fontSize={"20px"}> CandiDates Information Form </Text>
        <Box>
          <Stack
            mt="3rem"
            ml={{ base: "1rem", md: "5rem" }}
            mr={{ base: "1rem", md: "0rem" }}
          >
            <SimpleGrid columns={[1, null, 2]}>
              <Box>
                <form>
                  <FormControl>
                    <FormLabel>Date</FormLabel>
                    <Input
                      variant="flushed"
                      type="date"
                      placeholder="Date"
                      size="lg"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Post Applied For </FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Post Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Language(Java/React/Python/Angular)</FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Language"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Condidate's Name</FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Condidate's Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Father Name</FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Father Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Date of Birth</FormLabel>
                    <Input
                      variant="flushed"
                      type="date"
                      placeholder="Condidate's Name"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Address</FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Address"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mobile No</FormLabel>
                    <Input
                      variant="flushed"
                      type="tel"
                      id="mobileNumber"
                      name="mobileNumber"
                      pattern="[0-9]{10}"
                      placeholder="Mobile No"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>E-Mail </FormLabel>
                    <Input
                      variant="flushed"
                      type="email"
                      placeholder="Enter Email"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>
                      Social Media handle(Instagram/Fascebook){" "}
                    </FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Enter Social Media Account"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Marital Status </FormLabel>
                    <Input
                      variant="flushed"
                      type="text"
                      placeholder="Marital Status "
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Blood Group </FormLabel>
                    <Input
                      variant="flushed"
                      type="email"
                      placeholder="Blood Group"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Upload PDF (max 500 KB)</FormLabel>
                    <Input
                      type="file"
                      variant="flushed"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <Button mt={4} colorScheme="teal" type="submit"  w="100%" >
                    Submit
                  </Button>
                </form>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      </Box>

      <FamilyDetails />
    </>
  );
};

export default StudentDetails;
