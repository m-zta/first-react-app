import { useEffect, useRef } from "react";
import { Modal as BootstrapModal } from "bootstrap";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalInstance = useRef<BootstrapModal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new BootstrapModal(modalRef.current, {
        backdrop: true, // Allow closing by clicking outside
        keyboard: true, // Allow closing via ESC
      });

      modalRef.current.addEventListener("hidden.bs.modal", onClose);
    }

    return () => {
      modalInstance.current?.dispose();
      modalRef.current?.removeEventListener("hidden.bs.modal", onClose);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      modalInstance.current?.show();
    } else {
      modalInstance.current?.hide();
    }
  }, [isOpen]);

  return (
    <div ref={modalRef} className="modal fade" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Bootstrap Modal</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">Hello from the modal!</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
