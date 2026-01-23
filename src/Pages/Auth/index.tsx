import { useState } from "react";
import { BreadCrumb } from "../../Components/Common";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const MyAccount = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchToRegister = () => setIsLogin(false);
  const handleSwitchToLogin = () => setIsLogin(true);

  return (
    <>
      <BreadCrumb title="My Account" />
      <div id="content" className="site-content my-50! container-p">
        <div className="site-content-inner edublink-container">
          <div className="edublink-main-content-inner">
            <div className="edublink-row">
              <div className="edublink-col-lg-8 edublink-col-md-10 mx-auto">
                <div className="u-columns col2-set px-5! py-5!" id="customer_login">
                  {isLogin ? (
                    <LoginForm onSwitchToRegister={handleSwitchToRegister} />
                  ) : (
                    <RegisterForm onSwitchToLogin={handleSwitchToLogin} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
