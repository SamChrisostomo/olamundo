import { Link } from "react-router-dom";
import GlobalButton from "../GlobalButton";
import styles from "./Posts.module.css";

function PostCard({ post }) {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/posts/${post.id}/capa.png`}
                alt={`${post.titulo}`}
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Link to={`/posts/${post.id}`}><GlobalButton>Ler</GlobalButton></Link>
        </div>
    );
}

export default PostCard;