export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Digivation",
    techs: ["WordPress", "PHP"],
    link: "https://digivation.id/",
  },
  {
    title: "Mo2Indonesia",
    techs: ["Laravel", "Javascript", "Bootstrap"],
    link: "https://mo2indonesia.com/",
  },
];

export default projects;
