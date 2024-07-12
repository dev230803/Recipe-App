import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Search() {
    const [input,setInput]=useState("");
    const navigate=useNavigate();
    const sumbitHandler=(e)=>{
      e.preventDefault();
      navigate("/searched/"+input);
    }
    
  return (
    <FromStyle onSubmit={sumbitHandler}>
        <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=>setInput(e.target.value)} type='text' value={input}></input>
        </div>
    </FromStyle >
  )
}
const FromStyle=styled.form`
   
 
    margin-right:50px;
    
    div{
        width:100%;
        position:relative;
        display:inline-block;
    }
    input{
        border:none;
        background:linear-gradient(35deg,#494949,#313131);
        color:white;
        padding:1rem 3rem;
        border:none;
        border-radius:1rem;
        outline:none;
        width:94%;
    
    }
    svg{
        position:absolute;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white;
    }
    `
