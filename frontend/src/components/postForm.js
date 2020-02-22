import React, {Component} from 'react';
import {Form,FormGroup,Label,Col,Input,Button} from "reactstrap";

class PostForm extends Component {
    state = {
        title:'',
        image:null,
        description:''
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    fileChangeHandler = e => {
        this.setState({
            [e.target.name]:e.target.files[0]
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

            <Form onSubmit={this.submitHandler}>
                <FormGroup row>
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="enter message title"
                            value={this.state.title}
                            onChange={this.inputChangeHandler}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="image" sm={2}>Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image"
                            id="image"
                            onChange={this.fileChangeHandler}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            value={this.state.description}
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

        );
    }
}

export default PostForm;