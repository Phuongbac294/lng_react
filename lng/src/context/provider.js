import { useReducer, useState } from "react";
import Context from "./context";
import reducer from "./reducer";
import { initState} from './reducer';

function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, initState)
    const [userData, setUserData] = useState([
        {tel: '0977809587',
        name : 'Phương',
        email: 'syphuong83@gmail.com',
        password: '123456',
        avatar : 'https://'}
    ])
    const [user, setUser] = useState({
        tel: "",
        name:"",
        avatar:"",
        email:"",
        password:"",
        confirmPassword:"",
        product: {}
    })

  
    const value = {
        state, dispatch,
        userData, setUserData,
        user, setUser,
      
    }
    return (
        <Context.Provider value={{value}}>
            {children}
        </Context.Provider>
    )
}

export default Provider;