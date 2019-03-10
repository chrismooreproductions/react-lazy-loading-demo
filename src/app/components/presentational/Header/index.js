import * as React from 'react'

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Lazy Loading Demo
        </a>
      </nav>
    )
  }
}

export default Header