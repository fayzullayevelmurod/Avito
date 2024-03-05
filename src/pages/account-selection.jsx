import React from "react";
import { AccountHeader } from "../layout/account-header";

import { Box, Text, Heading, Select, Image, Flex } from "@chakra-ui/react";
import { Footer } from "../layout";
import assets from "../assets";

export const AccountSelection = () => {
  return (
    <Flex
      bg="#FAFAFA"
      justifyContent="space-between"
      alignItems="center"
      flexDir="column"
      minHeight="100vh"
    >
      <AccountHeader />
      <Box className="container" color="gray.900">
        <Heading
          as="h5"
          size={{ base: "md", md: "xl", lg: "2xl" }}
          lineHeight={{ base: "29px", lg: "57.6px" }}
          mt={{ base: "43px", md: 8, lg: 10 }}
          mb={{ base: "24px", md: 6, lg: 8 }}
        >
          Объявления
        </Heading>

        <Text mb={2}>Выберите аккаунт</Text>
        <Select
          placeholder="Мой аккаунт"
          bg="white"
          border="1px"
          borderColor="gray.200"
          width="320px"
          focusBorderColor="gray.200"
          className="not-shadow"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>

        <Box
          position="relative"
          mt={{ base: "50px", lg: "98px" }}
          mb={{ base: "80px", md: "112px", lg: "342px" }}
          textAlign="center"
        >
          <Image
            src={assets.lineArrow}
            position="absolute"
            top={{ base: "0", sm: "70px", md: "86px", lg: "33px" }}
            left={{
              base: "20px !important",
              sm: "10% !important",
              md: "20% !important",
              lg: "24% !important",
            }}
            sx={{
              "@media (max-width:480px)": {
                transform: "rotate(60deg)",
                left: "20px !important",
              },
              "@media (max-width:1300px)": {
                left: "15% !important",
              },
              "@media (max-width:992px)": {
                left: "10% !important",
              },
            }}
            width={{ base: "140px", sm: "auto", md: "200px", lg: "237px" }}
            height={{ base: "140px", md: "200px", lg: "252px" }}
            className="lamp__arrow-img"
          />
          <Image
            src={assets.lamp2}
            alt="lamp icon"
            width={{ base: "100%", sm: "600px", md: "500px", lg: "678px" }}
            height={{
              md: "257px",
              sm: "500px",
              md: "500px",
              lg: "600px",
            }}
            mx="auto"
            objectFit="contain"
            className="lamp-img"
          />
        </Box>
      </Box>
      <Footer />
    </Flex>
  );
};
