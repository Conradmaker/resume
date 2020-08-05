import React from "react";
import Main from "../components/main";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../modules/message";
import Header from "../components/header";

export default function MainContainer({ history }) {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);
  const onCreate = (name, email, message) =>
    dispatch(addComment(name, email, message));
  return (
    <div>
      <Header history={history} />
      <Main onCreate={onCreate} />
    </div>
  );
}
