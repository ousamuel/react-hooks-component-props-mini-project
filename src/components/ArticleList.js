import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

  return <main>{articleArray()}</main>;

  function articleArray() {

    return posts.map((post) => {
      return (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes}
        />
      );
    });



  }
}

export default ArticleList;
