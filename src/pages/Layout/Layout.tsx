import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CaretDownOutlined,
    HomeOutlined,
    TagOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { NavLink as Link, useLocation, Outlet, useNavigate } from "react-router-dom"
import { TypeMenu } from 'src/@types/test';
import HeaderOpt from "./components/HeaderOpt";
import { useAppDispatch, useAppSelector } from '../../hooks'
import { routes } from '../../router/routes'

const { Header, Sider, Content } = Layout;
const LayoutIndex = () => {
    const u = useLocation()
    const navigate = useNavigate()
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    // redirect
    useEffect(() => {
        if (u.pathname === '/') {
            navigate('/home', { replace: true })
        }
        // if(!user.info){
        //     navigate('/login', { replace: true })
        // }
    }, [])

    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        if (collapsed) {
        console.log(1111);
        
        }
    }, [collapsed])

    // click-menu navigate level1 or invalid -> noop
    const handleClickMenu = (e: TypeMenu) => {
        if (u.pathname === e.key) return
        navigate(e.key)
    }

    const handleOpenChange = (e: any) => {
        console.log(e);
    }


    return (
        <div >
            <Layout className='w-screen h-screen '>
                <div className="logo" />
                <Sider  trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        mode="inline"
                        onClick={handleClickMenu}
                        defaultSelectedKeys={['home']}
                        items={routes}
                        onOpenChange={handleOpenChange}
                        expandIcon={<CaretDownOutlined />}
                    />
                </Sider>
                <Layout className="site-layout"
                >
                    <Header
                        className="site-layout-background flex justify-between items-center bg-white dark:"
                        style={{
                            padding: 0,
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger ml-4 bg-white',
                            onClick: () => { setCollapsed(!collapsed) },
                        })}
                       <HeaderOpt></HeaderOpt>
                    </Header>
                    <Content
                        className="site-layout-background "
                        style={{
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
};

export default LayoutIndex;