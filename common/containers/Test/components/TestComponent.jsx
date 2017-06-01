import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {Loader, Item, Grid} from 'semantic-ui-react'
import _ from 'lodash'
// import TestItemComponent from './TestItemComponent'

export default class TestComponent extends PureComponent {
  static propTypes = {
    // conversations: PropTypes.array
  }

  shouldComponentUpdate (nextProps) {
    // let {conversations} = this.props
    // let nextConversations = nextProps.conversations
    // return !_.isEqual(conversations, nextConversations)
  }

  render () {
    // let {conversations} = this.props
    // let noConversations = !conversations || conversations.length === 0

    // return (
    //   <div>
    //     {noConversations && <Loader active={true}>Loading...</Loader>}
    //     <Grid stackable>
    //       <Grid.Column width={16}>
    //         {!noConversations &&
    //           <Item.Group divided>
    //             {conversations.map((obj, i) => {
    //               return <TestItemComponent key={i} {...obj} />
    //             })}
    //           </Item.Group>}
    //       </Grid.Column>
    //     </Grid>
    //   </div>
    // )
    return <h2>HELLO WORLD</h2>
  }
}
