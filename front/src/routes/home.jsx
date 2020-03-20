import React, { Component } from 'react';
import { Collapse } from 'antd';
import { EditableTable } from '../components/editable';

const { Panel } = Collapse;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            site: props.site
        };
    }

    componentDidMount() {

    }

    renderUf(uf) {
        return <Panel header={uf.name} key="1" extra={<span>Disponibles: {uf.bed_available}/{uf.bed_total}</span>}>
            <div>
                <EditableTable uf={uf}></EditableTable>
            </div>
        </Panel>;
    }

    render() {
        if (!this.state.site) return null;
        if (!this.state.site.ufs) return null;

        const ufs = this.state.site.ufs.map((uf) => {
            return this.renderUf(uf);
        });
        return (
            <div>
                <Collapse
                    defaultActiveKey={['0']}
                >
                    {ufs}

                </Collapse>

            </div>
        );
    }
}

export default Home;
