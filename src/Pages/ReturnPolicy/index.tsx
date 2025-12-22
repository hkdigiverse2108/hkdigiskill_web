import { Queries } from "../../Api";
import { BreadCrumb } from "../../Components/Common";
import { LEGALITY_TYPE } from "../../Constants";

const ReturnPolicy = () => {
  const { data } = Queries.useGetLegality(LEGALITY_TYPE.REFUND);

  return (
    <div>
      <BreadCrumb title="Return Policy" />
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

export default ReturnPolicy;
