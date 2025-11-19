import { NavLink } from "react-router-dom";
import { ROUTES } from "../../Constants";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <NavLink to={ROUTES.HOME}>
        <button className="">
          Back Home
        </button>
      </NavLink>
      {/* <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <NavLink to={ROUTES.HOME}>
            <FormButton
              htmlType="button"
              text="Back Home"
              className="custom-button button button--mimas w-full sm:w-fit h-auto!"
            />
          </NavLink>
        }
      /> */}
    </div>
  );
};

export default PageNotFound;
