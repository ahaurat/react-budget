import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import PropTypes from 'prop-types'
// import {GET_INBOX} from 'actions/inbox'
// import TestComponent from './components/TestComponent'
import './Test.scss'

class Test extends Component {
  // static propTypes = {
    // // react-router `Route` component's props
    // location: PropTypes.object,
    // history: PropTypes.object,
    // // match can force component to re-render
    // match: PropTypes.object,
    // conversations: PropTypes.array,
    // getConversations: PropTypes.func
  // }

  componentDidMount () {
    // this.props.getConversations()
  }

  render () {
    // let {conversations} = this.props
    // let props = {conversations}
    // return <TestComponent {...props} />
    return <h2>HELLO WORLD TEST!</h2>
  }
}

// function mapStateToProps (state) {
//   return {conversations: state.inbox.conversations}
// }
//
// function mapDispatchToProps (dispatch) {
//   return {
//     getConversations: async () => {
//       let result = await dispatch(GET_INBOX)
//       dispatch(result)
//     }
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Test)

export default Test
