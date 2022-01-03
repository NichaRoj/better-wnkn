import { Component } from 'preact'
import { route } from 'preact-router'

type Props = {
  to: string
}

export default class Redirect extends Component<Props> {
  componentWillMount() {
    route(this.props.to, true)
  }

  render() {
    return null
  }
}
