import React from 'react';
import PropTypes from 'prop-types';

import {
  Center,
  Container,
  Flex,
  Image,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { Link } from 'gatsby';

import { MAIN_YELLOW_COLOR, MAIN_BLUE_COLOR } from '../constants/';

// @ts-ignore
import logoImage from '../images/logo/icon-256x256.png';

const Logo = () => {
  return <Image src={logoImage} boxSize="40px" objectFit="cover" />;
};

const Header = ({ siteTitle }: { siteTitle: string }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header
      style={
        {
          // borderBottom: `1px solid ${MAIN_YELLOW_COLOR}`,
        }
      }
    >
      <Container
        as={Flex}
        maxW={'7xl'}
        align={'center'}
        style={{ height: '50px' }}
      >
        <Flex>
          <Link
            to="/"
            style={{
              color: `${MAIN_BLUE_COLOR}`,
              textDecoration: 'none',
            }}
          >
            <Flex>
              <Center w="40px">
                <Logo />
              </Center>
              <Center w="160px">{siteTitle}</Center>
            </Flex>
          </Link>
        </Flex>

        <Flex
          justify={'flex-end'}
          spacing={{ base: 6, md: 8 }}
          flex={{ base: 1, md: 'auto' }}
        >
          <IconButton
            alignItems={'center'}
            size={'sm'}
            variant={'ghost'}
            aria-label={'Toggle Color Mode'}
            onClick={toggleColorMode}
            icon={
              colorMode == 'light' ? (
                <IoMoon size={18} />
              ) : (
                <IoSunny size={18} />
              )
            }
          />
        </Flex>
      </Container>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
