import React, { useState } from 'react'
import styled from 'styled-components'
import {CgMenuGridO} from "react-icons/cg"
import {LiaSearchSolid} from "react-icons/lia"
import {CiSettings} from "react-icons/ci"
import {AiOutlineQuestion} from "react-icons/ai"
import {VscMegaphone} from "react-icons/vsc"

const DashHeader = () => {
  const [show, setShow] = useState(false)

  const Dropdown = () => {
    setShow(!show)
  }
  return (
    <div>
      <Header>
        {show? (
          <SettingsDD>

          </SettingsDD>
        ): null}
        <HeaderWrapper>
          <ToDoNav>
            <CgMenuGridO />
            <Writeup>To Do</Writeup>
          </ToDoNav>
          <SearchNav>
            <Search>
              <Btnicon> <LiaSearchSolid/> </Btnicon>
              <Input placeholder='Search'/>
            </Search>
          </SearchNav>
          <IconsNav>
            <I onClick={Dropdown}><CiSettings/></I>
            <II onClick={Dropdown}><AiOutlineQuestion/></II>
            <III onClick={Dropdown}><VscMegaphone/></III>
            <ProfileName onClick={Dropdown}>
              PJ
            </ProfileName>
          </IconsNav>
        </HeaderWrapper>
      </Header>
    </div>
  )
}

export default DashHeader


const ProfileName = styled.div`
border: 1px solid white;
border-radius: 50%;
padding: 8px 10px;
font-size: 17px;
display: flex;
justify-content: center;
align-items: center;
`;
const III = styled.div`

`;
const II = styled.div`

`;
const I = styled.div`

`;
const IconsNav = styled.div`
height: 60px;
width: 35%;
font-size: 22px;
font-weight: bold;
color: white;
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
`;
const Input = styled.input`
outline: none;
border: none;
flex: 1;
`;
const Btnicon = styled.div`
color: #325cdb;
font-size: 22px;
margin-left: 5px;
`;
const Search = styled.div`
height: 40px;
width: 450px;
color: black;
background-color: white;
border-radius: 5px;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
`;
const SearchNav = styled.div`
height: 60px;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
`;
const Writeup = styled.div`
font-size: 17px;
font-weight: bold;
`;
const ToDoNav = styled.div`
height: 60px;
width: 20%;
font-size: 22px;
font-weight: bold;
color: white;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 20px;
`;
const SettingsDD = styled.div`
height: calc(100vh - 65px);
width: 350px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
background-color: lawngreen;
position: absolute;
top: 65px;
right: 0;
transition: right 0.3s ease;
`;
const HeaderWrapper = styled.div`
height: 60px;
width: 97%;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Header = styled.div`
height: 65px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(37,100,207);
position: relative;
`;