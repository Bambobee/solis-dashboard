import React, { useState, useEffect } from 'react';
import { Checkbox, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useApp } from 'context/businessContext';
import { useProduct } from 'context/productContext';
import AddProduct from 'components/dialog/addProduct';
import ProductComponent from 'components/products/productComponent';
import CustomFilter from 'components/dashboard/filter/customerFilter';

function Products() {
  const { product } = useApp();
  const { productList, fetchProducts } = useProduct();

  const antIcon = <LoadingOutlined style={{ fontSize: 75, color: '#101d2c' }} spin />;
  useEffect(() => {
    fetchProducts();
  }, []);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState(product.business);
  const [products, setProducts] = useState(productList.products);

  useEffect(() => {
    setCompany(product.business);
  }, [product.business]);

  useEffect(() => {
    if (productList.addProductSuccess || productList.fetchProductSuccess) {
      setProducts(productList.products);
      setLoading(false);
      setShow(false);
    }
    // setShow(false)
  }, [productList]);

  // const { name } = {
  //   name: company.map((a) => a.name)
  // };

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(!show);
  };

  return (
    <>
      {show && <AddProduct close={handleClose} />}
      <div className="flex flex-col m-auto w-full h-auto drop-shadow-xl px-2 md:w-[100%] lg:w-[100%]  xl:w-[100%]">
        {loading ? (
          <Spin indicator={antIcon} size="large" />
        ) : (
          <div className="flex flex-col px-2 py-3 lg:flex-row justify-between">
            {/* <h1 className="mt-4 text-[2.5rem]  font-bold text-gray-900">{name.charAt(0).toUpperCase() + name.slice(1)} Customer list</h1>  */}
            <h1 className="mt-4 text-[1.5rem] font-bold text-gray-900 md:text-[2rem] lg:text-[2rem]">
              {name} product list
            </h1>
            <div onClick={handleOpen} className="flex flex-row w-auto justify-between items-center">
              <button
                className="flex justify-center bg-gray-900 
      hover:bg-gray-600 text-gray-100 py-2 px-3
      rounded-[35px] tracking-wide font-semibold  shadow-lg cursor-pointer 
      transition ease-in duration-500">
                Add customer
              </button>
            </div>
          </div>
        )}
        <CustomFilter text="All Products" />
        <div className=" flex flex-col m-auto w-full h-auto drop-shadow-xl mt-[1rem] bg-white ">
          <div className="flex flex-row justify-between h-[3rem] items-center py-2 px-3 border w-full bg-gray-900 font-semibold text-white">
            <Checkbox />
            <div className="w-1/4">Name</div>
            <div className="w-1/4 flex items-center justify-center">Description</div>
            <div>Stock Status</div>
            <div>Action</div>
          </div>
          <div className="flex flex-col items-center w-full-h-auto">
            {/* {loading ? (
              <Spin indicator={antIcon} size="large" />
            ) : (
              <div className="bg-white h-auto w-full">
                {products === [] || products === null || products === 'undefined' ? (
                  <h1>No Products</h1>
                ) : (
                  products.map((element, _id) => <ProductComponent key={_id} product={element} />)
                )}
              </div>
            )} */}
               <div className="bg-white h-auto w-full">
                {products === [] || products === null || products === 'undefined' ? (
                  <h1>No Products</h1>
                ) : (
                  products.map((element, _id) => <ProductComponent key={_id} product={element} />)
                )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
