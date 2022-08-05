import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { truncateAddress } from "../helpers/truncateAddress";
import { useWallet } from "../hooks/useWallet";
import { useUserData } from "../stores/useUserData";

interface NavigationBarProps {}

export const NavigationBar: React.FC<NavigationBarProps> = () => {
  const [isConnecting, connectWallet, disconnectWallet] = useWallet();
  const userAddress = useUserData((state) => state.address);

  return (
    <Box w="100%">
      <Flex mx={"auto"} w="60%" py={6} alignItems="">
        <Box>
          <Heading>
            <NavLink to={"/"}>
              <Text>Logo</Text>
            </NavLink>
          </Heading>
        </Box>
        <Spacer />
        <HStack spacing="64px">
          <Button variant="link" textColor="gray.600">
            <NavLink to={"/about"}>About</NavLink>
          </Button>
          <Button variant="link" textColor="gray.600">
            <NavLink to={"/dashboard"}>
              <Text color={"blue.400"}>Dashboard</Text>
            </NavLink>
          </Button>

          {useUserData.getState().isLogged ? (
            <Button variant={"outline"} bg={"white"} h={12}>
              <HStack>
                <Text>{truncateAddress(userAddress, 20)}</Text>
                <CloseButton onClick={disconnectWallet} size="sm" />
              </HStack>
            </Button>
          ) : (
            <Button
              w={150}
              h={12}
              isLoading={isConnecting}
              onClick={connectWallet}
              bg={"white"}
              borderRadius={"xl"}
            >
              Connect
            </Button>
          )}
        </HStack>
      </Flex>
    </Box>
  );
};
