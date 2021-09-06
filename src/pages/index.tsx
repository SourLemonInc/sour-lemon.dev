import React from 'react';

import {
  Box,
  chakra,
  Center,
  SimpleGrid,
} from '@chakra-ui/react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import WithSubnavigation from '../components/withSubnavigation';
import CallToActionWithIllustration from '../components/callToActionWithIllustration';
import LargeWithNewsletter from '../components/largeWithNewsletter';
import SocialProfileWithImageHisasann from '../components/socialProfileWithImageHisasann';
import SocialProfileWithImageMonishim from '../components/socialProfileWithImageMonishim';
import CompanyInfo from '../components/companyInfo';

import { LANG } from '../constants/';

// OGP 画像
// @ts-ignore
import ogImage from '../images/logo/logo-default.png';

const IndexPage = () => (
  <Layout>
    <Seo title="" image={ogImage} lang={LANG} />

    {/* <WithSubnavigation /> */}

    <Center>
      <CallToActionWithIllustration />
    </Center>

    <chakra.h1
      textAlign={'center'}
      fontSize={'5xl'}
      py={10}
      fontWeight={'bold'}
    >
      MEMBER
    </chakra.h1>

    <SimpleGrid
      columns={2}
      spacing={0}
      style={{ marginTop: '30px', marginBottom: '30px' }}
    >
      <Box>
        <SocialProfileWithImageHisasann />
      </Box>
      <Box>
        <SocialProfileWithImageMonishim />
      </Box>
    </SimpleGrid>

    <Center>
      <CompanyInfo />
    </Center>

    <Center>
      <LargeWithNewsletter />
    </Center>
  </Layout>
);

export default IndexPage;
