export default function Experience() {
  const experienceItems = [
    {
      company: "Collette Travel",
      title: "Senior Frontend Engineer",
      location: "Remote",
      startDate: "2022-10-01",
      endDate: "Present",
      achievements: [
        "Collaborated with cross-functional teams using Asana to lead migration from legacy UI to React/TypeScript architecture",
        "Created detailed technical specs and implemented Figma designs into reusable component libraries",
        "Optimized CDN configuration and caching strategies improving load times by 40%",
        "Developed product design solutions through user research and prototyping",
        "Established comprehensive testing protocols achieving 95% code coverage",
        "Led cross-functional sprint planning and feature prioritization using Asana",
      ],
    },
    {
      company: "Thinkware",
      title: "Frontend Engineer",
      location: "Remote",
      startDate: "2020-10-01",
      endDate: "2022-09-01",
      achievements: [
        "Developed responsive React applications from Figma specs and wireframes",
        "Implemented CDN and caching strategies reducing load times by 60%",
        "Managed cross-functional collaboration through Asana for seamless project delivery",
        "Created product design documentation improving development efficiency by 45%",
        "Optimized API integration patterns reducing data fetch times by 60%",
      ],
    },
    {
      company: "iMedia",
      title: "Frontend Developer",
      location: "Remote",
      startDate: "2018-08-01",
      endDate: "2020-06-01",
      achievements: [
        "Translated Figma designs into pixel-perfect React components",
        "Created technical specs for complex feature implementations",
        "Implemented CDN optimization improving global content delivery by 65%",
        "Led cross-functional team meetings to align product design goals",
      ],
    },
    {
      company: "Volum8",
      title: "Frontend Developer",
      location: "Remote",
      startDate: "2015-01-01",
      endDate: "2018-01-01",
      achievements: [
        "Built responsive web interfaces meeting WCAG 2.1 AA accessibility standards",
        "Implemented efficient API integration patterns reducing response times by 40%",
        "Developed reusable component libraries accelerating development cycles by 50%",
      ],
    },
  ];

  return (
    <section>
      <h2 className="section-header">Experience</h2>
      {experienceItems.map((job) => (
        <article key={job.company}>
          <h3>
            {job.company}, {job.location} - {job.title}
          </h3>
          <p>
            <time dateTime={job.startDate}>
              {new Date(job.startDate).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </time>
            {" to "}
            {job.endDate === "Present" ? (
              <span>Present</span>
            ) : (
              <time dateTime={job.endDate}>
                {new Date(job.endDate).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
          </p>
          <ul>
            {job.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
