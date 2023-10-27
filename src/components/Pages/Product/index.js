import React from 'react';
import { Radio } from 'antd';
import './Product.css';
import ItemProduct from "../Item-product"

export default function Product() {
    return (
        <div className='product'>
            <div className='product-content'>
                <div className='flex py-12 justify-between'>
                    <div className='col-md-4'>
                        <h2 className='text-sm font-bold'>TIN NỔi BẬT</h2>
                    </div>
                    <div className='col-md-8'>
                        <div className='flex justify-end w-full text-xs font-normal'>
                            <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Radio.Button value="a">Hangzhou</Radio.Button>
                                <Radio.Button value="b">Shanghai</Radio.Button>
                                <Radio.Button value="c">Beijing</Radio.Button>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
                <ItemProduct />
            </div>
        </div>
    );
}
