import React from 'react'
import Home from './Home'
import {Routes,Route, useLocation} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';
export default function Pages() {
  const loc=useLocation();
  return (
    <AnimatePresence >
    <Routes location={loc} key={loc.pathname}>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/cuisine/:type" element={<Cuisine/>}></Route>
     <Route path="/searched/:search" element={<Searched/>}></Route>
     <Route path="/recipe/:name" element={<Recipe/>}></Route>
    </Routes>
    </AnimatePresence>
 
  )
}
