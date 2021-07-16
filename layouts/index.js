import { ReactNode, React } from 'react';
import {
  Box,
  Head,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import Favicon from "../assets/favicon.ico";
import Navbar from './navbar';
import Footer from './footer';
import ComingSoon from './ComingSoon';

export default function withAction() {
  return (
    <>
      <Navbar />
        <ComingSoon />
      <Footer />
    </>
  );
}
