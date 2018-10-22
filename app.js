import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Layout} from 'antd';
import RootHeader from './components/layout/Header';
import {ContentRoute, SiderMenusRoute} from './routes';
import reducers from './reducers';
import './App.css';

const {Content, Sider} = Layout;

class App extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        this.setState({collapsed});
    };

    render() {
        const store = applyMiddleware(thunkMiddleware)(createStore)(reducers);
        return (
            <Provider store={store}>
                <Layout style={{minHeight: '100vh'}}>
                    <RootHeader/>
                    <Layout style={{paddingTop: '64px'}}>
                        <Sider
                            width={200}
                            style={{background: '#333'}}
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                            className="fixed"
                        >
                            <SiderMenusRoute/>
                        </Sider>
                        <Layout className={this.state.collapsed ? 'content-normal' : 'content-max'}>
                            <Content style={{margin: 0, minHeight: 280}}>
                                <ContentRoute/>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </Provider>
        );
    }
}

export default App;
