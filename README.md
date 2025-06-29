# Ordo - Sistema de Agendamento de Salas de Reunião

![Badge do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![Badge da Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

Projeto acadêmico desenvolvido para a disciplina de **Arquitetura de Software**. O Ordo é um sistema web projetado para gerenciar e otimizar a reserva de salas de reunião em um ambiente corporativo, com o objetivo de eliminar conflitos e simplificar o processo de agendamento.

O foco principal do projeto não é a interface do usuário, mas sim a **definição e implementação de uma arquitetura de software robusta**, considerando atributos de qualidade e a aplicação de padrões de projeto para garantir um sistema manutenível, confiável e escalável.

## 🏛️ Conceitos Arquiteturais e Design Patterns

A arquitetura do Ordo foi guiada pelas seguintes características e padrões:

* **Características de Arquitetura:**
    * **Confiabilidade:** Garantir que nunca ocorra uma reserva dupla no mesmo horário.
    * **Disponibilidade:** Manter o sistema acessível para os usuários durante o expediente.
    * **Manutenibilidade:** Estruturar o código de forma clara e modular para facilitar futuras evoluções.

* **Design Patterns Aplicados:**
    * **Repository:** Para abstrair a camada de acesso a dados, desacoplando a lógica de negócio do banco de dados.
    * **Facade:** Para simplificar a interface de operações complexas, como o processo completo de criação de uma reserva.
    * **State:** Para gerenciar os diferentes estados de um horário no calendário de uma sala (Livre, Reservado, etc.).

## 🚀 Tecnologias Utilizadas

* **Backend:** Node.js, Express.js
* **Banco de Dados:** PostgreSQL (Planejado para produção), com repositório em memória para prototipagem e testes.
* **Linguagem:** JavaScript

## ▶️ Como Executar o Projeto (Exemplo)

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/ordo.git](https://github.com/seu-usuario/ordo.git)

# 2. Instale as dependências
cd ordo
npm install

# 3. Configure as variáveis de ambiente
# Renomeie o arquivo .env.example para .env e preencha com suas configurações

# 4. Inicie o servidor
npm start