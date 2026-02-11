function Activity() {
  return (
    <section className="act-section">
      <div className="act-container">
        <h1 className="act-title">My Hobbies</h1>
        <p className="act-intro">
          Activities that help me relax and improve my skills in technology
          and creativity.
        </p>

        <div className="act-block">
          <h2>💻 Coding</h2>
          <p>
            I enjoy learning programming languages and building small web
            applications.
          </p>
          <ul>
            <li>React and front-end development</li>
            <li>Personal mini projects</li>
            <li>Learning new programming concepts</li>
          </ul>
        </div>

        <div className="act-block">
          <h2>🎮 Gaming</h2>
          <p>
            Playing games helps me relax and improve my strategic thinking.
          </p>
          <ul>
            <li>Strategy and adventure games</li>
            <li>Online team-based games</li>
            <li>Exploring new mechanics</li>
          </ul>
        </div>

        <div className="act-block">
          <h2>🎧 Music</h2>
          <p>Listening to music while studying or coding.</p>
          <ul>
            <li>Lo-fi and instrumental music</li>
            <li>Study playlists</li>
            <li>Music during coding</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Activity;
