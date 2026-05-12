import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import "./styles/ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "auto";
      gsap.to(modalRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 50,
        duration: 0.3,
        ease: "power3.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });
    }
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume.pdf";
    link.download = "Soumyadip_Singha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" ref={overlayRef} onClick={onClose}>
      <div
        className="resume-modal-container"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <h2>My Resume</h2>
          <div className="resume-modal-actions">
            <button className="download-btn" onClick={handleDownload} title="Download CV">
              <FaDownload /> Download CV
            </button>
            <button className="close-btn" onClick={onClose} title="Close">
              <IoClose />
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe
            src="/Resume.pdf#toolbar=0"
            width="100%"
            height="100%"
            title="Resume Preview"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
