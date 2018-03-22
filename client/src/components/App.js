import React from 'react'
import MainContent from './containers/main-content-container'
import TopBar from './containers/top-bar-container'
import styled from 'styled-components'

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const Header = styled.div`
  height: 3.75rem;
  width: 100%;
  z-index: 10;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 3.75rem);
`

const MainContentWrapper = styled.div`
  height: 100%; 
  width: 100%;
`

export default () => (
  <App>
    <Header>
      <TopBar />
    </Header>
    <Body>
      <MainContentWrapper>
        <MainContent />
      </MainContentWrapper>
    </Body>
  </App>
)
