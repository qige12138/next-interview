'use client'
import React, { useEffect, useState } from 'react'
import { ColorSchemeMode, LangMode } from './page'

/**导航菜单数据 */
const navData = [
  {
    title: 'doc',
    id: 1,
    list: ['guide', 'guide', 'guide']
  },
  {
    title: 'API',
    id: 2
  },
  {
    title: 'playground',
    id: 3
  },
  {
    title: 'ecosystem',
    id: 4,
    list: [
      {
        title: 'assets',
        list: ['partners', 'partners', 'partners']
      },
      {
        title: '资源2',
        list: ['partners', 'partners', 'partners']
      },
      {
        title: '资源3',
        list: ['partners', 'partners', 'partners']
      }
    ]
  }
]

const langData = [
  {
    label: '中文',
    value: 'ch'
  },
  {
    label: 'English',
    value: 'en'
  }
]

type HeaderProp = {
  langJson:Record<string,any>
  themeMode: ColorSchemeMode | null
  changeMode: (mode: ColorSchemeMode) => void
  changeLang: (lang: LangMode) => void
}
function Header({ langJson,themeMode, changeMode,changeLang }: HeaderProp) {
  const [isModal, setIsModal] = useState(false)
  const [openIds, setOpenIds] = useState<number[]>([])
  const handleThemeModeChange = () => {
    const newThemeMode =
      themeMode === ColorSchemeMode.dark
        ? ColorSchemeMode.light
        : ColorSchemeMode.dark
    changeMode(newThemeMode)
  }

  const openList = (id: number) => {
    const index = openIds.indexOf(id)
    if (index > -1) {
      const ids = [...openIds]
      ids.splice(index, 1)
      setOpenIds(ids)
    } else {
      setOpenIds([...openIds, id])
    }
  }


  const watchWindowWidth = () => {
    const clientWidth = document.documentElement.clientWidth
    if (clientWidth > 768) {
      setIsModal(false)
    }
  }
  useEffect(() => {
    if (isModal) {
      document.querySelector('html')?.classList.add('over-h')
    } else {
      document.querySelector('html')?.classList.remove('over-h')
    }
    window.addEventListener('resize', watchWindowWidth)
    return () => {
      window.removeEventListener('resize', watchWindowWidth)
    }
  }, [isModal])
  return (
    <div className="header bb">
      <div className="header-l">
        <div>
          <svg
            className="header-logo"
            viewBox="0 0 128 128"
            width="24"
            height="24"
          >
            <path
              fill="#42b883"
              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            ></path>
            <path
              fill="#35495e"
              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
            ></path>
          </svg>
        </div>
        <div>Vue.js</div>
        <div className="header-search">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="header-t">{langJson['search']}</span>
          <div className="header-b">⌘ K</div>
        </div>
      </div>
      <div className="header-r">
        <div className="header-nav">
          {navData.map((v: Record<string, any>) => (
            <div key={v.id} className="header-nav-tab">
              {!v.list ? (
                langJson[v.title]
              ) : (
                <div className="header-tab-t">
                  <div>{langJson[v.title]}</div>
                  <div className="header-icon">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      fillRule="evenodd"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      xmlns="http://www.w3.org/2000/svg"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                    </svg>
                  </div>
                  <div className="header-tab-list">
                    {v.list.map(
                      (v2: string & Record<string, any>, i1: number) =>
                        v2?.list ? (
                          /** 为了演示  暂用index当key */
                          <div key={i1}>
                            <div className="header-list-title">{langJson[v2.title]}</div>
                            {v2.list.map((v3: string, i2: number) => (
                              <div key={i2}>{langJson[v3]}</div>
                            ))}
                          </div>
                        ) : (
                          <div key={i1}>{langJson[v2]}</div>
                        )
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="header-la">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
          </svg>
          <div className="header-lang-list">
            {langData.map((v) => (
              <div key={v.value} onClick={()=> changeLang(v.value as LangMode)}>
                <span>{v.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  fill="currentColor"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"></path>
                </svg>
              </div>
            ))}
            <div></div>
          </div>
        </div>
        <div className="header-switch-theme" onClick={handleThemeModeChange}>
          <div>
            {themeMode === ColorSchemeMode.light ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="none"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path>
                <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
                <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
                <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path>
                <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path>
                <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path>
                <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="none"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
              </svg>
            )}
          </div>
        </div>
      </div>
      <div className="header-app">
        {!isModal ? (
          <div className="header-app-nav" onClick={() => setIsModal(!isModal)}>
            <div className="header-nav-top"></div>
            <div className="header-nav-middle"></div>
            <div className="header-nav-bottom"></div>
          </div>
        ) : (
          <div className="header-close" onClick={() => setIsModal(!isModal)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
            </svg>
          </div>
        )}
      </div>

      {isModal && (
        <div className="header-modal">
          <div className="header-modal-content">
            <div>
              {navData.map((v: any, i: number) =>
                v.list?.length > 0 ? (
                  <div
                    className="header-modal-nav bb"
                    key={i}
                    onClick={() => openList(v.id)}
                  >
                    <div className="header-modal-nav-cont">
                      <span>{v.title}</span>
                      <svg
                        width={15}
                        height={15}
                        stroke="currentColor"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={~openIds.indexOf(v.id) ? 'active' : ''}
                      >
                        <path d="M18.9,10.9h-6v-6c0-0.6-0.4-1-1-1s-1,0.4-1,1v6h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1v-6h6c0.6,0,1-0.4,1-1S19.5,10.9,18.9,10.9z"></path>
                      </svg>
                    </div>
                    {~openIds.indexOf(v.id) ? (
                      <div className="header-modal-list">
                        {v.list.map((v2: any, i2: number) =>
                          v2.list?.length > 0 ? (
                            <div key={i2}>
                              <div className="pad f12 color">{v2.title}</div>
                              {v2.list.map((v3: string, i3: number) => (
                                <div className="pad1 f13" key={i3}>
                                  {v3}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="pad1 f13" key={i2}>
                              {v2}
                            </div>
                          )
                        )}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <div className="header-modal-nav bb" key={i}>
                    {v.title}
                  </div>
                )
              )}
            </div>

            <div className="header-modal-theme-cont">
              <span>外观</span>
              <div
                className="header-switch-theme"
                onClick={handleThemeModeChange}
              >
                <div>
                  {themeMode === ColorSchemeMode.light ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="none"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"></path>
                      <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"></path>
                      <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"></path>
                      <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"></path>
                      <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"></path>
                      <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                      <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                      <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"></path>
                      <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"></path>
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="none"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"></path>
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
