import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import scandinavian from "../assets/Homepage/scandinavian-bg.png";
import image1 from "../assets/Homepage/image-100.png";
import image2 from "../assets/Homepage/image-200.png";
import image3 from "../assets/Homepage/image-300.png";
import rectangle26 from "../assets/Homepage/Rectangle-26.png";
import rectangle27 from "../assets/Homepage/Rectangle-27.png";
import rectangle28 from "../assets/Homepage/Rectangle28.png";
import rectangle30 from "../assets/Homepage/Rectangle30.png";
import rectangle31 from "../assets/Homepage/Rectangle31.png";
import rectangle32 from "../assets/Homepage/Rectangle32.png";
import rectangle33 from "../assets/Homepage/Rectangle33.png";
import rectangle34 from "../assets/Homepage/Rectangle34.png";
import rectangle35 from "../assets/Homepage/Rectangle35.png";
import rectangle36 from "../assets/Homepage/Rectangle36.png";
import rectangle37 from "../assets/Homepage/Rectangle37.png";
import rectangle38 from "../assets/Homepage/Rectangle38.png";
import active from "../assets/Homepage/Active.svg";
import grayEllipse from "../assets/Homepage/Ellipse-gray.svg";
import { allProducts } from "../assets/allProducts";
import { Link } from "react-router-dom";
export const HomePage = () => {
  // allProducts

  return (
    <Box w="100%">
      <Box
        w="100%"
        h="100vh"
        m="auto"
        backgroundImage={`url(${scandinavian})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Box
          w="42%"
          h="60%"
          mr={"7%"}
          mt={"7%"}
          borderRadius="10px"
          bg="#FFF3E3"
          p={"3%"}
        >
          <Text
            color={`var(--Font-Color, #333)`}
            fontSize="16px"
            fontWeight={600}
            letterSpacing="3px"
          >
            New Arrival
          </Text>
          <Box
            color={`var(--Font-Color, #B88E2F)`}
            fontSize="52px"
            fontWeight={700}
            lineHeight="65px"
            w="80%"
            mt={2}
          >
            Discover Our New Collection
          </Box>
          <Text
            color={`var(--Font-Color, #333)`}
            fontSize="18px"
            fontWeight={500}
            lineHeight="24px"
            mt={3}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </Text>

          <Button
            bg={`var(--Primary, #B88E2F)`}
            fontSize="16px"
            fontWeight={700}
            color={`var(--Font-Color, #FFF)`}
            mt={10}
            w="220px"
            h="74px"
            p="25px 72px"
            borderRadius={"none"}
          >
            BUY NOW
          </Button>
        </Box>
      </Box>

      <Box w="80%" m={"auto"} mt={10}>
        <Text
          color={`var(--Font-Color, #333)`}
          fontSize="32px"
          fontWeight={700}
          mt={10}
          textAlign={"center"}
        >
          Browse The Range
        </Text>
        <Text
          color={`var(--Font-Color, #666)`}
          fontSize="20px"
          fontWeight={400}
          mt={3}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <Flex justifyContent="space-between" mt={10}>
          <Box>
            <Image src={image3} alt={"img3"} w="100%" borderRadius="lg" />
            <Text
              color={`var(--Font-Color, #333)`}
              fontSize="24px"
              fontWeight={600}
              mt={5}
              textAlign={"center"}
            >
              Dining
            </Text>
          </Box>
          <Box>
            <Image src={image1} alt={"img1"} w="100%" borderRadius="lg" />
            <Text
              color={`var(--Font-Color, #333)`}
              fontSize="24px"
              fontWeight={600}
              mt={5}
              textAlign={"center"}
            >
              Living
            </Text>
          </Box>
          <Box>
            <Image src={image2} alt={"img2"} w="100%" borderRadius="lg" />
            <Text
              color={`var(--Font-Color, #333)`}
              fontSize="24px"
              fontWeight={600}
              mt={5}
              textAlign={"center"}
            >
              Bedroom
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box w="86%" m={"auto"} mt={10}>
        <Text
          color={`var(--Font-Color, #333)`}
          fontSize="32px"
          fontWeight={700}
          mt={10}
          textAlign={"center"}
        >
          Our Products
        </Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={10}>
          {allProducts.map((product) => (
            <GridItem key={product.id}>
              <Link to="/singleProduct">
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
              </Link>
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

      <Box w="100%" bg="#fcf8f3;" mt="10" p={"3%"}>
        <Flex alignItems={"center"} gap={6}>
          <Box w="34%" ml="3%">
            <Text
              color="#3A3A3A)"
              fontSize={"40px"}
              fontWeight={700}
              lineHeight={"120%"}
            >
              50+ Beautiful rooms inspiration
            </Text>
            <Text
              color="#616161)"
              fontSize={"16px"}
              fontWeight={500}
              lineHeight={"150%"}
              mt={2}
              w="80%"
            >
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </Text>

            <Button
              w="35%"
              h="48px"
              color="#FFF"
              borderRadius={"none"}
              fontSize={"16px"}
              fontWeight={600}
              bg="#B88E2F"
              mt={5}
            >
              Explore More
            </Button>
          </Box>
          <Box>
            <Image src={rectangle26} alt="rectangle26" />
          </Box>
          <Box>
            <Image src={rectangle27} alt="rectangle27" />
            <Flex gap={3} mt={10} mb={7}>
              <Image src={active} alt="active" />
              <Image src={grayEllipse} alt="gray-ellipse" />
              <Image src={grayEllipse} alt="gray-ellipse" />
              <Image src={grayEllipse} alt="gray-ellipse" />
            </Flex>
          </Box>
          <Box w="4%" mt={"-6.8%"}>
            <Image src={rectangle28} alt="rectangle26" />
          </Box>
        </Flex>
      </Box>

      <Box mt={10}>
        <Text
          color="#616161"
          fontSize={"20px"}
          fontWeight={600}
          lineHeight={"150%"}
          textAlign={"center"}
          mt={10}
        >
          Share your setup with
        </Text>
        <Text
          color="#3A3A3A"
          fontSize={"40px"}
          fontWeight={700}
          lineHeight={"120%"}
          textAlign={"center"}
        >
          #FuniroFurniture
        </Text>

        <Flex justifyContent={"space-between"} alignItems={"center"} mb={10}>
          <Flex direction={"column"} gap={8}>
            <Flex alignItems={"end"} gap={8}>
              <Box>
                <Image w="100%" src={rectangle30} alt="rectangle30" />
              </Box>
              <Box>
                <Image w="100%" src={rectangle31} alt="rectangle31" />
              </Box>
            </Flex>
            <Flex alignItems={"start"} gap={8}>
              <Box>
                <Image w="100%" src={rectangle35} alt="rectangle35" />
              </Box>
              <Box>
                <Image w="100%" src={rectangle36} alt="rectangle36" />
              </Box>
            </Flex>
          </Flex>
          <Flex>
            <Image src={rectangle32} alt="rectangle32" />
          </Flex>
          <Flex direction={"column"} gap={8}>
            <Flex alignItems={"end"} gap={8}>
              <Box>
                <Image w="100%" src={rectangle33} alt="rectangle33" />
              </Box>
              <Box>
                <Image w="100%" src={rectangle34} alt="rectangle34" />
              </Box>
            </Flex>
            <Flex alignItems={"start"} gap={8}>
              <Box>
                <Image w="100%" src={rectangle37} alt="rectangle37" />
              </Box>
              <Box>
                <Image w="100%" src={rectangle38} alt="rectangle38" />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
