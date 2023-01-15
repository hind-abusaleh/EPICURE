import React from 'react'
import {SetWindowSize} from '../../helpers/index'
import DesktopHeader from './DesktopHeader/DesktopHeader'
import MobileHeader from './MobileHeader/MobileHeader';

export default function Header() {

    const windowSize = SetWindowSize();

  return (
    <div>
      {windowSize < 769 ? 
          <MobileHeader/>
          :
          <DesktopHeader/>
      }
      
    </div>
  )
}
