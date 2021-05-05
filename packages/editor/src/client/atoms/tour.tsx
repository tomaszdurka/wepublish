import React from 'react'
import Joyride from 'react-joyride'

export default function GuideTour(steps: any) {
  console.log('steps ', steps)

  return <Joyride run={true} callback={() => null} steps={steps} />
}
