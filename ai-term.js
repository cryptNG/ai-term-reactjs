'use client'
 
import { useState } from 'react'
 
export function AiTermLink() {
  const [count, setCount] = useState(0)
 
  return (
    <script src="https://cryptng.github.io/ai-term-vanillajs/ai-term.js"></script>
  )
}

export function AiTerm({ children }) {
    const [count, setCount] = useState(0)
   
    return (
      <ai-term>{ children }</ai-term>
    )
  }

  export function AiTermChat({attributes}) {
    const [count, setCount] = useState(0)
   
    return (
      <ai-term-chat {...attributes}></ai-term-chat>
    )
  }