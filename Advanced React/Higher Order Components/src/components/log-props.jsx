//HOCs start with lowercase letter

export const logProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
