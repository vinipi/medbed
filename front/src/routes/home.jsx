import React, { Component } from "react";
import { Collapse, Table, Tag, Popconfirm } from "antd";
import { EditableTable } from "../components/editable";

const { Panel } = Collapse;
const { Column, ColumnGroup } = Table;

function callback(key) {
    console.log(key);
}

const genExtra = () => {
    return <span>lits disponibles: 15/50</span>;
};

const data = [
    {
        key: "1",
        label: "lits total",
        value: "50",
    },
    {
        key: "2",
        label: "lits occupés",
        value: "10",
    },
    {
        key: "3",
        label: "lits occupés COVID",
        value: (<span>25</span>),
    },
];

class Home extends Component {
    render() {
        return (
            <div>
                <Collapse
                    defaultActiveKey={["0"]}
                    onChange={callback}
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
