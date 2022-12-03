
import style from './login.module.css'

import { useContext}  from 'react'
import Context from '../context/context'
import {setInput} from '../context/action'
function Login() {
    const [state, dispatch] = useContext(Context)
    const [useNames, use] = state
    return (
        <div className={style.home}>
            <form className={style.login}>
                <input type='text' value={use} onChang={e =>dispatch(setInput(e.target.value))}></input>
                {/* {input('text', {use}, 'Tên đăng nhập')}<br></br> */}
                {/* {input('text', name, 'Mật khẩu')}<br></br> */}
                <button className='btn btnlogin'>Đăng nhập</button>
            </form>
        </div>
    )
}

export default Login;