import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

import Image from 'src/components/image';
import { varFade, MotionViewport } from 'src/components/animate';

// Dados fictícios sobre a biografia da banda Arctic Monkeys
const ARCTIC_MONKEYS_BIOGRAPHY = {
  description:
    'Arctic Monkeys é uma banda de rock britânica formada em Sheffield em 2002. A banda é composta por Alex Turner (vocal principal, guitarra), Jamie Cook (guitarra), Nick O’Malley (baixo) e Matt Helders (bateria).',
  imageUrl: 'https://wallpaperset.com/w/full/5/b/f/36530.jpg',
  skills: [
    { label: 'Lançamento do Primeiro Álbum', value: 2006 },
    { label: 'Fama Internacional', value: 2006 },
    { label: 'Sucessos Contínuos', value: 2006 },
  ],
};

export default function BioWhat() {
  const theme = useTheme();

  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
        textAlign: { xs: 'center', md: 'unset' },
      }}
    >
      <Grid container columnSpacing={{ md: 3 }} alignItems="flex-start">
        <Grid xs={12} md={6} lg={7} alignItems="center">
          <m.div variants={varFade().inUp}>
            <Image
              alt="Arctic Monkeys Band"
              src={ARCTIC_MONKEYS_BIOGRAPHY.imageUrl}
              sx={{ borderRadius: 3, boxShadow: `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}` }}
            />
          </m.div>
        </Grid>

        <Grid xs={12} md={6} lg={5}>
          <m.div variants={varFade().inRight}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Sobre a Arctic Monkeys
            </Typography>
          </m.div>

          <m.div variants={varFade().inRight}>
            <Typography
              sx={{
                color: theme.palette.mode === 'light' ? 'text.secondary' : 'common.white',
              }}
            >
              {ARCTIC_MONKEYS_BIOGRAPHY.description}
            </Typography>
          </m.div>

          <Stack spacing={3} sx={{ my: 5 }}>
            {ARCTIC_MONKEYS_BIOGRAPHY.skills.map((progress, index) => (
              <Box component={m.div} key={progress.label} variants={varFade().inRight}>
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                  <Typography variant="subtitle2" sx={{ flexGrow: 1, textAlign: 'left' }}>
                    {progress.label}
                  </Typography>

                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {progress.value}
                  </Typography>
                </Stack>

                <LinearProgress
                  color={(index === 0 && 'primary') || (index === 1 && 'warning') || 'error'}
                  variant="determinate"
                  value={progress.value}
                />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
