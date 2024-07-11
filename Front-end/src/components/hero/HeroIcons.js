import React from "react";
import {
  MdElectricBolt,
  MdOutlineCreditScore,
  MdOutlineWorkspacePremium,
  MdAccessAlarm,
} from "react-icons/md";
import "./HeroIcons.css";
function HeroIcons() {
  return (
    <div className="icons-row">
      <HeroIcon
        icon={<MdElectricBolt size={35} />}
        title={"fast delivery"}
        subtitle={"start from $10"}
      />
      <HeroIcon
        icon={<MdOutlineWorkspacePremium size={35} />}
        title={"mony guarantee"}
        subtitle={"7 day black"}
      />
      <HeroIcon
        icon={<MdAccessAlarm size={35} />}
        title={"365 day"}
        subtitle={"for free return"}
      />
      <HeroIcon
        icon={<MdOutlineCreditScore size={35} />}
        title={"payment"}
        subtitle={"secure system"}
      />
    </div>
  );
}

export default HeroIcons;

function HeroIcon({ icon, title, subtitle }) {
  return (
    <div className="only-icons">
      {icon}
      <div>
        <h3>{title}</h3>
        <p style={{ fontWeight: "300", color: "#727171" }}>{subtitle}</p>
      </div>
    </div>
  );
}
