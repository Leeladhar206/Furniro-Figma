import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      h="500px"
      w="100%"
      p="4%"
      borderTop="1px solid rgba(0, 0, 0, 0.17)"
      bg="#FFF"
    >
      <Flex w="92%" m={"auto"} borderBottom={"1px solid #D9D9D9"}>
        <Box w="34%">
          <Text color="#000" fontSize="24px" fontWeight="700">
            Funiro.
          </Text>
          <Box w="70%" mt={7} color="#9F9F9F">
            <Text>400 University Drive Suite 200 Coral Gables,</Text>
            <Text>FL 33134 USA</Text>
          </Box>
        </Box>
        <Box w="16%" color="#000" fontSize="16px" fontWeight="500">
          <Text color="#9F9F9F">Links</Text>
          <Text mt={10}>Home</Text>
          <Text mt={10}>Shop</Text>
          <Text mt={10}>About</Text>
          <Text mt={10} mb={10}>
            Contact
          </Text>
        </Box>
        <Box w="20%" color="#000" fontSize="16px" fontWeight="500">
          <Text color="#9F9F9F">Help</Text>
          <Text mt={10}>Payment Options</Text>
          <Text mt={10}>Returns</Text>
          <Text mt={10}>Privacy Policies</Text>
        </Box>
        <Box w="30%" color="#000" fontSize="16px" fontWeight="500">
          <Text color="#9F9F9F">Newsletter</Text>
          <Flex mt={5}>
            <Input
              p={0}
              w="47%"
              outline="none"
              borderRadius="0px"
              border="none"
              fontSize="14px"
              fontWeight="400"
              borderBottom={"2px solid #000"}
              placeholder="Enter Your Email Address"
            />
            <Button
              fontSize="14px"
              fontWeight="500"
              border={"none"}
              borderRadius={"none"}
              p={0}
              ml={2}
              bg="none"
              borderBottom={"2px solid #000"}
            >
              SUBSCRIBE
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Text
        w="92%"
        m={"auto"}
        mt={8}
        color="#000"
        fontSize="16px"
        fontWeight="400"
      >
        2023 furino. All rights reverved
      </Text>
    </Box>
  );
};
