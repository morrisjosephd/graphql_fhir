import { connect } from 'react-redux'
import actionTypes from '../../../store/actionTypes'
import input from '../../presenters/generic-fields/input-with-title'

const mapStateToProps = state => ({
  value: state.phoenix.name
})

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch({ type: actionTypes.phoenix.UPDATE_PHOENIX, value: { name: value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(input)
