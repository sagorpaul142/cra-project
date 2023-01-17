import {Layout, Menu, theme} from "antd"
import {UnorderedListOutlined, AppstoreAddOutlined} from "@ant-design/icons/lib/icons"
import {useNavigate} from "react-router-dom";
import Navbar from "./Components/Navbar";
import {ToastContainer} from "react-toastify";

const {Header, Content, Footer, Sider} = Layout;

function App() {
    const navigate = useNavigate();
    const {token: {colorBgContainer}} = theme.useToken();
    return (
        <Layout>
            <Sider
                theme={"light"}
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div className="logo"/>
                <Menu
                    onClick={({key}) => {
                        navigate(key)
                    }}
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}

                    items={[
                        {label: "Products", key: "/", icon: <UnorderedListOutlined/>},
                        {label: "Add Products", key: "/add-product", icon: <AppstoreAddOutlined />}
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{padding: 0, background: colorBgContainer}}/>
                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{padding: 24, minHeight: "calc(100vh - 155px)", background: colorBgContainer}}>
                        <Navbar/>
                    </div>
                </Content>

                <Footer style={{textAlign: 'center'}}>CRA ©{new Date().getFullYear()} Created by Sagor Chandra
                    Paul</Footer>
            </Layout>
            <ToastContainer
                position={"top-right"}
                autoClose={5000}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                hideProgressBar={false}
                theme={"colored"}
            />
        </Layout>
    );
}

export default App;
