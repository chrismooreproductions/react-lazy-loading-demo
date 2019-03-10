import * as React from 'react'

class FamilyMembersButtons extends React.Component {
  renderButtons() {
    return this.props.familyMembers.map(member => {
      const isActive = () => {
        if (member === this.props.selectedFamilyMember) {
          return true
        }
      }

      return (
        <button
          key={member}
          type="button"
          className={`btn mr-3 ${isActive() ? 'btn-success' : 'btn-info'}`}
          value={member}
          onClick={this.props.selectFamilyMember}
        >
          {member}
        </button>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
      </div>
    )
  }
}

export default FamilyMembersButtons