import { connect } from 'react-redux'
import actionTypes from '../../../store/actionTypes'
import dropdown from '../../presenters/generic-fields/dropdown-with-title'

const mapStateToProps = state => ({
  options: [
    { text: 'Red', value: 'red' },
    { text: 'Blue', value: 'blue' },
    { text: 'Green', value: 'green' }
  ],
  value: state.phoenix.color
})

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch({ type: actionTypes.phoenix.UPDATE_PHOENIX, value: { color: value } })
})

export default connect(mapStateToProps, mapDispatchToProps)(dropdown)
