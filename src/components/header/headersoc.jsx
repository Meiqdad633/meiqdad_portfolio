import React from 'react'
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from "react-icons/fa";
import { SiSololearn } from "react-icons/si";

const Headersoc = () => {
  return (
    <div className="Header__soc">
      <a href="https://www.linkedin.com/in/meiqdad-hassani633/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Meiqdad633" target='_blank'><FaGithub/></a>
      <a href="https://www.sololearn.com/profile/9794853" target='_blank'><SiSololearn/></a>

    </div>
  )
}

export default Headersoc;