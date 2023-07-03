
interface  PropsType {
    showSettings: boolean
}

const Settings = (props: PropsType)=>{
    const {showSettings} = props
    if(showSettings){
        return <>
            我是设置
        </>
    }else{
        return  <></>
    }

}


export  default  Settings