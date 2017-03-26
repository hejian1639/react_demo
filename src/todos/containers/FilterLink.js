import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import * as Actions from '../../actions'



const Link = ({ visibilityFilter, children, dispatch, id, filter }) => {
    if (filter === visibilityFilter[id]) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
            onClick={e => {
                e.preventDefault();
                dispatch(Actions.setVisibilityFilter(id, filter));
            }}        >
            {children}
        </a>
    )
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
}

const mapStateToProps = (state) => ({
    visibilityFilter: state.visibilityFilter
})


const FilterLink = connect(
    mapStateToProps
)(Link)

export default FilterLink
