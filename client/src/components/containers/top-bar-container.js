import { connect } from 'react-redux'
import actionTypes from '../../store/actionTypes'
import topBar from '../presenters/top-bar'

const mapDispatchToProps = dispatch => ({
  search: id => dispatch({ type: actionTypes.saga.GATHER_PHOENIX_INFO, id })
})

export default connect(null, mapDispatchToProps)(topBar)
