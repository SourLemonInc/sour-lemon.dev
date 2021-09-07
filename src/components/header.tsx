import React from 'react';
import PropTypes from 'prop-types';

import { Center, Flex, Image } from '@chakra-ui/react';

import { Link } from 'gatsby';

// @ts-ignore
import logoImage from '../images/logo/icon-256x256.png';

const Logo = () => {
  return <Image src={logoImage} boxSize="40px" objectFit="cover" />;
};

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    style={{
      // background: '#E0EC55',
      borderBottom: '1px solid #E0EC55',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.0rem 1.0rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#639AD9',
            textDecoration: 'none',
          }}
        >
          <Flex>
            <Center w="40px">
              <Logo />
            </Center>
            <Center w="160px">
              {siteTitle}
            </Center>
          </Flex>
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
