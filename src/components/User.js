import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h3>Count = {count}</h3>
      <h3>Count = {count1}</h3>
      <h3>Location: Delhi</h3>
      <h3>Contact: anshusingh@395</h3>
    </div>
  );
};

export default User;
