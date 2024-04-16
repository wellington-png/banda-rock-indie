'use client';

import { useScroll } from 'framer-motion';

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import MainLayout from 'src/layouts/main';

import ScrollProgress from 'src/components/scroll-progress';

import HomeHero from '../home-hero';

// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

const tour = {
  name: "Arctic Monkeys Tour",
  images: [
    "https://via.placeholder.com/500x500?text=Arctic+Monkeys+1",
    "https://via.placeholder.com/500x500?text=Arctic+Monkeys+2",
    "https://via.placeholder.com/500x500?text=Arctic+Monkeys+3",
    "https://via.placeholder.com/500x500?text=Arctic+Monkeys+4",
    "https://via.placeholder.com/500x500?text=Arctic+Monkeys+5"
  ]
};


// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <MainLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <HomeHero />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        {/* <HomeBio />
        <HomeDisc />
        <HomeGaleria tour={tour} />
        <HomeAgenda /> */}
      </Box>
    </MainLayout>
  );
}
