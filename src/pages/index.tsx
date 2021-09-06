import React from 'react'
import { Link } from 'gatsby'

import {
  Box,
  Container,
  Center,
  SimpleGrid
} from "@chakra-ui/react"

import Layout from '../components/layout'
import Logo from '../components/logo'
import Seo from '../components/seo'
import WithSubnavigation from '../components/withSubnavigation'
import CallToActionWithIllustration from '../components/callToActionWithIllustration'
import LargeWithNewsletter from '../components/largeWithNewsletter'
import SocialProfileWithImageHisasann from '../components/socialProfileWithImageHisasann'
import SocialProfileWithImageMonishim from '../components/socialProfileWithImageMonishim'
import { LOGO_MAX_WIDTH, LANG } from '../constants/'

// OGP 画像
// @ts-ignore
import ogImage from '../images/logo/logo-default.png'

const IndexPage = () => (
  <Layout>
    <Seo title="" image={ogImage} lang={LANG} />
    {/*
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    */}


    <WithSubnavigation />
    <Center>
      <CallToActionWithIllustration />
    </Center>
    <SimpleGrid columns={2} spacing={0}>
      <Box><SocialProfileWithImageHisasann /></Box>
      <Box><SocialProfileWithImageMonishim /></Box>
    </SimpleGrid>
    <Center>
      <LargeWithNewsletter />
    </Center>
    {/*
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    */}
  </Layout>
)

export default IndexPage
