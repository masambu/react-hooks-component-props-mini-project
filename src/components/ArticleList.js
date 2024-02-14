import React from 'react';
import Article from './Article';

function ArticleList({ articles }) {
    return (
        <main>
            {articles.map((articles, index) => (
                <Article key={index} {...articles} />
            
            ))}
        </main>
    )
}
export default ArticleList;