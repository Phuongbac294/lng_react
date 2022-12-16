// import { useState } from 'react'
import style from './login.module.css'
import {useInput} from '../context/const'

function Register() {
    const name = useInput()
    const password = useInput()
    const tel = useInput()
    const email = useInput()
    const passwordConfirm = useInput()

    const HandleRegister = (e) => {
        e.preventDefault()

    }
    return (
        <div className={style.home}>
            <form className={style.login}>
            <input className={style.input} type='tel' placeholder='User telephone' value={tel.value} onChang={tel.onChange}/>
            <input className={style.input} type='text' placeholder='User name' value={name.value} onChang={name.onChange}/>
            <input className={style.input} type='email' placeholder='User email' value={email.value} onChang={email.onChange}/>
            <input className={style.input} type='text' placeholder='Password' value={password.value} onChang={password.onChange}/>
            <input className={style.input} type='text' placeholder='Paswordconfirm' value={passwordConfirm.value} onChang={passwordConfirm.onChange}/>
            <button className='btn btnlogin' onChange={HandleRegister}>Register</button>
            </form>
        </div>
    )
}

export default Register;