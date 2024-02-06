import React from 'react';
import Tag from 'antd/lib/tag';
import 'antd/lib/tag/style/css';

const statusMap = {
  complete: <Tag color="green">Complete</Tag>,
  inProgress: <Tag color="orange">In Progress</Tag>
};

export const StatusTag = ({ status }) => statusMap[status];
