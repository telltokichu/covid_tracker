import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form, Tag, Drawer } from 'antd';
import EditableTable from '../EditableTable'
const EditableContext = React.createContext();

const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
        <Form form={form} component={false}>
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    );
};

const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
}) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef();
    const form = useContext(EditableContext);
    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
            [dataIndex]: record[dataIndex],
        });
    };

    const save = async e => {
        try {
            const values = await form.validateFields();
            toggleEdit();
            handleSave({ ...record, ...values });
        } catch (errInfo) {
            console.log('Save failed:', errInfo);
        }
    };

    let childNode = children;

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0,
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title} is required.`,
                    },
                ]}
            >
                <Input ref={inputRef} onPressEnter={save} onBlur={save} />
            </Form.Item>
        ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
    }

    return <td {...restProps}>{childNode}</td>;
};

export default class TableComponent extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: 'Table(s)',
                dataIndex: 'name',
                width: '30%',
            },
            {
                title: 'Validations',
                dataIndex: 'name',
                render: name => <Button onClick={this.toggleDrawer} type='primary' size='small'>...</Button>
            },
            {
                title: 'Set(y/n)',
                dataIndex: 'validated',
                render: validated =>
                    <Tag color={validated ? 'green' : 'red'}>
                        {validated ? 'Yes' : 'No'}
                    </Tag>
            },
        ];
        this.state = {
            visible: false,
            dataSource: [
                {
                    key: '0',
                    name: 'DIS_USER',
                    validated: false,
                },
                {
                    key: '1',
                    name: 'DIS_ROLES',
                    validated: false,
                },
            ],
            count: 2,
        };
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };

    // handleAdd = () => {
    //     const { count, dataSource } = this.state;
    //     const newData = {
    //         key: count,
    //         name: `Edward King ${count}`,
    //         age: 32,
    //         address: `London, Park Lane no. ${count}`,
    //     };
    //     this.setState({
    //         dataSource: [...dataSource, newData],
    //         count: count + 1,
    //     });
    // };

    handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        console.log(newData)
        this.setState({
            dataSource: newData,
        });
    };
    toggleDrawer = () => {
        this.setState({
            visible: !this.state.visible
        })
    }
    render() {
        const { dataSource } = this.state;
        const components = {
            body: {
                row: EditableRow,
                cell: EditableCell,
            },
        };
        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div>
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
                <Drawer
                    title="Set Validations"
                    width={820}
                    onClose={this.toggleDrawer}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button
                                onClick={this.toggleDrawer}
                                style={{ marginRight: 8 }}
                            >
                                Cancel
                            </Button>
                            <Button onClick={this.toggleDrawer} type="primary">
                                Save
                            </Button>
                        </div>
                    }
                >
                    <EditableTable />
                </Drawer>
            </div>
        );
    }
}