import React from 'react'
import styled from 'styled-components'
import store from "../redux/store"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const Button = styled.button`
  background: black;
  border-radius: 3px;
  border: none;
  color: white;
  display: block;
  font-size: 13px;
  padding: 10px;
  margin: 10px;

`;
const Title = styled.h1`
  padding: 10px;
  margin: 10px;
  text-align: center;
`;
const App = styled.div`
  margin: auto;
  width: 200px;
`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  background: white;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;;
  display: block;

  ::placeholder {
    color: grey;
  }
`;


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = () => {
        const {username, password} = this.state
        if (username === 'admin' && password === '123') {
            store.dispatch({type: "LOGIN_SUCCESS"})
        } else {
            alert("The account sign-in was incorrect. Please try again")
        }
    }

    render() {
        if (this.props.auth) {
            return (<Redirect to={"/home"}></Redirect>)
        }
        return (
            <App>
                <Title>User Login</Title>
                <Input type="text" placeholder={"username (admin)"} onChange={e => {
                    this.setState({username: e.target.value})
                }}></Input>
                <Input type="password" placeholder={"password (123)"} onChange={e => {
                    this.setState({password: e.target.value})
                }}></Input>
                <Button onClick={e => this.handleSubmit()}>SIGN IN</Button>
            </App>

        )
    }
}

export default connect(
    ({user}) => ({
        auth: user.isLogin
    })
)(Login)