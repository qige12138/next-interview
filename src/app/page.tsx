import Link from 'next/link'
import './page.css'

function Homepage() {
  return (
    <div className='home'>
      <div><Link href="/vue">vue</Link></div>
      <div><Link href="/pokemon">pokemon</Link></div>
    </div>
  )
}

export default Homepage