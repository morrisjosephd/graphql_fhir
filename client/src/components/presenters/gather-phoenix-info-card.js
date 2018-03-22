import React from 'react'
import colors from '../../styles/colors'
import { H2 } from '../../styles/components'
import styled from 'styled-components'
import PhoenixColorDropdown from '../containers/phoenix-form-fields/color-dropdown'
import PhoenixIsAliveCheckbox from '../containers/phoenix-form-fields/is-alive-checkbox'
import PhoenixNameInput from '../containers/phoenix-form-fields/name-input-container'

const InfoCard = styled.div`
  width: calc(100% - 3rem);
  padding: 2.5rem 1.5rem;
  margin: 2rem 0;
  border-radius: 20px;
  background-color: ${colors.white}
  border: 1px solid ${colors.lightGray};
  box-shadow: 0 0 10px 0 ${colors.primaryRed};
`

const Title = styled(H2)`
  margin-bottom: 2rem;
`

const Row = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Separator = styled.div`
  width: 2.5rem;
`

export default () => (
  <InfoCard>
    <Row>
      <PhoenixNameInput required={'true'} title={'Name'} />
      <Separator />
      <PhoenixColorDropdown required={'true'} title={'Color'} />
    </Row>

    <PhoenixIsAliveCheckbox title={'Currently Alive'} />
  </InfoCard>
)
