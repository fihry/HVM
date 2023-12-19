import { IoLogoGithub } from "react-icons/io5";
import './footer.css'
export default function footer() {
  return (
    <div className='footer__container'>
      <div className='footer__content'>
          <h1>HVM</h1>
          <p>© 2024 HVM. All rights reserved.</p>
          <p>created by: <a href='https://github.com/fihry' target='_blank' rel='noreferrer'>el-fihry <IoLogoGithub/></a></p>
      </div>
  </div>
  )
}
