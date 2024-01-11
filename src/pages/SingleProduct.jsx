import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import dashicon from "../assets/shopImgs/dashicon.svg";
import sofa2 from "../assets/single/Outdoorsofa2.png";
import sofa1 from "../assets/single/Outdoorsofa1.png";
import sofa3 from "../assets/single/Outdoorsofa3.png";
import sofa4 from "../assets/single/Outdoorsofa4.png";
import asgaardsofa from "../assets/single/Asgaardsofa3.png";
import star from "../assets/single/star-filled.svg";
import starHalf from "../assets/single/star-half.svg";
import facebook from "../assets/single/facebook.svg";
import linkedin from "../assets/single/linkedin.svg";
import twitter from "../assets/single/twitter.svg";
import sofa5 from "../assets/single/Cloudsofa.png";
import { allProducts } from "../assets/allProducts";

export const SingleProduct = () => {
  const totalProducts = allProducts.slice(4);

  return (
    <Box mb={10}>
      <Flex
        w="100%"
        h="100px"
        bg="#F9F1E7"
        alignItems={"center"}
        gap={6}
        pl={"5%"}
      >
        <Text color="#9F9F9F" fontSize="16px" fontWeight={400}>
          Home
        </Text>
        <Image src={dashicon} w="20px" h="20px" alt="arrow" />
        <Text color="#9F9F9F" fontSize="16px" fontWeight={400}>
          Shop
        </Text>
        <Image src={dashicon} w="20px" h="20px" alt="arrow" />

        <Divider h="40px" border="1px" orientation="vertical" />

        <Text color="#000" fontSize="16px" fontWeight={400}>
          Asgaard sofa
        </Text>
      </Flex>

      <Flex w="100%" p="4%" gap={"4%"}>
        <Flex direction={"column"} ml={10} gap={6}>
          <Flex
            w="76px"
            h="80px"
            bg="#F9F1E7"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            overflow={"hidden"}
          >
            <Image src={sofa2} alt="sofa2" />
          </Flex>
          <Flex
            w="76px"
            h="80px"
            bg="#F9F1E7"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            overflow={"hidden"}
          >
            <Image src={sofa1} alt="sofa2" />
          </Flex>
          <Flex
            w="76px"
            h="80px"
            bg="#F9F1E7"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            overflow={"hidden"}
          >
            <Image src={sofa3} alt="sofa2" />
          </Flex>
          <Flex
            w="76px"
            h="80px"
            bg="#F9F1E7"
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"10px"}
            overflow={"hidden"}
          >
            <Image src={sofa4} alt="sofa2" />
          </Flex>
        </Flex>

        <Flex
          w="50%"
          h="500px"
          bg="#F9F1E7"
          borderRadius="10px"
          overflow={"hidden"}
          alignItems={"center"}
        >
          <Image src={asgaardsofa} alt="sofa2" />
        </Flex>

        <Box ml="5%">
          <Text color="#000" fontSize="42px" fontWeight={400}>
            Asgaard sofa
          </Text>

          <Text color="#9F9F9F" fontSize="24px" fontWeight={500}>
            Rs.25,000.00
          </Text>
          <Flex mt={3} gap={2} alignItems={"center"}>
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={star} alt="star" />
            <Image src={starHalf} alt="star" />

            <Divider
              ml={2}
              mr={2}
              h="30px"
              border="1px"
              orientation="vertical"
            />

            <Text ml={2} color="#9F9F9F" fontSize="13px" fontWeight={400}>
              5 Customer Review
            </Text>
          </Flex>

          <Text mt="5" w="52%" color="#000" fontSize="13px" fontWeight={400}>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </Text>

          <Text mt={5} color="#9F9F9F" fontSize="14px" fontWeight={400}>
            Size
          </Text>

          <Flex gap={5}>
            <Box
              w="30px"
              h="30px"
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              bg="#B88E2f"
              color="#FFF"
              fontSize={"13px"}
              fontWeight={400}
              borderRadius={"5px"}
              mt={3}
            >
              L
            </Box>
            <Box
              w="30px"
              h="30px"
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              bg="#F9F1E7;"
              color="#000"
              fontSize={"13px"}
              fontWeight={400}
              borderRadius={"5px"}
              mt={3}
            >
              XS
            </Box>
            <Box
              w="30px"
              h="30px"
              display={"flex"}
              alignItems="center"
              justifyContent="center"
              bg="#F9F1E7;"
              color="#000"
              fontSize={"13px"}
              fontWeight={400}
              borderRadius={"5px"}
              mt={3}
            >
              XL
            </Box>
          </Flex>

          <Text mt={4} color="#9F9F9F" fontSize="14px" fontWeight={400}>
            Color
          </Text>

          <Flex gap={5} mt={3}>
            <Box w="30px" h="30px" bg="#816DFA" borderRadius={"50%"}></Box>
            <Box w="30px" h="30px" bg="#000" borderRadius={"50%"}></Box>
            <Box w="30px" h="30px" bg="#B88E2f" borderRadius={"50%"}></Box>
          </Flex>

          <Flex mt={8} gap={5}>
            <Flex
              w="16%"
              h="64px"
              bg="#FFF"
              border="1px solid #9F9F9F"
              borderRadius={"10px"}
              justifyContent={"space-around"}
              alignItems={"center"}
              color="#000"
              fontSize={"16px"}
            >
              <Text>-</Text>
              <Text>1</Text>
              <Text>+</Text>
            </Flex>
            <Flex
              w="27%"
              h="64px"
              bg="#FFF"
              border="1px solid #000"
              borderRadius={"10px"}
              justifyContent={"space-around"}
              alignItems={"center"}
              color="#000"
              fontSize={"16px"}
            >
              <Text>Add To Cart</Text>
            </Flex>
            <Flex
              w="27%"
              h="64px"
              bg="#FFF"
              border="1px solid #000"
              borderRadius={"10px"}
              justifyContent={"space-around"}
              alignItems={"center"}
              color="#000"
              fontSize={"16px"}
            >
              <Text>+ Compare</Text>
            </Flex>
          </Flex>
          <Divider w="80%" mt={10} border="1px solid #D9D9D9" />

          <Flex mt={8} color="#9F9F9F" fontSize="16px" fontWeight={400}>
            <Text>SKU</Text>
            <Text ml={"7%"} mr={3}>
              :
            </Text>
            <Text>SS001</Text>
          </Flex>
          <Flex mt={4} color="#9F9F9F" fontSize="16px" fontWeight={400}>
            <Text>Category</Text>
            <Text ml={1} mr={3}>
              :
            </Text>
            <Text>Sofas</Text>
          </Flex>
          <Flex mt={4} color="#9F9F9F" fontSize="16px" fontWeight={400}>
            <Text>Tags</Text>
            <Text ml={"6%"} mr={3}>
              :
            </Text>
            <Text>Sofa, Chair, home</Text>
          </Flex>

          <Flex mt={4} color="#9F9F9F" fontSize="16px" fontWeight={400}>
            <Text>Share</Text>
            <Text ml={"5%"} mr={3}>
              :
            </Text>
            <Flex gap={5}>
              <Image src={facebook} alt="facebook" />
              <Image src={linkedin} alt="linkedIn" />
              <Image src={twitter} alt="twitter" />
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Box
        w="100%"
        mt={4}
        borderTop={"1px solid #D9D9D9"}
        borderBottom={"1px solid #D9D9D9"}
        pb={10}
      >
        <Flex mt={10} justifyContent={"center"} gap={10}>
          <Text color="#000" fontSize="24px" fontWeight={500}>
            Description
          </Text>
          <Text color="#9F9F9F" fontSize="24px" fontWeight={400}>
            Additional Information
          </Text>
          <Text color="#9F9F9F" fontSize="24px" fontWeight={400}>
            Reviews[5]
          </Text>
        </Flex>

        <Box w="68%" m="auto">
          <Text
            mt={8}
            textAlign={"justify"}
            color="#9F9F9F"
            fontSize="16px"
            fontWeight={400}
          >
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </Text>
          <Text
            mt={8}
            textAlign={"justify"}
            color="#9F9F9F"
            fontSize="16px"
            fontWeight={400}
          >
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.{" "}
          </Text>

          <Flex gap={10} mt={10}>
            <Box h="300px" bg="#F9F1E7" borderRadius={"10px"}>
              <Image src={sofa5} alt="sofa" />
            </Box>
            <Box h="300px" bg="#F9F1E7" borderRadius={"10px"}>
              <Image src={sofa5} alt="sofa" />
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box w="86%" m={"auto"} mt={10}>
        <Text
          color={`var(--Font-Color, #333)`}
          fontSize="32px"
          fontWeight={700}
          mt={10}
          textAlign={"center"}
        >
          Related Products
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={10}>
          {totalProducts.map((product) => (
            <GridItem key={product.id}>
              <Box bg="#F4F5F7" pb={7} position="relative">
                {product.disc && (
                  <Box
                    position="absolute"
                    top="48px"
                    right="48px"
                    transform="translate(50%, -50%)"
                    borderRadius="50%"
                    bg={product.disc === "New" ? "#2EC1AC" : "#E97171"}
                    color="white"
                    fontSize="16px"
                    fontWeight={500}
                    width="48px"
                    height="48px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {product.disc}
                  </Box>
                )}
                <Image
                  w="100%"
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                />
                <Text
                  color="#3A3A3A"
                  fontSize="24px"
                  fontWeight={600}
                  mt={3}
                  ml={4}
                >
                  {product.name}
                </Text>
                <Text
                  color="#898989"
                  fontSize="16px"
                  fontWeight={500}
                  mt={3}
                  ml={4}
                >
                  {product.desc}
                </Text>
                <Text
                  color="#3A3A3A"
                  fontSize="20px"
                  fontWeight={600}
                  mt={3}
                  ml={4}
                >
                  {`Rp ${product.price}`}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>

        <Flex justifyContent={"center"} alignItems={"center"} mt={10}>
          <Button
            w="17%"
            h="48px"
            color="#B88E2F"
            borderRadius={"none"}
            border="1px solid #B88E2F"
            fontSize={"16px"}
            fontWeight={600}
            bg="#FFF"
          >
            Show More
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
