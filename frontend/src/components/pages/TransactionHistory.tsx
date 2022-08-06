import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AccordionItemContext } from "../../types/chakra/Accordion";

interface TransactionHistoryProps {}

export const TransactionHistory: React.FC<TransactionHistoryProps> = () => {
  return (
    <>
      <Container w={"full"} centerContent mb={"80px"}>
        <Box h={"10"} />
        <Box w={"container.xl"}>
          <Heading mb={"4"}>Transaction history</Heading>
          <Box h={"2"} />

          {[...new Array(6)].map(() => (
            <>
              <Accordion allowToggle>
                <AccordionItem
                  boxShadow={"sm"}
                  padding={"10px"}
                  borderRadius={"xl"}
                  marginY={"5px"}
                  backgroundColor={"white"}
                  borderColor={"gray.200"}
                  borderWidth={"1px"}
                >
                  {({ isExpanded }: AccordionItemContext) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box
                            flex="1"
                            textAlign="left"
                            fontWeight={isExpanded ? "bold" : "normal"}
                          >
                            Transaction INFO
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack gap={"10px"}>
                          <Flex justifyContent={"space-between"}>
                            <Text fontWeight={"bold"} color={"gray.400"}>
                              Date:{" "}
                            </Text>
                            <Text>{new Date(Date.now()).toLocaleString()}</Text>
                          </Flex>
                          <Flex justifyContent={"space-between"}>
                            <Text fontWeight={"bold"} color={"gray.400"}>
                              From:{" "}
                            </Text>
                            <Text>
                              BdrQntjRYTAmFLVzZaHnMr2kUfc9Jkk5SxGUk5FCG7Cc
                            </Text>
                          </Flex>
                          <Flex justifyContent={"space-between"}>
                            <Text fontWeight={"bold"} color={"gray.400"}>
                              To:{" "}
                            </Text>
                            <Text>
                              E8g3ZvisM8LtddW83Ys1G6zJWm8eyFkJeG2FzzAZanEd
                            </Text>
                          </Flex>

                          <Flex justifyContent={"space-between"}>
                            <Text fontWeight={"bold"} color={"gray.400"}>
                              Tx hash:{" "}
                            </Text>
                            <Text>
                              0x6c165316bc2986525f2c2b0fb2a0ccf0a192c0191b24d68aba2419d7676a11af
                            </Text>
                          </Flex>
                        </Stack>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </>
          ))}
        </Box>
      </Container>
    </>
  );
};
