# Construction Invoice System

Sistema completo de gerenciamento de faturas para empresas de construção, desenvolvido com Next.js 15, TypeScript, Prisma e Tailwind CSS.

## Funcionalidades

- ✅ Autenticação de usuários
- ✅ Gerenciamento de clientes
- ✅ Criação e gerenciamento de faturas
- ✅ Geração de PDF para faturas
- ✅ Dashboard com estatísticas
- ✅ Interface moderna e responsiva
- ✅ Banco de dados SQLite com Prisma

## Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **bcryptjs** - Criptografia de senhas
- **jsPDF** - Geração de PDFs

## Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo de ambiente:
```bash
cp .env.example .env
```

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev --name init
```

5. Gere o cliente Prisma:
```bash
npx prisma generate
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

7. Acesse http://localhost:3000

## Estrutura do Projeto

```
construction-invoice-system/
├── app/                      # Next.js App Router
│   ├── api/                  # API Routes
│   │   └── auth/            # Rotas de autenticação
│   ├── auth/                # Páginas de autenticação
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/           # Páginas do dashboard
│   │   ├── invoices/        # Gerenciamento de faturas
│   │   └── customers/       # Gerenciamento de clientes
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx           # Layout raiz
│   └── page.tsx             # Página inicial
├── lib/                     # Utilitários e configurações
│   ├── db.ts                # Cliente Prisma
│   └── utils.ts             # Funções utilitárias
├── prisma/                  # Prisma schema e migrações
│   └── schema.prisma        # Definição do banco de dados
├── public/                  # Arquivos estáticos
├── .env.example             # Exemplo de variáveis de ambiente
├── package.json             # Dependências do projeto
├── tailwind.config.ts       # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Este arquivo
```

## Uso

### Criar uma conta

1. Acesse http://localhost:3000
2. Clique em "Cadastrar"
3. Preencha seus dados
4. Faça login

### Criar uma fatura

1. Acesse o Dashboard
2. Clique em "Nova Fatura"
3. Selecione ou crie um cliente
4. Adicione os itens da fatura
5. Salve e gere o PDF

## Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## Banco de Dados

O sistema usa SQLite por padrão para facilitar o desenvolvimento. Para produção, você pode configurar PostgreSQL ou MySQL editando o arquivo `prisma/schema.prisma`.

### Modelos do Banco de Dados

- **User** - Usuários do sistema
- **Customer** - Clientes
- **Invoice** - Faturas
- **InvoiceItem** - Itens das faturas

## Segurança

- Senhas são hash usando bcryptjs
- Sessões são gerenciadas com cookies HTTP-only
- Validação de entrada em todas as rotas da API

## Próximos Passos

- [ ] Implementar middleware de autenticação
- [ ] Adicionar filtros e pesquisa nas listagens
- [ ] Implementar relatórios avançados
- [ ] Adicionar suporte a múltiplas moedas
- [ ] Implementar notificações por email
- [ ] Adicionar testes automatizados

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## Suporte

Para dúvidas ou problemas, abra uma issue no repositório.
