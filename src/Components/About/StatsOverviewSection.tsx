import React from "react";

const statsData = [
  {
    id: 1,
    value: "29.3K",
    label: "STUDENT ENROLLED",
    icon: <i aria-hidden="true" className="edublink icon-48"></i>,
    color: "#3bbca7",
  },
  {
    id: 2,
    value: "32.4K",
    label: "CLASS COMPLETED",
    icon: <i aria-hidden="true" className="edublink icon-47"></i>,
    color: "#ff6d6d",
  },
  {
    id: 3,
    value: "100%",
    label: "SATISFACTION RATE",
    icon: <i aria-hidden="true" className="edublink icon-49"></i>,
    color: "#6c7bff",
  },
  {
    id: 4,
    value: "354+",
    label: "TOP INSTRUCTORS",
    icon: <i aria-hidden="true" className="edublink icon-50"></i>,
    color: "#f9a134",
  },
];

const StatsOverviewSection = () => {
  return (
    <div className="stats-container">
      {statsData.map((stat) => (
        <div className="stat-card" key={stat.id}>
          <div
            className="stat-icon-wrapper "
            style={{ backgroundColor: stat.color + "20" }} // light tint
          >
            <div className="elementor-icon stat-icon" style={{ color: stat.color }}>
              {stat?.icon}
            </div>
          </div>

          <h2 className="stat-value">{stat.value}</h2>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsOverviewSection;
