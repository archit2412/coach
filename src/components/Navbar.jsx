import {
  Box,
  Flex,
  IconButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Link,
  Image,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Experts", href: "#experts" },
  { name: "Services", href: "#services" },
  { name: "Videos", href: "#videos" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact Us", href: "#contact" },
];

const textColor = "#0F172A";
const bgColor = "#F5F5DC";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box bg={bgColor} w="100vw" boxShadow="md" zIndex={10}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        px={{ base: 4, md: "48px" }}
        py={{ base: 2, md: 2 }}
        minH={{ base: "56px", md: "64px" }}
        position="relative"
      >
        {/* Logo (left) */}
        <Box
          w={{ base: "140px", md: "180px" }}
          h={{ base: "40px", md: "56px" }}
          display="flex"
          alignItems="center"
          flexShrink={0}
        >
          <Image
            src={logo}
            alt="Coach for Mind Logo"
            w="100%"
            h="100%"
            objectFit="contain"
            draggable={false}
          />
        </Box>

        {/* Centered nav links */}
        <Box
          position="absolute"
          left="50%"
          top="0"
          transform="translateX(-50%)"
          h="100%"
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          justifyContent="center"
          zIndex={1}
        >
          <HStack spacing={{ base: "12px", md: "24px", lg: "32px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                px="10px"
                py="6px"
                rounded="md"
                color={textColor}
                fontWeight={500}
                fontSize="md"
                _hover={{ bg: "#e2e2c4" }}
                transition="all 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>
        </Box>

        {/* Call Now button (right) and Hamburger */}
        <Flex align="center" flexShrink={0}>
          <Button
            as="a"
            href="tel:1234567890"
            borderRadius={8}
            border="2px solid #0F172A"
            color={textColor}
            bg="transparent"
            fontWeight="bold"
            px="20px"
            py="8px"
            fontSize="md"
            _hover={{ bg: "#e2e2c4" }}
            display={{ base: "none", md: "inline-flex" }}
            ml={2}
          >
            Call Now
          </Button>
          {/* Hamburger for mobile */}
          <IconButton
            ref={btnRef}
            size="lg"
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onOpen}
            color={textColor}
            bg="transparent"
            ml={2}
          />
        </Flex>
      </Flex>

      {/* Drawer for mobile navigation */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton color={textColor} />
          <DrawerBody px={6} pt={16}>
            <Stack as="nav" spacing={6}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  px={3}
                  py={2}
                  rounded="md"
                  color={textColor}
                  fontWeight={500}
                  fontSize="lg"
                  _hover={{ bg: "#e2e2c4" }}
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                as="a"
                href="tel:1234567890"
                borderRadius={8}
                border="2px solid #0F172A"
                color={textColor}
                bg="transparent"
                fontWeight="bold"
                w="full"
                fontSize="lg"
                py="12px"
                _hover={{ bg: "#e2e2c4" }}
                onClick={onClose}
              >
                Call Now
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}