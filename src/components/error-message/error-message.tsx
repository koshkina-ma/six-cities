import './error-message.css';

type ErrorMessageProps = {
  message: string;
};

function ErrorMessage({ message }: ErrorMessageProps): JSX.Element {
  return (
    <div className="error-message" role="alert">
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
