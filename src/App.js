import {Layout, Menu, theme} from "antd"
import {UnorderedListOutlined} from "@ant-design/icons/lib/icons"
import {useNavigate} from "react-router-dom";
import Navbar from "./Components/Navbar";

const {Header, Content, Footer, Sider} = Layout;

function App() {
    const navigate = useNavigate();
    const {
        token: {colorBgContainer},
    } = theme.useToken();
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
                    defaultSelectedKeys={"/"}

                    items={[
                        {label: "Products", key: "/", icon: <UnorderedListOutlined/>},
                        {label: "Add Products", key: "/add", icon: <UnorderedListOutlined/>}
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

                <Footer style={{textAlign: 'center'}}>CRA ©{new Date().getFullYear()} Created by Sagor Chandra Paul</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
