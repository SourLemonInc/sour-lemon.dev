import React from 'react'
import {
  Flex,
  Container,
  Center,
  Heading,
  Link,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

// ロゴ
import Logo from '../components/logo'

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 2, md: 2 }}
      >
        <Center w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Center>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
          lineHeight={'110%'}>
          たすけあい、誰もがたのしく、{' '}
          <Text as={'span'} color={'#85CE85'}>
            誰もが豊かに
          </Text>
        </Heading>
        <Text color={'gray.500'} fontSize={'3xl'}>
          Take each other's hands in joy.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'yellow'}
            bg={'#E0EC55'}
            _hover={{ bg: 'yellow.400' }}>
            <Link href="https://github.com/SourLemonInc" isExternal>Github</Link>
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export const Illustration = (props: IconProps) => {
  return (
    <Logo />
  );
};
