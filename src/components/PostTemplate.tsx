import { useParams } from 'react-router-dom';
import { useGetPost } from '../useRequest';

const PostTemplate = () => {
  const { id } = useParams();
  const { data, error, isLoading, isSuccess } = useGetPost(id || '');
  if (error) return <h1>Something went wrong!</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  return isSuccess ? (
    <article className='Post'>
      <h1>{data.title}</h1>
      {
        // eslint-disable-next-line array-callback-return
        data.body.blocks.map((e: any) => {
          if (e.text) {
            return <p key={e.key}>{e.text}</p>;
          }
        })
      }
    </article>
  ) : (
    <p>error</p>
  );
};

export default PostTemplate;
