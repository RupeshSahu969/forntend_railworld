import React from "react";

import Table from "react-bootstrap/Table";

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
} from "@chakra-ui/react";

const FamilyDetails = () => {

  return (
    <>
      <Box mt={"2rem"} ml={{ base: "0rem", md: "5rem" }}>
        <Text
          fontSize={"30px"}
          fontWeight={"bold"}
          mt={"2rem"}
          mb={"3rem"}
          ml={{ base: "0rem", md: "1rem" }}
        >
          {" "}
          FAMILY DETAILS{" "}
        </Text>
        <Table
          width={{ base: "100%", md: "50%" }}
        >
          <thead>
            <tr>
              <th  align={"start"} style={{ border: "1px solid black" }}> Name</th>
              <th  align={"start"} style={{ border: "1px solid black" }}> Relation withyou </th>
              <th  align={"start"} style={{ border: "1px solid black" }}> Profession </th>
              <th  align={"start"} style={{ border: "1px solid black" }}> Age </th>
              <th  align={"start"} style={{ border: "1px solid black" }}> Is depended on you? Y/N </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td  style={{ border: "1px solid black" }}>
                <Input  type="text" style={{ border: "none" }} />
              </td>
              <td style={{ border: "1px solid black" }}>
                <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
            </tr>
            <tr>
              <td  style={{ border: "1px solid black" }} >
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
            </tr>
            <tr>
              <td  style={{ border: "1px solid black" }} >
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text"/>
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
            </tr>
            <tr>
              <td  style={{ border: "1px solid black" }} >
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
              <td style={{ border: "1px solid black" }}>
              <Input style={{ border: "none" }} type="text" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Box>

      <Box
        mt={"5rem"}
        mb={"3rem"}
        ml={{ base: "1rem", md: "5rem" }}
        mr={{ base: "1rem", md: "0rem" }}
        textAlign={"start"}
      >
        <Box>
          <Text fontWeight={"bold"} fontSize={{ base: "17px", md: "20px" }}>
            {" "}
            How did you come to know our organization?.{" "}
          </Text>
          <Input
            variant="flushed"
            type="text"
            width={{ base: "100%", md: "50%" }}
            margin={"auto"}
          />
        </Box>
        <Box mt={"3rem"}>
          <Text fontWeight={"bold"} fontSize={{ base: "17px", md: "20px" }}>
            {" "}
            How soon you can join with our organization , if you get selected ?.{" "}
          </Text>
          <Input
            variant="flushed"
            type="text"
            width={{ base: "100%", md: "50%" }}
            margin={"auto"}
          />
        </Box>
      </Box>
    </>
  );
};

export default FamilyDetails;
