import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Navbar/Meubel_House_Logos-05.svg";
import heart from "../assets/Navbar/akar-icons_heart.svg";
import search from "../assets/Navbar/akar-icons_search.svg";
import cart from "../assets/Navbar/ant-design_shopping-cart-outlined.svg";
import account from "../assets/Navbar/mdi_account-alert-outline.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Flex
      w="100%"
      h="100px"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display="flex" w="30%" ml="4%" gap={2} alignItems={"center"}>
        <Image src={logo} alt="logoImage" />
        <Text
          color="#000"
          fontFamily="Montserrat"
          fontSize="34px"
          fontWeight="700"
        >
          Furniro
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent={"space-between"}
        w="30%"
        color="#000"
        fontSize="16px"
        fontWeight="500"
      >
        <Text>
          <Link to="/">Home</Link>
        </Text>
        <Text>
          <Link to="/shop">Shop</Link>
        </Text>
        <Text>
          <Link to="/">About</Link>
        </Text>
        <Text>
          <Link to="/">Contact</Link>
        </Text>
      </Box>
      <Box display="flex" gap="10%" mr="6%" w="30%" justifyContent={"flex-end"}>
        <Image src={account} alt="account.svg" />
        <Image src={search} alt="search.svg" />
        <Image src={heart} alt="heart.svg" />
        <Image src={cart} alt="cart.svg" />
      </Box>
    </Flex>
  );
};
