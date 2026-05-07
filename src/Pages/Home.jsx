import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">

      <div className="hero">

        {/* LEFT */}
        <div className="hero-left">
          <h4>👋 Hello, I'm</h4>

          <h1>
            <span>Sonali</span> Sakhare
          </h1>

          <h3>Frontend Developer | React Enthusiast</h3>

          <p>
            I build responsive and user-friendly websites using HTML, CSS,
            JavaScript and React.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary-custom">
              View Projects →
            </Link>

            <Link to="/contact" className="btn-outline-custom">
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src="/MyPhoto.jpeg" alt="profile" />
        </div>

      </div>

      {/* SKILLS */}
      <div className="skills">
        {skills.map((item, index) => (
          <div className="skill-box" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const skills = [
  {
    name: "HTML5",
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS3",
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "React",
    img: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  },
  {
    name: "Bootstrap",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
];

export default Home;