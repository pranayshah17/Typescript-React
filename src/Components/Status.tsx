type statusProps = {
  status: "loading" | "success" | "Error";
};

const Status = (props: statusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading ...";
  } else if (props.status === "success") {
    message = "Data fetched Succesfully";
  } else if (props.status === "Error") {
    message = "Error occured";
  }
  return (
    <div>
      <h2> status - {message}</h2>
    </div>
  );
};
export default Status;
