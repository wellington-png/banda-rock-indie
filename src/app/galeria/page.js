import PropTypes from 'prop-types';

import { _tours } from 'src/_mock/_tour';

import { TourDetailsView } from 'src/sections/galeria/view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Dashboard: Tour Details',
};

export default function TourDetailsPage({ params }) {
  const id = 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1'

  return <TourDetailsView id={id} />;
}

export async function generateStaticParams() {
  return _tours.map((tour) => ({
    id: tour.id,
  }));
}

TourDetailsPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string,
  }),
};
