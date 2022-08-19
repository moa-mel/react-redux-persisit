import {useState} from 'react'
import './styles.css'
import {useDispatch} from 'react-redux'
import {signIn} from '../../redux/slices/userSlice'
import welcomeimg from "./welcomeback.svg"

function Login(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const signin = e => {
    e.preventDefault()
    dispatch(signIn({name, email}))
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
          placeholder="Enter your name"
          onChange={e => setName(e.target.value)}/>

          <input 
            type='email'
            value={email}
            required
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}/>

            <button type="submit" className="sub_butt">Login</button>
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