import * as React from 'react'

import * as data from './config'

import FamilyMembersButtons from '../../presentational/FamilyMembersButtons'
import FamilyMembersInformation from '../../presentational/FamilyMembersInformation'

const familyMembers = [
    'Chris',
    'Carly',
    'Jo'
]

class FamilyMembersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFamilyMember: '',
      familyMemberInfo: undefined
    }
    this.selectFamilyMember = this.selectFamilyMember.bind(this)
  }

  selectFamilyMember(e) {
    this.setState({ selectedFamilyMember: e.target.value })
    this.setState({ familyMemberInfo: data.default[e.target.value] })
  }

  render() {
    const { selectedFamilyMember } = this.state
    return (
      <div className="container">
        <FamilyMembersButtons
          familyMembers={familyMembers}
          selectedFamilyMember={selectedFamilyMember}
          selectFamilyMember={this.selectFamilyMember}
        />
        <FamilyMembersInformation 
          information={this.state.familyMemberInfo}
          selectedFamilyMember={selectedFamilyMember}
        />
      </div>
    )
  }
}

export default FamilyMembersContainer