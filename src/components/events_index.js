import React, { Component } from 'react';
import { connect } from "react-redux";
import _ from 'lodash'
import { Link } from "react-router-dom";

import { readEvents } from '../action';

class EventsIndex extends Component {
  componentDidMount() {

    // component初期化時に外部サーバーから拾ってきたEvent一覧画面を表示するreadEvents関数を呼び出す
    // readEventsはAction、Reducerにて定義する。
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }


  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        {/* クリックしたら/events/newのリンクへ飛ぶ */}
        <Link to={"/events/new"}>NEW Event</Link>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => ({ events: state.events })


// ActionCreatorで作成したアクションをdispatch関数にそれぞれ渡す
const mapDispatchToProps = ({ readEvents })


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

