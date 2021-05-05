import React from 'react'
import Joyride, {Props} from 'react-joyride'

export default function GuideTour({steps}: Props) {
  return <Joyride run={true} callback={() => null} steps={steps} />
}
