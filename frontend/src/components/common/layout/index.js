import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Filters from "../../filters";

import './styles.css';

const { Header, Content, Sider } = Layout;

const MainLayout = ({ children }) =>  
  <React.Fragment>
    <Header>Weather Analytic Data</Header>
    <Layout>
      <Sider 
        width={300} 
        collapsible
        collapsedWidth="0"
        defaultCollapsed={false}
      >
        <Filters />
      </Sider>
      <Content>
        {children}
      </Content>
    </Layout>
  </React.Fragment>

MainLayout.propTypes = {
    children: PropTypes.element
};

export default MainLayout;