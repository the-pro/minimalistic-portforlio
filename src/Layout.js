import SimpleCard from "./SimpleCard";
import { config } from "./config";

export default function Layout(props) {
  return (
    <div className="layout">
      <div className="col-1">
        <div className="sticky">
          <div className="gap">
            <h2>About Me</h2>
          </div>
          <SimpleCard
            title={config.name}
            tagline={config.tagline}
            desc={config.desc}
            github={config.urls.github}
            twitter={config.urls.twitter}
          />
        </div>
      </div>

      <div className="col-2">
        <div className="gap">
          <h2>Work Experience</h2>
        </div>
        {config.experience.map((exp, index) => {
          return (
            <div>
              <SimpleCard
                title={exp.company}
                tagline={exp.title + "  |  " + exp.duration}
                desc={exp.desc}
              />
            </div>
          );
        })}
        <div className="gap">
          <h2>Projects</h2>
        </div>
        {config.projects.map((project, index) => {
          return (
            <div>
              <SimpleCard
                title={project.name}
                desc={project.desc}
                github={project.github}
                live={project.live}
              />
            </div>
          );
        })}
      </div>
      {/* <div className="col-3"></div> */}
    </div>
  );
}
