
import {  useState } from "react"
import { Input, Tooltip, Button, message } from 'antd';
import SliderLogin from "../../components/SliderLogin/SliderLogin";
import { UserOutlined, InfoCircleOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../hooks'
import {fetchUserById } from '/src/store/user'


/*
 实现滑动登录，语音登录，及扫码登录
*/

const ikunList = ['kun', '坤', '只因', '鸡', '篮球', '油饼', '荔枝', '打鸣','活珠子','rap','跳']

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sliderValue, handleSliderProp] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogin = async() => { 
    const isRealKun = ikunList.map(item => { 
       return username.includes(item)
    })
    
    if (!isRealKun.some(item => item)) { 
     return messageApi.warning('你不是真爱粉！禁止登录')
    }

    if (!password.trim()) { 
     return messageApi.warning('密码不能为空')
    }
    if (!sliderValue) { 
     return messageApi.warning('请通过滑块验证')
    }
    await dispatch(fetchUserById())
    navigate('/home', { replace: true });
    handleSliderProp(false)
    return messageApi.success('卧槽，真爱粉！')
  }
  return <div className="w-screen h-screen flex">
    { contextHolder}
    <img className="w-4/6 h-screen" src="/src/assets/images/login/In_love.png" alt="" />
    <div className="pt-[80px]">
      <div className="text-indigo-600 text-3xl">欢迎登录坤你太美管理系统</div>
      {/* 这里得来个什么东西 */}
      {/* 登录框 */}
      <div className="pt-[80px]">
        <Input
          className="w-[360px] h-[40px]"
          placeholder="Enter your username"
          value={username}
          onChange={ (e)=> setUsername(e.target.value)}
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="你的用户名证明你是ikun才行">
              <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />

        <Input.Password
         className="w-[360px] h-[40px] mt-4"
          placeholder="Enter your password"
          value={password}
          onChange={ (e)=> setPassword(e.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          />
        
        <SliderLogin
          classNameValue="mt-4 w-[360px] h-[40px]"
          handleSliderProp={(e: boolean) => handleSliderProp(e)}>
        </SliderLogin>            


        <Button
          className="w-[360px] h-[40px] mt-4 bg-indigo-600 hover:bg-indigo-200" type="primary"
          onClick={handleLogin}        
        >登录</Button>
      </div>
    </div>
  </div>
}

export default Login;