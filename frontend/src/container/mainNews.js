import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getMessages} from "../store/actions";
import PostForm from "../components/postForm";
import Card from "reactstrap/es/Card";
class MainNews extends Component {
    componentDidMount() {
        this.props.getNews()
    }
    createMessageHandler = async formData => {
        await this.props.postMessage(formData)
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
                    </Card>

                ))}
                {console.log(this.props.messages)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
   messages:state.messages,
   comments:state.comments
});
const mapDispatchToProps = dispatch => ({
    postMessage: news => dispatch(postMessage(news)),
    getNews:() => dispatch(getMessages())
});
export default connect(mapStateToProps,mapDispatchToProps) (MainNews);