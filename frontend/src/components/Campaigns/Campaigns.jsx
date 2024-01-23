import "./Campaigns.css";
import CampaignsItem from "./CampaignsItem";
const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <CampaignsItem />
          <CampaignsItem />
        </div>
        <div className="campaigns-wrapper">
          <CampaignsItem />
          <CampaignsItem />
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
