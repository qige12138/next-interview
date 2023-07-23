import React from 'react'
function UserInfo() {
  return (
    <div className="flex-center bg-box w-[24%] rounded-[20px]">
      <div className="flex-col-center">
        <div className="w-[107px] h-[107px] rounded-[50%] bg-rounded"></div>
        <div className="flex-col-center pt-5">
          <p className="text-[20px] font-bold leading-5">Carina Geng</p>
          <div className="flex items-center pt-[12px]">
            <div className="w-5 h-5 bg-rounded rounded-[50%]"></div>
            <span className="pl-[10px] pr-5 text-[13px]">Level 3</span>
            <div className="w-5 h-5 rounded-[50%] flex-center text-[12px] text-undertone border border-undertone">
              ?
            </div>
          </div>
        </div>
        <div className="text-undertone-d h-[42px] flex text-[12px] leading-3 my-14">
          <div className="h-full flex-col-center justify-between">
            <p>Today’s XP</p>
            <p className="text-[16px] font-bold text-basics">50</p>
          </div>
          
          <div className="text-undertone-d px-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="42"
              viewBox="0 0 12 42"
            >
              <path d="M12 1L1 42" fill="currentColor" stroke="currentColor" />
            </svg>
          </div>

          <div className="h-full flex-col-center justify-between">
            <p>Total XP</p>
            <p className="text-[16px] font-bold text-basics">750/800</p>
          </div>
        </div>
        <div className="flex-row-center mb-6">
          <div className="badges-information"></div>
          <div className="w-[92px] h-[92px] rounded-[50%] bg-rounded mx-[-20px] relative z-1"></div>
          <div className="badges-information"></div>
        </div>
        <button className="base-btn-bg">View all badges</button>
      </div>
    </div>
  )
}

export default UserInfo
