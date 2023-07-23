import UserInfo from './components/UserInfo'
import Quests from './components/Quests'
import Milestones from './components/Milestones'

export default function Home() {
  return (
    <main className="flex w-full h-full items-center justify-center">
      <div className='flex justify-between w-[1470px] h-[561px] px-[10px]'>
        <UserInfo />
        <div className='flex flex-col justify-between w-[calc(76%-10px)]'>
          <Quests />
          <Milestones />
        </div>
      </div>
    </main>
  )
}
