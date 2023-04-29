import './Posts.css';
import styles from "./Posts.module.css";
import { Route, Routes, useParams } from 'react-router-dom';
import posts from '../../json/posts.json';
import PostModelo from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown';
import NotFound from '../NotFound';
import PaginaPadrao from '../../components/PaginaPadrao';
import PostCard from '../../components/PostCard';

function Posts() {
    const urlParam = useParams();
    const post = posts.find((post) => {
        return post.id === parseInt(urlParam.id);
    })

    if (!post) {
        return <NotFound />
    }

    const postRecomendado = posts
        .filter((post) => post.id !== Number(urlParam.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

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
                        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                        <ul className={styles.postsRecomendados}>
                            {postRecomendado.map((post) => 
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            )}
                        </ul>
                    </PostModelo >
                } />
            </Route>
        </Routes>
    );
}

export default Posts;