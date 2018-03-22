import colors from './colors'
import fontWeights from './font-weights'
import styled from 'styled-components'

const inputBoxShadow = (firstColor, secondColor) => {
  const boxShadow = `inset 0 0 3px 0 ${firstColor}`
  const boxShadowFade = secondColor ? `, 0 0 6px 0 ${secondColor}` : ''
  return boxShadow + boxShadowFade
}

const getButtonColor = (props, primaryColor, altColor, disabledColor) => {
  if (props.disabled) { return disabledColor }
  if (props.alt) { return altColor }
  return primaryColor
}

const H1 = styled.div`
  color: ${props => props.alt ? colors.white : colors.primaryRed}
  font-size: 2.375rem;
  font-weight: ${fontWeights.extraBold}
`

const H2 = styled.div`
  color: ${props => props.alt ? colors.white : colors.brightOrange}
  font-size: 1.75rem;
  font-weight: ${fontWeights.semiBold}
`

const H3 = styled.div`
  color: ${props => props.alt ? colors.white : colors.brightOrange}
  font-size: 1.25rem;
  font-weight: ${fontWeights.bold}
`

const Body = styled.div`
  color: ${props => props.alt ? colors.white : colors.black}
  font-size: 1rem;
  font-weight: ${fontWeights.light}
`

const TextLink = styled.a`
  color: ${colors.brightOrange}
  font-size: 1rem;
  font-weight: ${fontWeights.semiBold}
`

const FieldLabel = styled.div`
  color: ${colors.black}
  font-size: 0.75rem;
  font-weight: ${fontWeights.light}
`

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => getButtonColor(props, colors.brightOrange, colors.brightYellow, colors.lightGray)};
  color: ${colors.white};
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    background-color: ${props => getButtonColor(props, colors.hoverOrange, colors.hoverYellow, colors.lightGray)};
  }
`

const Input = styled.input`
  width: calc(100% - 1.25rem);
  padding: 0.625rem;
  border-radius: 5px;
  color: ${props => props.disabled ? colors.primaryGray : colors.black};
  background-color: ${colors.formField};
  box-shadow: ${props => props.error ? inputBoxShadow(colors.boxShadowGray, colors.alertRed) : inputBoxShadow(colors.boxShadowGray)};
  font-weight: ${fontWeights.light};

  :focus {
    box-shadow: ${inputBoxShadow(colors.boxShadowGray, colors.brightOrange)}
  }

  :placeholder {
    color: ${colors.primaryGray};    
  }
`

const Label = styled.div`
  color: ${props => props.disabled ? colors.primaryGray : colors.primaryRed};
  font-weight: ${fontWeights.bold};

  :after {
    content: ${props => props.required ? "'*'" : ''};
    color: ${colors.alertRed};
    margin-left: 4px;
  }
`

const Checkbox = styled.input`
  appearance: none;
  border: 1px solid ${props => props.disabled ? colors.lightGray : colors.primaryRed};
  border-radius: 50%;
  cursor: pointer;

  :checked {
    background-color: ${colors.primaryRed}
  }
`

const Dropdown = styled.select`
  width: 100%;
  appearance: none;
  padding: 0.625rem;
  border: 1px solid ${colors.lightGray};
  border-radius: 5px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};
`

const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  border-radius: 50%;
  color: ${props => props.filled ? props.secondaryColor : props.primaryColor};
  background-color: ${props => props.filled ? props.primaryColor : props.secondaryColor};
  border: 1px solid ${props => props.primaryColor};
`

export { Button, Input, Label, H1, H2, H3, Body, TextLink, FieldLabel, Dropdown, Checkbox, Circle }
