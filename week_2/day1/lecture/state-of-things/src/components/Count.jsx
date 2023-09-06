import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Count = (props) => {
    const [counter, setCounter] = useState(props.count)
    const updateState = () => {
        setCounter(counter+1)
    }

    const [animeX, setAnimeX] = useState(0)
    const [scaling, setScaling] = useState(1)
    const moveX = () => {
        setAnimeX(animeX+200)
        setScaling(scaling+2)
    }
  return (
    <>
        <motion.div 
        className='box'
        animate={{x: animeX, scale:scaling}}
        transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.1 }
          }}
        onClick={moveX}
        >

        </motion.div>
      <h1>The count is: {counter}</h1>
      <button onClick={updateState}>Click to increse the count!</button>
    </>
  )
}

export default Count;