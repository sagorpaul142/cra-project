import {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import AxiosService from "../networks/AxiosService";
import ApiUrlServices from "../networks/ApiUrlServices";
import {Button, Form, Input, InputNumber} from "antd";
import {ArrowLeftOutlined, LoadingOutlined} from "@ant-design/icons/lib/icons"
import {toast} from "react-toastify";
import LoadingOverlay from 'react-loading-overlay';

const {TextArea} = Input;

LoadingOverlay.propTypes = undefined
const EditProductPage = () => {
    const [pageLoader, setPageLoader] = useState(true)
    const [loader, setLoader] = useState(false)
    const histroy = useNavigate()
    const {id} = useParams()

    const [form] = Form.useForm()

    useEffect(() => {
        AxiosService.get(ApiUrlServices.GET_SINGLE_PRODUCT(id))
            .then(res => {
                form.setFieldsValue({
                    productName: res.data.title,
                    price: res.data.price,
                    description: res.data.description,
                    category: res.data.category,
                    image: res.data.image
                })
                setPageLoader(false)
                if (res.data === "") {
                    histroy("/")
                }
            })
            .catch(err => {
                console.log(err)
                setPageLoader(false)
            })
    }, [id])

    const onSubmit = (payload) => {
        setLoader(true)
        AxiosService.put(ApiUrlServices.UPDATE_SINGLE_PRODUCT(id), payload)
            .then(res => {
                histroy("/")
                toast.success('Product Update successfully');
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
                toast.error(err.message)
            })
    };

    return (
        <div>
            <LoadingOverlay
                active={pageLoader}
                spinner
                text='Loading'
            >
                <div>
                    <Button type="primary"
                            onClick={() => histroy("/")}
                    >
                        <ArrowLeftOutlined/>
                        Back
                    </Button>
                </div>
                <div>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        onFinish={onSubmit}
                        autoComplete="off"
                        form={form}
                    >
                        <Form.Item
                            label="Product Name"
                            name="productName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Product name is required!',
                                },
                                {
                                    min: 5,
                                    message: "Product name should be at least 5 characters long"
                                },
                                {
                                    max: 150,
                                    message: "Product name maximum length allowed is 150 characters long"
                                },
                            ]}
                        >
                            <Input placeholder="Enter a product name"/>
                        </Form.Item>

                        <Form.Item
                            label="Product Price"
                            name="price"
                            defaultValue={"number"}
                            tooltip="Product price only number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Product price is required!',
                                }
                            ]}
                        >
                            <InputNumber style={{width: '100%'}} placeholder="Enter the product price"/>
                        </Form.Item>

                        <Form.Item
                            label="Product Category"
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: 'Product category is required!',
                                },
                                {
                                    min: 5,
                                    message: "Product category should be at least 5 characters long"
                                },
                            ]}
                        >
                            <Input placeholder="Enter a product category"/>
                        </Form.Item>

                        <Form.Item
                            label="Product Image Url"
                            name="image"
                            tooltip="Image must be .jpg .jpeg .gif .png format"
                            rules={[
                                {
                                    required: true,
                                    message: 'Product image is required!',
                                },
                                {
                                    pattern: /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i,
                                    message: 'Please enter valid image url'
                                }
                            ]}
                        >
                            <Input placeholder="Enter a product image"/>
                        </Form.Item>

                        <Form.Item
                            label="Product Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: 'Product description is required!',
                                },
                                {
                                    min: 10,
                                    message: "Product description should be at least 10 characters long"
                                }
                            ]}
                        >
                            <TextArea rows={6} placeholder="Enter the product description"/>
                        </Form.Item>


                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                {loader && <LoadingOutlined
                                    style={{fontSize: 15}}
                                    spin
                                />}
                                Update
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </LoadingOverlay>
        </div>
    );
};

export default EditProductPage;
