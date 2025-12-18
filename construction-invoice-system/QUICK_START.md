# Guia Rápido de Instalação

## Instalação do Node.js (Necessário!)

⚠️ **IMPORTANTE**: O Node.js não está instalado no seu sistema. Você precisa instalá-lo para executar este projeto.

### Windows

1. Acesse https://nodejs.org
2. Baixe a versão LTS (recomendada)
3. Execute o instalador
4. Reinicie o terminal/VSCode após a instalação

### Verificar instalação

Após instalar, abra um novo terminal e execute:
```bash
node --version
npm --version
```

Você deve ver os números das versões instaladas.

## Configurar o Projeto

Depois de instalar o Node.js, execute estes comandos na pasta do projeto:

```bash
# 1. Instalar dependências
npm install

# 2. Criar arquivo de ambiente
cp .env.example .env

# 3. Configurar o banco de dados
npx prisma migrate dev --name init
npx prisma generate

# 4. Iniciar o servidor
npm run dev
```

## Acessar o Sistema

Após executar `npm run dev`, acesse:
- http://localhost:3000

## Primeiro Uso

1. Clique em "Cadastrar"
2. Crie sua conta
3. Faça login
4. Comece a criar faturas!

## Problemas Comuns

### "npm: command not found"
- Você precisa instalar o Node.js primeiro

### "Cannot find module..."
- Execute `npm install` novamente

### Erro no Prisma
- Execute `npx prisma generate`
- Execute `npx prisma migrate dev`

## Estrutura de Arquivos Criada

```
✅ package.json          # Dependências do projeto
✅ tsconfig.json         # Configuração TypeScript
✅ tailwind.config.ts    # Configuração Tailwind CSS
✅ prisma/schema.prisma  # Banco de dados
✅ app/                  # Páginas e rotas
✅ lib/                  # Utilitários
✅ .gitignore            # Arquivos ignorados pelo Git
✅ .env.example          # Exemplo de variáveis de ambiente
✅ README.md             # Documentação completa
```

## Próximo Passo

Depois de instalar o Node.js, volte a este diretório e execute:

```bash
npm install
```
