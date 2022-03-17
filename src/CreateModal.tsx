import axios from "axios";
import { Component } from "react";
import { Button, Col, Form, Modal, ModalBody, ModalHeader, Row } from "reactstrap";


type MyProps={
    isOpen: boolean,
    toggle
}
export class CreateModal extends Component<MyProps>{


    handleSubmit=(event) =>{
        event.preventDefault()
        const data = new FormData(event.target)

        const student = {
            firstName : data.get("fistName"),
            lastName : data.get("lastName"),
            age : data.get("age"),
            teacher : data.get("teacher"),
        }

        axios.post('http://localhost:7070/create',student)
        this.props.toggle();
    }
    render(){
        return(
            <Modal isOpen = {this.props.isOpen} toggle={this.props.toggle}>

                <ModalHeader toggle={this.props.toggle}>
                    Adding new wise Student
                </ModalHeader>

                <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <label>First Name: </label>
                        </Col>
                        <Col>
                        
                            <input id="firstName" type="text" name="firstName"/>
                         
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Last Name: </label>
                        </Col>
                        <Col>
                            <input id="lastName" type="text" name="lasttName"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Age: </label>
                        </Col>
                        <Col>
                            <input id="age" type="number" name="age"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label>Teacher: </label>
                        </Col>
                        <Col>
                            <input id="teacher" type="text" name="teacher"/>
                        </Col>
                    </Row>
                    <Button color="primary">Create New Student</Button>
                </Form>
            </ModalBody>
            </Modal>
        );
    }


}