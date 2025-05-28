import { nameData } from "../data";

const Name = () => {
  return (
    <div className="name">
      <h1>
        <span className="name">{nameData.firstName}</span>{" "}
        <span className="name">{nameData.lastName}</span>
      </h1>
    </div>
  );
};
export default Name;
