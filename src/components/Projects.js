import React from 'react';

function Projects() {
  return (
    <div className="infobox">
      <div className="info">
        <div className="column">
          <h5>Example project:</h5>
		  <div class="github-card" data-user="govUA" data-repo="ShapesBlackBoard"></div>
		  <script src="https://cdn.jsdelivr.net/gh/lepture/github-cards@latest/jsdelivr/widget.js"></script>
        </div>
        <div className="column">
          <h5>Example project:</h5>
          <a href="https://github.com/govUA/PomodoroTimerApp"><p>Pomodoro Timer App</p></a>
        </div>
      </div>
    </div>
  );
}

export default Projects;