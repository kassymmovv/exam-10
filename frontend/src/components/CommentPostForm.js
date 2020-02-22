import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
import {getMessagesById} from "../store/actions";
import {connect} from 'react-redux';

class CommentPostForm extends Component {
    state = {
        newsId:this.props.oneMessage.id,
        author:'',
        description:''
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    submitHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            if (this.state[key]){
                formData.append(key,this.state[key])
            }
        });
        this.props.onSubmit(formData)
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup row>
                        <Label for="author" sm={2}>Title</Label>
                        <Col sm={10}>
                            <Input
                                type="text"
                                name="author"
                                id="author"
                                placeholder="enter message title"

                                onChange={this.inputChangeHandler}/>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="description" sm={2}>Description</Label>
                        <Col sm={10}>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"

                                onChange={this.inputChangeHandler}
                                required
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={{size:10,offset:2}}>
                            <Button color="primary" type="submit">POST</Button>{' '}
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages:state.messages,
    comments:state.comments,
    oneMessage: state.oneMessage
});


export default connect(mapStateToProps,null) (CommentPostForm);