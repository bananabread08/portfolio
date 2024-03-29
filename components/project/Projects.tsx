import { projectdata } from '../data/projectData';
import styles from '../../styles/Projects.module.scss';
import { ProjectCard } from './ProjectCard';
import { Tags } from './Tags';
import utils from '../../styles/utils.module.scss';
export const Projects = () => {
  return (
    <section className={utils.container} id={'projects'}>
      <h2>My Personal Projects</h2>
      <ul className={styles.proj_container}>
        {projectdata.map((proj) => {
          return (
            <ProjectCard
              key={proj.title}
              id={proj.id}
              title={proj.title}
              summary={proj.summary}
              tags={proj.tags}
              image={proj.image}
              repo={proj.repo}
              live={proj.live}
            >
              <ul className={styles.tag_container}>
                {proj.tags.map((tag) => {
                  return <Tags key={tag + proj.title} tag={tag} />;
                })}
              </ul>
            </ProjectCard>
          );
        })}
      </ul>
    </section>
  );
};
