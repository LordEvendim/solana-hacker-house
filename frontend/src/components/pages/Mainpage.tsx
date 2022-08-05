import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MainpageProps {}

export const Mainpage: React.FC<MainpageProps> = () => {
  const navigate = useNavigate();

  return (
    <Container w="full" centerContent>
      <Box h={"80px"} w="full" />
      <Box w="container.xl">
        <Heading
          size="3xl"
          lineHeight="1.4"
          fontWeight={"extrabold"}
          color={"#2E2E2E"}
          textShadow={"0px 0px 10px rgba(0,0,0,0.2)"}
        >
          Lorem ipsum dolor sit amet on
          <br /> on{" "}
          <Button
            variant="link"
            size="3xl"
            textColor="green.300"
            fontWeight={"extrabold"}
            bgGradient="linear(to-l, #049df1, #13c0f0)"
            bgClip={"text"}
          >
            Solana
          </Button>
        </Heading>
        <Text
          mt={"10px"}
          fontSize={"xl"}
          fontWeight={"extrabold"}
          color={"#91d8ff"}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nobis
          necessitatibus?
        </Text>
        <Box h={12} w="full" />
        <HStack>
          <Button
            w="60"
            h="14"
            onClick={() => {
              navigate("/dashboard");
            }}
            color={"white"}
            bgGradient="linear(to-tl, #049df1, #13f0e2)"
            borderRadius={"2xl"}
            fontSize={"lg"}
            boxShadow={"md"}
          >
            Try now!
          </Button>
          <Box>
            <Text
              fontSize={"xl"}
              fontWeight={"extrabold"}
              color={"#91d8ff"}
              ml={"14"}
            >
              Demo
            </Text>
          </Box>
        </HStack>
      </Box>
    </Container>
  );
};
