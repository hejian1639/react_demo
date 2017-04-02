import React from 'react'
import FilterLink from '../containers/FilterLink'
import * as FilterTypes from '../../constants/TodoFilters'

const Footer = ({id}) => (
  <p>
    Show:
    {" "}
    <FilterLink id={id} filter={FilterTypes.SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink id={id} filter={FilterTypes.SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink id={id} filter={FilterTypes.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default Footer
