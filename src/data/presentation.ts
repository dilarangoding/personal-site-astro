type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "riyonaryono14@gmail.com",
  title: "Hi, I'm Riyon 👋",
  //   profile: "/profile.webp",
  description:
    "Olá, i'm a *Full Stack Web Developer* with over *3 years* of web experience. I enjoy listening to *Bossa Nova, Psychedelic, and K-Pop music*. Outside of work, I collect cassette tapes and learning Golang.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/riyonaryono/",
    },
    {
      label: "Github",
      link: "https://github.com/dilarangoding",
    },
    {
      label: "Spotify",
      link: "https://open.spotify.com/user/8b7kbm23hw3mckmiyl0jd1jnq",
    },
  ],
};

export default presentation;
