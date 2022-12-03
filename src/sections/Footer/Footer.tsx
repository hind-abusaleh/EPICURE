import React from 'react'
import {SetWindowSize} from '../../helpers/index'
import DesktopFooter from './DesktopFooter/DesktopFooter'
import MobileFooter from './MobileFooter/MobileFooter';

export default function Footer() {

    const windowSize = SetWindowSize();

  return (
    <div>
      {windowSize < 769 ? 
          <MobileFooter/>
          :
          <DesktopFooter/>
      }
    </div>
  )
}