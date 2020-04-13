import cookie from "js-cookie"
import router from "next/router"

export default ()=>{
    cookie.remove('token')
    cookie.remove('expiredAt')
    router.push("/admin/login")
}