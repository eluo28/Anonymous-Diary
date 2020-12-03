import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/core";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import React, { useEffect } from "react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { isServer } from "../utils/isServer";

type DiaryProps = {
  showDiary: (show: string) => void;
  diaryShow: string;
};

export const Navbar: React.FC<DiaryProps> = ({ showDiary, diaryShow }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [{ data }] = useMeQuery({
    pause: isServer(),
  });
  const [, logout] = useLogoutMutation();

  useEffect(() => {
    localStorage.setItem("diaryShow", diaryShow);
  }, [diaryShow]);

  const bg = useColorModeValue("gray.700", "gray.800");
  const bgD = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      position="absolute"
      width="100%"
      top="0"
      wrap="wrap"
      height="75px"
      bg={bg}
      px="5"
      color="white"
    >
      <Box fontSize="xl">Anonymous Diary</Box>

      {data?.me ? (
        <Text mr="auto" fontSize="xl">
          &nbsp;| {data.me?.username}
        </Text>
      ) : null}

      {diaryShow === "true" ? (
        <Box mr={4} fontSize="xl">
          Explore
        </Box>
      ) : (
        <Box mr={4} fontSize="xl">
          My Diary
        </Box>
      )}

      <IconButton
        aria-label="hamburger"
        onClick={onOpen}
        icon={<HamburgerIcon />}
        bg="transparent"
      />

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody
              alignItems="center"
              display="flex"
              justifyContent="center"
              fontSize="2xl"
              textAlign="center"
              backgroundColor={bgD}
            >
              {!data?.me ? (
                <Box>
                  <IconButton
                    colorScheme="black"
                    mb="8"
                    _focus={{ outline: "none" }}
                    aria-label="Dark Mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  />

                  <Box mb="8">
                    <NextLink href="/login">
                      <Link>Login</Link>
                    </NextLink>
                  </Box>

                  <Box mb="8">
                    <NextLink href="/register">
                      <Link>Register</Link>
                    </NextLink>
                  </Box>
                  <IconButton
                    mb="8"
                    aria-label="close"
                    onClick={onClose}
                    icon={<CloseIcon />}
                    bg="transparent"
                  />

                  <Box bottom="10" position="absolute" width="full" left="0">
                    <Text fontSize="md">me@edwinluo.com</Text>
                  </Box>
                </Box>
              ) : (
                <Box>
                  <IconButton
                    colorScheme="black"
                    mb="8"
                    _focus={{ outline: "none" }}
                    aria-label="Dark Mode"
                    variant="ghost"
                    onClick={toggleColorMode}
                    icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  />

                  {diaryShow === "true" ? (
                    <Box mb="8">
                      <Link
                        onClick={() => {
                          showDiary("false");
                          onClose();
                        }}
                      >
                        My Diary
                      </Link>
                    </Box>
                  ) : (
                    <Box mb="8">
                      <Link
                        onClick={() => {
                          showDiary("true");
                          onClose();
                        }}
                      >
                        Explore
                      </Link>
                    </Box>
                  )}

                  <Box mb="8">
                    <Link
                      onClick={() => {
                        logout();
                        onClose();
                      }}
                    >
                      Logout
                    </Link>
                  </Box>
                  <IconButton
                    aria-label="close"
                    onClick={onClose}
                    icon={<CloseIcon />}
                    bg="transparent"
                  />

                  <Box bottom="10" position="absolute" width="full" left="0">
                    <Text fontSize="md">me@edwinluo.com</Text>
                  </Box>
                </Box>
              )}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
};
