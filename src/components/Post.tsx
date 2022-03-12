import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../interfaces';

interface Props {
  article: Article;
}

const Post: FC<Props> = ({ article: { _id, title, deck } }) => {
  return (
    <article className='Article'>
      <h1>{title}</h1>
      <p>{deck}</p>
      <Link to={`/single-post/${_id}`}>Read more &rarr;</Link>
    </article>
  );
};

export default Post;
