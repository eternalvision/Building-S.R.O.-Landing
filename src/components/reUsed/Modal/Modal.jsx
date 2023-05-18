export const Modal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="Modal Zoom">
                    <div className="Modal-Content">
                        <button className="Modal-Close" onClick={onClose}>
                            &times;
                        </button>
                        <h2>Modal Content</h2>
                        <p>This is the content of the modal.</p>
                    </div>
                </div>
            )}
        </>
    );
};
