const services = [
  {
    title: "Landing Pages que convertem",
    description:
      "Páginas rápidas, responsivas e desenhadas para transformar tráfego em reuniões, orçamentos e vendas.",
    items: ["Copy estratégica", "CTA em pontos-chave", "Performance otimizada"],
  },
  {
    title: "Tráfego pago com foco em ROI",
    description:
      "Campanhas orientadas por dados, criativos fortes e acompanhamento do funil para reduzir desperdício.",
    items: ["Meta e Google Ads", "Testes contínuos", "Relatórios claros"],
  },
  {
    title: "Automação e captação de leads",
    description:
      "Integração entre formulários, CRM, WhatsApp e follow-up para não deixar oportunidade escapar.",
    items: ["Fluxos automatizados", "Qualificação de leads", "Velocidade comercial"],
  },
];

const metrics = [
  {
    value: "+137%",
    title: "Mais leads qualificados",
    description:
      "Reestruturação de oferta, página e formulário para uma operação local que precisava parar de depender só de indicação.",
  },
  {
    value: "-31%",
    title: "Menor custo por aquisição",
    description:
      "Ajustes em campanha, criativos e página de destino para transformar cliques caros em oportunidades reais.",
  },
  {
    value: "3,4x",
    title: "Mais reuniões agendadas",
    description:
      "Funil simples, direto e sem firula: mensagem certa, página certa, CTA certa.",
  },
];

const steps = [
  "Diagnóstico da oferta e do público",
  "Estrutura de página orientada à conversão",
  "Design moderno com leitura rápida",
  "Formulário estratégico e CTA forte",
  "Lançamento, testes e refinamento",
];

const testimonials = [
  {
    quote:
      "A sensação foi exatamente essa: agora o site trabalha por nós. Mais contatos, mais clareza e muito mais confiança do cliente.",
    name: "Camila Rocha",
    role: "Clínica estética",
  },
  {
    quote:
      "Antes a gente tinha presença digital. Agora a gente tem estrutura de captação. Mudou o jogo comercial.",
    name: "Eduardo Martins",
    role: "Consultoria B2B",
  },
  {
    quote:
      "O posicionamento ficou profissional, a navegação ficou simples e o formulário finalmente começou a gerar lead com qualidade.",
    name: "Renata Alves",
    role: "Escritório jurídico",
  },
];

const faqs = [
  {
    question: "Em quanto tempo o projeto pode ir ao ar?",
    answer:
      "Projetos enxutos podem entrar no ar em poucos dias, desde que escopo e materiais estejam alinhados. A proposta aqui é subir rápido e subir direito.",
  },
  {
    question: "Vocês fazem só o site ou também a estratégia?",
    answer:
      "Os dois. O site nasce como peça de conversão, não como enfeite digital. Estrutura, copy, CTA e formulário trabalham juntos para gerar cliente.",
  },
  {
    question: "Esse modelo funciona para negócios locais e B2B?",
    answer:
      "Sim. O princípio é o mesmo: clareza de oferta, prova, confiança e ação. O que muda é a narrativa e a forma de captar o lead.",
  },
  {
    question: "O formulário pode integrar com CRM e WhatsApp?",
    answer:
      "Sim. O projeto pode ser expandido com integrações e automações para acelerar resposta comercial e melhorar o aproveitamento dos leads.",
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-grid">
        <label>
          Nome
          <input placeholder="Seu nome" />
        </label>
        <label>
          Empresa
          <input placeholder="Nome da empresa" />
        </label>
      </div>

      <div className="form-grid">
        <label>
          E-mail
          <input type="email" placeholder="voce@empresa.com" />
        </label>
        <label>
          WhatsApp
          <input placeholder="(00) 00000-0000" />
        </label>
      </div>

      <label>
        Objetivo principal
        <select defaultValue="Gerar mais leads">
          <option>Gerar mais leads</option>
          <option>Fortalecer a marca</option>
          <option>Melhorar a taxa de conversão</option>
          <option>Lançar um novo serviço</option>
        </select>
      </label>

      <label>
        Conte um pouco sobre o projeto
        <textarea
          rows={5}
          placeholder="Quero uma estrutura que gere contatos, posicione melhor minha empresa e reduza a dependência de indicação..."
        />
      </label>

      <button type="submit">Quero receber uma proposta</button>
      <p className="form-note">
        Ao enviar, a equipe já recebe o contexto do lead e começa a conversa com muito mais qualidade.
      </p>
    </form>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav">
          <a className="brand" href="#inicio" aria-label="LeadForge">
            <div className="brand-mark">LF</div>
            <div>
              <span>Agência</span>
              <strong>LeadForge</strong>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#resultados">Resultados</a>
            <a href="#processo">Processo</a>
            <a href="#contato">Contato</a>
          </nav>

          <a className="primary-button compact" href="#contato">
            Quero mais clientes
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge">
                Site, tráfego e estrutura de conversão em uma mesma operação
              </div>
              <h1>
                Seu marketing precisa responder uma coisa:
                <span>isso vai me trazer cliente?</span>
              </h1>
              <p>
                Criamos páginas e estruturas de captação que passam credibilidade, aceleram
                contato e ajudam sua marca a sair do modo “bonita nas redes” para o modo
                “gera oportunidade comercial”.
              </p>

              <div className="hero-actions">
                <a className="primary-button" href="#contato">
                  Solicitar diagnóstico gratuito
                </a>
                <a className="secondary-button" href="#resultados">
                  Ver como isso converte
                </a>
              </div>

              <div className="hero-highlights">
                {[
                  ["Páginas rápidas", "Performance e mobile em primeiro lugar."],
                  ["Mais clareza", "Oferta, prova e CTA organizadas."],
                  ["Mais ação", "Formulários e fluxos que puxam conversa."],
                ].map(([title, text]) => (
                  <article key={title} className="highlight-card">
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-card">
                <div className="panel-header">
                  <div>
                    <span>Leads desta semana</span>
                    <strong>42</strong>
                  </div>
                  <div className="success-chip">+28% vs. período anterior</div>
                </div>

                <div className="panel-stats">
                  <article>
                    <span>Taxa de conversão</span>
                    <strong>8,4%</strong>
                    <p>Página orientada por oferta e CTA.</p>
                  </article>
                  <article>
                    <span>Tempo de resposta</span>
                    <strong>3 min</strong>
                    <p>Fluxo mais rápido entre lead e comercial.</p>
                  </article>
                </div>

                <div className="panel-insight">
                  <span>Leitura estratégica</span>
                  <p>
                    Site bom não é o mais cheio de efeito. É o que deixa claro o valor,
                    reduz atrito e facilita o próximo passo do cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            {[
              "Design estratégico",
              "Responsividade real",
              "Captação integrada",
              "Mensagem pensada para conversão",
            ].map((item) => (
              <div key={item} className="trust-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Serviços"
              title="Estrutura completa para transformar visita em oportunidade."
              description="A ideia aqui não é só ter presença. É construir uma presença que empurre o usuário para ação, com mensagem certa, leitura rápida e contato fácil."
            />

            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="content-card">
                  <div className="card-pill">Solução estratégica</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>
                        <span className="dot" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resultados" className="section alternate">
          <div className="container">
            <div className="results-head">
              <SectionHeader
                eyebrow="Resultados"
                title="Crescimento começa quando o site deixa de ser vitrine e vira ferramenta comercial."
              />
              <p>
                Cases, métricas e estrutura de página precisam contar a mesma história:
                confiança, clareza e ação. Quando isso encaixa, o lead aparece.
              </p>
            </div>

            <div className="card-grid">
              {metrics.map((metric) => (
                <article key={metric.title} className="metric-card">
                  <strong>{metric.value}</strong>
                  <h3>{metric.title}</h3>
                  <p>{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="section">
          <div className="container process-grid">
            <SectionHeader
              eyebrow="Processo"
              title="Rápido na execução, cirúrgico na estratégia."
              description="Nada de site feito no escuro. O processo foi pensado para alinhar posicionamento, reduzir retrabalho e entregar uma página pronta para vender melhor."
            />

            <div className="steps-list">
              {steps.map((step, index) => (
                <article key={step} className="step-card">
                  <div>{String(index + 1).padStart(2, "0")}</div>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alternate">
          <div className="container">
            <SectionHeader
              eyebrow="Prova social"
              title="Quando a mensagem encaixa, o cliente percebe na hora."
            />

            <div className="card-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <p>“{item.quote}”</p>
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container faq-grid">
            <SectionHeader
              eyebrow="FAQ"
              title="Dúvidas comuns de quem quer crescer sem desperdiçar verba."
              description="O objetivo aqui é simples: menos ruído, mais previsibilidade e um ativo digital que ajude o comercial a trabalhar melhor."
            />

            <div className="faq-list">
              {faqs.map((item) => (
                <article key={item.question} className="faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeader
                eyebrow="Contato"
                title="Vamos transformar visita em lead e lead em oportunidade."
                description="Se sua operação precisa de um site que ajude a vender, captar e posicionar melhor sua marca, esse é o próximo passo."
              />

              <div className="contact-stats">
                <article>
                  <span>Prazo médio</span>
                  <strong>4 a 7 dias úteis</strong>
                </article>
                <article>
                  <span>Foco</span>
                  <strong>Conversão e autoridade</strong>
                </article>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© 2026 LeadForge. Marketing para quem quer previsibilidade comercial.</p>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
