import { Link, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Perfil <span className="text-primary">Técnico</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Desarrollador Full Stack Junior
            </h3>

            <p className="text-muted-foreground">
            Con cerca de 2 años de experiencia en desarrollo web, me dedico a construir aplicaciones completas que combinan funcionalidad, buena estructura y una experiencia de usuario fluida.
            </p>

            <p className="text-muted-foreground">
            A lo largo de mi recorrido he desarrollado una variedad de proyectos que me han permitido fortalecer mis habilidades tanto en frontend como en backend.
            Me motiva aprender constantemente y mantenerme actualizado en un entorno tecnológico que evoluciona todo el tiempo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contactame
              </a>

              <a
                href="/HojaDeVida.pdf" 
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desarrollo Web</h4>
                  <p className="text-muted-foreground">
                  Creación de sitios web y aplicaciones web responsivos con frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Diseño UI/UX</h4>
                  <p className="text-muted-foreground">
                  Diseño de interfaces de usuario intuitivas y experiencias de usuario fluidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Link className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Integración de APIs</h4>
                  <p className="text-muted-foreground">
                  Integración de APIs para obtener y enviar datos de manera eficiente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
