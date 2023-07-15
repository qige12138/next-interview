'use client';
import React, { useState } from 'react'
import pokemonData from './pokemonData'
import './page.css'
import Link from 'next/link';

let throttleTime = 0;
let throttleTimer: NodeJS.Timeout | null = null;
function Pokemon() {
  const [pData,setPData] = useState(pokemonData);

  const filterData = (e:any) => {
    const now = Date.now();
    if(throttleTime && now - throttleTime > 1000) {
      clearTimeout(throttleTimer as NodeJS.Timeout)
    }
    throttleTimer = setTimeout(()=> {
      const {value} = e.target;
      const newData = pokemonData.filter(v=> ~v.name.indexOf(value));
      setPData(newData);
      throttleTime = now;
    },1000)
  }
  return (
    <div className='pokemon'>
      <div className='pokemon-content'>
        <div className='pokemon-title'>Pokemons</div>
        <input type="text" onInput={filterData} placeholder='search' />
        <div className='pokemon-list'>
          {
            pData.map(v=> (
              <Link key={v.id} href={`/pokemon/${v.id}`}>
                <div className='pokemon-img'>
                  <img src={v.imageUrl} alt="" />
                </div>
                <div className='pokemon-name'>{v.name}</div>
                <div>属性：{v.stats}</div>
              </Link>
             
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Pokemon