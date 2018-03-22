import { connect } from 'react-redux'
import actionTypes from '../../../store/actionTypes'
import formButtonSection from '../../presenters/form-button-section'

const mapDispatchToProps = dispatch => ({
  clearForm: () => dispatch({ type: actionTypes.phoenix.CLEAR_FORM_DATA }),
  save: () => dispatch({ type: actionTypes.saga.SAVE_PHOENIX_DATA })
})

export default connect(null, mapDispatchToProps)(formButtonSection)
