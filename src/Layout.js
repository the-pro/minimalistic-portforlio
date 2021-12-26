import SimpleCard from "./SimpleCard";
import { config } from "./config";

export default function Layout(props) {
  return (
    <div className="layout">
      <div className="col-1">
        <SimpleCard
          title={config.name}
          tagline={config.tagline}
          desc={config.desc}
        />
      </div>
      <div className="col-2">
        <SimpleCard
          title={config.name}
          tagline={config.tagline}
          desc={config.desc}
        />
        <SimpleCard
          title={config.name}
          tagline={config.tagline}
          desc={config.desc}
        />
        <SimpleCard
          title={config.name}
          tagline={config.tagline}
          desc={config.desc}
        />
      </div>
      <div className="col-3"></div>
    </div>
  );
}
