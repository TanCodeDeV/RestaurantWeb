import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>बाईईईईईईईईईईईईई कायययय प्रकाररररर!!</h1>
      <h3>
        {err.status} : {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorPage;
