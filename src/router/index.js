import VueRouter from 'vue-router'
import Login from '../components/Login'
import Productor from '../components/Productor'
import CategoryManage from '../components/CategoryManage'
import Classify from '../components/Classify'
import Table from '../components/Table'
import Ordered from '../components/Ordered'
import Shopped from '../components/Shopped'
import Food from '../components/Food'
import Home from '../components/Home'
import Tables from '../components/Tables'
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    // mode:'history',
    routes:[
        {
            name:'Login',
            path:'/Login',
            component:Login,
        },
        {
            name:'Productor',
            path:'/Productor',
            component:Productor,
            children:[
                {
                    name:'table',
                    path:'Table',
                    component:Table
                },
                {
                    name:'ordered',
                    path:'Ordered',
                    component: Ordered
                },
                // {
                //     name:'shopped',
                //     path:'Shopped',
                //     component: Shopped
                // }
            ],
            
        },
        {
            name:'categoryManage',
            path:'/CategoryManage',
            component:CategoryManage,
            children:[
                {
                    name:'classify',
                    path:'Classify',
                    component:Classify,
                    props({query:{cla}}){
                        return {cla}
                    }
                },
                {
                    name:'food',
                    path:'Food',
                    component:Food
                },
                {
                    name:'home',
                    path:'Home',
                    component:Home
                },
                {
                    name:'tables',
                    path:'Tables',
                    component:Tables
                },
            ],
                redirect:'/CategoryManage/Classify'
        },
        {
            path:'/',
            redirect:'/Login'
        }
    ]
})
export default router

