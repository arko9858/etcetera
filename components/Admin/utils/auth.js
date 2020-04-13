import { useEffect } from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

// export const login = (token ,expireDate) => {
//   cookie.set('token', token, { expires: 1 })
//   cookie.set('expireDate', expireDate, { expires: 1 })
//   Router.push('/admin/dashboard')
// }

export const auth = ctx => {
  const { token,expiredAt } = nextCookie(ctx)

  // If there's no token, it means the user is not logged in.
  if (!token || Date.now() > expiredAt) {
      console.log('check failed')
    if (typeof window === 'undefined') {
      ctx.res.writeHead(302, { Location: '/admin/login' })
      ctx.res.end()
    } else {
      Router.push('/admin/login')
    }
  }

  return token
}

export const logout = () => {
  cookie.remove('token')
  cookie.remove('expiredAt')
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now())
  Router.push('/admin/login')
}

export const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!')
        Router.push('/admin/login')
      }
    }

    useEffect(() => {
      window.addEventListener('storage', syncLogout)

      return () => {
        window.removeEventListener('storage', syncLogout)
        window.localStorage.removeItem('logout')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx)
    console.log('token')
    console.log(token)
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx))

    return { ...componentProps, token }
  }

  return Wrapper
}