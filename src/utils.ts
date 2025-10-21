import { CommentType } from './types';

const formatDateToMonthYear = (dateString: string): string => {
  const d = new Date(dateString);
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(d);
};

const getLatestComments = (comments: CommentType[], limit = 10): CommentType[] => [...comments]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, limit);

export { formatDateToMonthYear, getLatestComments };

