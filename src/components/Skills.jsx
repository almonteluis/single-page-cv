export default function Skills() {
  const skills = [
    "ReactJS",
    "Next.js",
    "Zustand",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "JSON",
    "Sitecore Experience Platform (versions 8 and 9)",
    "RESTful and GraphQL APIs",
    "Progressive Web Applications (PWAs)",
    "Visual Studio Code",
    "Git",
    "Chrome DevTools",
  ];

  return (
    <section className="skills">
      <h2 className="section-header">Skills</h2>
      <p>
        {skills.map((skill, index) => (
          <span key={index}>
            {skill}
            {index < skills.length - 1 && ", "}
          </span>
        ))}
      </p>
    </section>
  );
}
