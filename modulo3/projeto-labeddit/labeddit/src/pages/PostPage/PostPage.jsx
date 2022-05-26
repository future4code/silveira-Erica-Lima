import React from "react";
import CardPost from "../../components/cardPost/CardPost";
import Header from "../../components/header/header/Header";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
  useProtectedPage();

  return (
    <div>
      {/* <Header /> */}
      <CardPost/>

    </div>
  );
};

export default PostPage;
