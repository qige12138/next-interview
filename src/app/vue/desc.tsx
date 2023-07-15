import React from 'react'

function Desc() {
  return (
    <div className='desc'>
      <div className="desc-cont bb">
        <p className="desc-t desc-t1">渐进式</p>
        <p className="desc-t desc-t2">JavaScript 框架</p>
        <p className="desc-text">
          易学易用，性能出色，适用场景丰富的 Web 前端框架。
        </p>
        <div className="desc-btn">
          <div>
            <span>快速上手</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              fill="currentColor"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path
                d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"
                data-v-8f6e9de2=""
              ></path>
            </svg>
          </div>
          <div>安装</div>
        </div>
      </div>
      <div className='desc-more bb'>
        中国区铂金位
      </div>
    </div>
  )
}

export default Desc
