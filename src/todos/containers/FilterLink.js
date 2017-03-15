import { connect } from 'react-redux'
import React, { PropTypes } from 'react'

const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

const Link = ({ state, children, dispatch, filter }) => {
    if (filter === state.visibilityFilter) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault();
                dispatch(setVisibilityFilter(filter));
            }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
}

const mapStateToProps = (state) => ({
    state
})


const FilterLink = connect(
    mapStateToProps
)(Link)

export default FilterLink
