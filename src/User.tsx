type userProps = {
  name: string;
  messageCount?: number;
  isLogggedIn: boolean;
};

const User = (props: userProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLogggedIn
          ? `Welcome ${props.name} have ${messageCount} new messages`
          : "Welcome guest"}
      </h2>
      .
    </div>
  );
};

export default User;
