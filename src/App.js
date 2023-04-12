import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { datas } from "./data";
import CardList from "./components/CardList";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState(datas);
  const [searchValue, setSearchValue] = useState("");

  const changeText = (e) => {
    // setSearchValue(e.target.value);
    const filteredUser = datas.filter((user) =>
      user.first.toLowerCase().includes(e.target.value)
    );
    setUserList(filteredUser);
  };
  return (
    <div className="container text-center">
      <h1 className="title mb-4">User List</h1>
      <Search searchValue={searchValue} handleChange={changeText} />
      <CardList users={userList} />
    </div>
  );
}

export default App;
