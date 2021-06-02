import React, {useState} from 'react';
// 1* when we type in the form how can we get access to the data


// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // 2*
  const[firstName, setFirstName] = useState('')
  const[email, setEmail] = useState('')


  const handleSubmit = (e) =>{
    e.preventDefault(); // kaka this is necessary to keep the input
    console.log('hello World mate');
    console.log(firstName, email);

  }
  return <>
  <article>
    {/*  place onClick here in the form*/}
  <form className='form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <label htmlFor='firstName'>Name : </label>
     {/* 3* we added value here , and the value is depend on the (state value for reffrencing )*/}
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={firstName}
        // 4* adding onChange
        onChange={(e)=> setFirstName(e.target.value)}></input>
    </div>
    {/* the second input */}

    <div className='form-control'>
      <label htmlFor='emsilkaka'>Email : </label>
                                        {/* 3* we added value here, and to reffrence the sate vale we use ==> email*/}
      <input type='text' id='firstName' name='emailkaka' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
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
