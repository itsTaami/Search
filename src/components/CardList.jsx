import React from "react";
import CardItem from "./Card";

const CardList = (props) => {
  const { users } = props;
  return (
    <div className="users d-flex flex-wrap gap-5">
      {props.users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default CardList;
