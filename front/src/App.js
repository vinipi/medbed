import React, { Component } from 'react'
import Home from './routes/home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import moment from 'moment'
import './app.css'
import Menu from './templates/Menu'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

moment.locale('EN')

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            session: null
        }

        this.updateState = this.updateState.bind(this)
        this.disconnect = this.disconnect.bind(this)
    }

    componentDidMount() {
        this.setState({
            session: JSON.parse(window.localStorage.getItem('session'))
        })
    }

    updateState(newState) {
        this.setState(Object.assign({}, this.state, newState))
    }

    disconnect() {
        window.localStorage.clear()
        this.setState({ session: null })
        window.location.href = '/'
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
                        maxWidth: '100%'
                    }}>
                        <Menu
                            updateAppState={this.updateState}
                            session={this.state.session}
                            disconnect={this.disconnect}
                        />
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>

                    </Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}

export default App
