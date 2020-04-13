import React, {useState} from "react"
import {useRouter} from "next/router"
import {TextField, Avatar, Typography, Button} from "@material-ui/core"
import {LockOutlined} from "@material-ui/icons"
import classes from "./Login.module.css"
import axios from "../../../axios/axios"
import cookie from "js-cookie"

const Login = () => {
  const router = useRouter()
  //states
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("asdf")
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [canSubmit, setCanSubmit] = useState(true)
  const [buttonText, setButtonText] = useState("Submit")
  //functions
  const usernameOnChange = (e) => {
    setUsername(e.target.value)
  }
  const passwordOnChange = (e) => {
    setPassword(e.target.value)
  }

  const setCookies = (token, expiredAt,displayName) => {
    cookie.set("token", token, {expires: 1}) //expires in 1 day
    cookie.set("expiredAt", expiredAt, {expires: 1}) //expires in 1 day
    cookie.set("displayName", displayName, {expires: 1}) //expires in 1 day
  }

  const authenticate = () => {
    axios
      .post("/api/user", {username, password})
      .then((res) => {
        const token = res.data.token
        const expiredAt = res.data.expiredAt
        const displayName = res.data.displayName
        setCookies(token, expiredAt,displayName)
        router.push("/admin/dashboard")

        //you should not reach these code
        // setButtonText("Submit")
        // setCanSubmit(true)
      })
      .catch((err) => {
        setErrorMsg(err.response.data || "Login failed")
        setShowErrorMsg(true)
        setButtonText("Submit")
        setCanSubmit(true)
      })
  }

  const onSubmit = () => {
    if (canSubmit) {
      setCanSubmit(false)
      setButtonText("Authenticating...")
      authenticate()
    }
  }

  //components
  let errorMessage = null
  if (showErrorMsg) {
    errorMessage = (
      <Typography style={{width: "100%", padding: "4px 0"}} color="error">
        {" "}
        - {errorMsg}
      </Typography>
    )
  }
  return (
    <div className={classes.root}>
      <Avatar>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      {errorMessage}
      <form
        onSubmit={(event) => {
          event.preventDefault()
          onSubmit()
        }}>
        <TextField
          variant="outlined"
          required
          margin="normal"
          fullWidth
          label="Username"
          autoComplete="off"
          autoFocus
          value={username}
          onChange={usernameOnChange}
        />
        <TextField
          style={{marginTop: 8}}
          variant="outlined"
          required
          fullWidth
          label="Password"
          autoComplete="off"
          type="password"
          value={password}
          onChange={passwordOnChange}
        />
        <Button
          disabled={!canSubmit}
          style={{marginTop: 16}}
          fullWidth
          size="large"
          color="primary"
          variant="contained"
          type="submit"
          onClick={onSubmit}>
          {buttonText}
        </Button>
      </form>
    </div>
  )
}
export default Login
