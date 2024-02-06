/* eslint-disable react/prop-types */
import React from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { formInput, labelClass } from 'common/classes';

function UploadForm(props) {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-col w-[40%]">
        <label className={labelClass}>
          Add Business logo<span className="text-red-500 font-small">*</span>
        </label>
        <Upload
          {...props}
          onChange={props.handleLogo}
          fileList={props.fileList}
          className="w-[100%]">
          <Button className={formInput} icon={<UploadOutlined />}>
            Upload logo
          </Button>
        </Upload>
      </div>
      <div className="flex flex-col w-[50%] lg:w-[60%]">
        <label className={labelClass}>
          Website<span className="text-red-500 font-small">*</span>
        </label>
        <input
          value={props.web}
          onChange={props.updateWeb}
          className={formInput}
          type="text"
          name="website"
        />
      </div>
    </div>
  );
}

export default UploadForm;
