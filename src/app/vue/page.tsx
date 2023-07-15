'use client';
import React, { useEffect, useState } from 'react'
import './page.css'
import Header from './header'
import Desc from './desc'
import Sponsors from './sponsors'
import Site from './site';

export enum ColorSchemeMode {
  light = 'light',
  dark = 'dark'
}

function Vue() {
  /** 也可以作为全局状态 */
  const [themeMode, setThemeMode] = useState<ColorSchemeMode | null>(null);

  const changeMode = (mode:ColorSchemeMode) => {
    setThemeMode(mode);
    sessionStorage.setItem('themeMode',mode);
    document.querySelector('html')?.setAttribute('theme',mode);
  }
  useEffect(() => {
    const mode = sessionStorage.getItem('themeMode');
    if(mode) {
      setThemeMode(mode as ColorSchemeMode);
      document.querySelector('html')?.setAttribute('theme',mode);
    } else {
      const isDark = !!window.matchMedia('(prefers-color-scheme: dark)').matches;
      const newThemeMode = isDark ? ColorSchemeMode.dark : ColorSchemeMode.light;
      setThemeMode(newThemeMode);
      document.querySelector('html')?.setAttribute('theme',newThemeMode);
    }
    
  }, []);
  return (
    <div>
      <Header themeMode={themeMode} changeMode={changeMode} />
      <Desc />
      <Sponsors themeMode={themeMode} />
      <Site />
    </div>
  )
}

export default Vue