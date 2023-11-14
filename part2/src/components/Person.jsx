const Person = ({ name, number }) => {
  return (
    <li>
      <ul>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
    </li>
  );
};

export default Person;
