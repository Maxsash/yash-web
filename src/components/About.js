import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>
            I'm a backend engineer who enjoys building systems that are reliable, scalable, and thoughtfully designed — but most of my interests live outside a terminal window. A lot of my free time goes into quieter, slower hobbies: playing chess, reading, sketching, writing, photography, and getting immersed in single-player games that care about atmosphere and storytelling as much as gameplay.<br></br>

            I like hobbies that reward patience and observation. Chess keeps me thinking strategically, photography makes me pay attention to small details, and sketching helps me slow down and explore ideas visually. Writing and reading are probably the most constant parts of my routine — usually a mix of fiction, essays, tech, psychology, and anything that changes the way I look at things.<br></br>

            Gaming has also been a big creative influence for me, especially immersive and artistically driven experiences like Hollow Knight, Hitman: World of Assassination, and other narrative-focused titles on PlayStation. I enjoy games with strong worldbuilding, subtle design, and a sense of exploration more than competitive multiplayer experiences.<br></br>

            Professionally, I work primarily with backend systems, distributed architectures, and product engineering. Personally, I'm drawn to things that are calm, intentional, and creatively satisfying. Whether it's designing software, composing a photograph, analyzing a chess position, or filling pages with random notes and sketches, I enjoy the process of making things that feel meaningful and well-crafted. [AI slop: To be updated]<br></br>
          </p>
        </div>
      </div>
    </section>
  );
}