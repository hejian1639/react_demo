import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = ({id}) => (
  <p>
    Show:
    {" "}
    <FilterLink id={id} filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink id={id} filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink id={id} filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
