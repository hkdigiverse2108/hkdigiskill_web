import { Link } from "react-router-dom";
import { ROUTES } from "../../Constants";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Link to={ROUTES.HOME}>
        <button className="">
          Back Home
        </button>
      </Link>
      {/* <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={ROUTES.HOME}>
            <FormButton
              htmlType="button"
              text="Back Home"
              className="custom-button button button--mimas w-full sm:w-fit h-auto!"
            />
          </Link>
        }
      /> */}
    </div>
  );
};

export default PageNotFound;
