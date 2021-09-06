import React from 'react';

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

// @ts-ignore
import socialImage from '../images/social/hisasann/hisasann.jpg';

export default function SocialProfileSimple() {
  return (
    <Center py={6}>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={socialImage}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />

        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Yoshiyuki Hisamatsu
        </Heading>

        <Text fontWeight={600} color={'gray.500'} mb={4}>
          @hisasann
        </Text>

        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          Sour & Lemon, Inc. CTO
          <br />
          EM at @CureApp_Inc.
          <br />
          ex- @teamlab_news.
          <br />
        </Text>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
          >
            <Link href="https://www.instagram.com/hisasann/" isExternal>
              Instagram
            </Link>
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
          >
            <Link href="https://twitter.com/hisasann" isExternal>
              Twitter
            </Link>
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
