import { Spin } from 'antd';
import './spinner.sass';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 100, color: 'lightblue' }} spin />;

export default function Spinner () {
  return (
  <div className="SpinnerContainer">
    <Spin indicator={antIcon} />
  </div>
  )
};

  