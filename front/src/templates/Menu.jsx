import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu } from 'antd'

class MenuComponent extends Component {
    state = {
        current: 'Home'
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }

    render() {
        return (
            <Menu
                mode="horizontal"
                theme="light"
                selectedKeys={[this.state.current]}
                onClick={this.handleClick}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="Home" onClick={() => this.props.history.push('/')} >Home</Menu.Item>

            </Menu>
        )
    }
}

export default withRouter(MenuComponent)
