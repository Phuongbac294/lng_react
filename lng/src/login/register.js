import { useNavigate } from 'react-router-dom'
import style from './login.module.css'
import {useInput} from '../context/const'
import Context from '../context/context'
import { useContext, useState } from 'react'

function Register() {
    const reg = useContext(Context)

    const name = useInput()
    const password = useInput()
    const tel = useInput()
    const email = useInput()
    const passwordConfirm = useInput()

    const [test, setTest] = useState(0)
    const navigate = useNavigate()

    const HandleRegister = (e) => {
        e.preventDefault()
        const arr = reg.value.userData
        const newUser = {tel: tel, email: email, password: password, name: name}

        if (arr.find(item => item.tel === tel) !== undefined) {
            return setTest(1)
        } else if (arr.find(item => item.email === email) !== undefined) {
            return setTest(2) 
        } else if (password !== passwordConfirm) {
            return setTest(3)
        } else { 
            setTest(0)
            reg.value.setUserData(prev => [...prev, newUser])
            navigate('/product')
         }

    }
    return (
        <div className={style.home}>
            <form className={style.login}>
            <input className={style.input} type='tel' placeholder='User telephone' value={tel.value} onChange={tel.onChange}/>
            {test === 1 && <p>Số điện thoại đã được sử dụng</p>}
            <input className={style.input} type='text' placeholder='User name' value={name.value} onChange={name.onChange}/>
            <input className={style.input} type='email' placeholder='User email' value={email.value} onChange={email.onChange}/>
            {test === 2 && <p>Email đã được sử dụng</p>}
            <input className={style.input} type='password' placeholder='Password' value={password.value} onChange={password.onChange}/>
            <input className={style.input} type='password' placeholder='Paswordconfirm' value={passwordConfirm.value} onChange={passwordConfirm.onChange}/>
            {test === 3 && <p>Password không đúng</p>}
            <button className='btn btnlogin' onChange={HandleRegister}>Register</button>
            </form>
        </div>
    )
}

export default Register;