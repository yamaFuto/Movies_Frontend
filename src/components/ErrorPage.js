import { useRouteError } from "react-router-dom";


export default function ErrorPage() {
  //errorが来たら、自動的に通知が来る
  const error = useRouteError();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">Ooops!</h1>
          <p>Sorry, an enexpected error has occurred.</p>
          <p>
            <em>{error.statusText || error.message}</em>
          </p>
        </div>
      </div>
    </div>
  )
}