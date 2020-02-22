import React, {Component} from 'react';
import {getComments, getMessagesById, postComments} from "../store/actions";
import {connect} from 'react-redux';
import Card from "reactstrap/es/Card";
import {NavLink} from "react-router-dom";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import CommentPostForm from "./CommentPostForm";
class PostFormContainer extends Component {


state = {

    author:'',
    description:''
};
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNewsId(id);

    }

    authorHandler = event => {
      this.setState({author:event.target.value,newsId:this.props.oneMessage.id})
    };
    commentHandler = event => {
      this.setState({description:event.target.value})
    };
    render() {


        return (
            <div>

                <Card key={this.props.oneMessage.id}>
                    {this.props.oneMessage.title}
                    <img src={'http://localhost:1212/uploads/'+this.props.oneMessage.image} alt="" style={{height:100,width:100}}/>

                    <span>{this.props.oneMessage.description}</span>
                    
                </Card>
                author:<input type="text" onChange={this.authorHandler}/>
                comment:<textarea name="" id="" cols="30" rows="10" onChange={this.commentHandler}></textarea>
                <button onClick={() => {this.props.postComment(this.state)}}>post comment</button>
                <button onClick={() => { this.props.getComments()}}>get comments</button>

                {/*{this.props.comments.map(key => {*/}
                {/*    return(*/}
                {/*        <div>{key.author}</div>*/}
                {/*    )*/}
                {/*})}*/}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages:state.messages,
    comments:state.comments,
    oneMessage: state.oneMessage
});
const mapDispatchToProps = dispatch => ({
   getNewsId:id => dispatch(getMessagesById(id)),
    postComment:message => dispatch(postComments(message)),
    getComments:() => dispatch(getComments())
});
export default connect(mapStateToProps,mapDispatchToProps) (PostFormContainer);