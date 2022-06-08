import { FunctionalComponent, h } from 'preact'
import AuthWrapper from '../../components/auth-wrapper'
import style from './style.css'

const Review: FunctionalComponent = () => {
  return (
    <AuthWrapper>
      <div class={style.home}>
        <h1>Review</h1>
        <p>This is the Review component.</p>
      </div>
    </AuthWrapper>
  )
}

export default Review
