# MeuSite — Projeto Exemplo

Pequeno site estático com HTML, CSS e JavaScript.

## Estrutura

- `index.html` — Página inicial
- `about.html` — Página sobre
- `contact.html` — Página de contato (formulário de exemplo)
- `styles.css` — Estilos principais
- `script.js` — JavaScript simples para menu e formulário

- `assets/` — imagens e favicon usados pelo site (SVG)

## Executando localmente

Recomendo usar um servidor estático simples. No PowerShell, navegue até a pasta `website` e execute um servidor Python (se tiver Python instalado):

```powershell
cd "c:\Users\RHAIDELINE\Downloads\files (8)\website"
python -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

Se preferir apenas abrir `index.html` diretamente, clique duas vezes no arquivo, mas alguns recursos (fetch, por exemplo) podem falhar por restrições do `file://`.

## Próximos passos sugeridos

- Adicionar imagens e tipografia customizada
- Conectar o formulário a um back-end ou serviço de e-mail
- Deploy em GitHub Pages ou outro host estático

---
Feito por um assistente. Edite os arquivos conforme desejar.
