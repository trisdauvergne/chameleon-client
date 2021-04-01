import ReactDom from 'react-dom';
import './Modal.css'

const Modal = ({ children, open, onClose }) => {
  if (!open) {
    return null;
  }

  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">{children}<button onClick={onClose}>Close Modal</button></div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
