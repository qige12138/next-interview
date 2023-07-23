/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Next book','sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'linear-gradient(180deg, var(--badges-btn-bg-l) 0%, var(--badges-btn-bg-r) 100%)',
        'tab-box-shadow':'linear-gradient(180deg, var(--tab-shadow-t-color) 0%, var(--box-bg-color) 100%);'
      },
      backgroundColor:{
        basics:"var(--base-bg-color)",
        box:"var(--box-bg-color)",
        rounded:"var(--round-bg-color)",
        rounded1:"var(--round-bg-color-d)",
        claimed:'var(--quest-btn-bg-color)',
        'claimed-d':'var(--quest-btn-bg-color-d)',
        'quests-box-hover':'var(--solid-color)',
        'tab-active':'var(--tab-border-active-color)',
        'tab-data':'var(--tab-data-bg-color)',
        schedule:'var(--schedule-bg-color)',
        'schedule-active':'var(--schedule-bg-active-color)'
      },
      colors:{
        basics:"var(--base-font-color)",
        undertone:'var(--undertone-color)',
        'undertone-d':'var(--undertone-color-d)',
        quests:"var(--quests-svg-color)",
        'quests-d':"var(--quests-svg-color-d)",
        'quests-box':'var(--quests-circle-color)',
        'quests-box-hover':'var(--quest-box-hover-color)',
        'quests-box-active':'var(--quests-circle-color-active)',
        claimed:'var(--quest-btn-color)',
        'claimed-d':'var(--quest-btn-color-d)',
        tab:'var(--tab-color)',
        'tab-data':'var(--solid-color)',
        'tab-svg-color':'var(--tab-data-bg-color)',
        'tab-svg':'var(--tab-data-svg-color)',
      },
      borderColor:{
        undertone:'var(--undertone-color)',
        'quests-box':'var(--quests-circle-color)',
        claimed:'var(--quest-btn-color)',
        tab:'var(--tab-border-color)',
        'tab-active':'var(--tab-border-active-color)',
        
      }
    },
  },
  plugins: [],
}
