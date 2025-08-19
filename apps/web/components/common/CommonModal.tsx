import React, { useEffect, useRef } from 'react'

const CommonModal = ({ modalContent, closeModal }: { modalContent: React.ReactNode, closeModal: () => void, }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-950/50 bg-opacity-50 flex items-center justify-center z-50">
      <div ref={modalRef}>
        {modalContent}
      </div>
    </div>
  )
}

export default CommonModal