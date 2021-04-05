import ReactDom from 'react-dom';
import './Modal.css'

const Modal = ({ children, open, onClose }) => {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={onClose} className="btn-close"><span className="material-icons-round close-icon">close</span></button>
        {children}
        {/* <button className="semibold btn-close-modal" onClick={onClose}>Close</button> */}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
