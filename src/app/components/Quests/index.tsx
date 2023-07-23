import React from 'react'
import Image from 'next/image'
import Ring from '../Ring'
import {questsData} from '@/app/assets'

function UserInfo() {
  return (
    <div className="bg-box h-[220px] rounded-[20px] flex">
      <div className="relative h-full w-[189px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="189"
          height="220"
          viewBox="0 0 189 220"
          className="text-quests absolute left-0 top-0"
          fill="currentColor"
        >
          <path d="M0 20C0 8.9543 8.9543 0 20 0H188.426L128.78 220H20C8.9543 220 0 211.046 0 200V20Z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="142"
          height="115"
          viewBox="0 0 142 115"
          className="text-quests-d absolute left-0 bottom-0"
          fill="currentColor"
        >
          <path d="M141.739 67.2027L128.78 115H20C8.9543 115 0 106.046 0 95V17.2623C15.0458 6.40044 33.5254 0 53.5 0C95.6215 0 131.095 28.4618 141.739 67.2027Z" />
        </svg>
        <p className="absolute left-7 top-10 text-[16px] leading-[16px] font-bold">
          Daily <br /> Quests
        </p>
      </div>
      <div className="flex flex-1 flex-row-center justify-between pl-[10px]">
        {questsData.map((item: Record<string, any>) => (
          <div className="w-[138px] flex-col-center" key={item.id}>
            <div className="w-[138px] h-[138px] mb-[20px] relative quest-box flex-center">
              <div className="absolute w-full h-full left-0 top-0 pointer-events-none">
                <Ring radius={69} percent={item.type === 'hidden' ? 1 : item.comQuest / item.totalQuest} />
              </div>
              {item.type === 'hidden' ? (
                <div className="content" key={item.id}>
                  <button className="flex-center w-[79px] h-[40px] bg-claimed text-claimed border border-claimed rounded-[12px] cursor-pointer">
                    Claimed
                  </button>
                </div>
              ) : (
                <div
                  className="content  hover:bg-quests-box-hover hover:text-quests-box-hover"
                  key={item.id}
                >
                  <div className="flex-col-center">
                    <p>Complete</p>
                    <p className="mb-[12px]">{`${item.totalQuest} Quest`}</p>
                    <p>{`${item.comQuest}/${item.totalQuest}`}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex-center">
              <Image src="/sphere.png" alt="sphere" width={20} height={20} unoptimized />
              <span className='ml-1'>{item.integral}</span>
            </div>
          </div>
        ))}
      </div>
      <div className='flex-col-center justify-center w-[24%] h-full'>
        <button className='base-btn w-[53.56%] h-[39px] mb-[12px] text-claimed-d bg-claimed-d'>Claim</button>
        <button className='base-btn-bg w-[53.56%]'>Start Learning</button>
      </div>
    </div>
  )
}

export default UserInfo
