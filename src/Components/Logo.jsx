import React from 'react'
import style from "./Logo.module.css"
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Logo = () => {
  return (
    <div>
      <div className={style.logo}>
        <span>
        <img src="https://uko-react.vercel.app/static/logo/logo.svg" alt="" /> 
        <p>UKO</p> 
        </span>
        <FontAwesomeIcon icon={faArrowUpFromBracket} rotation={270} color='gray' />
      </div>
    </div>
  )
}

export default Logo
