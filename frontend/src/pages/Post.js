import Post from "../components/Post";
import { useQuery, QueryClient } from "@tanstack/react-query";
import axios from "axios";
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
        },
    },
});

const Posts = () => {
    const getPosts = async () => {
        const response = await axios.get(
            "https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article?fbclid=IwAR02fMRC7QAROI1Xp2KYtKl1XGOWqgQQlKGvN5dKJTOOmh63x3QJ-g0JSsM"
        );
        if (response && response.status === 200) {
            return response.data;
        }
    };
    const { isLoading, data } = useQuery({
        queryKey: ["post1"],
        queryFn: getPosts,
        staleTime: 0,
        cacheTime: 3000,
    });
    return (
        <div className="container">
            <h3>List Posts</h3>
            {isLoading && <p>Loading</p>}
            {data &&
                data.length &&
                data.map((post) => {
                    const id = post.id;
                    return <Post key={id} post={post} />;
                })}
        </div>
    );
};

export default Posts;
