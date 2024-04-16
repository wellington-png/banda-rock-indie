import { useScroll } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import { useResponsive } from 'src/hooks/use-responsive';


// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  background: `url('https://wallpaperset.com/w/full/5/b/f/36530.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

// ----------------------------------------------------------------------

export default function HomeHero() {
  const mdUp = useResponsive('up', 'md');
  const theme = useTheme();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const [percent, setPercent] = useState(0);
  const lightMode = theme.palette.mode === 'light';


  const getScroll = useCallback(() => {
    let heroHeight = 0;

    if (heroRef.current) {
      heroHeight = heroRef.current.offsetHeight;
    }

    scrollY.on('change', (scrollHeight) => {
      const scrollPercent = (scrollHeight * 100) / heroHeight;

      setPercent(Math.floor(scrollPercent));
    });
  }, [scrollY]);

  useEffect(() => {
    getScroll();
  }, [getScroll]);


  const renderPresentation = (
    <Container maxWidth="lg">
      <Typography variant="h1" gutterBottom>
        Arctic Monkeys
      </Typography>
      <Typography variant="h4" gutterBottom>
        Explore o mundo do rock indie com Arctic Monkeys.
      </Typography>
    </Container>
  );

  return (
    <StyledRoot ref={heroRef}>
      {renderPresentation}
    </StyledRoot>
  );
}
