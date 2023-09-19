import Dashboard from "../Static/DashHeader"
import Sidebar from "../Static/Sidebar"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const Layout = () => {
  return (
    <div>
        <Dashboard/>
        <MainHold style= {{display: "flex"}}>
            <Sidebar/>
            <Outlet/>
        </MainHold>
    </div>
  )
}

export default Layout;

const MainHold = styled.div`
height: calc(100vh - 65px);
display: flex;
`;
