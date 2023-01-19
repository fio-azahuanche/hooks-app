import React from 'react';
import { useState, useEffect } from "react"


export const SimpleForm = () => {
    //hook: is a function
    //useState: is a hook that creates internally a variable 
    //where we can store the state of our component
    const [formState, setformState] = useState({
        username: "fio",
        email: "fazahuanchef@gmail.com"
    })

    const { username, email} = formState;

    const onInputChange = ({target})=> {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value,

        })
    }

    //es como el ngOnInit en angular
    useEffect(() => {
      console.log('useEffect called!');
    })
    

  return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
/*             value={ username }
 */            onChange={onInputChange}
        />

        <input 
            type="email" 
            className="form-control mt-2"
            placeholder="fazahuanchef@gmail.com"
            name="email"
            value={ email }
            onChange={onInputChange}
        />
    </>
  )
}
