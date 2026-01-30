# Sistema Inteligente de Gerenciamento de Semáforos

## Visão Geral

O **Sistema Inteligente de Gerenciamento de Semáforos** é uma solução IoT completa desenvolvida para modernizar e otimizar o controle de tráfego urbano. Este projeto surgiu da necessidade de resolver problemas críticos identificados em cruzamentos, onde falhas de equipamento, quedas de comunicação e falta de resiliência operacional comprometem a segurança e a fluidez do trânsito.

---

## Objetivo

Desenvolver uma plataforma robusta, escalável e segura que permita:

- **Operação resiliente** mesmo em cenários adversos (falhas de rede, queda de energia, condições climáticas extremas)
- **Monitoramento em tempo real** de cruzamentos com alertas automáticos para problemas
- **Adaptação dinâmica** ao fluxo de tráfego através de sensores IoT
- **Gestão centralizada** de múltiplos cruzamentos com dashboard administrativo
- **Conformidade regulatória** com normas ABNT e Código de Trânsito Brasileiro

---

## Histórias de Usuários

**Formato Utilizado:** Como [usuário], quero [meta] para que [razão]

- Como **pedestre**, quero que o **semáforo detecte minha presença através de sensores** para que **eu não precise esperar o ciclo completo quando não há veículos**
- Como **motorista**, quero que o **sistema ajuste os tempos de semáforo baseado no tráfego em tempo real** para que **eu possa reduzir meu tempo de deslocamento**
- Como **motorista de ambulância**, quero que o **sistema priorize meu trajeto quando acionado** para que **eu possa chegar mais rápido ao destino em emergências**

---

## Problema Identificado

A Prefeitura identificou problemas críticos em um cruzamento da região central:

- **Semáforos falhando** durante horários de pico, causando congestionamentos e riscos de acidentes
- **Comunicação IoT instável** entre sensores e controladores, resultando em perda de dados
- **Servidor local obsoleto** com performance degradada e vulnerabilidades de segurança
- **Documentação inadequada** gerando incerteza sobre comportamento esperado em situações excepcionais

---

## Solução Proposta

Este sistema implementa uma arquitetura moderna baseada em:

### Arquitetura

- **Edge Computing:** Controladores locais com capacidade de operação autônoma
- **Comunicação redundante:** Múltiplos canais IoT (Wi-Fi, 4G/5G, LoRaWAN)
- **Cloud-ready:** Backend escalável pronto para deploy em nuvem ou on-premises
- **Microserviços:** Componentes desacoplados para facilitar manutenção e evolução

### Funcionalidades Principais

#### Gerenciamento de Falhas
- Detecção automática de falhas com alternância para modo seguro
- Registro completo de eventos com timestamp para análise
- Alertas em tempo real para equipe de manutenção
- Acionamento remoto via interface administrativa

#### Resiliência de Comunicação
- Buffer local para armazenamento temporário durante quedas de rede
- Sincronização automática após restabelecimento
- Operação autônoma com último padrão válido
- Monitoramento de qualidade de sinal IoT

#### Processamento Inteligente
- Ajuste dinâmico de temporizações baseado em fluxo de veículos
- Priorização de veículos de emergência
- Coleta e análise de estatísticas de tráfego
- Exportação de dados históricos para BI

#### Situações Excepcionais
- **Chuva intensa:** Detecção climática com ajuste automático de segurança
- **Queda de energia:** Backup com autonomia de 4 horas + modo economia
- **Falha de servidor:** Operação local independente garantida

#### Segurança
- Autenticação multifator para acesso administrativo
- Criptografia TLS 1.3 em todas as comunicações
- Logs de auditoria completos e imutáveis
- Conformidade com LGPD

---

## Tecnologias

- **Backend:** JavaScript ES6/Node.js
- **IoT:** MQTT, TCP/IP, C++
- **Banco de Dados:** MongoDB
- **Frontend:** HTML5/CSS3
- **Monitoramento:** Prometheus, Grafana

## Políticas de Segurança

### Padronização de Senhas

- **Segurança das Senhas:** As senhas devem ser robustas, com pelo menos 12 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais. Não devem ser previsíveis (ex: "123456", "senha123")
- **Troca Regular de Senhas:** As senhas devem ser trocadas a cada 90 dias para evitar vulnerabilidades
- **Autenticação em Dois Fatores (2FA):** Utilize 2FA para aumentar a segurança, exigindo um segundo método de verificação
- **Conscientização:** Promova a conscientização sobre a privacidade dos dados e a importância do tratamento adequado dos dados pessoais

---

## Padronização de Acessos e Conformidade com a LGPD

### 1. Classificação de Usuários e Níveis de Acesso

#### 1.1 Perfis de Usuário

**Nível 1 - Visualizador (Read-Only)**
- **Quem:** Analistas de tráfego, estagiários, auditores externos
- **Acesso:** Apenas leitura de dashboards e relatórios
- **Dados pessoais:** NÃO tem acesso a logs com IPs ou dados de operadores
- **Justificativa LGPD:** Princípio da necessidade (Art. 6º, III)

**Nível 2 - Operador**
- **Quem:** Operadores de trânsito do dia a dia
- **Acesso:** Visualização + ajuste de temporizações e perfis
- **Dados pessoais:** Acesso limitado aos próprios logs de ação
- **Justificativa LGPD:** Minimização de dados (Art. 6º, III)

**Nível 3 - Técnico de Manutenção**
- **Quem:** Equipe técnica de campo e remota
- **Acesso:** Configurações de hardware, firmware, diagnósticos
- **Dados pessoais:** Logs técnicos (sem dados de cidadãos)
- **Justificativa LGPD:** Finalidade específica (Art. 6º, I)

**Nível 4 - Supervisor**
- **Quem:** Coordenadores de operação
- **Acesso:** Tudo do Nível 2 + relatórios gerenciais + gestão de incidentes
- **Dados pessoais:** Logs agregados (anonimizados quando possível)
- **Justificativa LGPD:** Necessidade + legítimo interesse (Art. 7º, IX)

**Nível 5 - Administrador do Sistema**
- **Quem:** Equipe de TI/DevOps (máximo 3 pessoas)
- **Acesso:** Acesso total ao sistema, banco de dados, logs completos
- **Dados pessoais:** Acesso a TODOS os dados (mediante justificativa registrada)
- **Justificativa LGPD:** Exercício regular de direitos + segurança (Art. 7º, VI e IX)

**Nível 6 - DPO (Data Protection Officer)**
- **Quem:** Encarregado de dados (1 pessoa designada)
- **Acesso:** Logs de auditoria, dados de acessos, relatórios de conformidade
- **Dados pessoais:** Apenas para fins de fiscalização e conformidade
- **Justificativa LGPD:** Obrigação legal (Art. 41)

---

### 2. Matriz de Permissões por Funcionalidade

| Funcionalidade | Visualizador | Operador | Técnico | Supervisor | Admin | DPO |
|---------------|:------------:|:--------:|:-------:|:----------:|:-----:|:---:|
| Dashboard em tempo real | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| Ajustar temporização | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Configurar perfis (pico/noturno) | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ |
| Acessar configurações IoT | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ |
| Atualizar firmware | ❌ | ❌ | ✅ | ❌ | ✅ | ❌ |
| Visualizar logs de operação | 🟡 Parcial | 🟡 Próprios | ✅ | ✅ | ✅ | ✅ |
| Visualizar logs de acesso | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Exportar dados históricos | ❌ | ❌ | ❌ | 🟡 Anonimizados | ✅ | ✅ |
| Gerenciar usuários | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Acessar dados brutos MongoDB | ❌ | ❌ | ❌ | ❌ | ✅ | 🟡 Auditoria |
| Relatórios de conformidade | ❌ | ❌ | ❌ | ❌ | 🟡 Técnicos | ✅ |

---

## Políticas de Backup

### Dados Incluídos nos Backups

**Configurações do sistema:**
- Perfis de temporização
- Configurações IoT
- Parâmetros de segurança

**Código da aplicação:**
- Backend
- Scripts de automação

**Logs críticos:**
- Logs de acesso
- Logs de segurança (LGPD)

### Tipos de Backup

| Tipo | Descrição |
|------|-----------|
| **Backup Completo** | Cópia integral de todos os dados e configurações do sistema |
| **Backup Incremental** | Cópia apenas dos dados alterados desde o último backup |
| **Snapshot** | Registro do estado do sistema em pontos críticos (atualizações, incidentes) |

### Frequência de Backup

| Item | Frequência |
|------|------------|
| **Banco de dados (MongoDB)** | A cada **1 hora** |
| **Logs críticos** | A cada **30 minutos** |
| **Configurações do sistema** | **Diariamente** |
| **Código da aplicação** | A cada **commit** (Git) |
| **Backup completo** | **Diário** |
| **Snapshot pré-manutenção** | Antes de atualizações ou mudanças críticas |

---

## Proteção contra Engenharia Social

| Área | Controle | Descrição |
|------|----------|-----------|
| Conscientização | Treinamento obrigatório | Treinamento anual sobre engenharia social para todos os usuários |
| Conscientização | Simulação de phishing | Execução periódica de testes de phishing |
| Conscientização | Campanhas internas | Divulgação de boas práticas de segurança |
| Autenticação | MFA obrigatório | Autenticação multifator para usuários críticos |
| Autenticação | Gestão de credenciais | Proibição de compartilhamento de senhas |
| Autenticação | Bloqueio automático | Bloqueio após múltiplas tentativas de login |
| Procedimentos | Solicitações críticas | Alterações sensíveis exigem aprovação formal |
| Procedimentos | Validação de identidade | Confirmação de identidade em acessos emergenciais |
| Phishing | Filtros de e-mail | Uso de filtros antiphishing |
| Phishing | Bloqueio de links | Bloqueio de links e anexos suspeitos |
| Segurança Física | Controle de acesso | Acesso físico restrito aos servidores |
| Segurança Física | Identificação | Identificação obrigatória de visitantes |
| Monitoramento | Logs de acesso | Registro de tentativas de acesso suspeitas |
| Monitoramento | Alertas automáticos | Alertas para atividades anômalas |
| Incidentes | Canal de reporte | Canal definido para reporte de incidentes |
| Incidentes | Resposta imediata | Bloqueio e reset de credenciais após incidentes |
| Conformidade | LGPD | Aderência ao Art. 46 da LGPD |
| Conformidade | ISO 27001 | Controles alinhados à ISO/IEC 27001 |

---

## Benefícios Esperados

- **Redução de até 40%** no tempo médio de congestionamento em horários de pico
- **Diminuição de 60%** em falhas operacionais através de redundância
- **100% de conformidade** com normas de segurança e regulamentação
- **Economia de até 30%** em custos operacionais através de manutenção preventiva
- **Redução de 25%** em emissões de CO₂ através de otimização de fluxo

---

## Requisitos do Sistema

### Requisitos Funcionais

| Código | Requisito                                                                                                                                   | Priorização (MoSCoW) |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| RF01   | O sistema deve alternar automaticamente para modo de operação degradado (amarelo intermitente) quando detectar falha no semáforo principal. | Must                 |
| RF02   | O sistema deve armazenar dados localmente (buffer) quando a comunicação IoT cair, sincronizando automaticamente após restabelecimento.      | Should               |
| RF03   | O sistema deve detectar perda de comunicação em até 30 segundos e acionar protocolo de fallback.                                            | Must                 |
| RF04   | O sistema deve ajustar temporizações de semáforo dinamicamente baseado no fluxo de veículos detectado.                                      | Should               |
| RF05   | O sistema deve priorizar veículos de emergência quando detectados por sensores específicos.                                                 | Should               |
| RF06   | O sistema deve detectar condições climáticas adversas e aumentar automaticamente tempos de amarelo em 30% durante chuva intensa.            | Could                |
| RF07   | O sistema deve alternar automaticamente para alimentação de backup em até 100ms após queda de energia.                                      | Must                 |
| RF08   | O sistema deve implementar autenticação multifator para acesso administrativo.                                                              | Should               |
| RF09   | O sistema deve fornecer dashboard em tempo real mostrando status de todos os componentes do cruzamento.                                     | Should               |
| RF10   | O sistema deve permitir configuração de múltiplos perfis de temporização (pico manhã, pico tarde, noturno, fim de semana).                  | Must                 |



### Requisitos Não Funcionais
| Código | Requisito                                                                                                             | Priorização (MoSCoW) |
| ------ | --------------------------------------------------------------------------------------------------------------------- | -------------------- |
| RNF01  | O sistema deve processar dados de sensores com latência máxima de 2 segundos em 99% dos casos.                        | Must                 |
| RNF02  | O tempo de resposta para mudança de estado do semáforo deve ser inferior a 500ms após comando.                        | Must                 |
| RNF03  | O sistema deve ter disponibilidade mínima de 99,5% (uptime) durante horários de pico (6h-22h).                        | Must                 |
| RNF04  | O sistema deve ter disponibilidade mínima de 99,9% considerando todo o período de operação (24/7).                    | Must                 |
| RNF05  | O tempo máximo de recuperação (MTTR) após falha crítica deve ser de 15 minutos.                                       | Must                 |
| RNF06  | O sistema deve ter taxa de falha máxima de 0,1% para mudanças de estado de semáforo.                                  | Must                 |
| RNF07  | Todas as comunicações devem usar criptografia TLS 1.3 ou superior.                                                    | Should               |
| RNF08  | O sistema deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados).                                     | Must                 |
| RNF09  | O código fonte deve ter cobertura mínima de testes automatizados de 80%.                                              | Should               |
| RNF10  | O sistema deve usar arquitetura modular permitindo substituição de componentes sem afetar outros módulos.             | Should               |
| RNF11  | O sistema deve ser capaz de escalar horizontalmente para suportar até 500 cruzamentos sem redesign.                   | Could                |
| RNF12  | A interface administrativa deve ser responsiva e funcionar em dispositivos com resolução mínima de 1024x768.          | Could                |
| RNF13  | O sistema deve ser compatível com navegadores Chrome, Firefox, Edge e Safari (versões dos últimos 2 anos).            | Should               |
| RNF14  | O sistema deve integrar-se com APIs meteorológicas usando protocolo HTTP/REST.                                        | Could                |
| RNF15  | O sistema deve ter Recovery Point Objective (RPO) máximo de 1 hora e Recovery Time Objective (RTO) máximo de 4 horas. | Must                 |

### Legenda de Priorização (MoSCoW)
- **Must-have (M):** Requisitos vitais para o sucesso do projeto e segurança operacional.
- **Should-have (S):** Requisitos importantes, mas não vitais para a fase inicial.
- **Could-have (C):** Requisitos desejáveis que melhoram a experiência, mas podem ser deixados para depois.
- **Won't-have (W):** Requisitos que não serão incluídos nesta entrega (ou ciclo de desenvolvimento).

## Estrutura do Projeto

```
├── js/
│   └── main.js
├── style/
│   └── main.css
├── index.html
└── README.md
```

---

## Equipamentos de Rede

- **Switch:** conecta os access points e os servidores.
- **Access Point:** disponibiliza um ponto de acesso em cada semáforo para técnicos/operadores.
- **Roteador:** faz a conexão entre as redes do sistema.
- **Firewall:** protege o sistema contra acessos não autorizados.
- **Servidores:** três servidores com funções distintas:
- 1) DHCP para atribuição de IPs; 
- 2) armazenamento dos dados dos semáforos (banco de dados); 
- 3) hospedagem do sistema e do dashboard.
**Observação:** a topologia utilizada é em estrela e os protocolos de comunicação são MQTT e/ou TCP/IP.
## Diagrama do funcionamento da arquitetura IOT
<img width="646" height="331" alt="image" src="https://github.com/user-attachments/assets/4e90f7f1-1a48-495f-bc30-c11ecb4f60c1" />

**Observação:** A topologia utilizada é em estrela e os protocolos de comunicação são MQTT e/ou TCP/IP.

## Erros do sistema

| Erro | Descrição do Erro                                                                                                    | Atuação                                                       |
|------|----------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| 18   | Aumento súbito de fluxo de veículos em determinado período, causando congestionamento.                               | Aumentar tempo do sinal verde para aliviar o tráfego.         |
| 23   | Falta de acesso local para técnicos/operadores (ponto de acesso indisponível).                                      | Acionar fallback de conectividade e notificar a equipe.       |
| 14   | Falha ou mau contato em sensores, gerando leituras inconsistentes.                                                   | Entrar em modo de segurança (amarelo intermitente) e alertar. |
| 03   | Perda de comunicação com o servidor, sem resposta remota.                                                            | Operação local autônoma com buffer e sincronização posterior. |

## Diagrama da Arquitetura IoT

![Diagrama de Arquitetura IoT](https://github.com/user-attachments/assets/4e90f7f1-1a48-495f-bc30-c11ecb4f60c1)

---

## Códigos de Erro do Sistema

| Código | Descrição do Erro | Atuação |
|:------:|-------------------|---------|
| **18** | Em determinados momentos do dia o fluxo de carros por aquele semáforo pode aumentar, gerando um erro | Aumento do tempo do sinal verde |
| **23** | Access points são usados em cada semáforo para que um técnico/operador possa ter um ponto de acesso ao sistema se necessário | Aumenta o tempo do sinal amarelo |
| **14** | Se houver um erro, mal contato, ou qualquer tipo de falha no sensor o sistema gerará um erro | Semáforo entra em modo de segurança e começa a piscar amarelo |
| **03** | Pode ser que em algum momento o semáforo não obtenha mais nenhuma resposta do servidor, gerando um erro | Algoritmo continua rodando localmente |

---

## Diagramas do Sistema IoT

### Diagrama 1: Fluxo de Comunicação
![Diagrama IoT 1](https://github.com/user-attachments/assets/360b0863-9710-40d6-adda-3c3aa5443ee0)

### Diagrama 2: Arquitetura de Sensores
![Diagrama IoT 2](https://github.com/user-attachments/assets/d6baefd7-92e8-400e-93c1-208dd5c09afb)

### Diagrama 3: Integração Backend
![Diagrama IoT 3](https://github.com/user-attachments/assets/dddbdc31-613b-422d-9da4-ad84f1c924b3)

---

## Comparação: Windows Server vs Ubuntu Server

| Critério | Windows Server | Ubuntu Server |
|----------|----------------|---------------|
| **Custo** | Licença paga (≈ R$ 2.500 por servidor, dependendo da edição) | Gratuito (open source) |
| **Segurança** | Boa, com recursos nativos (Defender, AD, GPO) | Excelente, com atualizações frequentes e forte comunidade |
| **Suporte a IoT** | Limitado e menos flexível | Excelente compatibilidade com MQTT, Docker, Node.js e C++ |
| **Recomendação** | ❌ Não recomendado | ✅ **Recomendado para este projeto** |

---

## Interface de Monitoramento (Front-end)

### 1. Resumo do Sistema

A interface do Cruzamento 4.0 foi desenvolvida para atuar como um **dashboard de telemetria em tempo real**. O objetivo principal é traduzir sinais elétricos (sensores) e estados lógicos (atuadores) vindos de um Arduino para uma interface visual intuitiva e responsiva.

### 2. Pontos-Chave do Código (HTML/CSS)

#### Gerenciamento de Estados do Semáforo

A interface utiliza o conceito de **Classes de Ativação**. O semáforo não é apenas uma imagem, mas um conjunto de elementos DOM que reagem a mudanças de classe CSS.

**Trecho-Chave CSS:**

```css
/* Definição do estado 'ligado' via CSS */
.luz.vermelho.ativa {
    background-color: var(--neon-red);
    box-shadow: 0 0 40px var(--neon-red);
    border-color: #fff;
}
```

**Por que isso é importante?** Isso permite que o desenvolvedor back-end apenas alterne a classe `.ativa` no JavaScript para que o efeito visual de "luz acesa" ocorra instantaneamente.

#### Arquitetura de Recebimento de Dados (IDs de Sensores)

Para integrar com os sensores físicos (Ultrassônico e Chuva), foram definidos IDs específicos que servem como "endereços" para a injeção de dados.

**Trecho-Chave HTML:**

```html
<div class="card">
    <h3>Fluxo (Ultrassônico)</h3>
    <span id="txt-fluxo">0 v/min</span>
</div>

<div class="card">
    <h3>Sensor de Chuva</h3>
    <span id="txt-chuva">Inativo</span>
</div>
```

#### Monitoramento de Conectividade

A interface inclui um sistema de feedback visual para o status da comunicação serial/rede entre o navegador e o servidor C#.

**Trecho-Chave HTML:**

```html
<span id="status-conexao" class="badge offline">AGUARDANDO BACK-END</span>
```

### 3. Fluxo de Comunicação (Contrato de Interface)

Para o correto funcionamento do sistema, o front-end estabelece o seguinte fluxo de dados:

1. **Entrada (Input):** O C# lê a porta serial do Arduino e envia um sinal para a função JS
2. **Processamento (Logic):** O JavaScript identifica qual sensor enviou o dado através do ID correspondente
3. **Saída (Output):** O DOM é manipulado para refletir o estado real do hardware (ex: mudar o texto do fluxo ou acender o LED virtual)

### 4. Monitoramento de Fluxo Serial (C++ para Web)

A área de logs foi projetada para funcionar como um **Monitor Serial Integrado**. Como o código dos sensores será escrito em C++, essa área é vital para debugar o que o Arduino está transmitindo via porta USB/Serial diretamente para a interface.

**Trecho-Chave HTML:**

```html
<div class="log-area">
    <h3>Log de Eventos:</h3>
    <ul id="lista-logs">
        <li>Aguardando conexão com Arduino (C++)...</li>
    </ul>
</div>
```

**Finalidade Técnica:** Permite visualizar as strings brutas enviadas pelas funções `Serial.print()` ou `Serial.println()` do C++. Isso facilita a validação rápida de:

- Leituras de distância do sensor ultrassônico
- Mudanças de estado lógico (High/Low) enviadas pelo hardware
- Confirmação de recebimento de comandos de interrupção

**Comportamento de Interface:** O log utiliza `display: flex` com `flex-direction: column-reverse` (ou uso de `prepend` no JS) para garantir que o evento mais recente do hardware seja sempre o primeiro da lista, simulando o comportamento de um terminal de depuração profissional.

### 5. Dicionário de Interface (Mapeamento Hardware-Software)

Para garantir a interoperabilidade entre o firmware (desenvolvido em C++) e a interface de monitoramento, foi estabelecida a seguinte tabela de identificadores. Estes IDs são os pontos de entrada de dados no DOM:


## TABELA DE INTEGRAÇÃO: HARDWARE (C++) -> INTERFACE (HTML/JS)

| COMPONENTE (C++)     | ID NO HTML       | AÇÃO DO FRONT-END           | ESTILO / CSS     |
|----------------------|------------------|-----------------------------|------------------|
| LED Vermelho         | luz-vermelha     | Ativa brilho de parada      | .vermelho.ativa  |
| LED Amarelo          | luz-amarela      | Ativa brilho de atenção     | .amarelo.ativa   |
| LED Verde            | luz-verde        | Ativa brilho de passagem    | .verde.ativa     |
| Sensor Ultrassônico  | txt-fluxo        | Atualiza valor de tráfego   | Texto Dinâmico   |
| Sensor de Chuva      | txt-chuva        | Alerta estado climático     | Texto Dinâmico   |
| Porta Serial         | status-conexao   | Indica conexão física       | .online/.offline |


## Início Rápido

```bash
# Clone o repositório
git clone https://github.com/prefeitura/sistema-semaforos-inteligentes.git

# Entre no diretório
cd sistema-semaforos-inteligentes

# Instale dependências (ex.: Node.js)
# npm install

# Inicie o servidor de desenvolvimento
# npm start

# Acesse o dashboard:
# http://localhost:3000
