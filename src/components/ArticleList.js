import Article from './Article'

function ArticleList( {posts} ) {
    const articleListed = posts.map((element) => {
        return (
            <Article 
            title = {element.title}
            date = {element.date}
            preview = {element.preview}
            key = {element.id}
            />
        )
    })
    
    return (
        <main>
            {articleListed}
        </main>
    )
}

export default ArticleList