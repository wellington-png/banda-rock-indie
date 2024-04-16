'use client';

import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

import { _tours } from 'src/_mock';

import { useSettingsContext } from 'src/components/settings';

import TourDetailsContent from '../tour-details-content';

// ----------------------------------------------------------------------

export default function TourDetailsView({ id }) {
  const settings = useSettingsContext();

  const currentTour = _tours.filter((tour) => tour.id === id)[0];

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <TourDetailsContent tour={currentTour} />
    </Container>
  );
}

TourDetailsView.propTypes = {
  id: PropTypes.string,
};
