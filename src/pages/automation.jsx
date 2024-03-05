import React from "react";
import { AccountHeader } from "../layout/account-header";
import { Footer } from "../layout";
import {
  Box,
  Text,
  Select,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormLabel,
  Switch,
  FormControl,
} from "@chakra-ui/react";
export const Automation = () => {
  return (
    <Box bg="#fafafafa">
      <AccountHeader />
      <Box
        className="container"
        mb={{ base: "100px", md: "100px", lg: "153px" }}
      >
        <Heading
          as="h5"
          size={{ base: "md", md: "xl", lg: "2xl" }}
          lineHeight={{ base: "29px", lg: "57.6px" }}
          mt={{ base: "43px", md: 8, lg: 10 }}
          mb={{ base: "24px", md: 6, lg: 8 }}
        >
          Автоматизация
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

        <Accordion allowToggle bg="white" borderRadius="12px" mt={8}>
          <AccordionItem border="none" p={{ base: "16px", md: "24px", lg: 8 }}>
            <Box p={0}>
              <FormControl
                display="flex"
                alignItems="center"
                borderBottom="1px solid #E2E8F0"
                paddingBottom="24px"
              >
                <FormLabel
                  fontSize={{
                    base: "16px",
                    md: "20px",
                    lg: "24px",
                  }}
                  lineHeight={{ base: "19px", md: "24px", lg: "28px" }}
                  flex="1"
                  textAlign="left"
                  htmlFor="email-alerts"
                  fontWeight={600}
                  mb="0"
                >
                  Повторная публикация заблокированных объявлений (свичт справа)
                </FormLabel>
                <Switch
                  id="email-alerts"
                  colorScheme="purple"
                  size="lg"
                  isChecked
                />
              </FormControl>
              <AccordionButton
                _hover={{ bg: "transparent" }}
                px={0}
                pb={0}
                pt={{ base: "14px", lg: "24px" }}
                flex="flex"
                justifyContent="space-between"
                className="not-shadow"
              >
                <Text>Как это работает?</Text>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel p={0} pt="6px">
              Повторная публикация заблокированных объявлений, повторная
              публикация заблокированных объявлений
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          bg="white"
          borderRadius="12px"
          mt={8}
          defaultIndex={[0]}
          allowMultiple
        >
          <AccordionItem border="none" p={{ base: "16px", md: "24px", lg: 8 }}>
            <Box p={0}>
              <FormControl
                display="flex"
                alignItems="center"
                borderBottom="1px solid #E2E8F0"
                paddingBottom="24px"
              >
                <FormLabel
                  fontSize={{
                    base: "16px",
                    md: "20px",
                    lg: "24px",
                  }}
                  lineHeight={{ base: "19px", md: "24px", lg: "28px" }}
                  flex="1"
                  textAlign="left"
                  htmlFor="accordion2"
                  fontWeight={600}
                  mb="0"
                >
                  Повторная публикация заблокированных объявлений (свичт справа)
                </FormLabel>
                <Switch id="accordion2" colorScheme="purple" size="lg" />
              </FormControl>
              <AccordionButton
                _hover={{ bg: "transparent" }}
                px={0}
                pb={0}
                pt={{ base: "14px", lg: "24px" }}
                flex="flex"
                justifyContent="space-between"
                className="not-shadow"
              >
                <Text>Как это работает?</Text>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel p={0} pt="6px">
              Повторная публикация заблокированных объявлений, повторная
              публикация заблокированных объявлений
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle bg="white" borderRadius="12px" mt={8}>
          <AccordionItem border="none" p={{ base: "16px", md: "24px", lg: 8 }}>
            <Box p={0}>
              <FormControl
                display="flex"
                alignItems="center"
                borderBottom="1px solid #E2E8F0"
                paddingBottom="24px"
              >
                <FormLabel
                  fontSize={{
                    base: "16px",
                    md: "20px",
                    lg: "24px",
                  }}
                  lineHeight={{ base: "19px", md: "24px", lg: "28px" }}
                  flex="1"
                  textAlign="left"
                  htmlFor="accordion3"
                  fontWeight={600}
                  mb="0"
                >
                  Повторная публикация заблокированных объявлений (свитч слева)
                </FormLabel>
                <Switch
                  id="accordion3"
                  colorScheme="purple"
                  size="lg"
                  isChecked
                />
              </FormControl>
              <AccordionButton
                _hover={{ bg: "transparent" }}
                px={0}
                pb={0}
                pt={{ base: "14px", lg: "24px" }}
                flex="flex"
                justifyContent="space-between"
                className="not-shadow"
              >
                <Text>Как это работает?</Text>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel p={0} pt="6px">
              Повторная публикация заблокированных объявлений, повторная
              публикация заблокированных объявлений
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion
          defaultIndex={[0]}
          allowMultiple
          bg="white"
          borderRadius="12px"
          mt={8}
        >
          <AccordionItem border="none" p={{ base: "16px", md: "24px", lg: 8 }}>
            <Box p={0}>
              <FormControl
                display="flex"
                alignItems="center"
                borderBottom="1px solid #E2E8F0"
                paddingBottom="24px"
              >
                <FormLabel
                  fontSize={{
                    base: "16px",
                    md: "20px",
                    lg: "24px",
                  }}
                  lineHeight={{ base: "19px", md: "24px", lg: "28px" }}
                  flex="1"
                  textAlign="left"
                  htmlFor="accordion4"
                  fontWeight={600}
                  mb="0"
                >
                  Повторная публикация заблокированных объявлений (свитч слева)
                </FormLabel>
                <Switch id="accordion4" colorScheme="purple" size="lg" />
              </FormControl>
              <AccordionButton
                _hover={{ bg: "transparent" }}
                px={0}
                pb={0}
                pt={{ base: "14px", lg: "24px" }}
                flex="flex"
                justifyContent="space-between"
                className="not-shadow"
              >
                <Text>Как это работает?</Text>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel p={0} pt="6px">
              Повторная публикация заблокированных объявлений, повторная
              публикация заблокированных объявлений
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Footer />
    </Box>
  );
};
