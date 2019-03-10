import * as React from 'react'
import { render } from 'react-dom'

import App from './app'

class Root extends React.Component {
  render() {
		return (
			<App />
		)
	}
}

render(<Root />, document.getElementById('root'))