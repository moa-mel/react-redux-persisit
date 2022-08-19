import {useState} from 'react'
import './styles.css'
import {useDispatch} from 'react-redux'
import {signIn} from '../../redux/slices/userSlice'
import welcomeimg from "./welcomeback.svg"

function Login(){

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const signin = e => {
    e.preventDefault()
    dispatch(signIn({name, password}))
  }

  return(
    <div className='main-login'>
    <div className="login-contain">
     <div className="left-side">
        <form onSubmit={signin} name='signin_form'>
        <input 
          type='text'
          value={name}
          required
          placeholder="Enter your username"
          onChange={e => setName(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}/>

            <button type="submit" className="sub_butt">
            <span>Login </span>
            </button>
        </form>
      </div>
      <div className="right-side">
      <div className="welcomeNote">
          <h3>Welcome Back!</h3>
      </div>
      <div className="welcomeImg">
          <img src={welcomeimg} id='wel-img-id' alt=""  />
      </div>
    </div>

  </div>
</div>
  )
}

export default Login