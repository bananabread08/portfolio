import { data } from './About.style';
import { AboutSection, SkillCardWrapper, AnimatedP } from './About.style';
import SkillCard from './SkillCard';
export default function About() {
  return (
    <AboutSection id="about">
      <div>
        <h1>About</h1>
        <AnimatedP>Consistency is key.</AnimatedP>
        <p>
          You can call me Maj. I went through the non-traditional way of
          learning programming: self-teaching.{' '}
        </p>
        <p>
          I am confident with my learning ability and with that, I love trying
          new technologies. Currently learning more about the backend:{' '}
          <strong>NodeJS</strong>, <strong>MongoDB</strong>, and{' '}
          <strong>Express</strong>.
        </p>
        <p>I usually catch Pokemon during my free time!</p>
      </div>
      <div>
        <h2>Tech Stack</h2>
        <AnimatedP>Always Learning.</AnimatedP>
        <SkillCardWrapper>
          {data.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </SkillCardWrapper>
      </div>
    </AboutSection>
  );
}
