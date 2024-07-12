import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide,SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
export default function Veggie() {
    const [veggie,setVeggie]=useState([]);
    useEffect(()=>{
     getveggie();
    },[])
    
    const getveggie= async()=>{
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15&tags=vegetarian`);
        const data=await api.json();
        setVeggie(data.recipes)
    }
  return (

    <div>
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide options={{
        perPage:3,
        arrows:true,
        pagination:false,
        drag:"free",
        gap:"2rem"
      }}>
    {veggie.map(recipe=>{
        return (
          <SplideSlide key={recipe.id}>
            <Card>
            <Link to={"/recipe/"+recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title}></img>
              </Link>
            </Card>
          </SplideSlide>

        );
    })}
    </Splide>
    </Wrapper>
    </div>
  )
}

const Wrapper=styled.div`
  margin: 2rem 0rem ;
  
   `;
const Card=styled.div`
  min-height: 20rem;
  border-radius:2rem; 
  overflow:hidden;
  position:relative;

  img{
    border-radius:2rem; 
    object-fit:cover;
    position:absolute;
    left:0;
    height:70%;
    width:100%;
  }
  p{
    position:absolute;
    z-index:10;
    left:50%;
    bottom:25%;
    transform:translate(-50%,0%);
    width:100%;
    text-align:center;
    font-weight:600;
    font-size:1rem;
    height:40%;
    display:flex;
    justify-content:center;
    align-items:center; 
    color:white;
  }
  `;
