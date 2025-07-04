# Ordo - Sistema de Agendamento de Salas de Reunião

Projeto acadêmico desenvolvido para a disciplina de **Arquitetura de Software**. O Ordo é um sistema web projetado para gerenciar e otimizar a reserva de salas de reunião em um ambiente corporativo, com o objetivo de eliminar conflitos e simplificar o processo de agendamento.

O foco principal do projeto não foi a interface do usuário, mas sim a **definição e implementação de uma arquitetura de software robusta**, considerando atributos de qualidade e a aplicação de padrões de projeto para garantir um sistema manutenível, confiável e escalável.

## 🏛️ Conceitos Arquiteturais e Design Patterns

A arquitetura do Ordo foi guiada pelas seguintes características e padrões:

* **Características de Arquitetura:**
    * **Confiabilidade:** Garantir que nunca ocorra uma reserva dupla no mesmo horário.
    * **Disponibilidade:** Manter o sistema acessível para os usuários durante o expediente.
    * **Manutenibilidade:** Estruturar o código de forma clara e modular para facilitar futuras evoluções.

* **Design Patterns Aplicados (GoF):**
    * **Singleton (Criacional):** Para garantir uma única instância de conexão com o banco de dados.
    * **Factory Method (Criacional):** Para centralizar e validar a criação de objetos de domínio.
    * **Strategy (Comportamental):** Para encapsular o algoritmo de verificação de conflitos, tornando-o intercambiável.

## 🚀 Tecnologias Utilizadas

* **Backend:** Node.js, Express.js
* **Banco de Dados:** PostgreSQL
* **Linguagem:** JavaScript

## ▶️ Como Executar o Projeto

\`\`\`bash
# 1. Clone o repositório
git clone https://github.com/brendacristaldo/ordo_project.git

# 2. Instale as dependências
cd ordo_project
npm install

# 3. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz e preencha com as credenciais do seu banco PostgreSQL

# 4. Inicie o servidor
npm start
\`\`\`