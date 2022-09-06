import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {

  const {quiz, handleChange, handleSubmit, error} = useGlobalContext()

  return <main>
    <section className="quiz quiz-small">
      <form action="" className="setup-form">
        <h2>Set up quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input type="number" name="amount" id="amount"
          value={quiz.amount}
          onChange={handleChange}
          className="form-input"
          min={1}
          max={50}
          />
        </div>
        {/* start category */}
        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select name="category" id="category"
          className='form-input'
          value={quiz.category}
          onChange={handleChange}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>
        {/* End category */}

        {/* start difficulty */}
        <div className="form-control">
          <label htmlFor="difficulty">Select Difficulty</label>
          <select name="difficulty" id="difficulty"
          className='form-input'
          value={quiz.difficulty}
          onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        {/* End difficulty */}
        {error && <p className='error'>Can't generate questions, please try different options</p>}
        <button className="submit-btn" type='submit' onClick={handleSubmit}>start</button>
      </form>
    </section>
  </main>
}

export default SetupForm
