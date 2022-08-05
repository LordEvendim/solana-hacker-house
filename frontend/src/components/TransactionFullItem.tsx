import { Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TransactionFullItemProps {}

export const TransactionFullItem: React.FC<TransactionFullItemProps> = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const navigate = useNavigate();

  const ButtonMotion = motion(Button);

  const variants = {
    opened: {
      height: "70px",
    },
    closed: {
      height: "200px",
    },
  };

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };

  return (
    <ButtonMotion
      w={"full"}
      borderColor={"gray.200"}
      borderWidth={"1px"}
      borderRadius={"lg"}
      padding={"20px"}
      bg={"white"}
      display={"block"}
      onClick={() => handleFocus()}
      variants={variants}
      animate={isFocused ? "closed" : "opened"}
      transition={{
        type: "spring",
        duration: 0.1,
        height: {
          duration: 0.5,
          type: "spring",
        },
      }}
    >
      <Flex justifyContent={"space-between"} flexDir={"row"}>
        <Text>123</Text>
        <Text>0x3hewfh98hf98he94h89fhe...</Text>
      </Flex>
    </ButtonMotion>
  );
};
