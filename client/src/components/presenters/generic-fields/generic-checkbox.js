import React from 'react'
import { TextLink, Checkbox } from '../../../styles/components'
import colors from '../../../styles/colors'
import styled from 'styled-components'

const GenericCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`

const Label = styled(TextLink)`
  color: ${props => props.disabled ? colors.lightGray : colors.primaryRed};
`

const LocalCheckbox = styled(Checkbox)`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
`

export default class extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: this.getValue(props) }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: this.getValue(nextProps) })
  }

  render () {
    let { title, disabled } = this.props

    return (
      <GenericCheckbox>
        <LocalCheckbox type={'checkbox'} disabled={disabled} onChange={event => this.onChange(event)} checked={this.state.value} />
        <Label>{title}</Label>
      </GenericCheckbox>
    )
  }

  onChange (event) {
    this.setState({ value: event.target.checked })
    this.props.onChange(event.target.checked)
  }

  getValue (props) {
    return props.value || false
  }
}
