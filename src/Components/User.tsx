type userProps = {
  name: string;
  messageCount: number;
  isLogggedIn: boolean;
};

const User = (props: userProps) => {
  return (
    <div>
      <h2>
        {props.isLogggedIn
          ? `Welcome ${props.name} have ${props.messageCount} new messages`
          : "Welcome guest"}
      </h2>
      .
    </div>
  );
};

export default User;
