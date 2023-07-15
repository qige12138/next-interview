'use client';
import React, { useEffect, useState } from 'react'
import './page.css'
import Header from './header'
import Desc from './desc'
import Sponsors from './sponsors'
import Site from './site';
import { getDictionary } from '../lang/dictionaries'

export enum ColorSchemeMode {
  light = 'light',
  dark = 'dark'
}
export enum LangMode {
  en = 'en',
  ch = 'ch'
}

function Vue() {
  /** 也可以作为全局状态 */
  const [themeMode, setThemeMode] = useState<ColorSchemeMode | null>(null);
  const [langJson,setLangJson] = useState({})

  const getDict = async (lang:LangMode) => {
    const dict = await getDictionary(lang)
    setLangJson(dict);
    sessionStorage.setItem('lang',lang);
  }

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

  useEffect(()=> {
    const lang = sessionStorage.getItem('lang');
    getDict((lang || 'ch') as LangMode);
  },[])
  
  return (
    <div>
      <Header langJson={langJson} themeMode={themeMode} changeMode={changeMode} changeLang={getDict} />
      <Desc />
      <Sponsors themeMode={themeMode} />
      <Site />
    </div>
  )
}

export default Vue