import { ReactNode, React } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Image,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  createIcon,
  Head,
  Container,
  Heading,
  Text,
  Icon,
  Stack,
} from '@chakra-ui/react';

export default function ComingSoon() {
  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Exterminate <br />
            <Text as={'span'} color={'purple'}>
              the homeless
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Work in progress. Come back later or get notified when we're ready by subscribing to our newsletter.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Input
              placeholder={'Your email address'}
              bg={useColorModeValue('gray.200', 'whiteAlpha.100')}
              color={'black'}
              border={0}
              _focus={{
                bg: 'gray.300',
              }}
            />
            <Button
              colorScheme={'purple'}
              rounded={'full'}
              px={6}>
              Subscribe to HomieBot for updates
            </Button>
            <Text color={'gray.500'}>
              <i>You can opt out anytime by clicking 'Unsubscribe' in our emails.</i>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
