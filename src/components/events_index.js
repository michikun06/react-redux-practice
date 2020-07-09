import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash'
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { readEvents } from '../action';

class EventsIndex extends Component {
  componentDidMount() {

    // component初期化時に外部サーバーから拾ってきたEvent一覧画面を表示するreadEvents関数を呼び出す
    // readEventsはAction、Reducerにて定義する。
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableHeaderColumn>{event.id}</TableHeaderColumn>
        <TableHeaderColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableHeaderColumn>
        <TableHeaderColumn>{event.body}</TableHeaderColumn>
      </TableRow>
    ))
  }


  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={< Link to={"/events/new"} />}>
          <ContentAdd />
        </FloatingActionButton>

        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({ events: state.events })


// ActionCreatorで作成したアクションをdispatch関数にそれぞれ渡す
const mapDispatchToProps = ({ readEvents })


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

