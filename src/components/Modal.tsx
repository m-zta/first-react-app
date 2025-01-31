import { useEffect, useRef } from "react";
import { Modal as BootstrapModal } from "bootstrap"; // ✅ Import Bootstrap JS correctly

export default function Modal() {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      const modal = new BootstrapModal(modalRef.current!); // ✅ Fix: Use BootstrapModal instead of bootstrap.Modal
      modal.show();
    }
  }, []);

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Bootstrap Modal in TypeScript
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">Hello from a Bootstrap modal!</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
