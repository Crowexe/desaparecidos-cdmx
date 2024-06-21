import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={imageUrl} alt={imageAlt} className="modal-image" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default Modal;
