import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteMessageById, getMessages, postMessage} from "../store/actions";
import PostForm from "../components/postForm";
import Card from "reactstrap/es/Card";
import {NavLink} from "react-router-dom";
class MainNews extends Component {
    componentDidMount() {
        this.props.getNews()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.messages !== prevState){
            this.props.getNews()
        }
    }

    createMessageHandler = async formData => {
        await this.props.postsMessage(formData)
    };

    render() {
        return (
            <div>
                <PostForm
                    onSubmit={this.createMessageHandler}
                />
                {this.props.messages.map(mess => (
                    <Card key={mess.id}>
                        {mess.title}
                        <img src={'http://localhost:1212/uploads/'+mess.image} alt="" style={{height:100,width:100}}/>

                        <span>{mess.description}</span>
                        <NavLink to={`/new/${mess.id}`}>read more</NavLink>
                        <button onClick={() => {this.props.deleteMess(mess.id)}}>delete</button>

                    </Card>

                ))}

            </div>
        );
    }
}

const mapStateToProps = state => ({
   messages:state.messages,
   comments:state.comments
});
const mapDispatchToProps = dispatch => ({
    postsMessage: news => dispatch(postMessage(news)),
    getNews:() => dispatch(getMessages()),
    deleteMess:id => dispatch(deleteMessageById(id))
});
export default connect(mapStateToProps,mapDispatchToProps) (MainNews);