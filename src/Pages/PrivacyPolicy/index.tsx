import { Queries } from "../../Api";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { LEGALITY_TYPE } from "../../Constants";

const PrivacyPolicy = () => {
  const { data } = Queries.useGetLegality(LEGALITY_TYPE.PRIVACY);

  return (
    <div id="privacy-policy">
      <section>
        <BreadCrumb title="Privacy Policy" />
      </section>

      <section className="container">
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data.content || "",
          }}
        />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
