import React, {useState} from 'react';
import { Container } from './Index-style';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home/Home';

const Header = () =>{
    const [sidebar, setSideBar] = useState(false)

    const ShowSidebar = () => setSideBar(!sidebar)

    return(
        <Container>
            <FaBars onClick={ShowSidebar} />
            {sidebar && <Sidebar active={setSideBar} />}
        </Container>
        
    )
}

export default Header
