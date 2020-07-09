import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { getEvent, deleteEvent, putEvent } from '../action';

class EventsShow extends Component {
    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) this.props.getEvent(id)
    }

    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field

        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={touched && error}
                {...input}
                fullWidth={true}
            />
        )
    }

    async onDeleteClick() {
        const { id } = this.props.match.params
        await this.props.deleteEvent(id)
        this.props.history.push('/')
    }

    async onSubmit(values) {
        await this.props.putEvent(values)
        this.props.history.push('/')
    }

    render() {
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }

        return (
            // 更新用ページのJSX、submitされたらhandleSubmitを実行
            <form onSubmit={handleSubmit(this.onSubmit)}>

                {/* 現在のtitle,bodyを表示、処理はrenderFieldコンポーネント */}
                <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

                {/* 更新画面のページの3つのボタン */}
                <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
                <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />

            </form>
        )
    }
}


const validate = values => {
    const errors = {}

    // eventの新規作成画面の入力蘭がからのときにエラーメッセを格納
    if (!values.title) errors.title = "Enter a title, please."
    if (!values.body) errors.body = "Enter a body, please."

    // メッセが入ったArrayを返す
    return errors
}

// ActionCreatorで作成したアクションをdispatch関数にそれぞれ渡す
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id]
    return { initialValues: event, event }
}


export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)

