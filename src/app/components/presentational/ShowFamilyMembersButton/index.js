import * as React from 'react'

const ShowFamilyMembersButton = (props) => {
  return (
    <div className="container py-2">
      <button
        type="button"
        className="btn btn-info"
        onClick={props.showFamilyMembers}
      >
        {props.showFamilyMembersState ? 'Hide family members component...' : 'Show family members component'}
      </button>
    </div>
  )
}

export default ShowFamilyMembersButton