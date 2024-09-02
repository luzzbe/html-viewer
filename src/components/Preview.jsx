import PropTypes from "prop-types";

export default function Preview({ content }) {
  const openLinksInNewTab = (e) => {
    const iframe = e.target;
    const iframeDocument = iframe.contentWindow.document;
    const links = iframeDocument.querySelectorAll("a");
    links.forEach((link) => link.setAttribute("target", "_blank"));
  };

  return (
    <iframe
      title="preview"
      srcDoc={content}
      className="bg-white w-full h-full border-0"
      sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
      onLoad={openLinksInNewTab}
    />
  );
}

Preview.propTypes = {
  content: PropTypes.string.isRequired,
};
