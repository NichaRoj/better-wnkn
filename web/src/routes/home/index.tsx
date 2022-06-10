import { FunctionalComponent, h } from 'preact'
import AuthWrapper from '../../components/auth-wrapper'
import style from './style.css'

const Home: FunctionalComponent = () => {
  return (
    <AuthWrapper>
      <div class={style.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>
    </AuthWrapper>
  )
}

export default Home
