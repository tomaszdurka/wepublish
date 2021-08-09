import React, {ReactNode, useState} from 'react'
import {ShepherdTour} from 'react-shepherd'
import {options, tourSteps, TourStartPoints} from './tourSteps'

export const TourContext = React.createContext<any>({})

export interface ShepherdWrapperProps {
  children?: ReactNode
  tourVersion: string
}

export function ShepherdWrapper({children}: ShepherdWrapperProps) {
  const [tourVersion, setTourVersion] = useState<string>(
    localStorage.getItem('tourVersion') || TourStartPoints.Initial
  )

  return (
    <TourContext.Provider value={{tourVersion, setTourVersion}}>
      <ShepherdTour steps={tourSteps} tourOptions={options}>
        {children}
      </ShepherdTour>
    </TourContext.Provider>
  )
}
