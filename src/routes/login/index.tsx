import './style.css'
import { FunctionalComponent, h } from 'preact'

const Login: FunctionalComponent = () => {
  return (
    <div>
      <h1 class="bg-black">Login</h1>
      <form>
        <label>
          <span>Token</span>
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default Login
