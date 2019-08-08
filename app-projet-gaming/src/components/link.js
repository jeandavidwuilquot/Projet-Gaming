import React,{Component} from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class LinkTo extends Component {
    render() {
        return (
            <Router path={this.props.to} 
            children={
                <div>
                    <Link exact={this.props.exact} to={this.props.to}>{this.props.to}</Link>
                </div>
            }/>
        )
    }
}