import styles from './Projects.module.css';

export default function Projects() {
  const projects = [
    {
      title: 'Real-Time Intrusion Detection Platform',
      subtitle: 'Fibre Optic Monitoring System · Founding Engineer & Lead Developer',
      description: 'Designed and built a production-ready real-time intrusion detection system integrating fibre optic sensing hardware with cloud and edge infrastructure.',
      technologies: ['Spring Boot', 'InfluxDB', 'PostgreSQL', 'AWS', 'React', 'RTSP', 'Raspberry Pi'],
      achievements: [
        'Developed an event-driven backend using Spring Boot, PostgreSQL, and InfluxDB to ingest and process high-frequency sensor data.',
        'Implemented edge + cloud architecture with on-site Raspberry Pi nodes and AWS-based notification services.',
        'Built a multi-channel alerting system (WhatsApp, Telegram, Email, ntfy) for real-time incident notifications.',
        'Engineered live CCTV streaming pipeline (RTSP) and integrated video feeds into a React-based monitoring dashboard.',
        'Created an interactive map-based UI to visualize intrusion events and system status in real time.',
        'Designed user and notification management systems with secure authentication.',
        'Collaborated directly with hardware engineers to align software with fibre optic sensing modules.',
        'Led a team of developers and drove end-to-end delivery from requirements to on-site deployment.'
      ]
    },
    {
      title: 'Modular Business Operations SaaS Platform',
      subtitle: 'Multi-Tenant B2B SaaS · CTO / Founding Engineer',
      description: 'Led architecture and development of a multi-tenant, modular SaaS platform enabling businesses to digitize end-to-end operations.',
      technologies: ['Python', 'PostgreSQL', 'React', 'RBAC', 'OpenAI', 'Multi-tenant'],
      achievements: [
        'Designed a plug-and-play module system allowing customers to enable purchased features and build custom workflows.',
        'Built core systems for sales, purchasing, inventory, and data management to replace manual processes.',
        'Implemented fine-grained authentication and role-based access control for multi-level organizational usage.',
        'Developed dynamic dashboards driven by module-level data and business workflows.',
        'Engineered modules for real-time pricing control and automatic propagation to sales systems.',
        'Created validation and approval layers for transactional oversight on orders.',
        'Delivered multi-language support and intuitive UX for operational users.',
        'Integrated analytics features including forecasting, segmentation, and ROI insights.',
        'Built AI-powered automated email classification and response drafting to prevent missed enquiries.',
        'Led cross-functional delivery across backend (Python), frontend (React), and database design (PostgreSQL).'
      ]
    },
    {
      title: 'Document Processing API Platform',
      subtitle: 'Freelance Backend Engineer · US Client',
      description: 'Designed and developed a Python-based API platform for document management and AI-driven content generation.',
      technologies: ['Python', 'OpenAI API', 'REST APIs', 'Google Drive API', 'Swagger'],
      achievements: [
        'Integrated OpenAI APIs for document summarization and dynamic text generation workflows.',
        'Built RESTful APIs with Swagger-based interface for seamless developer testing.',
        'Implemented session-aware paginated response handling for large AI-generated outputs with aggregation and persistence.',
        'Developed document lifecycle features including creation, retrieval, filtering, and storage.',
        'Enabled contextual summarization based on user-supplied inputs like name and location.',
        'Integrated external storage workflows with Google Drive APIs.',
        'Delivered a backend-driven system focused on API usability and extensibility.'
      ]
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.subtitle && <p className={styles.subtitle}>{project.subtitle}</p>}
                <p className={styles.description}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.achievements && (
                  <ul className={styles.achievements}>
                    {project.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}