import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {

  const {isModalOpen, closeModal, correct, questions} = useGlobalContext()
  
  const percentageCorrect = (correct/questions.length) * 100
  
  return <h2 className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
    <div className="modal-content">
      <h2>Congrats!</h2>
      <p>You answered {percentageCorrect.toFixed(0)}% of questions correctly</p>
      <button className="close-btn" onClick={closeModal}>
        Play Again
      </button>
    </div>

  </h2>
}

export default Modal
