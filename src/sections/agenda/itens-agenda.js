import { m } from 'framer-motion';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

// Dados fictícios dos próximos shows e eventos da banda Arctic Monkeys
const UPCOMING_EVENTS = [
  {
    date: '25 de Abril de 2024',
    venue: 'Wembley Stadium, Londres',
    time: '20:00',
  },
  {
    date: '29 de Abril de 2024',
    venue: 'Madison Square Garden, Nova York',
    time: '19:30',
  },
  // Adicione mais eventos conforme necessário
];

// ----------------------------------------------------------------------

export default function HomeAgenda() {
  const renderEvents = (
    <Stack spacing={3}>
      {UPCOMING_EVENTS.map((event, index) => (
        <m.div key={index} variants={varFade().inUp}>
          <Box
            sx={{
              bgcolor: 'background.default',
              p: 3,
              borderRadius: 2,
              boxShadow: (theme) => `-40px 40px 80px ${alpha(theme.palette.common.black, 0.24)}`,
            }}
          >
            <Typography variant="subtitle1">{event.date}</Typography>
            <Typography variant="body1" color="text.secondary">
              {event.venue}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.time}
            </Typography>
          </Box>
        </m.div>
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: 'grey.900',
        pt: { xs: 10, md: 15 },
        pb: { xs: 10, md: 20 },
      }}
    >
      <Container component={MotionViewport}>
        <Stack alignItems="center" spacing={3}>
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'primary.main' }}>
              Próximos Eventos
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ color: 'common.white' }}>
              Agenda da Arctic Monkeys
            </Typography>
          </m.div>

          <m.div variants={varFade().inUp}>{renderEvents}</m.div>
        </Stack>
      </Container>
    </Box>
  );
}
