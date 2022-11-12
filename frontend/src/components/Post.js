import "./post.scss";

const Post = (props) => {
    const { name = "", picture = "", description = "" } = props.post || {};
    return (
        <div className="post_wapper">
            <div>
                <img src={picture || "https://via.placeholder.com/150"} />
            </div>
            <div className="post_left">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Post;
