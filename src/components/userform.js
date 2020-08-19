import React from "react";
import { Button, Table, ButtonToolbar } from "react-bootstrap";
import DepModal from "./editdepmodal";
import { connect } from "react-redux";
class UserForm extends React.Component {
  constructor()
  {
    super();
    this.state = {
      editModalShow: false
    };
  }

  componentDidMount() {
    this.refreshList();
  }
  async refreshList() {
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const data1 = await response.json();
    console.log(data1);
    this.props.dispatch({ type: "User_data", payload: data1.data });
    console.log("hello");
  }
  deleteEmployee(id) {
    this.props.dispatch({ type: "User_delete", payload: id });
  }

  render() {
    let editModalClose = () => this.setState({ editModalShow: false });
    
    console.log("userform");
    return (
      <div>
        <h1>This is User Record page.</h1>

        <br></br>

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>id</th>
              <th>email</th>
              <th>first_name</th>
              <td>last_name</td>
              <th>avatar</th>
            </tr>
          </thead>

          <tbody>
            {this.props.emp.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.email}</td>
                <td>{users.first_name}</td>
                <td>{users.last_name}</td>
                <td>
                  <img src={users.avatar} alt="error" />{" "}
                </td>
                <td>
                  <Button
                    variant="info"
                    onClick={() =>
                      this.setState({
                        editModalShow: true,
                        id: users.id,
                      })
                    }
                  >
                    EditDepartment
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => this.deleteEmployee(users.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <DepModal
            show={this.state.editModalShow}
            refreshList={this.refreshList}
            employee={this.props.emp.filter((x) => x.id === this.state.id)[0]}
            onHide={editModalClose}
          />
        </ButtonToolbar>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  const { user } = state;
  console.log(state);
  return { emp: user };
}

export default connect(mapStatetoProps)(UserForm);
