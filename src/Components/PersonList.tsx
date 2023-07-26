type personListProps = {
  nameList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: personListProps) => {
  return (
    <div>
      {props.nameList.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
};
export default PersonList;
