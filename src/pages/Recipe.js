import React from 'react'
import styled from 'styled-components'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Recipe() {
    let params=useParams();
    const[details,setDetails]=useState({});
    const[activeTab,setActiveTab]=useState('instructions');
    const fetchDetails=async()=>{
          const data= await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
          const detailData= await data.json();
          setDetails(detailData);
    };
    
    useEffect(()=>{
     fetchDetails();
    },[params.name])
  return (
    
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=''></img>
        </div>
        <Info>
            <Button className={activeTab==='instructions'?'active' :''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab==='ingredients'?'active' :''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Button>
            {activeTab === "instructions" &&
            (<div>
            <h5 dangerouslySetInnerHTML={{__html:details.summary}}></h5>
            <h5 dangerouslySetInnerHTML={{__html:details.instructions}}></h5>
            </div> )
            }
            {activeTab === "ingredients" &&
            (<ul>{details.extendedIngredients.map((ingredient)=>{
              return <li key={ingredient.id}>{ingredient.original}</li>
                  
            })}</ul>)}
        </Info>

    </DetailWrapper>
  )
}
const DetailWrapper=styled.div`
   
      margin-top:3rem;
      margin-bottom:5rem;
      display:flex;
      
      .active{
        background:linear-gradient(35deg,#494949,#313131);
        color:white;
      }
      h2{
        margin-bottom:2rem;
      }
      li{
        font-size:1.2rem;
        line-height:2.5rem;
      }
      ul{
        margin-top:3rem;
        margin-left:-20rem;
      }
`;
const Button=styled.button`

      padding:1rem 2rem;
      color:#313131;
      background:white;
      border:2px solid black;
      margin-right:2rem;
      font-weight:600;
`;
const Info=styled.div`
      
      justify content:center;
      align-items: flex-start;
      padding-top:60px;
      display:flex;
      margin-left:2rem;

      h5{
        margin:4rem -22rem;
        line-height:2rem;
        margin-right:1rem;
      }
`;