import React from "react"
import Article from "./Article";
import blogData from "../data/blog.js"

function ArticleList () {
    return(
        <main>
            {
            blogData.posts.map((post) =>{
                  return <Article key={post.id} title={post.title} date={post.date} minutes={post.minutes} preview={post.preview} />
              })  
            }
            </main>
    )
}

export default ArticleList