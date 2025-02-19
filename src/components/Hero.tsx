import { Button, Container, Heading, Stack, Text, Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import { BiBook } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { ReactComponent as PaastechLogo } from '@assets/images/logo.svg';
import '@assets/fonts/font-orbit.css';

export const Hero = () => {
  return (
    <Container maxW={'8xl'} paddingInline={'0'} css={containerCss}>
      <div css={leftColumnCss}>
        <Heading fontSize={{ base: '3xl', sm: '4xl', lg: '6rem' }}>
          <Text
            as={'span'}
            position={'relative'}
            _after={{
              content: "''",
              width: 'full',
              height: '25%',
              position: 'absolute',
              bottom: 1,
              left: 0,
              bg: 'brand.red',
              zIndex: -1,
            }}
            fontWeight={'black'}
            color={'white'}
            px={2}
          >
            PaaSTech
          </Text>
        </Heading>

        <Text as={'span'} fontFamily={'Orbit'} fontSize={30}>
          Code, Eat, Deploy, Sleep
        </Text>

        <Text fontSize={18} maxWidth={'430px'}>
          PaasTech is the simplest PaaS you could ever dream of 💫
        </Text>

        <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <Button rounded={'lg'} size={'lg'} px={6} fontWeight={'normal'} color={'white'} bg={'brand.red'} _hover={{ bg: 'red.500' }} shadow={'md'}>
            Getting Started
          </Button>
          <Button
            as={RouterLink}
            to={'https://paastech-cloud.github.io/docs'}
            rounded={'lg'}
            size={'lg'}
            px={6}
            fontWeight={'normal'}
            color={'brand.red'}
            bg={'white'}
            leftIcon={<BiBook />}
            shadow={'md'}
          >
            Documentation
          </Button>
        </Stack>
      </div>

      <Box css={rightColumnCss}>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <PaastechLogo />
        </motion.div>
      </Box>
    </Container>
  );
};
const containerCss = css`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  justify-content: space-between;
  width: 100%;
`;

const spacingY = css`
  transform: translateY(150px); /* Increased translateY value */
`;

const leftColumnCss = css`
  ${spacingY};
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 30px;
`;

const rightColumnCss = css`
  ${spacingY};
  height: auto;
  width: 400px;
  filter: drop-shadow(0px 6px 7px rgba(50, 50, 93, 0.3));
`;
