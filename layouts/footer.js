import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Image,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import Logo from "../assets/dark.svg";

const SocialButton = ({
  children,
  label,
  href,
}, {
  children: ReactNode,
  label: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }, { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.200', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Image width="200px" src={Logo} alt="HomieBot" />
            </Box>
            <Text fontSize={'sm'}>
              © 2021 Bonhomie Solutions. All rights reserved.
            </Text>
            <Stack direction={'row'} spacing={6} >
              <SocialButton label={'GitHub'} href={'https://github.com/Bonhomie-Solutions-Ltd'}>
                <FaGithub 
                title="Subscribe to HomieBot"/>
              </SocialButton>
              <SocialButton label={'Twitter'} href={'https://twitter.com/homiebot_uk'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'https://instagram.com/homiebot.uk'}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'#'}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={'Discord'} href={'https://discord.gg/N3heFy5nu2'}>
                <FaDiscord />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>What is HomieBot?</Link>
            <Link href={'#'}>Products</Link>
            <Link href={'#'}>Meet the Team</Link>
            <Link href={'#'}>Testimonials</Link>
            <Link href={'#'}>Newsletter</Link>
            <Link href={'#'}>Donate to HomieBot</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Privacy</Link>
            <Link href={'#'}>Helpdesk</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Licensing</Link>
            <Link href={'#'}>Code of Conduct</Link>
            <Link href={'#'}>Warrant Canary</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('gray.800', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                colorScheme={'purple'}
                title="Subscribe to HomieBot"
                color={useColorModeValue('white', 'gray.800')}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
            <Link color={'gray.500'} href={'https://www.ftc.gov/tips-advice/business-center/guidance/can-spam-act-compliance-guide-business'}>
              <i>Emails are CAN-SPAM Act compliant.</i>
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
