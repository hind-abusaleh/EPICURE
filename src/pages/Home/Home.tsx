
import React from 'react'
import {SetWindowSize} from '../../helpers/index'
import DesktopHome from './DesktopHome/DesktopHome'
import MobileHome from './MobileHome/MobileHome';

export default function HomePage() {

    const windowSize = SetWindowSize();

  return (
    <div>
      {windowSize < 769 ? 
          <MobileHome/>
          :
          <DesktopHome/>
      }
    </div>
  )
}