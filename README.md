# Sistema Inteligente de Gerenciamento de Semáforos

## Visão Geral

O **Sistema Inteligente de Gerenciamento de Semáforos** é uma solução IoT completa desenvolvida para modernizar e otimizar o controle de tráfego urbano. Este projeto surge da necessidade de resolver problemas críticos identificados em cruzamentos urbanos, onde falhas de equipamento, quedas de comunicação e falta de resiliência operacional comprometem a segurança e fluidez do trânsito.

## Objetivo

Desenvolver uma plataforma robusta, escalável e segura que permita:

- **Operação resiliente** mesmo em cenários adversos (falhas de rede, queda de energia, condições climáticas extremas)
- **Monitoramento em tempo real** de cruzamentos com alertas automáticos para problemas
- **Adaptação dinâmica** ao fluxo de tráfego através de sensores IoT
- **Gestão centralizada** de múltiplos cruzamentos com dashboard administrativo
- **Conformidade regulatória** com normas ABNT e Código de Trânsito Brasileiro

## Histórias de Usuários

Formato utuilziado: Como [usuário], quero [meta] para que [razão]

- Como **pedestre**, quero que o **semáforo detecte minha presença através de sensores** para que **eu não precise esperar o ciclo completo quando não há veículos**
- Como **motorista**, quero que o **sistema ajuste os tempos de semáforo baseado no tráfego em tempo real** para que **eu possa reduzir meu tempo de deslocamento**
- Como **motorista de ambulância**, quero que o **sistema priorize meu trajeto quando acionado** para que **eu possa chegar mais rápido ao destino em emergências**

## Problema

A Prefeitura identificou problemas críticos em um cruzamento da região central:

- **Semáforos falhando** durante horários de pico, causando congestionamentos e riscos de acidentes
- **Comunicação IoT instável** entre sensores e controladores, resultando em perda de dados
- **Servidor local obsoleto** com performance degradada e vulnerabilidades de segurança
- **Documentação inadequada** gerando incerteza sobre comportamento esperado em situações excepcionais

## Solução Proposta

Este sistema implementa uma arquitetura moderna baseada em:

### Arquitetura
- **Edge Computing**: Controladores locais com capacidade de operação autônoma
- **Comunicação redundante**: Múltiplos canais IoT (Wi-Fi, 4G/5G, LoRaWAN)
- **Cloud-ready**: Backend escalável pronto para deploy em nuvem ou on-premises
- **Microserviços**: Componentes desacoplados para facilitar manutenção e evolução

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
- **Chuva intensa**: Detecção climática com ajuste automático de segurança
- **Queda de energia**: Backup com autonomia de 4 horas + modo economia
- **Falha de servidor**: Operação local independente garantida

#### Segurança
- Autenticação multifator para acesso administrativo
- Criptografia TLS 1.3 em todas as comunicações
- Logs de auditoria completos e imutáveis
- Conformidade com LGPD

## Tecnologias

- **Backend**: [ javascript-ES6/Node.js ]
- **IoT**: [ MQTT, TCP/IP, C++]
- **Banco de Dados**: [ MongoDB ]
- **Frontend**: [ HTML/CSS ]
- **Monitoramento**: Prometheus, Grafana

## Benefícios Esperados

- **Redução de até 40%** no tempo médio de congestionamento em horários de pico
- **Diminuição de 60%** em falhas operacionais através de redundância
- **100% de conformidade** com normas de segurança e regulamentação
- **Economia de até 30%** em custos operacionais através de manutenção preventiva
- **Redução de 25%** em emissões de CO₂ através de otimização de fluxo

## Requisitos do Sistema

### Requisitos Funcionais

**RF01** - O sistema deve alternar automaticamente para modo de operação degradado (amarelo intermitente) quando detectar falha no semáforo principal.

**RF02** - O sistema deve armazenar dados localmente (buffer) quando a comunicação IoT cair, sincronizando automaticamente após restabelecimento.

**RF03** - O sistema deve detectar perda de comunicação em até 30 segundos e acionar protocolo de fallback.

**RF04** - O sistema deve ajustar temporizações de semáforo dinamicamente baseado no fluxo de veículos detectado.

**RF05** - O sistema deve priorizar veículos de emergência quando detectados por sensores específicos.

**RF06** - O sistema deve detectar condições climáticas adversas e aumentar automaticamente tempos de amarelo em 30% durante chuva intensa.

**RF07** - O sistema deve alternar automaticamente para alimentação de backup em até 100ms após queda de energia.

**RF08** - O sistema deve implementar autenticação multifator para acesso administrativo.

**RF09** - O sistema deve fornecer dashboard em tempo real mostrando status de todos os componentes do cruzamento.

**RF10** - O sistema deve permitir configuração de múltiplos perfis de temporização (pico manhã, pico tarde, noturno, fim de semana).

### Requisitos Não Funcionais

**RNF01** - O sistema deve processar dados de sensores com latência máxima de 2 segundos em 99% dos casos.

**RNF02** - O tempo de resposta para mudança de estado do semáforo deve ser inferior a 500ms após comando.

**RNF03** - O sistema deve ter disponibilidade mínima de 99,5% (uptime) durante horários de pico (6h-22h).

**RNF04** - O sistema deve ter disponibilidade mínima de 99,9% considerando todo o período de operação (24/7).

**RNF05** - O tempo máximo de recuperação (MTTR) após falha crítica deve ser de 15 minutos.

**RNF06** - O sistema deve ter taxa de falha máxima de 0,1% para mudanças de estado de semáforo.

**RNF07** - Todas as comunicações devem usar criptografia TLS 1.3 ou superior.

**RNF08** - O sistema deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados).

**RNF09** - O código fonte deve ter cobertura mínima de testes automatizados de 80%.

**RNF10** - O sistema deve usar arquitetura modular permitindo substituição de componentes sem afetar outros módulos.

**RNF11** - O sistema deve ser capaz de escalar horizontalmente para suportar até 500 cruzamentos sem redesign.

**RNF12** - A interface administrativa deve ser responsiva e funcionar em dispositivos com resolução mínima de 1024x768.

**RNF13** - O sistema deve ser compatível com navegadores Chrome, Firefox, Edge e Safari (versões dos últimos 2 anos).

**RNF14** - O sistema deve integrar-se com APIs meteorológicas usando protocolo HTTP/REST.

**RNF15** - O sistema deve ter Recovery Point Objective (RPO) máximo de 1 hora e Recovery Time Objective (RTO) máximo de 4 horas.


## Estrutura do Projeto

```
├── js/ 
├    └── main.js
├── style/
├   └── main.css         
├── index.html   
└── README.md         
```
## Equipamentos de Rede 
- **Switch** - Será feito o uso de um switch para que haja a conexão de todos os acess point com os servidores. 
- **Access Point** - Eles serão usados em cada semáforo para que um técnico/operador possa ter um ponto de acesso a o sistema se necessário
- **Firewall** - para que ninguém entre no sistema e prejudique o funcionamento dos semáforos será feito o uso de um firewall cuja função é proteger o sistema. 
- **Servidor** - Será feito o uso de 3 servidores com funções diferentes, sendo um para o protocolo DHCP que atribui todos os controladores com um IP próprio. Outro servidor para guardar as informações providas dos semáforos em um banco de dados. Por fim, um servidor que hospedará um sistema com as informações sendo mostradas de forma gráfica.

## Fluxograma do funcionamento da arquitetura IOT
<img width="581" height="556" alt="image" src="https://github.com/user-attachments/assets/8d4c624e-7e18-4986-a595-b387864c047b" />

## Erros do sistema 
| Erro | Descrição do Erro                                                                                    |  Atuação                        |
|------|------------------------------------------------------------------------------------------------------|---------------------------------|
|  18  | Em determinados momentos do dia o fluxo de carros por aquele semáforo pode aumentar, gerando um erro | Aumento do tempo do sinal verde.|
## Quick Start

```bash
# Clone o repositório
git clone https://github.com/prefeitura/sistema-semaforos-inteligentes.git

# Entre no diretório
cd sistema-semaforos-inteligentes

# Suba o ambiente de desenvolvimento
docker-compose up -d

# Acesse o dashboard
http://localhost:3000
