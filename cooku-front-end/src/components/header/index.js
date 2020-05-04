import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAtom, faGlobe, faRobot } from '@fortawesome/free-solid-svg-icons'
import logo from '../../assets/images/logo.png'
import { Layout, Icon, Row, Col, Button, Menu, Avatar, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const CustomHeader = (props) => {

    return (
        <Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Row align='middle'>

                <Col span={12} offset={6}>
                    <div style={{ textAlign: 'center' }}>
                        {/* <img
                            src={logo}
                            style={{
                                width: 'auto',
                                height: 50
                            }}
                        />  */}
                        <span style={{ fontSize: 20 }}>Data Ingestion Studio</span>
                    </div>
                </Col>

            </Row>
        </Header>
    );
}

export default CustomHeader;