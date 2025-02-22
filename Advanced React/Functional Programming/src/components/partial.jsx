export const partialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButtonPartial = partialComponent(Button, { color: "crimson" });
export const SmallRedButtonPartial = partialComponent(RedButtonPartial, {
  size: "small",
});
