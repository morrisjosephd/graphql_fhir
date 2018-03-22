import React from 'react'
import Button from './generic-fields/generic-button'
import styled from 'styled-components'

const FormButtonSection = styled.div`
  height: 4.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
  width: 10rem;
`

export default ({ clearForm, save }) => (
  <FormButtonSection>
    <ButtonWrapper>
      <Button alt={'true'} displayText={'Clear'} onClick={clearForm} />
    </ButtonWrapper>
    <ButtonWrapper>
      <Button displayText={'Save'} onClick={save} />
    </ButtonWrapper>
  </FormButtonSection>
)
