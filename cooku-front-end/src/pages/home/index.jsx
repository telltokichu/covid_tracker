import React, { Component } from 'react';
import { withFormik } from 'formik';
import _ from 'lodash';
import { DatePicker } from 'antd';
import { Layout, Menu, Breadcrumb, PageHeader, Button, Select, Card, Form, Input, notification } from 'antd';
import Table from '../../components/table'
const { Header, Content, Footer } = Layout;
const openNotification = () => {
    notification.success({
        message: 'Success',
        description:
            'The connection with given properties has been tested successfully',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};
const openNotification2 = () => {
    notification.success({
        message: 'Success',
        description:
            'The Code has been successfully generated',
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};
export class Home extends Component {

    state = {
        sectionType: 1,
    }

    renderSection = () => {
        const { sectionType } = this.state;
        if (sectionType === 1) {
            return (
                <>
                    <PageHeader
                        ghost={true}
                        title="Source layer"
                        extra={[
                            <Select
                                defaultValue="SQL"
                                style={{ width: 200 }}
                                className="headerDropdown"
                                disabled
                            >
                                <Select.Option value="SQL">SQL</Select.Option>
                            </Select>,
                        ]}
                    ></PageHeader>
                    <Card title="SQL Properties">
                        <Form
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            layout="horizontal">
                            <Form.Item label="Server Name">
                                <Input placeholder="Server Name" />
                            </Form.Item>
                            <Form.Item label="Database name">
                                <Input placeholder="Database name" />
                            </Form.Item>
                            <Form.Item label="User Name">
                                <Input placeholder="User Name" />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input placeholder="Password" />
                            </Form.Item>
                            <div style={{ textAlign: 'end' }}>
                                <Button onClick={openNotification} type='danger' style={{ marginRight: 10 }}>Test</Button>
                                <Button onClick={() => this.setState({ sectionType: 2 })} type='primary'>Next</Button>
                            </div>
                        </Form>
                    </Card>
                </>
            );
        } else if (sectionType === 2) {
            return (
                <>
                    <div style={{ marginBottom: 10 }}>
                        <Button style={{ marginRight: '10px' }} onClick={() => this.setState({ sectionType: 1 })} type='primary'>Back</Button>
                        <Button onClick={() => this.setState({ sectionType: 3 })} type='primary'>Next</Button>
                    </div>
                    <Table />
                </>
            );
        } else if (sectionType === 3) {
            return (
                <>
                    <PageHeader
                        ghost={true}
                        title="Destination layer"
                        extra={[
                            <Select
                                defaultValue="SQL"
                                style={{ width: 200 }}
                                className="headerDropdown"
                                disabled
                            >
                                <Select.Option value="SQL">FTP</Select.Option>
                            </Select>,
                        ]}
                    ></PageHeader>
                    <Card title="FTP Properties">
                        <Form
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            layout="horizontal">
                            <Form.Item label="FTP Server">
                                <Input placeholder="FTP Server" />
                            </Form.Item>
                            <Form.Item label="Path">
                                <Input placeholder="Path" />
                            </Form.Item>
                            <Form.Item label="User Name">
                                <Input placeholder="User Name" />
                            </Form.Item>
                            <Form.Item label="Password">
                                <Input placeholder="Password" />
                            </Form.Item>
                            <div style={{ textAlign: 'end' }}>
                                <Button onClick={openNotification2} type='primary' style={{ marginRight: 10 }}>Generate Code</Button>
                                <Button onClick={() => this.setState({ sectionType: 1 })} type='primary'>Add Another Flow</Button>
                            </div>
                        </Form>
                    </Card>
                </>
            );
        }
    }

    render() {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            resetForm
        } = this.props;
        return (

            <Content style={{ marginTop: '64px', padding: '10px' }}>
                {this.renderSection()}
            </Content>
        );
    }
}

export default Home;
