import React, { useState } from 'react';
import FormModal from './f';
import "./x.css";

const App1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <button onClick={handleOpenModal}>Open Form Modal</button>
      <FormModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default App1;