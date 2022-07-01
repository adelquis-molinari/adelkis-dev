const data = [
  {
    id: 1,
    title: "Hello, I'm Juan Pablo",
    description: "I'm a web developer and designer",
    image: "img-card-defauld",
    link: "/about",
  },
  {
    id: 2,
    title: "My proyects",
    description: "Check my proyects",
    image: "img-card-defauld",
    link: "/proyects",
  },
];

export default function handler(_req, res) {
  res.status(200).json([...data]);
}
