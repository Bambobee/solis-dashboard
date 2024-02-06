/* eslint-disable react/prop-types */
import React from 'react';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';

function AddRemoveInputField(props) {
  return (
    <div className="flex bg-white flex-col h-auto min-h-max w-full items-center bg-white">
      {props.inputFields.map((data, index) => {
        let { name, description, quantity, price, amount } = data;
        const am = price * quantity;
        amount = am;
        props.handleAmount(am, index);
        return (
          <div
            className="flex flex-row w-full h-12  justify-between items-center px-2 tex-[16px]  border-b"
            key={index}>
            <div className="border">#</div>
            <div className="flex flex-row w-[98%] h-12 justify-between items-center tex-[16px] ">
              <div className=" flex flex-row w-[55%] justify-between font-semibold">
                <div className="cursor-ponter w-[40%]">
                  <input
                    type="text"
                    className={`w-full flex items-center bg-white font-semibold justify-center p-2 ${
                      props.status === 'paid' ? 'focus:outline-none border-none' : 'border-none'
                    }`}
                    placeholder="Item name"
                    value={name}
                    name="name"
                    id={data.name}
                    data-id={index}
                    readOnly={props.status === 'paid' ? true : false}
                    onChange={(e) => props.handleChange(index, e)}
                  />
                </div>
                <span className="w-[55%]">
                  <input
                    type="text"
                    className={`w-[100%] flex items-center bg-white font-semibold justify-center p-2 ${
                      props.status === 'paid' ? 'focus:outline-none border-none' : 'border-none'
                    }`}
                    placeholder="Description"
                    value={description}
                    name="description"
                    id={description}
                    data-id={index}
                    readOnly={props.status === 'paid' ? true : false}
                    onChange={(e) => props.handleChange(index, e)}
                  />
                </span>
              </div>
              <div className="flex justify-center items-center font-semibold ">
                <input
                  type="text"
                  className={`w-[4rem] flex items-center bg-white font-semibold justify-center p-2 ${
                    props.status === 'paid'
                      ? 'focus:outline-none border-none w-[5rem]'
                      : 'border-none'
                  }`}
                  placeholder="qty"
                  value={quantity}
                  name="quantity"
                  id={quantity}
                  data-id={index}
                  readOnly={props.status === 'paid' ? true : false}
                  onChange={(e) => props.handleChange(index, e)}
                />
              </div>

              <div className="flex justify-center items-center font-semibold">
                <input
                  className={`w-[4rem] flex items-center bg-white font-semibold justify-center p-2 ${
                    props.status === 'paid' ? 'focus:outline-none border-none' : 'border-none'
                  }`}
                  type="text"
                  placeholder="Price"
                  value={price.toLocaleString('en-US')}
                  name="price"
                  id={price}
                  data-id={index}
                  readOnly={props.status === 'paid' ? true : false}
                  onChange={(e) => props.handleChange(index, e)}
                />
              </div>

              <div className="flex justify-center  items-center font-semibold">
                <input
                  type="text"
                  className="flex items-center w-[5rem] focus:outline-none border-none font-semibold p-2"
                  placeholder="amount"
                  value={(quantity * price).toLocaleString('en-US')}
                  id={amount}
                  name="amount"
                  data-id={index}
                  readOnly={true}
                  // onChange={(value)=>console.log(value)}
                />
              </div>
            </div>
            {props.status === 'paid' ? (
              <div> </div>
            ) : (
              <DeleteOutlined onClick={props.remove} className="hover:text-red-400 p-0" />
            )}
          </div>
        );
      })}
      {props.status === 'paid' ? (
        <div>{''}</div>
      ) : (
        <div
          className="flex flex-row text-[0.9rem] items-center font-bold mt-2 hover:text-sky-700 cursor-pointer text-blue-500"
          onClick={props.add}>
          <PlusCircleOutlined />
          <span className="mx-1"> Add an Item</span>
        </div>
      )}
    </div>
  );
}
export default AddRemoveInputField;
