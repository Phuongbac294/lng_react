
import style from './login.module.css'
import { useContext, useState}  from 'react'
import Context from '../context/context'

import { useNavigate } from 'react-router-dom'
// import { useInput} from '../context/const'

function Login() {
    const login = useContext(Context)  
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    const useInput = () => {
        const [value, setValue] = useState("");
      
        const onChange = (event) => {
          setValue(event.target.value);
        };
      
        return { value: value, onChange: onChange };
      };
    
    
    const tel = useInput()
    const password = useInput()
    const user = login.value.userData
    const HandleLogin = (e) => {
        e.preventDefault()
        const newUser = user.find(item => (item.tel === tel && item.password === password))
        if (newUser === undefined) { setError(true)}
        else {
            setError(false)
            login.value.user = newUser
            navigate('/product')
        }
    }
    return (
        <div className={style.home}>
            <form className={style.login}>
                <input className={style.input} type='text' placeholder='User account' value={tel.value} onChang={tel.onChange}/>
                <input className={style.input} type='password' placeholder='Password' value={password.value} onChang={password.onChange}/><br />
                {error === true && <p>Sai tên đăng nhập, password</p>}
                <button className='btn btnlogin' onChange={HandleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;