import styles from './Experience.module.css';

export default function Experience() {
  const experiences = [
    {
      title: 'Full-stack Developer',
      company: 'NimbleWork (Digité) · Product SaaS',
      period: 'Apr 2023 – Present',
      location: 'Mumbai, India',
      achievements: [
        'Developed a dashboard with user analytics giving insights into product usage and retention.',
        'Built custom rules functionality on forms from the ground up, enabling flexible automation for users.',
        'Developed and tested anti-malware scanning for file uploads.',
        'Automated outreach emails for onboarding and re-engagement based on user interaction timing.',
        'Owned notification and email services using scheduling, events, and multi-criteria triggers.',
        'Delivered front-end, back-end, and deployment work after collaborating with product and design teams.',
        'Contributed to monolith-to-microservices transformation, improving scalability and maintainability.',
        'Built a new microservice from scratch using Spring Boot, ReactJS, and MongoDB.',
        'Practiced TDD in Java 17 and ReactJS for robust, production-ready code.',
        'Participated in architectural decisions and created class and sequence diagrams.'
      ]
    },
    {
      title: 'Java Developer',
      company: 'NimbleWork (Digité) · Product SaaS',
      period: 'Jul 2021 – Mar 2023',
      location: 'Mumbai, India',
      achievements: [
        'Contributed to a new module in an existing web application using Java 8.',
        'Worked extensively with MSSQL and handled complex production queries.',
        'Released critical production fixes within a tight 2-hour weekly window.',
        'Achieved a 65% reduction in database calls through strategic legacy refactoring.',
        'Maintained customer communication while resolving defects and improving quality.'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.jobs}>
          {experiences.map((job, index) => (
            <div key={index} className={styles.job}>
              <div className={styles.jobHeader}>
                <h3 className={styles.jobTitle}>
                  {job.title} <span className={styles.company}>{job.company}</span>
                </h3>
                <span className={styles.period}>{job.period}</span>
              </div>
              {job.location && <span className={styles.location}>{job.location}</span>}
              <ul className={styles.achievements}>
                {job.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}