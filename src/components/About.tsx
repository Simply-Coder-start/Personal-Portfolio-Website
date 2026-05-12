import "./styles/About.css";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-model">
          {/* This container reserves space for the fixed 3D character */}
        </div>
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <div className="about-typing">
            <Typewriter
              words={[
                "AI/ML Developer",
                "Generative AI Enthusiast",
                "Building Intelligent Systems",
                "AI Agent & Automation Developer",
                "Creating AI-Powered Experiences",
                "Passionate About Scalable AI Solutions",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={2000}
            />
          </div>
          <div className="about-description">
            <p>
              Ambitious <span className="highlight">Artificial Intelligence & Machine Learning</span> student passionate about building intelligent, scalable, and automation-driven applications that solve real-world problems.
            </p>
            <p>
              Focused on <span className="highlight">Generative AI</span>, <span className="highlight">AI Agents</span>, <span className="highlight">Machine Learning</span>, and AI-powered workflow automation with hands-on experience developing browser automation systems, intelligent chat applications, and predictive analytics solutions.
            </p>
            <p>
              Skilled in <span className="highlight">Python, FastAPI, REST APIs, NLP concepts</span>, and modern AI development tools with a strong interest in <span className="highlight">Large Language Models (LLMs)</span>, intelligent orchestration systems, and advanced automation frameworks.
            </p>
            <p>
              Passionate about innovation, rapid learning, and building impactful AI products that enhance productivity, decision-making, and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
