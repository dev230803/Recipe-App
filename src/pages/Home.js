import React from 'react'
import Popular from '../components/Popular'
import Veggie from '../components/Veggie'
import { motion } from 'framer-motion'
export default function Home() {
  return (
    <motion.div
    animate={{opacity:1}}
     initial={{opacity:0}}
     exit={{opacity:0}}
     transition={{duration:0.5}}>
     <Veggie></Veggie>
     <Popular></Popular>
    </motion.div>
  )
}
