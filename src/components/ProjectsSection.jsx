import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Inventario de Productos",
    description: "App web full stack para gestionar productos con CRUD completo y conexión real a base de datos.",
    image: "/projects/img1.png",
    tags: ["React", "Typescript", "TailwindCSS", "Shadcn UI", "PostgreSQL", "Prisma", "Vercel", "Next.js" ],
    demoUrl: "https://invetario-productos.vercel.app/",
    githubUrl: "https://github.com/devkopi/invetario-productos",
  },
  {
    id: 2,
    title: "Generador de Contraseñas",
    description:
      "App responsiva para crear contraseñas seguras con opciones de personalización y diseño moderno.",
    image: "/projects/img2.png",
    tags: ["React", "Typescript", "TailwindCSS", "Shadcn UI", "Vercel", "Next.js"],
    demoUrl: "https://generador-password-amber.vercel.app/",
    githubUrl: "https://github.com/devkopi/generador-password",
  },
  {
    id: 3,
    title: "Acortador de URLs",
    description:
      "Aplicación web para acortar enlaces rápida y fácilmente usando la API de TinyURL.",
    image: "/projects/img3.png",
    tags: ["React", "Typescript", "TailwindCSS", "Shadcn UI", "Vercel", "Next.js"],
    demoUrl: "https://acortador-url-ivory.vercel.app/",
    githubUrl: "https://github.com/devkopi/acortador-url",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Proyectos <span className="text-primary"> Destacados </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Estos son algunos de mis proyectos recientes, desarrollados con enfoque en la calidad, el rendimiento y la experiencia de usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/devkopi"
          >
            Explora mi GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
