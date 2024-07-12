import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Splide,SplideSlide} from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
import '@splidejs/react-splide/css';
export default function Popular() {
    const [popular,setPopular]=useState([]);
    useEffect(()=>{
     getpopular();
    },[])
    
    const getpopular= async()=>{
        const api= await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=15`);
        const data=await api.json();
        setPopular(data.recipes)
    }
  return (

    <div>
    <Wrapper>
      <h3>Popular Picks</h3>
      <Splide options={{
        perPage:4,
        arrows:true,
        pagination:false,
        drag:"free",
        gap:"2rem"
      }}>
    {popular.map(recipe=>{
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
  min-height: 18rem;
  border-radius:2rem; 
  overflow:hidden;
  position:relative;

  img{
    border-radius:2rem; 
    object-fit:cover;
    position:absolute;
    left:0;
    height:60%;
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
    height:60%;
    display:flex;
    justify-content:center;
    align-items:center; 
    color:white;
    flex-wrap: wrap;
  }
  `;
