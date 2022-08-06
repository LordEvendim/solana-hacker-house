import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NFTsProps {}

export const NFTs: React.FC<NFTsProps> = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container w={"full"} centerContent mb={"80px"}>
        <Box h={"10"} />
        <Box w={"container.xl"}>
          <Heading mb={"4"}>NFTs</Heading>
          <Box h={"2"} />

          <Flex
            flexWrap={"wrap"}
            mt={"20px"}
            gap={"15px"}
            justifyContent={"space-between"}
          >
            {[...new Array(20)].map(() => (
              <Skeleton borderRadius={"xl"} isLoaded={true}>
                <Button
                  w={"240px"}
                  h={"220px"}
                  borderColor={"gray.200"}
                  borderRadius={"lg"}
                  padding={"20px"}
                  bg={"gray.100"}
                >
                  <Flex justifyContent={"space-between"} flexDir={"row"}></Flex>
                </Button>
              </Skeleton>
            ))}
          </Flex>
        </Box>
      </Container>
    </>
  );
};
