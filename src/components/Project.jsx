const projects = [
  {
    title: "To Do App",
    description:
      "A to-do list app to keep track of your tasks. I built this project on my own with Laravel, MySQL and React.",
    link: "https://github.com/Sachhh-star/To-Do-App",
    image: "/to-doApp.jpg",
    download: false,
  },
  {
    title: "Mix Shop",
    description:
      "An online shop we made as a group project. I built the login page and all of the frontend.",
    link: "https://github.com/Sachhh-star/mixshop",
    image: "/mix_shop.jpg",
    download: false,
  },
  {
    title: "API Anime Website",
    description:
      "A website for my elective course (keuzedeel) that loads and shows anime data from an external API.",
    link: "https://github.com/Sachhh-star/anime",
    image: "/api-dragonball.jpg",
    download: false,
  },
  {
    title: "Pixel Game",
    description:
      "A pixel-art game made with the Godot Engine as a group project. I worked on all parts of the game. Download the ZIP file to play it!",
    link: "/pixel-game.zip",
    image: "/pixelgame.jpg",
    download: true,
  },
];

function Project() {
  return (
    <section id="project" className="project">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <a
            key={project.title}
            className="projects-card"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            download={project.download}
          >
            <img src={project.image} alt={project.title} />{" "}
            <h3>{project.title}</h3> <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
