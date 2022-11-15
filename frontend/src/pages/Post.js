import { useState, useEffect } from "react";
import Post from "../components/Post";
const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        //fetch post
        setLoading(true);
        fetch(
            "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?fbclid=IwAR02fMRC7QAROI1Xp2KYtKl1XGOWqgQQlKGvN5dKJTOOmh63x3QJ-g0JSsM"
        )
            .then((response) => response.json())
            .then((post) => {
                console.log(post);
                setPosts(post);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h3>List Posts</h3>
            {loading && <span>Loading ...</span>}
            {posts &&
                posts.length > 0 &&
                posts.map((post) => {
                    const id = post.id;
                    return <Post key={id} post={post} />;
                })}
            <Post />;
        </div>
    );
};

export default Posts;
