type parentProps = {
  children: React.ReactNode;
};

const Parent = (props: parentProps) => {
  return <h1>{props.children}</h1>;
};
export default Parent;
