
import style from './login.module.css'
import { useContext, useState}  from 'react'
import Context from '../context/context'

import { useNavigate } from 'react-router-dom'
import { useInput} from '../context/const'



function Login() {
    const login = useContext(Context)  
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    
    const tel = useInput()
    const password = useInput()
    const user = login.value.userData
    const HandleLogin = (e) => {
        e.preventDefault()
        const newUser = user.find(item => (item.tel === tel && item.password === password))
        if (user.find(item => (item.tel === tel && item.password === password)) === undefined) { setError(true)}
        else {
            setError(false)
            login.value.user = newUser
            navigate('/product')
        }
        console.log(newUser);
    }
    console.log(user.find(item => (item.tel === tel && item.password === password)));
   
    return (
        <div className={style.home}>
            <form className={style.login}>
                <input className={style.input} type='text' placeholder='User account' value={tel.value} onChange={tel.onChange}/>
                <input className={style.input} type='password' placeholder='Password' value={password.value} onChange={password.onChange}/><br />
                {error === true && <p style={{color:'while'}}>Sai tên đăng nhập, password</p>}
                <button className='btn btnlogin' onChange={HandleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;