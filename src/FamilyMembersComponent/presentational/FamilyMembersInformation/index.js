import * as React from 'react'

class FamilyMembersInformation extends React.Component {
  render() {
    const isInfo = this.props.information
    const { selectedFamilyMember, information } = this.props
    return (
      <div className="py-2">
        {isInfo ? (
            <div className="card">
              <div className="card-header">
                {selectedFamilyMember}
              </div>
              <div className="card-body">
                <h5 className="card-title">Occupation: {information.occupation}</h5>
                <h5 className="card-title">Age: {information.age}</h5>
                <h5 className="card-title">Relation: {information.relation}</h5>
                <h5 className="card-title">Hometown: {information.hometown}</h5>
                <h5 className="card-title">Hobbies:</h5>
                <p className="card-text">{information.hobbies}</p>
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="card-header">
                Information
              </div>
              <div className="card-body">
                Please select a family member to find out more
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default FamilyMembersInformation