import { FunctionalComponent, h } from 'preact'
import baseroute from '../../baseroute'
import Redirect from '../redirect'
import style from './style.css'

const AuthWrapper: FunctionalComponent = ({ children }) => {
  const isLoggedIn = false

  if (!isLoggedIn) return <Redirect to={`${baseroute}/login`} />

  return <div class={style.auth}>{children}</div>
}

export default AuthWrapper
