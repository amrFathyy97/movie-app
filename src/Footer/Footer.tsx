import { Link } from 'react-router-dom'
import {Facebook, GitHub, X} from "@mui/icons-material"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
          <ul>
            <Link to="https://google.com">
              <GitHub/>
            </Link>
            <Link to="https://google.com">
              <X/>
            </Link>
            <Link to="https://google.com">
              <Facebook/>
            </Link>
          </ul>
        </div>
    </footer>
  )
}

export default Footer