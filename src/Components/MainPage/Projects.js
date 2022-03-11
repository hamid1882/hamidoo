import FileExplorer from "../../Images/file-explorer.png";
import Ecommerce from "../../Images/mini-ecommerce.jpg";
import VideoPlayer from "../../Images/video-player.jpg";

const allProjects = [
  {
    name: "mini-file-explorer",
    description:
      "This is an file explore where you can add text and image files and copy them or clone them, its a simple app",
    github_link: "https://www.github.com/hamid1882/lrnr-interview-project ",
    live_demo: "https://lrnr-interview-project.vercel.app",
    image: FileExplorer,
  },
  {
    name: "Video player",
    description: "A Simple video player created using Shaka-player",
    github_link: "https://github.com/hamid1882/mobiotics-interview-project",
    live_demo: "mobiotics-interview-project.vercel.app",
    image: VideoPlayer,
  },
  {
    name: "mini-Ecommerce-app",
    description: "This was a interview project, its an simple e-commerce app",
    github_link: "https://github.com/hamid1882/zerozilla-interview-project",
    live_demo: "zerozilla-interview-project.vercel.app",
    image: Ecommerce,
  },
];

export default allProjects;
