import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const BIOGRAPHY_CONTENT = `
Arctic Monkeys é uma banda de rock britânica formada em Sheffield, em 2002. O grupo é composto por Alex Turner (vocais, guitarra), Jamie Cook (guitarra), Nick O'Malley (baixo, backing vocals) e Matt Helders (bateria, backing vocals).

A banda ganhou destaque com o lançamento de seu álbum de estreia, "Whatever People Say I Am, That's What I'm Not", em 2006, que se tornou o álbum de estreia mais vendido na história da música britânica. Desde então, eles continuaram a lançar álbuns aclamados pela crítica e a explorar novos sons e estilos musicais.

Com influências que vão desde o rock alternativo e o post-punk até o garage rock e o indie rock, Arctic Monkeys se destacam por suas letras inteligentes, melodias cativantes e performances energéticas ao vivo. Eles são considerados uma das bandas mais influentes e inovadoras do século XXI.

Esteja você descobrindo Arctic Monkeys pela primeira vez ou sendo um fã de longa data, explore nosso site para aprender mais sobre a história da banda, discografia, shows e muito mais.
`;

// ----------------------------------------------------------------------

export default function BioBiography() {
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
            Biografia
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="h2">
            Arctic Monkeys
          </Typography>
        </m.div>
      </Box>

      <Box>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {BIOGRAPHY_CONTENT}
        </Typography>
      </Box>
    </Container>
  );
}
