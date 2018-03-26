import React from 'react'
import { Label } from '../../../styles/components'
import styled from 'styled-components'
import Dropdown from './generic-dropdown'

const DropdownWithTitle = styled.div`
  width: 100%;
`

const LocalLabel = Label.extend`
  margin-bottom: 0.5rem;
`

export default ({ title, alt, required, value, onChange, options }) => (
  <DropdownWithTitle>
    <LocalLabel className='dropdown-label' required={required}>{title}</LocalLabel>
    <Dropdown className='dropdown' alt={alt} options={options} onChange={onChange} value={value} />
  </DropdownWithTitle>
)
