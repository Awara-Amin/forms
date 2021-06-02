import React, {useState} from 'react';
//  Now, to add all inputes into a list

const ControlledInputs = () => {
  const[firstName, setFirstName] = useState('')
  const[email, setEmail] = useState('')
  //  lets add each person (which the firstName data) into an arrey
  const [people, setPeople] = useState([]);


  const handleSubmit = (e) =>{
    e.preventDefault(); // kaka this is necessary to keep the input
    // console.log('hello World mate');
    // console.log(firstName, email);
    if(firstName, email) { //if both fileds have data input (not empty)
      console.log('submit the form');

      // creating this object
      // const person = {firstName: firstName, email:email}; OR we can write like that as the vale and the status are the same
      const person = {firstName, email};
      console.log(person);
      setPeople((people) =>{
        return [...people,person]
      })
      setFirstName('');
      setEmail('');

    } else {
      console.log('empty value'); //if both fileds (firstName, email) were empty
    }
  };


  return <>
  <article>
    {/*  place onClick here in the form*/}
  <form className='form' onSubmit={handleSubmit}>
    <div className='form-control'>
      <label htmlFor='firstName'>Name : </label>
                                             {/* we added value here , and the value is depend on the (state value )*/}
      <input
        type='text'
        id='firstName'
        name='firstName'
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}></input>
    </div>
    {/* the second input */}

    <div className='form-control'>
      <label htmlFor='emsilkaka'>Email : </label>
                                            {/* we added value here */}
      <input type='text' id='firstName' name='emailkaka' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
    </div>
    {/* <button type='submit' onClick={handleSubmit()}>add person kaka</button> */}
    <button type='submit'>add person kaka</button>



  </form>

  {people.map((person, index) =>{
    const {id, firstName, email} = person;

    return (
      <div className='item'>
      <h4>{firstName}</h4>
      <p>{email}</p>
    </div>);
  
  })}
</article>
</>
};
{/* <h1>controlled inputs</h1>; */
}
export default ControlledInputs;
