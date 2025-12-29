import React, { type FC } from "react";

const CourseOverviewSection:FC<{desc?:string}>= ({ desc = ""}) => {
  return (
    <div
      className="course-tab-panel-overview course-tab-panel"
      id="tab-overview"
    >
      <div className="course-description" id="learn-press-course-description">
        <h3>Course Description</h3>
        <div
          dangerouslySetInnerHTML={{
            __html: desc || "",
          }}
        ></div>
        <p>
          Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod
          tempor inc idid unt ut labore et dolore magna aliqua enim ad minim
          veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo
          consequat duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur enim ipsam.
        </p>
        <p className="mb--60">
          Excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium totam rem aperiam.
        </p>
        <h5>What You’ll Learn?</h5>

        <ul className="edublink-ul-style-check">
          <li>
            Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
          </li>
          <li>
            Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam
            id diam maer
          </li>
          <li>
            Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac
          </li>
          <li>
            Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
            sociis
          </li>
        </ul>

        <div className="edublink-mt--40">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </div>
      </div>
    </div>
  );
};

export default CourseOverviewSection;
