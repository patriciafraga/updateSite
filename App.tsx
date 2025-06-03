import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-text">YOU<span className="logo-highlight">TAX</span></span>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#como-funciona" className="nav-item">Como Funciona</a>
          <a href="#diferenciais" className="nav-item">Diferenciais</a>
          <a href="#simulador" className="nav-item">Simulador</a>
          <a href="#contato" className="nav-item">Contato</a>
        </nav>
        <button className="btn-login">Área do Cliente</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Recupere créditos tributários em tempo recorde</h1>
          <p className="hero-subtitle">Nossa tecnologia identifica e recupera créditos tributários pagos indevidamente em apenas 2 horas</p>
          <button className="btn-primary">Faça sua avaliação gratuita</button>
        </div>
        <div className="hero-image">
          <div className="dashboard-mockup"></div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="como-funciona" id="como-funciona">
        <h2 className="section-title">Como Funciona</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <span className="step-number">1</span>
            </div>
            <h3 className="step-title">Avaliação Inicial</h3>
            <p className="step-description">Em apenas 2 horas, nossa tecnologia avalia se sua empresa tem créditos a recuperar</p>
            <div className="time-comparison">
              <div className="time-new">
                <span className="time-value">2h</span>
                <span className="time-label">YouTax</span>
              </div>
              <div className="time-vs">vs</div>
              <div className="time-old">
                <span className="time-value">60 dias</span>
                <span className="time-label">Método Tradicional</span>
              </div>
            </div>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <span className="step-number">2</span>
            </div>
            <h3 className="step-title">Análise Detalhada</h3>
            <p className="step-description">Nossa plataforma processa automaticamente seus documentos fiscais com total segurança</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <span className="step-number">3</span>
            </div>
            <h3 className="step-title">Recuperação de Créditos</h3>
            <p className="step-description">Acompanhe em tempo real o processo de recuperação através do nosso dashboard</p>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="diferenciais" id="diferenciais">
        <h2 className="section-title">Nossos Diferenciais</h2>
        <div className="cards">
          <div className="card">
            <div className="card-icon velocity"></div>
            <h3 className="card-title">Velocidade</h3>
            <p className="card-description">Avaliação inicial em apenas 2 horas, enquanto o mercado leva 60 dias</p>
          </div>
          
          <div className="card">
            <div className="card-icon security"></div>
            <h3 className="card-title">Segurança</h3>
            <p className="card-description">Total conformidade com LGPD e protocolos avançados de proteção de dados</p>
          </div>
          
          <div className="card">
            <div className="card-icon technology"></div>
            <h3 className="card-title">Tecnologia</h3>
            <p className="card-description">Algoritmos proprietários que identificam oportunidades invisíveis aos métodos tradicionais</p>
          </div>
          
          <div className="card">
            <div className="card-icon expertise"></div>
            <h3 className="card-title">Expertise</h3>
            <p className="card-description">Equipe multidisciplinar com profundo conhecimento em direito tributário e tecnologia</p>
          </div>
        </div>
      </section>

      {/* Simulador Section */}
      <section className="simulador" id="simulador">
        <h2 className="section-title">Simule seu Potencial de Recuperação</h2>
        <div className="simulador-container">
          <div className="simulador-form">
            <div className="form-group">
              <label className="form-label">Faturamento Anual (R$)</label>
              <input type="text" className="form-input" placeholder="Digite o valor" />
            </div>
            
            <div className="form-group">
              <label className="form-label">Regime Tributário</label>
              <select className="form-select">
                <option>Lucro Real</option>
                <option>Lucro Presumido</option>
                <option>Simples Nacional</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Setor de Atuação</label>
              <select className="form-select">
                <option>Indústria</option>
                <option>Comércio</option>
                <option>Serviços</option>
                <option>Outros</option>
              </select>
            </div>
            
            <button className="btn-primary">Calcular Potencial</button>
          </div>
          
          <div className="simulador-result">
            <div className="result-header">
              <h3 className="result-title">Seu Potencial de Recuperação</h3>
            </div>
            <div className="result-value">
              <span className="currency">R$</span>
              <span className="value">0</span>
            </div>
            <p className="result-description">Faça a simulação para descobrir quanto sua empresa pode recuperar</p>
            <button className="btn-secondary">Agende uma Consulta</button>
          </div>
        </div>
      </section>

      {/* Credibilidade Section */}
      <section className="credibilidade">
        <h2 className="section-title">Por Que Escolher a YouTax</h2>
        <div className="stats">
          <div className="stat">
            <div className="stat-value">95%</div>
            <div className="stat-description">das empresas brasileiras pagam impostos a mais</div>
          </div>
          
          <div className="stat">
            <div className="stat-value">R$ 180mil</div>
            <div className="stat-description">média mensal de recuperação por cliente</div>
          </div>
          
          <div className="stat">
            <div className="stat-value">2h</div>
            <div className="stat-description">para avaliação inicial do potencial de recuperação</div>
          </div>
          
          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-description">seguro e em conformidade com a legislação</div>
          </div>
        </div>
        
        <div className="security-badges">
          <div className="badge lgpd">
            <span className="badge-text">Conformidade LGPD</span>
          </div>
          <div className="badge encryption">
            <span className="badge-text">Criptografia Avançada</span>
          </div>
          <div className="badge secure">
            <span className="badge-text">Dados Seguros</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2 className="cta-title">Pronto para recuperar o que é seu por direito?</h2>
        <p className="cta-description">Agende uma avaliação gratuita e descubra em apenas 2 horas seu potencial de recuperação</p>
        <button className="btn-primary">Fale com um Especialista</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">YOU<span className="logo-highlight">TAX</span></span>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-title">Empresa</h4>
              <a href="#" className="footer-link">Sobre Nós</a>
              <a href="#" className="footer-link">Equipe</a>
              <a href="#" className="footer-link">Carreiras</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Serviços</h4>
              <a href="#" className="footer-link">Recuperação de Créditos</a>
              <a href="#" className="footer-link">Consultoria Tributária</a>
              <a href="#" className="footer-link">Tecnologia Fiscal</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Suporte</h4>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Contato</a>
              <a href="#" className="footer-link">Área do Cliente</a>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-title">Legal</h4>
              <a href="#" className="footer-link">Termos de Uso</a>
              <a href="#" className="footer-link">Política de Privacidade</a>
              <a href="#" className="footer-link">Política de Cookies</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 YouTax. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
