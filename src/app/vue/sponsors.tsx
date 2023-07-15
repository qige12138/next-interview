import React from 'react'
import {ColorSchemeMode} from './page'

const sponsorsData = [
  'https://sponsors.vuejs.org/images/vuemastery.png',
  'https://sponsors.vuejs.org/images/vueschool.png',
  'https://sponsors.vuejs.org/images/vuemastery.png',
  'https://sponsors.vuejs.org/images/vueschool.png',
  'https://sponsors.vuejs.org/images/vuemastery.png',
  'https://sponsors.vuejs.org/images/vueschool.png',
  'https://sponsors.vuejs.org/images/vuemastery.png',
  'https://sponsors.vuejs.org/images/vueschool.png',
  'https://sponsors.vuejs.org/images/vueschool.png'
]
type SponsorsProp = {
  themeMode:ColorSchemeMode  | null
}
function Sponsors({themeMode}:SponsorsProp) {
  return (
    <div className="sponsors">
      <div className="sponsors-content">
        <div className="sponsors-desc-list">
          <div>
            <div className="desc-list-title">易学易用</div>
            <div className="desc-list-text">
              基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
              和一流的文档。
            </div>
          </div>
          <div>
            <div className="desc-list-title">易学易用</div>
            <div className="desc-list-text">
              基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
              和一流的文档。
            </div>
          </div>
          <div>
            <div className="desc-list-title">易学易用</div>
            <div className="desc-list-text">
              基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API
              和一流的文档。
            </div>
          </div>
        </div>

        <div className="sponsors-wrap">
          <div className="sponsors-title">Platinum Sponsors</div>
          <div className="sponsors-list">
            {sponsorsData.map((v, index) => (
              /** 为了演示  暂用index当key */
              <div className="sponsors-item" key={index}>
                <div>
                  <img className={themeMode === ColorSchemeMode.dark ? 'filter' : ''} src={v} />
                </div>
              </div>
            ))}
            <div className="sponsors-item">
              <div>
                成为赞助商
              </div>
            </div>
          </div>
        </div>

        <div className="sponsors-wrap">
          <div className="sponsors-title">Gold Sponsors</div>
          <div className="sponsors-list">
            {sponsorsData.map((v, index) => (
              /** 为了演示  暂用index当key */
              <div className="sponsors-item sponsors-item1" key={index}>
                <div>
                  <img className={themeMode === ColorSchemeMode.dark ? 'filter' : ''} src={v} />
                </div>
              </div>
            ))}
            <div className="sponsors-item sponsors-item1">
              <div>
                成为赞助商
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
