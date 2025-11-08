import { CommentType } from '../../types';
import { getLatestComments } from '../../utils';
import { Comment } from '../../components';

type CommentsListProps = {
  comments: CommentType[];
};

function CommentsList({ comments }: CommentsListProps): JSX.Element {
  const latestComments = getLatestComments(comments);

  return (
    <ul className="reviews__list">
      {latestComments.map((c) => (
        <Comment key={c.id} comment={c} />
      ))}
    </ul>
  );
}

export default CommentsList;

