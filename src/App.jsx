import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Scale,
  ClipboardCheck,
  HardHat,
  MapPinned,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Landmark,
  FileText,
  Menu,
} from "lucide-react";

const whatsappNumber = "5588992726162";
const email = "lgi@lgiengenharia.com";

const services = [
  {
    icon: Building2,
    title: "Avaliações Imobiliárias",
    description:
      "Laudos técnicos para garantias bancárias, compra e venda, inventário, partilha, revisão patrimonial e tomada de decisão.",
  },
  {
    icon: Scale,
    title: "Engenharia Legal",
    description:
      "Pareceres técnicos, assistência técnica, vistorias e análises para demandas judiciais e extrajudiciais.",
  },
  {
    icon: ClipboardCheck,
    title: "Monitoramento de Obras",
    description:
      "Acompanhamento físico-financeiro, medições, relatórios técnicos e verificação da evolução de empreendimentos.",
  },
  {
    icon: HardHat,
    title: "Estudos de Viabilidade",
    description:
      "Análise técnica, econômica e documental para empreendimentos, garantias, crédito imobiliário e decisões estratégicas.",
  },
];

const audiences = [
  {
    icon: Landmark,
    title: "Bancos e Instituições Financeiras",
    text: "Atuação técnica em avaliações para garantias, crédito imobiliário, monitoramento de obras e análise de risco.",
  },
  {
    icon: Scale,
    title: "Escritórios de Advocacia",
    text: "Suporte técnico para processos judiciais, inventários, partilhas, revisões, perícias e pareceres especializados.",
  },
  {
    icon: Building2,
    title: "Empresas e Investidores",
    text: "Avaliações patrimoniais, due diligence imobiliária, estudos de viabilidade e apoio à tomada de decisão.",
  },
];

const strengths = [
  "Fundada em 2003",
  "23 anos de experiência no mercado",
  "Atuação em avaliações imobiliárias e engenharia técnica",
  "Experiência com instituições financeiras",
  "Laudos técnicos com responsabilidade profissional",
  "Análises baseadas em normas, documentos e vistoria técnica",
];

function Button({ children, variant = "primary", href, target }) {
  const className = `button ${variant === "secondary" ? "button-secondary" : "button-primary"}`;
  return (
    <a className={className} href={href} target={target} rel={target ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

export default function App() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="LGI Engenharia">
            <img src="/logo-lgi.png" alt="LGI Engenharia" />
            <div>
              <strong>LGI Engenharia</strong>
              <span>Avaliações • Engenharia • Obras</span>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#publicos">Atuação</a>
            <a href="#contato">Contato</a>
          </nav>

          <Button href={`mailto:${email}`}>Solicitar proposta</Button>

          <div className="mobile-menu" aria-hidden="true">
            <Menu size={24} />
          </div>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-bg" />
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">
              <ShieldCheck size={17} />
              Desde 2003 no mercado
            </div>

            <h1>Engenharia técnica com credibilidade construída há 23 anos.</h1>

            <p className="hero-text">
              Soluções em avaliações imobiliárias, engenharia legal, monitoramento de obras e estudos de viabilidade para bancos, empresas, investidores e escritórios de advocacia.
            </p>

            <div className="hero-actions">
              <Button href={`mailto:${email}`}>
                Solicitar proposta técnica <ArrowRight size={17} />
              </Button>
              <Button
                variant="secondary"
                href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta%20técnica.`}
                target="_blank"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Card className="authority-card">
              <div className="authority-logo">
                <img src="/logo-lgi.png" alt="LGI Engenharia" />
              </div>
              <div className="authority-top">
                <FileText size={42} />
                <span>LGI Engenharia de Avaliações</span>
              </div>

              <strong className="big-number">23</strong>
              <p className="authority-label">anos de experiência</p>

              <div className="authority-list">
                {strengths.slice(0, 4).map((item) => (
                  <div key={item}>
                    <CheckCircle2 size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="servicos" className="section">
        <div className="container">
          <div className="section-heading">
            <span>Serviços</span>
            <h2>Soluções técnicas para decisões seguras</h2>
            <p>
              A LGI atua em demandas que exigem precisão, responsabilidade técnica e análise criteriosa de documentos, vistoria e mercado.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="service-card">
                  <div className="icon-box">
                    <Icon size={27} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="sobre" className="about-section">
        <div className="container about-grid">
          <div className="about-panel">
            <img src="/logo-lgi.png" alt="LGI Engenharia" />
            <span>Desde 2003</span>
            <h2>LGI Engenharia de Avaliações</h2>
            <p>
              Uma trajetória construída com atuação técnica, responsabilidade profissional e experiência em análises imobiliárias e de engenharia.
            </p>
          </div>

          <div>
            <h2>Experiência aplicada à análise técnica e à segurança das decisões</h2>
            <p>
              Fundada em 2003, a LGI Engenharia de Avaliações atua há 23 anos no mercado, prestando serviços técnicos em avaliações imobiliárias, engenharia legal, monitoramento de obras e estudos de viabilidade. A empresa atende demandas de instituições financeiras, empresas, investidores, escritórios de advocacia e clientes particulares que precisam de análises confiáveis e tecnicamente fundamentadas.
            </p>

            <div className="strength-grid">
              {strengths.map((item) => (
                <div key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="publicos" className="section">
        <div className="container">
          <div className="section-heading">
            <span>Atuação</span>
            <h2>Atendimento técnico para diferentes demandas</h2>
          </div>

          <div className="audience-grid">
            {audiences.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="audience-card">
                  <Icon size={34} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-grid">
          <div>
            <span>Engenharia Legal</span>
            <h2>Suporte técnico para escritórios de advocacia</h2>
            <p>
              A LGI apoia demandas judiciais e extrajudiciais com pareceres técnicos, avaliações, vistorias, assistência técnica e análises fundamentadas, contribuindo para maior segurança em processos, negociações e decisões patrimoniais.
            </p>
          </div>

          <div className="legal-list">
            {[
              "Inventários, partilhas e dissoluções patrimoniais",
              "Pareceres e laudos técnicos",
              "Assistência técnica em avaliações e engenharia",
              "Análise documental e vistoria técnica",
            ].map((item) => (
              <div key={item}>
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="section">
        <div className="container contact-box">
          <div>
            <span>Contato</span>
            <h2>Solicite uma proposta técnica</h2>
            <p>
              Entre em contato para avaliação da demanda, análise do escopo e envio de proposta técnica adequada ao tipo de serviço necessário.
            </p>
          </div>

          <div className="contact-links">
            <a href={`mailto:${email}`}>
              <div>
                <Mail size={21} />
                <strong>{email}</strong>
              </div>
              <ArrowRight size={17} />
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Olá,%20gostaria%20de%20solicitar%20uma%20proposta%20técnica.`}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <Phone size={21} />
                <strong>(88) 99272-6162</strong>
              </div>
              <ArrowRight size={17} />
            </a>

            <div className="location-row">
              <MapPinned size={21} />
              <strong>Atuação em Fortaleza/CE e demais regiões conforme demanda</strong>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} LGI Engenharia de Avaliações. Todos os direitos reservados.</p>
          <p>Fundada em 2003 • 23 anos de mercado</p>
        </div>
      </footer>
    </main>
  );
}
