import PropTypes from 'prop-types';


// ----------------------------------------------------------------------

export default function ProductDetailsDescription({ description }) {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

ProductDetailsDescription.propTypes = {
  description: PropTypes.string,
};
