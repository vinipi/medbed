import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import ApiService from '../services/api';

class SessionHandler extends Component {
    constructor(props) {
        super();
        this.state = {
            site: {}
        };
        this.urlKey = qs.parse(props.location.search, { ignoreQueryPrefix: true }).urlKey;
        console.log(this.urlKey);
    }

    componentDidMount() {
        ApiService.fetch({
            path: '/site/' + this.urlKey,
            method: 'GET'
        })
            .then((site) => {
                this.setState({
                    site
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        return (<div
            style={{
                height: '30px',
                lineHeight: '30px',
                backgroundColor: '#0b6bf1',
                color: 'white',
                textAlign: 'center'
            }}>
            {this.state.site.name}
        </div>);
    }
}
export default withRouter(SessionHandler);
