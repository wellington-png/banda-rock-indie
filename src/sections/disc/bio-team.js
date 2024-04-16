import { m } from 'framer-motion';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';
import Carousel, { useCarousel, CarouselArrows } from 'src/components/carousel';

// ----------------------------------------------------------------------

export default function DiscList() {
  const carousel = useCarousel({
    infinite: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  });

  return (
    <Container component={MotionViewport} sx={{ textAlign: 'center', py: { xs: 10, md: 15 } }}>
      <m.div variants={varFade().inDown}>
        <Typography variant="overline" sx={{ color: 'text.disabled' }}>
          Discografia
        </Typography>
      </m.div>

      <m.div variants={varFade().inUp}>
        <Typography variant="h2" sx={{ my: 3 }}>
          Discografia Arctic Monkeys
        </Typography>
      </m.div>

      <Box sx={{ position: 'relative' }}>
        <CarouselArrows
          filled
          shape="rounded"
          onNext={carousel.onNext}
          onPrev={carousel.onPrev}
          leftButtonProps={{
            sx: {
              left: 24,
              ...(carousel.carouselItems && carousel.carouselItems.length < 5 && { display: 'none' }),
            },
          }}
          rightButtonProps={{
            sx: {
              right: 24,
              ...(carousel.carouselItems && carousel.carouselItems.length < 5 && { display: 'none' }),
            },
          }}
        >
          <Carousel ref={carousel.carouselRef} {...carousel.carouselSettings}>
            {arcticMonkeysDiscography.map((album) => (
              <Box
                key={album.id}
                component={m.div}
                variants={varFade().in}
                sx={{
                  px: 1.5,
                  py: { xs: 8, md: 10 },
                }}
              >
                <AlbumCard album={album} />
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </Container>
  );
}

// ----------------------------------------------------------------------

function AlbumCard({ album }) {
  const { title, releaseYear, coverUrl } = album;
  return (
    <Card>
      <Typography variant="subtitle1" sx={{ mt: 2.5, mb: 0.5 }}>
        {title}
      </Typography>

      <Typography variant="body2" sx={{ mb: 2.5, color: 'text.secondary' }}>
        Lançamento: {releaseYear}
      </Typography>

      <Box sx={{ px: 1 }}>
        <Image alt={title} src={coverUrl} ratio="1/1" sx={{ borderRadius: 2 }} />
      </Box>
    </Card>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.object,
};

const arcticMonkeysDiscography = [
  {
    id: 1,
    title: 'Whatever People Say I Am, That\'s What I\'m Not',
    releaseYear: '2006',
    coverUrl: '/assets/images/arctic-monkeys/album1.jpg',
  },
  {
    id: 2,
    title: 'Favourite Worst Nightmare',
    releaseYear: '2007',
    coverUrl: '/assets/images/arctic-monkeys/album2.jpg',
  },
  {
    id: 3,
    title: 'Humbug',
    releaseYear: '2009',
    coverUrl: '/assets/images/arctic-monkeys/album3.jpg',
  },
  {
    id: 4,
    title: 'Suck It and See',
    releaseYear: '2011',
    coverUrl: '/assets/images/arctic-monkeys/album4.jpg',
  },
];
