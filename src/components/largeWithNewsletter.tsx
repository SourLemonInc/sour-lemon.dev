import React from 'react';

import {
  Box,
  chakra,
  Container,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';

import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

import { css } from '@emotion/react';

// @ts-ignore
import logoImage from '../images/logo/icon-256x256.png';

const Logo = (props: any) => {
  return <Image src={logoImage} boxSize="40px" objectFit="cover" />;
};

const largeWithNewsletterWrapperStyle = css`
  margin-top: 50px;
`;

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
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
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  return (
    <Box
      color={useColorModeValue('gray.700', 'gray.200')}
      css={largeWithNewsletterWrapperStyle}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <Text fontSize={'sm'}>
              © Sour & Lemon Inc. {new Date().getFullYear()} All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton
                label={'Twitter'}
                href={'https://twitter.com/sourlemoninc'}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={'YouTube'}
                href={
                  'https://www.youtube.com/channel/UCcB8jQpBT_r9T1XUkc9WgrA'
                }
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={'Instagram'}
                href={'https://www.instagram.com/sour.lemon.inc/'}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'https://forms.gle/exFMWFtdb9msd84f7'} isExternal>
              Contact us
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'https://forms.gle/W8tosBmVMdHm3SoM9'}>お便り</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'https://github.com/SourLemonInc'} isExternal>
              Github
            </Link>
            <Link href={'https://twitter.com/sourlemoninc'} isExternal>
              Twitter
            </Link>
            <Link
              href={
                'https://www.facebook.com/SourLemonInc/?ref=pages_you_manage'
              }
              isExternal
            >
              Facebook
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
