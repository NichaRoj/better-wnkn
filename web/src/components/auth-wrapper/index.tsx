import { FunctionalComponent, h } from 'preact'
import Redirect from '../redirect'
import style from './style.css'

const AuthWrapper: FunctionalComponent = ({ children }) => {
  const isLoggedIn = false

  if (!isLoggedIn) return <Redirect to="/login" />

  return <div class={style.auth}>{children}</div>
}

export default AuthWrapper
