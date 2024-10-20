// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'

function App() {

  return (
    <>
      <h1>Welcome</h1>
      <h2>Enter crossword puzzle content</h2>
      <p>See instructions below. Under 50 words is best. </p>
      <h5>Title</h5>
      <input type="text" id="inputTitle" name="title"
        placeholder="Worksheet Title" />
      <h5>Words</h5>
      <input type="text" />
      <h5>Questions</h5>
      <input type="text" />
      <button>+ Create</button>
      <h3>Preview Worksheet</h3>
      <p>Title</p>
      <div className='list'>
        <div>
          <h4>Answers</h4>
          <ol>
            <li>Answer</li>
            <li>Answer</li>
            <li>Answer</li>
          </ol>
        </div>
        <div>
          <h4>Questions</h4>
          <ol>
            <li>Questions</li>
            <li>Questions</li>
            <li>Questions</li>
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
