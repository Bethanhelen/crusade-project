import Inspect from 'vite-plugin-inspect'
import {resolve} from 'path'

export default{
    plugins:[Inspect()],
    build:{
        rollupOptions : {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),
                programs: resolve(__dirname, 'programs/index.html')
            }
        }
    }
}