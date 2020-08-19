import React from "react";
import {connect} from "react-redux";
import { Modal, Form, Button, Row, Col } from "react-bootstrap";


class DepModal extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      first_name: "",
      last_name:"",
      email: "",
      avatar: "",
      id: ""
      
    };
  }
    componentDidUpdate(previousProps, previousState)
     {
      var obj = { ...this.props.employee };
      console.log(obj);
      if (previousProps.employee !== this.props.employee) {
        this.setState(obj);
      }
    }
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = () => {
      const data = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        avatar: this.state.avatar,
        id: this.state.id
      };

      this.props.dispatch({ type: "User_modaledit", payload: data });

          
      
    };
    
  render() 
  {
    console.log(this.props);
   
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Department
          </Modal.Title>
        </Modal.Header>


        <Modal.Body>
          <div className="container">
            <Row>
              <Col>
                <Form.Label>First_Name</Form.Label>
                <Form.Control
                  name="first_name"
                  size="sm"
                  placeholder="Enter firstname"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                  
                />
              </Col>
              <Col>
              <Form.Label>Last_Name</Form.Label>
                <Form.Control
                  name="last_name"
                  size="sm"
                  placeholder="Enter lastname"
                  
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>   
            <Row>
              <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  size="sm"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  
                />
              </Col>
              <Col>
              <Form.Label>Avatar</Form.Label>
                <Form.Control
                  name="avatar"
                  size="sm"
                  placeholder="Enter avatar"
                  
                  value={this.state.avatar}
                  onChange={this.handleChange}
                  
                />
              </Col>
            </Row>  
            
            <Button onClick={() => this.handleSubmit()} variant="primary">
              Submit
            </Button>  
          </div>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

   function mapStatetoProps(state) {
  console.log("mapstatetoprops depmodal");
  return "hello";
}


export default connect(mapStatetoProps)(DepModal);