'use client'
import React from 'react'
import { useState } from 'react'

const Footer = () => {


  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState('Guilherme');
  const [novoNome, setNovoNome] = useState('');

  const [isVisivel, setIsVisivel] = useState(true);   
  

  return (
    <div>


      <button onClick={() => setIsVisivel(!isVisivel)}>
        {isVisivel ? "Esconder" : "Mostrar"} Texto  
      </button>
      {isVisivel && <p>Esse será o texto escondido/exibido</p>}
    </div>
  )
}

export default Footer
