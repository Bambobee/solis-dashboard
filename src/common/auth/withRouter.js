import history from './history';

export const WithRouter = (Component) => {
  const Wrapper = (props) => {
    return <Component history={history} {...props} />;
  };

  return Wrapper;
};
