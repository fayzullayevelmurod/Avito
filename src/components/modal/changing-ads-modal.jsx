import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  FormControl,
  FormLabel,
  Textarea,
  Box,
  Flex,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { DragDropComponent } from "../common/drag-drop";
export const ChangingAdsModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent maxW="844px" width="100%" height="830px">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY="auto" px="24px" py="16px">
            <Flex gap="24px">
              <Box flex={1}>
                <DragDropComponent />
              </Box>
              <Box flex={1}>
                <FormControl>
                  <FormLabel color="gray.900" mr={0}>
                    Папка на Яндекс.Диске
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="gray.900" mr={0} mt="24px">
                    Ссылка на видео
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
              </Box>
            </Flex>
            <Flex gap="24px">
              <Box flex={1} mt="20px">
                <FormControl>
                  <FormLabel color="gray.900" mr={0}>
                    ID
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    № объявления для связки
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Генератор заголовка
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Генератор цены
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Вид товара
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Город
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
              </Box>
              <Box flex={1} mt="20px">
                <FormControl>
                  <FormLabel color="gray.900" mr={0}>
                    Улица
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Район
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Телефон
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Метод связи
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    Менеджер
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
                <FormControl mt="10px">
                  <FormLabel color="gray.900" mr={0}>
                    ID
                  </FormLabel>
                  <Textarea
                    minH="auto"
                    overflow="hidden"
                    py="10px"
                    height="40px"
                    type="text"
                    size="sm"
                    placeholder="Hello"
                    borderRadius="6px"
                  />
                </FormControl>
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Отменить
            </Button>
            <Button colorScheme="purple">Сохранить</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
