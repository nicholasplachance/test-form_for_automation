import "./App.css";

import logo from "./logo.svg";

function App() {
  return (
    <div className='App'>
      <h1>Send us your info!</h1>
      <form
        className='form'
        name='contact-form'
        method='post'
        data-netlify='true'>
        <input type='hidden' name='form-name' value='contact-form' />
        <input type='text' placeholder='Enter your name' name='name' />
        <input type='email' placeholder='Enter your email' name='email' />
        <input
          type='number'
          placeholder='Enter your phone number'
          name='phone'
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
