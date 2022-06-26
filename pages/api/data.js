const data = [
  {
    id: 1,
    title: "Hello, I'm Juan Pablo",
    description: "I'm a web developer and designer",
    image: "juan-pablo",
    link: "/about",
  },
  {
    id: 2,
    title: "My proyects",
    description: "Check my proyects",
    image: "proyects",
    link: "/proyects",
  },
];

export default function handler(req, res) {
  res.status(200).json([...data]);
}
