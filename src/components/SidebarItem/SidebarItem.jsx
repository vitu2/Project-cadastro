import React from 'react'
import { Container } from './styles'
import { Link } from "react-router-dom";
import {TesteLink} from './styles'

const SidebarItem = ({ Icon, Text}) => {
  return (
    <Container>
      <Icon />
      <TesteLink to={Text}>{Text}</TesteLink>      
    </Container>
  )
}

export default SidebarItem