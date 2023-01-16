import {useEffect, useState} from "react";
import AxiosService from "../networks/AxiosService";
import ApiUrlServices from "../networks/ApiUrlServices";
import {Space, Table} from "antd";

const HomePage = () => {
    const [products, setProducts] = useState([])
    const [pageLoader, setPageLoader] = useState(true)
    useEffect(() => {
        AxiosService.get(ApiUrlServices.GET_ALL_PRODUCTS)
            .then(response => {
                setProducts(response.data)
                setPageLoader(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const columns = [
        {
            title: "Product Name",
            dataIndex: "productName",
            key: "productName"
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price"
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category"
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => console.log(record.key)}>Edit</a>
                </Space>
            ),
        },

    ];

    const data = products.map((item) => {
        return {
            key: item.id,
            productName: item.title,
            price: item.price,
            category: item.category,
            description: item.description
        };
    });
    const dataMerge = [].concat.apply([], data);

    return (<Table dataSource={dataMerge} columns={columns} loading={pageLoader}/>);
};

export default HomePage;
