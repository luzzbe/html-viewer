import PropTypes from "prop-types";

export default function Preview({ content }) {
  return (
    <iframe
      title="preview"
      srcDoc={content}
      className="bg-white w-full h-full border-0"
      sandbox=""
    />
  );
}

Preview.propTypes = {
  content: PropTypes.string.isRequired,
};
