import PropTypes from "prop-types";

export default function Preview({ value }) {
  return (
    <iframe
      srcDoc={value}
      className="bg-white w-full h-full border-0"
      sandbox=""
    />
  );
}

Preview.propTypes = {
  value: PropTypes.string.isRequired,
};
