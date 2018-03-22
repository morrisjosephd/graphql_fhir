import React from 'react'
import { Input, Label } from '../../../styles/components'
import styled from 'styled-components'

const InputWithTitle = styled.div`
  width: 100%;
`

const LocalLabel = styled(Label)`
  margin-bottom: 0.5rem;
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
    let { title, placeholder, disabled, error, required } = this.props

    return (
      <InputWithTitle>
        <LocalLabel disabled={disabled} error={error} required={required}>{title}</LocalLabel>
        <Input disabled={disabled} error={error} required={required} placeholder={placeholder} onChange={event => this.onChange(event)} value={this.state.value} onBlur={() => this.onBlur()} />
      </InputWithTitle>
    )
  }

  onChange (event) {
    this.setState({ value: event.target.value })
  }

  onBlur () {
    this.props.onChange(this.state.value)
  }

  getValue (props) {
    return props.value === undefined ? '' : props.value
  }
}
