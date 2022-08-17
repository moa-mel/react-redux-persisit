import { useDispatch, useSelector } from 'react-redux'
import {signOut} from '../../redux/slices/userSlice'
import './styles.css'
import nft from './nft.jpg';

function Home() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div  className='overlay' >
    <div
      className='modalContainer'
    >
      <img src={nft} alt='/' />
      <div className='modalRight'>
        <p className='closeBtn' >
          X
        </p>
        <div className='content'>
        <p>
            <strong>Name: </strong>{user?.name}
          </p>
          <p>
            <strong>Email: </strong> {`${user?.email}`}
          </p>
        </div>
        <div className='btnContainer'>
        <button className='btnPrimary'>
        <span onClick={handleSignOut}>Sign Out</span>
        </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home