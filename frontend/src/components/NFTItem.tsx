import { Button, Flex, Skeleton } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NFTItemProps {}

export const NFTItem: React.FC<NFTItemProps> = () => {
  const navigate = useNavigate();

  return (
    <Skeleton borderRadius={"xl"}>
      <Button
        w={"130px"}
        h={"130px"}
        borderColor={"gray.200"}
        borderRadius={"lg"}
        padding={"20px"}
        bg={"gray.100"}
      >
        <Flex justifyContent={"space-between"} flexDir={"row"}></Flex>
      </Button>
    </Skeleton>
  );
};
