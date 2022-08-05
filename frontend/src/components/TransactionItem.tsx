import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { truncateAddress } from "../helpers/truncateAddress";
import { AccordionItemContext } from "../types/chakra/Accordion";

interface TransactionItemProps {}

export const TransactionItem: React.FC<TransactionItemProps> = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem
        padding={"15px"}
        borderRadius={"xl"}
        marginY={"2px"}
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
                    {truncateAddress(
                      "BdrQntjRYTAmFLVzZaHnMr2kUfc9Jkk5SxGUk5FCG7Cc",
                      30
                    )}
                  </Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"bold"} color={"gray.400"}>
                    To:{" "}
                  </Text>
                  <Text>
                    {truncateAddress(
                      "BdrQntjRYTAmFLVzZaHnMr2kUfc9Jkk5SxGUk5FCG7Cc",
                      30
                    )}
                  </Text>
                </Flex>

                <Flex justifyContent={"space-between"}>
                  <Text fontWeight={"bold"} color={"gray.400"}>
                    Tx hash:{" "}
                  </Text>
                  <Text>
                    {truncateAddress(
                      "0x6c165316bc2986525f2c2b0fb2a0ccf0a192c0191b24d68aba2419d7676a11af",
                      30
                    )}
                  </Text>
                </Flex>
              </Stack>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};
