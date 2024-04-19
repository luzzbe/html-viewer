import PropTypes from "prop-types";

export default function Preview({ value }) {
  return <iframe srcDoc={value} sandbox />;
}

Preview.propTypes = {
  value: PropTypes.string.isRequired,
};
