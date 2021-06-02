import React, {useState} from 'react';

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

  const handleSubmit = (e) =>{
    e.preventDefault(); // kaka this is necessary to keep the input
    console.log('hello World mate');
  }
  return <>
  <article>
    {/*  place onClick here in the form*/}
  <form className='form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <label htmlFor='firstName'>Name : </label>
      <input type='text' id='firstName' name='firstName'></input>
    </div>
    {/* the second input */}

    <div className='form-control'>
      <label htmlFor='emsilkaka'>Email : </label>
      <input type='text' id='firstName' name='emailkaka'></input>
    </div>
    {/* <button type='submit' onClick={handleSubmit()}>add person kaka</button> */}
    <button type='submit'>add person kaka</button>



  </form>
</article>
</>
};
{/* <h1>controlled inputs</h1>; */
}
export default ControlledInputs;
