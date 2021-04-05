import React from 'react'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styled from "styled-components";

const App = styled.div`
  text-align: center;
`;

class Home extends React.Component {

    render() {
        if (this.props.auth) {
            return (
                <App>
                    <h2>Welcome!</h2>
                </App>
            )
        }
        return (<Redirect to={"/"}></Redirect>)
    }
}

export default connect(
    ({user}) => ({
        auth: user.isLogin
    })
)(Home)