import React from 'react'
import colors from '../../styles/colors'
import styled from 'styled-components'
import phoenixImage from '../../assets/phoenix.png'
import { Input } from '../../styles/components'
import Button from './generic-fields/generic-button'

const TopBar = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  box-shadow: 0 2px 20px 0 ${colors.primaryRed};
`

const ImageSection = styled.div`
  height: 100%;
  width: 90px;
`

const GuyFox = styled.img`
  height: 80%;
  width: 80%;
  padding: 10%;
  flex: 0 0 auto;
  margin-right: 1rem;
`

const SearchSection = styled.div`
  flex-grow: 1;
  padding: 0 15%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchInput = Input.extend`
  margin-right: 1rem;
`

const SearchButtonWrapper = styled.div`
  flex: 1 0 7rem;
`

let id

const onInputChanged = event => {
  id = event.target.value
}

export default ({ search }) => (
  <TopBar>
    <ImageSection>
      <GuyFox src={phoenixImage} />
    </ImageSection>
    <SearchSection>
      <SearchInput className='search-input' placeholder={'Enter phoenix id'} onBlur={event => onInputChanged(event)} />
      <SearchButtonWrapper>
        <Button className='search-button' displayText={'Search'} onClick={() => search(id)} />
      </SearchButtonWrapper>
    </SearchSection>
    <ImageSection />
  </TopBar>
)
