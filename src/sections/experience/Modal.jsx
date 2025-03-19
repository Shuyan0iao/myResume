function Modal({ isOpen, onClose, experience }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition">
        <div className="bg-white dark:bg-zinc-900 max-w-xl w-full mx-4 p-6 rounded-lg shadow-lg relative animate-fadeInUp">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
          >
            <i className="bx bxs-message-square-x text-2xl"></i>
          </button>
          <h3 className="text-2xl font-bold mb-1">{experience.company}</h3>
          <h4 className="text-lg font-semibold text-orange-500 mb-4">{experience.title}</h4>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {experience.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default Modal;