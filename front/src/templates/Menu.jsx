import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';

class MenuComponent extends Component {
    state = {
        current: 'MyStuff'
    };

    handleClick = (e) => {
        this.setState({
            current: e.key
        });
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
                <Menu.Item key="MyStuff" onClick={() => this.props.history.push('/')} >Mes lits</Menu.Item>
                <Menu.Item key="SearchStuff" onClick={() => this.props.history.push('/searchStuff')} >Recherche de lits</Menu.Item>

            </Menu>
        );
    }
}

export default withRouter(MenuComponent);
