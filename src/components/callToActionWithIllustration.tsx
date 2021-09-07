import React from 'react';
import {
  Flex,
  Container,
  Center,
  chakra,
  Heading,
  Link,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

import { MAIN_YELLOW_COLOR, MAIN_BLUE_COLOR, MAIN_GREEN_COLOR } from '../constants/';

// ロゴ
import Logo from '../components/logo';

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

        <chakra.h1
          textAlign={'center'}
          fontSize={'5xl'}
          py={10}
          fontWeight={'bold'}
        >
          MISSION
        </chakra.h1>

        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl' }}
          lineHeight={'110%'}
        >
          たすけあい、{' '}
          <Text as={'span'} color={MAIN_BLUE_COLOR}>
            誰もがたのしく、
          </Text>
          <Text as={'span'} color={MAIN_GREEN_COLOR}>
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
            color={'white'}
            bg={'#171516'}
            _hover={{
              bg: `${MAIN_YELLOW_COLOR}`,
              color: `black`
            }}
          >
            <Link href="https://github.com/SourLemonInc" isExternal>
              Github
            </Link>
          </Button>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'yellow'}
            color={'white'}
            bg={'#171516'}
            _hover={{
              bg: `${MAIN_YELLOW_COLOR}`,
              color: `black`
            }}
          >
            <Link href="https://github.com/SourLemonInc" isExternal>
              会社について
            </Link>
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export const Illustration = (props: IconProps) => {
  return <Logo />;
};
