import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const GALLERY_IMAGES = [
  'https://rollingstone.uol.com.br/media/uploads/21am5.jpg',
  'https://rollingstone.uol.com.br/media/uploads/21am5.jpg',
  'https://rollingstone.uol.com.br/media/uploads/21am5.jpg',
  'https://rollingstone.uol.com.br/media/uploads/21am5.jpg',
  'https://rollingstone.uol.com.br/media/uploads/21am5.jpg',
];

// ----------------------------------------------------------------------

export default function HomeGallery() {
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
            Galeria
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Momentos da Arctic Monkeys
          </Typography>
        </m.div>
      </Box>

      <Stack
        gap={{ xs: 3, lg: 10 }}
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
      >
        {GALLERY_IMAGES.map((image, index) => (
          <m.div variants={varFade().inUp} key={index}>
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: { md: 'none' },
                bgcolor: 'background.default',
                p: (theme) => theme.spacing(2),
              }}
            >
              <img src={image} alt={`${index + 1}`} style={{ width: '100%', height: 'auto' }} />
            </Card>
          </m.div>
        ))}
      </Stack>
    </Container>
  );
}
