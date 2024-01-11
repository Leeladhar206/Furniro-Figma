import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

import blurImage from "../assets/shopImgs/Rectangle1.png";
import dashIcon from "../assets/shopImgs/dashicon.svg";
import grid from "../assets/shopImgs/grid.svg";
import filter from "../assets/shopImgs/filtering.svg";
import view from "../assets/shopImgs/view-list.svg";
import support from "../assets/shopImgs/support.svg";
import guarantee from "../assets/shopImgs/guarantee.svg";
import shipping from "../assets/shopImgs/shipping.svg";
import trophy from "../assets/shopImgs/trophy.svg";

import { allProducts } from "../assets/allProducts";
import { Link } from "react-router-dom";

export const Shop = () => {
  const totalProducts = [...allProducts, ...allProducts];

  return (
    <Box>
      <Box
        w="100%"
        h="316px"
        m="auto"
        backgroundImage={`url(${blurImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>
          <Text color="#000" fontSize="48px" fontWeight={500}>
            Shop
          </Text>

          <Box display={"flex"} mt={2}>
            <Text color="#000" fontSize="16px" fontWeight={500}>
              Home
            </Text>
            <Image ml={2} mr={2} src={dashIcon} alt="dashIcon" />
            <Text color="#000" fontSize="16px" fontWeight={300}>
              Shop
            </Text>
          </Box>
        </Box>
      </Box>

      <Flex
        h="100px"
        bg="#F9F1E7"
        alignItems={"center"}
        justifyContent={"space-between"}
        pl={"5%"}
        pr={"5%"}
        mb={10}
      >
        <Flex alignItems={"center"} gap={8}>
          <Image src={filter} alt="filter" />
          <Text color="#000" fontSize="20px" fontWeight={400}>
            Filter
          </Text>
          <Image src={grid} alt="grid" />
          <Image src={view} alt="view" />
          <Divider h="40px" border="1px" orientation="vertical" />
          <Text color="#000" fontSize="16px" fontWeight={400}>
            Showing 1–16 of 32 results
          </Text>
        </Flex>

        <Flex alignItems={"center"} gap={8}>
          <Text color="#000" fontSize="20px" fontWeight={400}>
            Show
          </Text>
          <Box
            w="55px"
            h="55px"
            bg="#FFF"
            color="#9F9F9F"
            fontSize="20px"
            fontWeight={400}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            16
          </Box>
          <Text color="#000" fontSize="20px" fontWeight={400}>
            Sort by
          </Text>

          <Box
            w="188px"
            h="55px"
            bg="#FFF"
            color="#9F9F9F"
            fontSize="20px"
            fontWeight={400}
            display={"flex"}
            alignItems={"center"}
            pl={8}
          >
            Default
          </Box>
        </Flex>
      </Flex>

      <Box w="85%" m={"auto"}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={10}>
          {totalProducts.map((product) => (
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
      </Box>

      <Flex mt={10} justifyContent={"center"} gap={8} mb={10}>
        <Box
          w="60px"
          h="60px"
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          bg="#B88E2F"
          color="#FFF"
          fontSize={"20px"}
          fontWeight={400}
          borderRadius={"10px"}
          mt={5}
        >
          1
        </Box>
        <Box
          w="60px"
          h="60px"
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          bg="#F9F1E7"
          color="#000"
          fontSize={"20px"}
          fontWeight={400}
          borderRadius={"10px"}
          mt={5}
        >
          2
        </Box>
        <Box
          w="60px"
          h="60px"
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          bg="#F9F1E7"
          color="#000"
          fontSize={"20px"}
          fontWeight={400}
          borderRadius={"10px"}
          mt={5}
        >
          3
        </Box>
        <Box
          w="98px"
          h="60px"
          display={"flex"}
          alignItems="center"
          justifyContent="center"
          bg="#F9F1E7"
          color="#000"
          fontSize={"20px"}
          fontWeight={400}
          borderRadius={"10px"}
          mt={5}
        >
          Next
        </Box>
      </Flex>

      <Flex
        w="100%"
        h="270px"
        bg="#FAF3EA"
        mt={10}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Flex>
          <Image src={trophy} alt="trophy" />
          <Box ml={2}>
            <Text fontSize={"25px"} fontWeight={"600"} color="#242424" mb={1}>
              High Quality
            </Text>
            <Text fontSize={"20px"} fontWeight={"500"} color="#898989" mt={1}>
              crafted from top materials
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Image src={guarantee} alt="guarantee" />
          <Box ml={2}>
            <Text fontSize={"25px"} fontWeight={"600"} color="#242424" mb={1}>
              Warranty Protection
            </Text>
            <Text fontSize={"20px"} fontWeight={"500"} color="#898989" mt={1}>
              Over 2 years
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Image src={shipping} alt="shipping" />
          <Box ml={2}>
            <Text fontSize={"25px"} fontWeight={"600"} color="#242424" mb={1}>
              Free Shipping
            </Text>
            <Text fontSize={"20px"} fontWeight={"500"} color="#898989" mt={1}>
              Order over 150 $
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Image src={support} alt="support" />
          <Box ml={2}>
            <Text fontSize={"25px"} fontWeight={"600"} color="#242424" mb={1}>
              24/7 Support
            </Text>
            <Text fontSize={"20px"} fontWeight={"500"} color="#898989" mt={1}>
              Dedicated support
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
