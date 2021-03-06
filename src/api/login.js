import service from '@/utils/request'


//获取验证码接口
export function GetSms(data){
    return service.request({
        method: "post",
        url: "/getSms/",
        data
    })
}


//注册接口
export function SignIn(data){
    return service.request({
        method: "post",
        url: "/register/",
        data
    })
}

//登录接口
export function Login(data){
    return service.request({
        method: "post",
        url: "/login/",
        data
    })
}

//添加一级菜单

export function addFirstCategory(data){
    return service.request({
        method: "post",
        url: "/news/addFirstCategory/",
        data
    })
}

//添加子集分类

export function addChildrenType(data){
    return service.request({
        method: "post",
        url: "/news/addChildrenCategory/",
        data
    })
}



//获取信息分类

export function getCategory(data){
    return service.request({
        method: "post",
        url: "/news/getCategory/",
        data
    })
}


//获取全部信息分类

export function getCategoryAll(data){
    return service.request({
        method: "post",
        url: "/news/getCategoryAll/ ",
        data
    })
}

//删除一级分类  

export function delCategory(data){
    return service.request({
        method: "post",
        url: "/news/deleteCategory/",
        data
    })
}

//修改一级分类  

export function editCategory(data){
    return service.request({
        method: "post",
        url: "/news/editCategory/",
        data
    })
}

//获取当前登录用户角色

export function getUserRole(data={}){
    return service.request({
        method: "post",
        url: "/userRole/",
        data
    })
}

