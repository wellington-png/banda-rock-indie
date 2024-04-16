import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

// Dados fictícios dos álbuns da banda Arctic Monkeys
const ALBUMS = [
  {
    title: 'Whatever People Say I Am, That\'s What I\'m Not',
    year: '2006',
    cover: 'https://rollingstone.uol.com.br/media/uploads/21whateverpeoplesayiam1.jpg',
  },
  {
    title: 'Favourite Worst Nightmare',
    year: '2007',
    cover: 'https://rollingstone.uol.com.br/media/uploads/21favouriteworstnightmare2.jpg',
  },
  {
    title: 'Humbug',
    year: '2009',
    cover: 'https://rollingstone.uol.com.br/media/uploads/21humbug3.jpg',
  },
  {
    title: 'Suck It and See',
    year: '2011',
    cover: 'https://rollingstone.uol.com.br/media/uploads/21suckitandsee4.jpg',
  },
  {
    title: 'AM',
    year: '2013',
    cover: 'https://rollingstone.uol.com.br/media/uploads/21am5.jpg',
  },
  {
    title: 'Tranquility Base Hotel & Casino',
    year: '2018',
    cover: 'https://rollingstone.uol.com.br/media/uploads/21tranquilitybasehotelcasino6.jpg',
  },
];

// ----------------------------------------------------------------------

export default function HomeDiscography() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 5, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
            Discografia
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Álbuns da Arctic Monkeys
          </Typography>
        </m.div>
      </Box>

      <Box
        gap={{ xs: 3, lg: 10 }}
        display="grid"
        alignItems="center"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {ALBUMS.map((album, index) => (
          <m.div variants={varFade().inUp} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(2),
              }}
            >
              <img src={album.cover} alt={album.title} style={{ width: '100%', height: 'auto' }} />
              <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>
                {album.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {album.year}
              </Typography>
            </Card>
          </m.div>
        ))}
      </Box>
    </Container>
  );
}
