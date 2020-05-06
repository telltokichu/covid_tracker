import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faGlobe, faRobot } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/images/logo.png';
import { Layout, Icon, Row, Col, Button, Menu, Avatar, Typography, PageHeader, Descriptions } from 'antd';
import { load, remove } from 'react-cookies';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const CustomHeader = (props) => {
	const [ userInfo, setuserInfo ] = useState(load('session').userInfo);
	console.log('userInfo: ', userInfo);
	return (
		<PageHeader
			ghost={false}
			title="Dashboard"
			extra={[
				<Button
					key="3"
					shape="round"
					onClick={() => {
						remove('session');
						window.location.reload();
					}}
				>
					Log out
				</Button>,
				<Button key="3" shape="round">
					{userInfo.displayName}
				</Button>,
				<Avatar src={userInfo.photoURL} />
			]}
		/>
	);
};

export default CustomHeader;
