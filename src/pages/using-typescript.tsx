// If you don't want to use TypeScript you can delete this file!
import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <Seo title="Using TypeScript" />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
