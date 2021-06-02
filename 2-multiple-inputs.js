import React, { useState } from 'react';

// To creat a form with multipul inputs
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({firstName: '', email: '', age: ''});
  const [people, setPeople] = useState([]);

const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value
  console.log(name, value);
//   setPerson({...person, firstName: value})
// }
setPerson({ ...person, [name]: value})
}

const handleSubmit = (e) => {
  e.preventDefault();
  if(person.firstName && person.email && person.age ){
    const newPerson = {...person, id: new Date().getTime().
    toString()}
    setPeople([...people, newPerson]);
    setPerson({firstName: '', email:'', age:''})
  }
}

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     const person = { id: new Date().getTime().toString(), firstName, email };
  //     console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName('');
  //     setEmail('');
  //   } else {
  //     console.log('empty values');
  //   }
  // };
  return (
    <>
      <article>
        <form className='form'>
        {/* <form className='form' onSubmit={handleSubmit}> */}
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
              // onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
