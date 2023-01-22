import { nameData } from "../data";

const Name = () => {
  return (
    <div className="name">
      <h1>
        {nameData.firstName}
        {` `}
        {nameData.lastName}
      </h1>
    </div>
  );
};
export default Name;
