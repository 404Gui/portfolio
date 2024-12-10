"use client"
import React from 'react'
import styles from "./styles.module.css"
import { useState } from 'react'

const Estudos = () => {

    const frutas =  ['banana', 'maça', 'pera']

    


  return (
    <div className="w-3/4 m-auto">
        <ul>
            {frutas.map((fruta, index) => (
                <li>{fruta.toUpperCase()}</li>
            ) )}
        </ul>

      
    </div>
  )
}

export default Estudos
