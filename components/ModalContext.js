'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import Modal from '@/components/Modal';
import IndividualForm from '@/components/forms/IndividualForm';
import BusinessForm from '@/components/forms/BusinessForm';

const ModalContext = createContext();

/**
 * ModalProvider wraps children with modal logic and renders modals dynamically based on formId
 */
export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  const openModal = useCallback((formId) => {
    setActiveForm(formId);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setActiveForm(null);
  }, []);

  const renderForm = useCallback(() => {
    switch (activeForm) {
      case 'individual':
        return <IndividualForm setActiveForm={setActiveForm} />;
      case 'business':
        return <BusinessForm setActiveForm={setActiveForm} />;
      case 'enterprise':
        return (
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2">Enterprise Account</h3>
            <p>Please contact our enterprise support team directly for onboarding assistance.</p>
          </div>
        );
      default:
        return null;
    }
  }, [activeForm]);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {showModal && (
        <Modal show={showModal} onClose={closeModal}>
          {renderForm()}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

/**
 * useModal custom hook to access modal control functions
 */
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
