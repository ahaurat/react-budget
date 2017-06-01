import React, {Component} from 'react'
import {Card, Loader, Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import FooboardCardComponent from './FooboardCardComponent'

export default class FooboardComponent extends Component {
  static propTypes = {
    foo: PropTypes.array
  }

  shouldComponentUpdate (nextProps) {
    let {foo} = this.props
    let nextFoo = nextProps.foo
    return !_.isEqual(foo, nextFoo)
  }

  render () {
    let {foo} = this.props

    return (
      <div>
        {foo.length === 0 && <Loader active={true}>Loading...</Loader>}
        <Grid columns={1}>
          <Grid.Row centered>
            <Grid.Column width={16}>
              {foo &&
                <Card.Group itemsPerRow={3} doubling>
                  {foo.map((stats, i) => (
                    <FooboardCardComponent {...stats} key={i} />
                  ))}
                </Card.Group>}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
