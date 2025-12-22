import { Queries } from "../../Api";
import { BreadCrumb } from "../../Components/Common";
import { LEGALITY_TYPE } from "../../Constants";

const TermsCondition = () => {
  const { data } = Queries.useGetLegality(LEGALITY_TYPE.TERMS);

  return (
    <div>
      <BreadCrumb title="Terms & Conditions" />
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

export default TermsCondition;
