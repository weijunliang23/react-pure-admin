import React, {useEffect, useState} from 'react';
import { useAppDispatch, useAppSelector } from '/src/hooks'
import {fetchUserById} from '/src/store/user'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space, Avatar } from 'antd';
import type {ItemType} from 'antd';
import {SettingOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import Settings from "./Settings";

const App: React.FC = () => {
        const user = useAppSelector(state => state.user)
        const dispatch = useAppDispatch()
        const navigate = useNavigate()
        const [showSettings,setShowSetting] = useState(false)
        useEffect(()=>{
            dispatch(fetchUserById())
        },[])
        setTimeout(()=>{
            console.log(user.info)
        },10)

        // 方法区
        const handleLogout = ()=>{
            console.log('我是退出登录');
            navigate('/login', { replace: true })
        }

        const handleSettings = ()=>{
            setShowSetting(e=> !e)
        }
        const items: ItemType[] = [
            {
                key: '1',
                label: (<div onClick={handleLogout}>退出系统</div>),
            },
        ];
        return <div>
            <Dropdown trigger={['click']} className="mr-4" menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Avatar src={user?.info?.profile} />
                        <span>{user?.info?.nickname}</span>
                    </Space>
                </a>
            </Dropdown>
            <Space className="mr-4">
                <SettingOutlined onClick={handleSettings} />
            </Space>
            <Settings showSettings={showSettings}></Settings>
        </div>
    }
;

export default App;