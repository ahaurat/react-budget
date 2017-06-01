import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import FooboardComponent from './components'
import {GET_FOO} from 'actions/fooboard'

class Fooboard extends Component {
  static propTypes = {
    foo: PropTypes.array,
    getFoo: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.getFoo()
  }

  render () {
    // return <div>Hello World</div>
    let {foo} = this.props
    let props = {foo}

    return <FooboardComponent {...props} />
  }
}

function mapStateToProps (state) {
  return {foo: state.fooboard.foo}
}

function mapDispatchToProps (dispatch) {
  return {
    getFoo: async () => {
      let result = await dispatch(GET_FOO)
      dispatch(result)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fooboard)
// export default Foo
