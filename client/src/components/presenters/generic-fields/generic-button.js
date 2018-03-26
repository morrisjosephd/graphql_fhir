import React from 'react'
import { Button } from '../../../styles/components'

const GenericButton = Button.extend`
  height: 50px;
  width: 90%;
  padding: 0 5%;
`

export default ({ displayText, onClick, alt, disabled }) => (
  <GenericButton onClick={onClick} alt={alt} disabled={disabled}>{displayText}</GenericButton>
)
