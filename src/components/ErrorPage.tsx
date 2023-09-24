import { useRouteError } from "react-router-dom";
import { getErrorWithStatusTextOrMessage } from "../utils/ErrorHandlers";

const ErrorPage = () => {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{getErrorWithStatusTextOrMessage(error)}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
