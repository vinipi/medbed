import React, { Component } from 'react';
import { Collapse } from 'antd';
import { EditableTable } from '../components/editable';

const { Panel } = Collapse;

const genExtra = () => {
    return <span>lits disponibles: 15/50</span>;
};

class Home extends Component {
    render() {
        return (
            <div>
                <Collapse
                    defaultActiveKey={['0']}
                >
                    <Panel header="UF 1" key="1" extra={genExtra()}>
                        <div>
                            <div>
                                <EditableTable></EditableTable>
                            </div>
                        </div>
                    </Panel>
                    <Panel header="UF 2" key="2" extra={genExtra()}>
                        <div>
                            <EditableTable></EditableTable>
                        </div>
                    </Panel>
                    <Panel header="UF 3" key="3" extra={genExtra()}>
                        <div>
                            <EditableTable></EditableTable>
                        </div>
                    </Panel>
                </Collapse>

            </div>
        );
    }
}

export default Home;
