import { connect } from 'react-redux'
import mainContent from '../presenters/main-content'

const mapStateToProps = state => ({
  showForm: state.presentation.displayForm
})

export default connect(mapStateToProps)(mainContent)
