import React from 'react'
import { Dropdown } from '../../../styles/components'
import colors from '../../../styles/colors'
import styled from 'styled-components'
import SVGInline from 'react-svg-inline'
import dropdownArrow from '../../../assets/dropdown-arrow.svg'

const GenericDropdown = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DropdownArrow = styled.div`
  position: absolute;
  height: 100%;
  width: 0.75rem;
  top: 0;
  right: 0.5rem;
  font-size: 0px;

  display: flex;
  flex-direction: row;
  align-items: center;
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
    let { alt, options } = this.props
    const colorPalette = this.getColor(alt)

    return (
      <GenericDropdown>
        <Dropdown textColor={colorPalette.text} backgroundColor={colorPalette.background} onChange={event => this.onChange(event)} value={this.state.value}>
          <option value='' disabled>Select One</option>
          {options.map(this.createOption)}
        </Dropdown>
        <DropdownArrow>
          <SVGInline svg={dropdownArrow} fill={colorPalette.text} width={'100%'} />
        </DropdownArrow>
      </GenericDropdown>
    )
  }

  onChange (event) {
    this.setState({ value: event.target.value })
    this.props.onChange(event.target.value)
  }

  createOption ({ text, value }, index) {
    return <option key={text + index} value={value}>{text}</option>
  }

  getColor (alt) {
    return {
      background: alt ? colors.brightOrange : colors.formField,
      text: alt ? colors.white : colors.black
    }
  }

  getValue (props) {
    return props.value === undefined ? '' : props.value
  }
}
