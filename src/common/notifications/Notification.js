import { notification } from 'antd';

import 'antd/dist/antd.min.css';

export const openNotificationWithIcon = (type, msg) => {
  notification[type]({
    message: type,
    description: msg
  });
};
