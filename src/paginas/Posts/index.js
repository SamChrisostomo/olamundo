import './Posts.css';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from '../../json/posts.json';
import PostModelo from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown';
import NotFound from '../NotFound';
import PaginaPadrao from '../../components/PaginaPadrao';

function Posts() {
    const urlParam = useParams();
    const post = posts.find((post) => {
        return post.id === parseInt(urlParam.id);
    })

    if (!post) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className='post-markdown-container'>
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo >
                } />
            </Route>
        </Routes>
    );
}

export default Posts;