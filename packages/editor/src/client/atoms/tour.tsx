import React from 'react'
import Joyride, {Props} from 'react-joyride'

export default function GuideTour({steps}: Props) {
  return (
    <Joyride
      debug={true}
      run={true}
      callback={() => null}
      continuous
      showProgress={true}
      steps={steps}
    />
  )
}
