import { Component } from "react";
import { Button, Card, CardBody, CardFooter, CardText, CardTitle, Col, Container, Navbar, NavbarBrand, Row } from "reactstrap";
import {
    IoSchoolOutline,
    IoMan,
    IoSettings,
    // IoWomanOutline,
    IoAdd,
    IoTrash,
} from "react-icons/io5";
import axios from "axios";


interface MyState{
    students:[];
}
export class Dashboard extends Component<{}, MyState>{

    state: MyState= {
        students:[],

    };

    componentDidMount(){
        axios.get('http:localhost:7070/list')
        .then(res=>{
            const students = res.data
            this.setState((students))
        })
    }
    
    render(){
        return(
            <div>
                <Navbar color="dark" light mb-2>
                    <NavbarBrand className="text-white">
                        <IoSchoolOutline className="font-size-xxl"/>
                        <span className="font-size-l ml-3"> Gueoul Schools</span>
                    </NavbarBrand>
                </Navbar>
                <Container className="mt-3">
                    <Row>
                        <Col sm='4'>
                            <Card Body>
                                <CardTitle tag="h5">
                                    <IoSchoolOutline className="font-size-xl"/> 15 Teachers
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Temporibus, non rerum sapiente consequatur totam perferend
                                </CardText>
                                <Button>Manage Teachers</Button>
                            </Card>
                        </Col>

                        <Col sm='4'>
                            <Card Body>
                                <CardTitle tag="h5">
                                    <IoMan className="font-size-xl"/> 85 Students
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Temporibus, non rerum sapiente consequatur totam perferend
                                </CardText>
                                <Button>Manage Students</Button>
                            </Card>
                        </Col>
                        <Col sm='4'>
                            <Card Body>
                                <CardTitle tag="h5">
                                    <IoSettings className="font-size-xl"/> 45 Employees
                                </CardTitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Temporibus, non rerum sapiente consequatur totam perferend
                                </CardText>
                                <Button> Manage Employees</Button>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                <Container className="mt-4">
                    <Row>
                        <Col sm='12'>
                            <Button block color="success">
                            <IoAdd className="font-size-xl"/>
                                <span className="font-size-xl">
                               Add Student
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-4">
                    <Row>
                        <Col sm='12'>
                            <Card body>
                                <CardTitle tag="h5">
                                    <IoMan className="font-size-xl"/>
                                    <span>Modou Gueye</span>
                                </CardTitle>
                                <CardBody>
                                    <Row>
                                        <Col sm='4' className="text-center">
                                            <span className="font-weight-bold">Class</span>
                                            <span> Second year</span>
                                        </Col>
                                        <Col sm='4' className="text-center">
                                            <span className="font-weight-bold">Age</span>
                                            <span> 17 ans</span>
                                        </Col>
                                        <Col sm='4' className="text-center">
                                            <span className="font-weight-bold">Teacher</span>
                                            <span> Mr Barry</span>
                                        </Col>
                                    </Row>
                                </CardBody>
                                <CardFooter>
                                    <Row>
                                        <Col sm='6'>
                                            <Button block outline color="primary">
                                            <IoSettings className="font-size-xl"/>
                                               <span> Edit</span>
                                            </Button>
                                        </Col>
                                        <Col sm='6'>
                                            <Button block outline color="danger">
                                            <IoTrash className="font-size-xl"/>
                                                 <span> Delete</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </CardFooter>

                            </Card>
                        </Col>
                    </Row>
                </Container>
               
            </div>
            
        )
    }
}