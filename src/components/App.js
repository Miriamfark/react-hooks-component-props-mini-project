import React from "react";
import blogData from "../data/blog.js";
import Header from "./Header.js"
import About from "./About.js"
import ArticleList from "./ArticleList"


console.log(blogData);

function App() {
  console.log(blogData.name)
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About src={blogData.image} about={blogData.about}/>
      <ArticleList />
    </div>
  );
}

export default App;
