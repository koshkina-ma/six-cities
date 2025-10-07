import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFoundPage;
