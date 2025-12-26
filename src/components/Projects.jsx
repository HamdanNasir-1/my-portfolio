// // export default function Projects() {
// //   return (
// //     <section id="projects" className="section">
// //       <div className="section-container">
// //         <h2>Projects</h2>

// //         <div className="projects-grid">
// //           <div className="project-card">
// //             <h3>Spam Detection using ML</h3>
// //             <p>ML model that classifies spam and non-spam messages.</p>
// //             <span>Python, Machine Learning</span>
// //           </div>

// //           <div className="project-card">
// //             <h3>AI-based Farmer Advisory System</h3>
// //             <p>Helps farmers with crop-related queries.</p>
// //             <span>Machine Learning, Web</span>
// //           </div>

// //           <div className="project-card">
// //             <h3>Hospital Website</h3>
// //             <p>Responsive hospital management website.</p>
// //             <span>HTML, CSS, JavaScript</span>
// //           </div>

// //           <div className="project-card">
// //             <h3>Digital Image Processing using Machine Learning</h3>
// //             <p>
// //               Developed a Machine Learning model for image recognition that
// //               accurately predicts images even at extremely low resolutions
// //               (12×12 pixels) by applying digital image processing and feature
// //               extraction techniques.
// //             </p>
// //             <span>Python, Machine Learning, Digital Image Processing</span>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// export default function Projects() {
//   return (
//     <section className="projects" id="projects">
//       <h2 className="section-title">Projects</h2>

//       <div className="projects-grid">

//         <a
//           href="https://github.com/yourusername/spam-detection-ml"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="project-card"
//         >
//           <h3>Spam Detection using Machine Learning</h3>
//           <p>
//             ML model that classifies spam and non-spam messages using
//             supervised learning techniques.
//           </p>
//           <span className="tech">
//             Python, Machine Learning
//           </span>
//         </a>

//         <a
//           href="https://github.com/yourusername/farmer-advisory-ai"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="project-card"
//         >
//           <h3>AI-based Farmer Advisory System</h3>
//           <p>
//             AI system that helps farmers with crop-related queries
//             and recommendations.
//           </p>
//           <span className="tech">
//             Machine Learning, Web
//           </span>
//         </a>

//         <a
//           href="https://github.com/yourusername/hospital-website"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="project-card"
//         >
//           <h3>Hospital Website</h3>
//           <p>
//             Responsive hospital management website with clean UI
//             and structured layout.
//           </p>
//           <span className="tech">
//             HTML, CSS, JavaScript
//           </span>
//         </a>

//         <a
//           href="https://github.com/yourusername/digital-image-processing-ml"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="project-card"
//         >
//           <h3>Digital Image Processing using Machine Learning</h3>
//           <p>
//             Image recognition model that accurately predicts images
//             even at very low resolutions (12×12 pixels).
//           </p>
//           <span className="tech">
//             Python, Machine Learning, Digital Image Processing
//           </span>
//         </a>

//       </div>
//     </section>
//   );
// }
export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">
        <span className="section-icon"></span> Projects
      </h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Spam Detection using Machine Learning</h3>
          <p>
            ML model that classifies spam and non-spam messages using
            supervised learning techniques.
          </p>
          <span className="tech">Python, Machine Learning</span>

          <a
            href="https://github.com/yourusername/spam-detection-ml"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Go to Website →
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>AI-based Farmer Advisory System</h3>
          <p>
            AI system that helps farmers with crop-related queries
            and recommendations.
          </p>
          <span className="tech">Machine Learning, Web</span>

          <a
            href="https://github.com/yourusername/farmer-advisory-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Go to Website →
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Hospital Website</h3>
          <p>
            Responsive hospital management website with clean UI
            and structured layout.
          </p>
          <span className="tech">HTML, CSS, JavaScript</span>

          <a
            href="https://github.com/yourusername/hospital-website"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Go to Website →
          </a>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <h3>Digital Image Processing using Machine Learning</h3>
          <p>
            Image recognition model that predicts images accurately
            even at very low resolutions (12×12 pixels).
          </p>
          <span className="tech">
            Python, Machine Learning, Digital Image Processing
          </span>

          <a
            href="https://github.com/yourusername/digital-image-processing-ml"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Go to Website →
          </a>
        </div>

      </div>
    </section>
  );
}
