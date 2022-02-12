import React from "react";

import { LogIn, signUp } from '../../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';

export const AuthPage:React.FC = () => {

    const dispatch = useDispatch();

    function handlerAuthForm(event: any) {
        event.preventDefault()
        const data = {
          password: event.target.elements.pass.value,
          email: event.target.elements.email.value
        }

        console.log('auth>>>>>', data)
        dispatch(LogIn(data))
    }

    function handlerRegForm(event: any) {
      event.preventDefault()

      const data = {
        password: event.target.elements.pass.value,
        email: event.target.elements.email.value
      }

      console.log('Reg>>>>>', data)
      dispatch(signUp(data))
   }

    return (
      <>
        <h2> Auth form </h2>
        <form onSubmit={handlerAuthForm} >
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="pass" placeholder="password"/>
          <button type="submit">Auth</button>
        </form>

        <h2> Reg form </h2>
        <form onSubmit={handlerRegForm} >
          <input type="text" name="email" placeholder="email" />
          <input type="password" name="pass" placeholder="password"/>
          <button type="submit">Reg</button>
        </form>
      </>
    )
}


