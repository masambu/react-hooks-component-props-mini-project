import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header.js"
import About from "../components/About.js"
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
        <Header blogName={blogData.name}/>
        <About imageSrc={blogData.image} aboutText={blogData.about}/>
        <ArticleList articles={blogData.articles}/>
     
    </div>
  );
}

export default App;
