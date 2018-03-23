import React from 'react'
import GatherInfoCard from './gather-phoenix-info-card'
import PhoenixFormButtonSection from '../containers/phoenix-form-fields/phoenix-form-buttons-container'
import { H2 } from '../../styles/components'
import colors from '../../styles/colors'
import styled from 'styled-components'

const MainContent = styled.div`
  height: 100%;
  background-color: ${colors.white};
  overflow-y: scroll;
`

const InnerContent = styled.div`
  padding: 1.5rem 2.5rem;
`

const InstructionalText = H2.extend`
  text-align: center;
`

const createForm = () => (
  <MainContent className='main-content'>
    <InnerContent>
      <InstructionalText>Enter Phoenix Data</InstructionalText>
      <GatherInfoCard />
      <PhoenixFormButtonSection />
    </InnerContent>
  </MainContent>
)

export default ({showForm}) => showForm && createForm()
