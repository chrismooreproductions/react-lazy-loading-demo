import * as React from 'react'

class Title extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Welcome!</h1>
          <p>Thank you for taking the time to look over this code demo</p>
          <p>This is a simple app to demonstrate code splitting and the lazy loading of a component using React lazy, Suspense and Webpack 4.</p>
          <p>To get started please click the 'Show family members component' which will fetch and load the FamilyMembersComponent bundle asynchronously.</p>
          <p>You can verify the lazy loading of the Family Members Component by opening your devtools `Network` tab before clicking the button. When you click the button a network request is sent to load the FamilyMembersComponent bundle.</p>
        </div>
      </div>
    )
  }
}

export default Title