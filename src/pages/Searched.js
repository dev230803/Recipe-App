import React from 'react'
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Searched() {
    let params=useParams();
    const[searchedCuisine,setSearchedCuisine]=useState([])
    const getSearchedCuisine=async(name)=>{
        const data= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recepies=await data.json();
        
        setSearchedCuisine(recepies.results);
    
    };
    useEffect(()=>{
        getSearchedCuisine(params.search);
    },[params.search]);
  return (
    <Grid>
      {searchedCuisine.map(item=>{
         return <Card key={item.id}>
              <Link to={"/recipe/"+item.id}>
               <img src={item.image} alt=''></img>
               <h4>{item.title}</h4>
               </Link>
         </Card>
      })}
    </Grid>
  )
}
const Grid=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(20rem,1fr));
    grid-gap:3rem;
`;
const Card=styled.div`
     img{
        width:100%;
        border-radius:2rem;
     }
     a{
        text-decoration:none;
     }
     h4{
        text-align:center;
     }
`;

