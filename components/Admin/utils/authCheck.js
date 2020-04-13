import nextCookie from "next-cookies"
import cookie from "js-cookie"


const authCheck = (ctx) => {
  // const {token, expireDate} = nextCookie(ctx)

  // if (!token || Date.now() > expireDate) {
  //   console.log("auth check failed")
  //   if (typeof window === "undefined") {
  //     ctx.res.writeHead(302, {Location: "/login"})
  //     ctx.res.end()
  //   } else {
  //     router.push("/admin/login")
  //   }
  // } else {
  //   console.log("auth check success")
  //   router.push("/admin/dashboard")
  // }
}

export default authCheck
