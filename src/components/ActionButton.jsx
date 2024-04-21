import PropTypes from "prop-types";

export default function ActionButton({ onClick, children, tooltip }) {
  return (
    <div className="tooltip tooltip-bottom" data-tip={tooltip}>
      <button
        onClick={onClick}
        className="btn btn-circle btn-outline btn-md btn-primary"
      >
        {children}
      </button>
    </div>
  );
}

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
};
