import React from "react";
import {
  Box,
  ButtonGroup,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets";

export const AccountHeader = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const body = document.querySelector("body");
  isOpen
    ? body.classList.toggle("no-scroll")
    : body.classList.remove("no-scroll");

  return (
    <Box bgColor="white" width="100%">
      <Box py={5} className="container">
        <Flex alignItems="center" justifyContent="space-between">
          <Box
            sx={{
              "@media (max-width: 480px)": {
                width: "109px",
                height: "20px",
              },
            }}
          >
            <Link to="/">
              <img src={assets.avitoPlusLogo} alt="header logo" />
            </Link>
          </Box>
          <ButtonGroup
            sx={{
              "@media (max-width: 992px)": {
                position: "absolute",
                flexDirection: "column",
                width: "100%",
                bgColor: "#fff",
                top: `${!isOpen ? "-100%" : "76px"}`,
                transition: "all 0.3s linear",
                p: "40px 0 0 20px",
                left: "0",
                gap: "12px",
                zIndex: "999",
                height: "100%",
              },
            }}
            gap="12px"
          >
            <Link style={{ marginLeft: "0" }} to="/account">
              <Button
                _hover={{
                  bgColor: "purple.500",
                  borderColor: "purple.500",
                  color: "white",
                }}
                colorScheme="gray"
                variant="outline"
                bgColor={pathname === "/account" ? "purple.500" : ""}
                color={pathname === "/account" ? "white" : ""}
              >
                Аккаунты
              </Button>
            </Link>
            <Link style={{ marginLeft: "0" }} to="/subscription-services">
              <Button
                _hover={{
                  bgColor: "purple.500",
                  borderColor: "purple.500",
                  color: "white",
                }}
                colorScheme="gray"
                variant="outline"
                bgColor={
                  pathname === "/subscription-services" ? "purple.500" : ""
                }
                color={pathname === "/subscription-services" ? "white" : ""}
              >
                Подписка
              </Button>
            </Link>
            <Link style={{ marginLeft: "0" }} to="/video-instructions">
              <Button
                _hover={{
                  bgColor: "purple.500",
                  borderColor: "purple.500",
                  color: "white",
                }}
                colorScheme="gray"
                variant="outline"
                bgColor={pathname === "/video-instructions" ? "purple.500" : ""}
                color={pathname === "/video-instructions" ? "white" : ""}
              >
                Видео-инструкции
              </Button>
            </Link>
            <Menu>
              <MenuButton
                width="fit-content"
                display={{ base: "flex", lg: "none" }}
                alignItems="center"
                order="-1"
                as={Button}
                rightIcon={<ChevronDownIcon />}
                bgColor="transparent"
                color="purple.500"
                border="1px solid #805AD5"
                borderRadius="6px"
                _hover={{ backgroundColor: "purple.500", color: "#fff" }}
                style={{ margin: "0 0 24px 0" }}
              >
                Александр
              </MenuButton>
              <MenuList>
                <MenuItem>Label</MenuItem>
                <MenuItem>Label</MenuItem>
                <MenuItem>Label</MenuItem>
              </MenuList>
            </Menu>
          </ButtonGroup>
          <ButtonGroup alignItems="center" gap={{ base: "12px", lg: "1" }}>
            <Box
              bgColor="#EDF2F7"
              px="16px"
              py="8px"
              lineHeight="24px"
              fontSize="16px"
              fontWeight="600"
              borderRadius={6}
              sx={{
                "@media (max-width: 480px)": {
                  fontSize: "12px",
                  p: "5px 8px",
                },
              }}
            >
              4300 ₽
            </Box>
            <Menu>
              <MenuButton
                order={{ md: "-1", lg: "0" }}
                as={Button}
                display={{ base: "none", lg: "flex" }}
                alignItems="center"
                rightIcon={<ChevronDownIcon />}
                bgColor="transparent"
                color="purple.500"
                border="1px solid #805AD5"
                borderRadius="6px"
                _hover={{ backgroundColor: "purple.500", color: "#fff" }}
              >
                Александр
              </MenuButton>
              <MenuList>
                <MenuItem>Label</MenuItem>
                <MenuItem>Label</MenuItem>
                <MenuItem>Label</MenuItem>
              </MenuList>
            </Menu>
            <Box
              onClick={toggle}
              display={{ base: "block", lg: "none" }}
              width="36px"
              height="36px"
            >
              {!isOpen ? (
                <Image src={assets.menueIcon} width="30px" height="35px" />
              ) : (
                <Image src={assets.closeIcon} width="30px" height="35px" />
              )}
            </Box>
          </ButtonGroup>
        </Flex>
      </Box>
    </Box>
  );
};
