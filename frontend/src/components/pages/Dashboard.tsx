import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { NFTItem } from "../NFTItem";
import { TransactionItem } from "../TransactionItem";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Container w={"full"} centerContent>
      <Box h={"10"} />
      <Box w={"container.xl"}>
        <Heading mb={"4"}>Dashboard</Heading>
        <Box h={"2"} />
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem
            w="100%"
            minH="100"
            bg="white"
            rounded="3xl"
            p={6}
            h={"520px"}
            boxShadow={"lg"}
            borderColor={"gray.200"}
            borderWidth={"1px"}
            overflow={"hidden"}
          >
            <Flex justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                Transaction history
              </Text>
              <Button variant={"link"} color={"blue.300"}>
                <Link to={"/transaction-history"}>View all {">>"}</Link>
              </Button>
            </Flex>

            <Stack mt={"20px"}>
              {[...new Array(9)].map(() => (
                <TransactionItem />
              ))}
            </Stack>
          </GridItem>
          <GridItem
            w="100%"
            minH="100"
            bg="white"
            rounded="3xl"
            p={6}
            h={"520px"}
            boxShadow={"lg"}
            borderColor={"gray.200"}
            borderWidth={"1px"}
          >
            <Flex justifyContent={"space-between"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                NFTs
              </Text>
              <Button variant={"link"} color={"blue.300"}>
                <Link to={"/nfts"}>View all {">>"}</Link>
              </Button>
            </Flex>
            <Flex
              flexWrap={"wrap"}
              mt={"20px"}
              gap={"15px"}
              justifyContent={"space-between"}
            >
              {[...new Array(9)].map(() => (
                <NFTItem />
              ))}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};
