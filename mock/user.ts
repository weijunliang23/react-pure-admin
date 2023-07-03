
import { MockMethod} from 'vite-plugin-mock'
export default [
    {
        url: '/api/getUser',
        method: 'get',
        response: ({ query }) => {
            return {
                code: 10000,
                data: {
                    nickname: '张家辉',
                    username: 151,
                    userID:9527,
                    profile: 'https://avatars.githubusercontent.com/u/90106262?s=40&v=4'
                },
            }
        },
    }
] as MockMethod[]