import React from 'react'
import { Navbar } from '../components/Navbar'
import { Main1 } from '../main/Main1'
import { Main2 } from '../main/Main2'
import { NavMenuMobile } from '../components/NavMenuMobile'
import { ToTop } from '../components/ToTop'
import { Space } from '../components/Space'
import { Main3 } from '../main/Main3'
import { Main4 } from '../main/Main4'
import { Main5 } from '../main/Main5'
import { Mainfooter } from '../main/Mainfooter'
export const Home = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <Main1/>
      <Main2></Main2>
      <Main3/>
      <Main4></Main4>
      <Main5></Main5>
      <Mainfooter/>
      <Space/>
      <ToTop/>
      <NavMenuMobile/>
    </div>
  )
}
