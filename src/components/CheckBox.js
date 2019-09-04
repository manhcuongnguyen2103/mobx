import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ id, checked, onClick }) => (
  <span
    className="icon is-large"
    style={{
      background: 'white',
      borderRadius: '50%'
    }}
    onClick={onClick}
  >
    {checked && <i className="fas fa-check fa-2x" />}
  </span>
)

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Checkbox
