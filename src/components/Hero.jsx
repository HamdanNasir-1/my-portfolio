// /**
//  * 
// import profile from "../assets/profile.jpg";

// export default function Hero() {
//   return (
//     <section className="hero">
//     <div className="hero-container">
//     <div className="hero-text">
//     <h1>Md Hamdan Nasir</h1>
//     <p>BTech CSE Student | Full Stack Developer | ML Enthusiast</p>
//     <a href="#projects" className="btn">View My Work</a>
//     <div className="hero-stats">
//     <div>
//     <h3>3+</h3>
//     <p>Projects</p>
//     </div>
//     <div>
//     <h3>Full Stack</h3>
//     <p>Developer</p>
//     </div>
//     <div>
//           <h3>ML</h3>
//           <p>Enthusiast</p>
//         </div>
//         <div className="hero-socials">
//         <a href="https://github.com/yourusername" target="_blank">GitHub</a>
//         <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
//         <a href="mailto:your@email.com">Email</a>
//         </div>
        
//         </div>
        
//         </div>
        
//         <div className="hero-image">
//         <img src={profile} alt="Md Hamdan Nasir" />
//         </div>
//         </div>
//         </section>
//       );
//     }
//     */
// import profile from "../assets/profile.jpg";

// export default function Hero() {
//   return (
//     <section className="hero">
//       <div className="hero-container">

//         {/* LEFT CONTENT */}
//         <div className="hero-text">
//           <h1>Md Hamdan Nasir</h1>
//           <p>
//             BTech CSE Student | Full Stack Developer | ML Enthusiast
//           </p>

//           <a href="#projects" className="btn hero-btn">
//             View My Work
//           </a>

//           {/* SOCIAL BUTTONS */}
//           <div className="hero-socials">
//             <a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noreferrer"
//               className="social-btn"
//             >
//               GitHub
//             </a>

//             <a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noreferrer"
//               className="social-btn"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="mailto:your@email.com"
//               className="social-btn"
//             >
//               Email
//             </a>
//           </div>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="hero-image">
//           <img src={profile} alt="Md Hamdan Nasir" />
//         </div>

//       </div>
//     </section>
//   );
// }
import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-text">
          <h1>Md Hamdan Nasir</h1>

          <p className="hero-role">
            BTech CSE Student | Full Stack Developer | ML Enthusiast
          </p>

          <p className="hero-tagline">
            I build scalable web applications and solve real-world problems using modern technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn hero-btn">
              View My Work
            </a>
          </div>

          {/* ✅ SOCIAL BUTTONS ADDED HERE */}
          <div className="hero-socials">
            <a
              href="https://github.com/HamdanNasir-1/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/hamdan-nasir-7761913a1/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              LinkedIn
            </a>

            {/* <a
              href="mailto:nasirhamdan203@gmail.com"
              className="social-btn"
            >
              Email
            </a> */}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <img src={profile} alt="Md Hamdan Nasir" />
        </div>

      </div>
    </section>
  );
}