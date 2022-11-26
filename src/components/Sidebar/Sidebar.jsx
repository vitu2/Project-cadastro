import React from 'react'
import { Container, Content } from './styles'
import {FaTimes, FaHome} from 'react-icons/fa'
import {MdAppRegistration} from 'react-icons/md'

import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={MdAppRegistration} Text="Cadastro" />
      </Content>
    </Container>
  )
}

export default Sidebar