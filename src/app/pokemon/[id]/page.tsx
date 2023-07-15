'use client';
import React, { useEffect, useState } from 'react'
import {useParams} from 'next/navigation'
import pokemonData from '../pokemonData'
import './page.css'
function Detail() {
  console.info(useParams())
  const {id} = useParams();
  const [detailData,setDetailData] = useState<Record<string,any>>({});

  useEffect(()=> {
    const data = pokemonData.find(v=> v.id === id) as Record<string,any>;
    setDetailData(data);
  },[])
  return (
    <div className='detail'>
      <img src={detailData.imageUrl} alt="" />
      <div>名字：{detailData.name}</div>
      <div>属性：{detailData.stats}</div>
      <div>分类：{detailData.type}</div>
      <div>身高：{detailData.height}</div>
      <div>体重：{detailData.weight}</div>
      <div>特性：{detailData.peculiarity}</div>
    </div>
  )
}

export default Detail
