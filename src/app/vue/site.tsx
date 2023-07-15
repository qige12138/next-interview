import React from 'react'

const siteData = [
  {
    title:'文档',
    list:['深度合作','深度合作合作','深度合作','深度合作','深度合作','深度合作']
  },
  {
    title:'资源',
    list:['深度合作','深度合作合作合作','深度合作','深度合作','深度合作']
  },
  {
    title:'视频课程',
    list:['深度合作','深度合作']
  },
  {
    title:'帮助',
    list:['深度合作','深度合作','深度合作合作合作']
  },
  {
    title:'关于',
    list:['深度合作','深度合作','深度合作','深度合作','深度合作','深度合作']
  },
  {
    title:'官方库',
    list:['深度合作','深度合作','深度合作合作合作']
  },
  {
    title:'动态',
    list:['深度合作','深度合作合作合作','深度合作','深度合作']
  }
  
]
function Site() {
  return (
    <div className='site'>
      <div className='site-content'>
      {
        /** 为了演示  暂用index当key */
        siteData.map((v1,i1)=> (
          <div key={i1} className='site-wrap'>
            <div className='site-title'>
              {v1.title}
            </div>
            {
              v1.list.map((v2,i2)=> (
                <div key={i2} className='site-text'>{v2}</div>
              ))
            }
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default Site