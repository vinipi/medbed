import React, { Component } from 'react';
import Home from './routes/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import moment from 'moment';
import './app.css';
import Menu from './templates/Menu';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import SessionHandler from './components/sessionhandler';

const { Header, Content } = Layout;

moment.locale('EN');

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            site: {}
        };

    }

    updateSite = (site) => {
        this.setState({
            site: site
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header style={{
                        position: 'fixed',
                        width: '100%',
                        background: '#fff',
                        boxShadow: '0 2px 8px #f0f1f2',
                        zIndex: 10,
                        maxWidth: '100%',
                        padding: '0px',
                        height: '94px'
                    }}>
                        <SessionHandler
                            updateSite={
                                this.updateSite
                            }
                        ></SessionHandler>
                        <Menu
                            updateAppState={this.updateState}
                            session={this.state.session}
                            disconnect={this.disconnect}
                        />
                    </Header>
                    <Content style={{ padding: '0', marginTop: 94 }}>
                        <Switch>
                            <Route path="/" exact component={() => { return <Home site={this.state.site}></Home>; }} />
                        </Switch>
                    </Content>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
