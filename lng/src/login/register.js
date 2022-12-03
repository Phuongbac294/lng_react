// import { useState } from 'react'
import style from './login.module.css'
import {input} from '../context/const'

function Register() {
    const name=''
    return (
        <div className={style.home}>
            <form className={style.login}>
                {input('text', name, 'Tên đăng nhập')}<br></br>
                {input('text', name, 'Mật khẩu')}<br></br>
                {input('text', name, 'Nhập lại mật khẩu')}<br></br>
                <button className='btn btnlogin'>Đăng ký</button>
            </form>
        </div>
    )
}

export default Register;