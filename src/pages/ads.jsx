import React, { useState } from "react";
import { AccountHeader } from "../layout/account-header";
import { Footer } from "../layout";
import {
  Box,
  Text,
  Heading,
  Select,
  Image,
  Flex,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import assets from "../assets";

export const Ads = () => {
  const [show, setShow] = useState(false);
  const [tableOfContents, setTableOfContents] = useState(false);
  const showMoreText = () => {
    setShow(!show);
  };

  const showMoreTableOfContents = () => {
    setTableOfContents(!tableOfContents);
  };

  return (
    <Box bg="#FAFAFA">
      <AccountHeader />
      <Box className="container">
        <Heading
          as="h5"
          size={{ base: "md", md: "xl", lg: "2xl" }}
          lineHeight={{ base: "29px", lg: "57.6px" }}
          mt={{ base: "43px", md: 8, lg: 10 }}
          mb={{ base: "24px", md: 6, lg: 8 }}
        >
          Объявления
        </Heading>

        <Flex alignItems="end" justifyContent="space-between">
          <Flex gap={6}>
            <Box>
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
            </Box>
            <Box>
              <Text mb={2}>Категория</Text>
              <Select
                placeholder="Автомобили"
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
            </Box>
          </Flex>
          <Flex gap={6}>
            <Button colorScheme="purple" px={8} flex="flex" gap={2}>
              <Image src={assets.filterIcon} />
              Фильтр
            </Button>
            <Button
              colorScheme="purple"
              px={8}
              variant="outline"
              flex="flex"
              gap={2}
            >
              <Image src={assets.changeIcon} />
              Изменить
            </Button>
          </Flex>
        </Flex>
        <Box>
          <Flex align="center" gap={5} mt={8}>
            <Text lineHeight="19px" color="gray.500">
              Всего 18
            </Text>
            <Flex gap="6px">
              <Button
                variant="outline"
                borderRadius="8px"
                borderColor="#919EAB52"
                rotate="180deg"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                <Image
                  transform="rotate(180deg)"
                  src={assets.nextIcon}
                  opacity="0.4"
                />
              </Button>
              <Button
                variant="outline"
                borderRadius="8px"
                colorScheme="purple"
                bgColor="#f0edf7"
              >
                1
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderColor="#919EAB52"
                borderRadius="8px"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                2
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderColor="#919EAB52"
                borderRadius="8px"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                3
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderColor="#919EAB52"
                borderRadius="8px"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                4
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderColor="#919EAB52"
                borderRadius="8px"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                5
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderRadius="8px"
                borderColor="transparent"
                _hover={{ bgColor: "transparent" }}
              >
                <Text>…</Text>
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderRadius="8px"
                colorScheme="gray"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                <Image src={assets.nextIcon} />
              </Button>
            </Flex>
          </Flex>
          <Flex align="center" gap={5} mt={8}>
            <Text lineHeight="19px" color="gray.500">
              Всего 18
            </Text>
            <Flex gap="6px">
              <Button
                variant="outline"
                borderRadius="8px"
                borderColor="#919EAB52"
                rotate="180deg"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                <Image
                  transform="rotate(180deg)"
                  src={assets.nextIcon}
                  opacity="0.4"
                />
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderColor="#919EAB52"
                borderRadius="8px"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
                width="63px"
              >
                1
              </Button>
              <Button
                variant="outline"
                color="#212B36"
                borderRadius="8px"
                colorScheme="gray"
                _hover={{ borderColor: "purple.500", bgColor: "#f0edf7" }}
              >
                <Image src={assets.nextIcon} />
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Grid templateColumns="repeat(4, 1fr)" gap="30px" my={8}>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto1}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto2}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto3}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto4}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto5}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto6}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem width="305px" height="297px">
            <Image
              src={assets.avitoAuto7}
              alt="avito auto 1"
              width="100%"
              height="100%"
            />
          </GridItem>
        </Grid>

        <Flex bgColor="white" borderRadius="12px" p={8}>
          <Box flex={1}>
            <Text color="gray.500" lineHeight="19px">
              Заголовок
            </Text>
            <Heading
              color="gray.900"
              fontSize="24px"
              lineHeight="28px"
              mt="6px"
              mb={6}
            >
              BMW X5 3.0 AT, 2018, 135 000 км
            </Heading>
            <Text color="gray.500" lineHeight="19px" mt={6}>
              Цена
            </Text>
            <Heading
              color="gray.900"
              fontSize="24px"
              lineHeight="28px"
              mt="6px"
              mb={6}
            >
              6 700 000 ₽
            </Heading>

            <Text color="gray.500" lineHeight="19px" mt={6} mb="6px">
              Описание
            </Text>
            <Box color="gray.900" lineHeight="19px">
              СОСТОЯНИЕ НОВОГО АВТОМОБИЛЯ! Пригнали из Германии для себя, год
              назад.Начало эксплуатации в Германии 2019 год.Без окрасов и ДТПВсе
              стёкла оригиналКузов и салон в отличном состоянии.После покупки
              установили М-лук(бампера перед, зад, арки жабры и тд), изначально
              была в М-пакете, как по мне, он скучноват в обычном М-пакете, про
              обычную комплектацию вообще молчу 😀, а сейчас она во всей своей
              красе!)Технически в идеальном состоянии, после покупки полностью
              заменили все жидкости и расходники
              <Text display={`${!show ? "initial" : "none"}`} as="span">
                ...
              </Text>
              <Text display={`${show ? "initial" : "none"}`}>
                ОРИГИНАЛЬНЫЙ ПОДТВЕРЖДЕННЫЙ ПРОБЕГ, что не мало важно, так как у
                80% пригнанных авто они скручены.Пугаться пробега не стоит, так
                как автомобилях из Германии пробег можно делить на 3, так как
                дороги, обслуживание и уровень эксплуатации у них совсем другой,
                убедились в этом сами.Богатая комплектация, из основного не
                хватает только Laser оптики.- Панорама - Автопилот (сама едет по
                полосам, держит дистанцию и т.д.)- Чтение знаков- Мертвые зоны-
                Четырехзонный климат контроль- Smart ключ- Webasto
              </Text>
            </Box>
            <Button
              flex="flex"
              colorScheme="none"
              height="auto"
              color="purple.500"
              align="center"
              gap="6px"
              cursor="pointer"
              p="0"
              mt="6px"
              onClick={showMoreText}
            >
              {!show ? "Развернуть" : "Свернуть"}
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform={show ? "rotate(180)" : "rotate(0)"}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  fill="#805AD5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  stroke="#805AD5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  stroke="black"
                  strokeOpacity="0.2"
                />
              </svg>
            </Button>
          </Box>
          <Box width="1px" bgColor="#E2E8F0" mx={8} />
          <Box flex={1}>
            <Text color="gray.500" lineHeight="19px">
              Теги объявления
            </Text>
            <Flex flexDir="column" gap="12px">
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  ID
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  454212345
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  № объявления для связзки
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  34543234
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Генератор заголовка
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Нет
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Генератор цены
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Нет
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Вид товара
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Автомобили
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Состояние товара
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text
                  color="gray.900"
                  fontWeight={500}
                  lineHeight="19px"
                  whiteSpace="nowrap"
                >
                  Б/У
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Город
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Москва
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Улица
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Московская
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Район
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Москва
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Телефон
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  89765434567
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Метод связи
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Нет
                </Text>
              </Flex>
              <Flex alignItems="end">
                <Text color="gray.700" lineHeight="19px" whiteSpace="nowrap">
                  Менеджер
                </Text>
                <Box border="1px dashed #e2e8f0" width="100%" />
                <Text color="gray.900" fontWeight={500} lineHeight="19px">
                  Алина
                </Text>
              </Flex>

              {tableOfContents ? (
                <Flex flexDir="column" gap="12px">
                  <Flex alignItems="end">
                    <Text
                      color="gray.700"
                      lineHeight="19px"
                      whiteSpace="nowrap"
                    >
                      Метод связи
                    </Text>
                    <Box border="1px dashed #e2e8f0" width="100%" />
                    <Text color="gray.900" fontWeight={500} lineHeight="19px">
                      Нет
                    </Text>
                  </Flex>
                  <Flex alignItems="end">
                    <Text
                      color="gray.700"
                      lineHeight="19px"
                      whiteSpace="nowrap"
                    >
                      Метод связи
                    </Text>
                    <Box border="1px dashed #e2e8f0" width="100%" />
                    <Text color="gray.900" fontWeight={500} lineHeight="19px">
                      Нет
                    </Text>
                  </Flex>
                  <Flex alignItems="end">
                    <Text
                      color="gray.700"
                      lineHeight="19px"
                      whiteSpace="nowrap"
                    >
                      Метод связи
                    </Text>
                    <Box border="1px dashed #e2e8f0" width="100%" />
                    <Text color="gray.900" fontWeight={500} lineHeight="19px">
                      Нет
                    </Text>
                  </Flex>
                  <Flex alignItems="end">
                    <Text
                      color="gray.700"
                      lineHeight="19px"
                      whiteSpace="nowrap"
                    >
                      Менеджер
                    </Text>
                    <Box border="1px dashed #e2e8f0" width="100%" />
                    <Text color="gray.900" fontWeight={500} lineHeight="19px">
                      Алина
                    </Text>
                  </Flex>
                </Flex>
              ) : (
                ""
              )}
            </Flex>
            <Button
              flex="flex"
              colorScheme="none"
              height="auto"
              color="purple.500"
              align="center"
              gap="6px"
              cursor="pointer"
              p="0"
              mt="6px"
              onClick={showMoreTableOfContents}
            >
              {tableOfContents ? "Свернуть" : "Развернуть"}
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform={tableOfContents ? "rotate(180)" : "rotate(0)"}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  fill="#805AD5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  stroke="#805AD5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  stroke="black"
                  strokeOpacity="0.2"
                />
              </svg>
            </Button>
          </Box>
        </Flex>

        <Flex
          alignItems="start"
          bgColor="white"
          borderRadius="12px"
          p={8}
          mt={8}
        >
          <Box flex={1}>
            <Text color="gray.500" lineHeight="19px">
              Заголовок
            </Text>
            <Heading
              color="gray.900"
              fontSize="24px"
              lineHeight="28px"
              mt="6px"
              mb={6}
            >
              BMW X5 3.0 AT, 2018, 135 000 км
            </Heading>
            <Text color="gray.500" lineHeight="19px" mt={6}>
              Цена
            </Text>
            <Heading
              color="gray.900"
              fontSize="24px"
              lineHeight="28px"
              mt="6px"
              mb={6}
            >
              6 700 000 ₽
            </Heading>
          </Box>
          <Box flex={1}>
            <Text color="gray.500" lineHeight="19px" mb="6px">
              Описание
            </Text>
            <Box color="gray.900" lineHeight="19px" maxWidth="375px">
              СОСТОЯНИЕ НОВОГО АВТОМОБИЛЯ! Пригнали из Германии для себя, год
              назад.Начало эксплуатации в Германии 2019 год.Без окрасов и ДТПВсе
              стёкла оригиналКузов и салон в отличном состоянии
              <Text display={`${!show ? "initial" : "none"}`} as="span">
                ...
              </Text>
              <Text display={`${show ? "initial" : "none"}`}>
                , после покупки полностью заменили все жидкости и расходники
                ОРИГИНАЛЬНЫЙ ПОДТВЕРЖДЕННЫЙ ПРОБЕГ, что не мало важно, так как у
                80% пригнанных авто они скручены.Пугаться пробега не стоит, так
                как автомобилях из Германии пробег можно делить на 3, так как
                дороги, обслуживание и уровень эксплуатации у них совсем другой,
                убедились в этом сами.Богатая комплектация, из основного не
                хватает только Laser оптики.- Панорама - Автопилот (сама едет по
                полосам, держит дистанцию и т.д.)- Чтение знаков- Мертвые зоны-
                Четырехзонный климат контроль- Smart ключ- Webasto
              </Text>
            </Box>
            <Button
              flex="flex"
              colorScheme="none"
              height="auto"
              color="purple.500"
              align="center"
              gap="6px"
              cursor="pointer"
              p="0"
              mt="6px"
              onClick={showMoreText}
            >
              {!show ? "Развернуть" : "Свернуть"}
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform={show ? "rotate(180)" : "rotate(0)"}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  fill="#805AD5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  fill="black"
                  fillOpacity="0.2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  stroke="#805AD5"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.234229 0.834563C0.384251 0.684586 0.587698 0.600333 0.799829 0.600333C1.01196 0.600333 1.21541 0.684586 1.36543 0.834563L3.99983 3.46896L6.63423 0.834563C6.70803 0.758155 6.7963 0.697209 6.89391 0.655282C6.99151 0.613354 7.09649 0.591285 7.20271 0.590362C7.30893 0.589439 7.41428 0.60968 7.51259 0.649905C7.61091 0.69013 7.70023 0.749532 7.77534 0.824646C7.85046 0.899761 7.90986 0.989082 7.95009 1.0874C7.99031 1.18572 8.01055 1.29106 8.00963 1.39728C8.00871 1.50351 7.98664 1.60848 7.94471 1.70609C7.90278 1.80369 7.84184 1.89197 7.76543 1.96576L4.56543 5.16576C4.41541 5.31574 4.21196 5.39999 3.99983 5.39999C3.7877 5.39999 3.58425 5.31574 3.43423 5.16576L0.234229 1.96576C0.0842524 1.81574 0 1.61229 0 1.40016C0 1.18803 0.0842524 0.984585 0.234229 0.834563Z"
                  stroke="black"
                  strokeOpacity="0.2"
                />
              </svg>
            </Button>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
