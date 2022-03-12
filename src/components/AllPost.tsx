import { Article } from '../interfaces';
import { useGetPosts } from '../useRequest';
import Post from './Post';

const AllPost = () => {
  const { data, error, isLoading, isSuccess } = useGetPosts();

  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  return (
    <div>
      {isSuccess &&
        data.items.map((post: Article) => (
          <Post key={post._id} article={post} />
        ))}
    </div>
  );
};

export default AllPost;
