import { connect } from 'react-redux'
import actionTypes from '../../../store/actionTypes'
import checkbox from '../../presenters/generic-fields/generic-checkbox'

const mapStateToProps = state => ({
  value: state.phoenix.isAlive
})

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch({ type: actionTypes.phoenix.UPDATE_PHOENIX, value: { isAlive: value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(checkbox)
