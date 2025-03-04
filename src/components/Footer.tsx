import React from "react";
import { FooterProps } from "../utils/types";

const Footer: React.FC<FooterProps> = ({
  itemsLeft,
  filter,
  onFilterChange,
  onClearCompleted,
}) => {
  return (
    <div className="footer">
      <span className="items-left">{itemsLeft} tasks left</span>

      <div className="filters">
        <button
          className={`filter-button ${filter === "all" ? "active" : ""}`}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`filter-button ${filter === "active" ? "active" : ""}`}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`filter-button ${filter === "completed" ? "active" : ""}`}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>

      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default Footer;
