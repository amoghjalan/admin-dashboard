import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import "./login.scss"
import {login} from '../../redux/apiCalls'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state=>state.user);

  const handleClick = (e) =>{
    e.preventDefault();
    username.length >0 && password.length>0 && login(dispatch, {username, password});
  }
  return (
    <div className='login'>
      <div className="loginWrapper">
        <h1 className="title">BYit Admin Login</h1>
        {error && <span className="error">Something went wrong</span>}
        <input className="input" type="text" placeholder="username" onChange={e => setUsername(e.target.value)}/>
        <input className="input" type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleClick} disabled={isFetching}> Login</button>
      </div>
    </div>
  )
}

export default Login
