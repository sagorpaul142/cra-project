import {Button, Form, Input, InputNumber} from "antd";
import {LoadingOutlined} from "@ant-design/icons/lib/icons";
import {useState} from "react";
import AxiosServices from "../networks/AxiosService";
import ApiUrlServices from "../networks/ApiUrlServices";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const {TextArea} = Input;
const AddProduct = () => {
    const [loader, setLoader] = useState(false)
    const [form] = Form.useForm()
    const histroy = useNavigate()
    const onSubmit = (payload) => {
        console.log(payload)
        setLoader(true)
        AxiosServices.post(ApiUrlServices.ADD_PRODUCT, payload)
            .then(res => {
                setLoader(false)
                toast.success("Product add Successfully")
                histroy("/")
            })
            .catch(err => {
                console.log(err)
                setLoader(false)
                toast.error("BAD_ERROR 404 NOT FOUND")
            })

    }

    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
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
                        }
                    ]}
                >
                    <Input placeholder="Enter a product name"/>
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    defaultValue={"number"}
                    rules={[
                        {
                            required: true,
                            message: 'Product price is required!',
                        }
                    ]}
                    tooltip="Product price only number"
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
                        {
                            pattern: /^[a-z\s]+$/i,
                            message: "Product category must be only letters"
                        }
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
                    <Input placeholder="Enter a product image url"/>
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
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default AddProduct;
