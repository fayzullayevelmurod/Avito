import React from "react";
import { AccountHeader } from "../layout/account-header";

import { Box, Text, Heading, Select, Image } from "@chakra-ui/react";
import { Footer } from "../layout";
import assets from "../assets";

export const AccountSelection = () => {
  return (
    <Box bg="#FAFAFA">
      <AccountHeader />
      <Box className="container" color="gray.900">
        <Heading as="h5" size="2xl" lineHeight="57.6px" mt={10} mb={8}>
          Объявления
        </Heading>

        <Text mb={2}>Выберите аккаунт</Text>
        <Select
          placeholder="Select option"
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

        <Box position="relative" mt="98px" mb="342px" textAlign="center">
          <Image
            src={assets.lineArrow}
            position="absolute"
            top="33px"
            left="24%"
            width="237px"
            height="252px"
          />
          <Image
            src={assets.lamp2}
            alt="lamp icon"
            width="678px"
            height="600px"
            mx="auto"
            objectFit="contain"
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};
