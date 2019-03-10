import React, {lazy, Suspense} from 'react'

import Header from './components/presentational/Header'
import Title from './components/presentational/Title'
import ShowFamilyMembersButton from  './components/presentational/ShowFamilyMembersButton'

// Lazy Load the FamilyMembers module using React's lazy...
const FamilyMembersComponent = lazy(() => 
  import(/* webpackChunkName: 'FamilyMembersComponent' */ '../FamilyMembersComponent'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFamilyMembers: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({showFamilyMembers: !this.state.showFamilyMembers})
  }

  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <Title />
          <ShowFamilyMembersButton
            showFamilyMembersState={this.state.showFamilyMembers}
            showFamilyMembers={this.handleClick}
          />
          {this.state.showFamilyMembers && (
            <Suspense fallback={<div>Loading...</div>}>
              <FamilyMembersComponent />
            </Suspense>
          )}
        </main>
      </div>
    )
  }
}

export default App