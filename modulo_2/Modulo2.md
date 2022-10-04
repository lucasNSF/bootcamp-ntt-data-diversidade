# Páginas Web com HTML e CSS

## Conteúdos deste Módulo 🔎

- [Entendendo Comunicação Client x Server](#entendendo-comunicação-client-x-server)
  - [Conceito de Client no linguajar Web](#conceito-de-client-no-linguajar-web)
  - [Navegadores](#navegadores)
  - [Aplicações Web](#aplicações-web)
  - [Dispositivos Móveis](#dispositivos-móveis)
  - [Sobre Servidores](#sobre-servidores)
- [Introdução ao HTML na Prática](#introdução-ao-html-na-prática)
  - [Estrutura Básica do HTML](#estrutura-básica-do-html)
  - [Textos](#textos)
  - [Listas Ordenadas e Não Ordenadas](#listas-ordenadas-e-não-ordenadas)
  - [Links](#links)
- [Desafio de Projeto 01 - Criar uma Página Web com as Tags HTML Aprendidas](desafio-01.html)

<br>

## Entendendo Comunicação _Client x Server_

<br>

### **Conceito de _Client_ no linguajar Web**

_Client_ é todo o dispositivo que **consome** algo na internet. Um acesso a um site é um conjunto de requisições feitas pelo cliente atendidas pelo servidor. Essas requisições são compostas por arquivos de imagem, áudio, CSS, Javascript, etc.

Esses arquivos enviados pelo servidor, são armazenados no computador do cliente (como _cache_) a fim de gravar o estado atual do site no computador do cliente.

<br>

### **Navegadores**

Os navegadores, também chamados de _browsers_, são programas criados por empresas com a finalidade de interpretar os arquivos enviados pelo servidor web. Seguem os padrões da W3C, porém, sempre há uma diferença de implementação.

Como cada navegador possui uma diferença de implementação dos seus recursos, há também uma diferença de compatibilidade de certos recursos, utilizados em determinada linguagem de programação, que podem funcionar em todos ou alguns browsers.

<br>

### **Aplicações Web**

São soluções criadas que possuem a internet como meio de comunicação entre cliente e servidor, não sendo necessário a sua instalação.

<br>

### **Dispositivos Móveis**

Cada vez mais os dispositivos móveis fazem parte do cotidiano das pessoas. Cabe ao programador saber adaptar o acesso a um determinado site para um dispositivo móvel.

<br>

### **Sobre Servidores**

São máquinas que fornecem determinados arquivos para um determinado cliente. Existem diversos tipos de servidores, tais como:

1. **Proxy**

Servidor intermediário que atua como medida de proteção na conexão entre o cliente e o servidor, pode ser utilizado como servidor de autenticação.

2. **Firewall**

Servidor intermediário que atua como medida de proteção para conexões externas, barrando conexões maliciosas que possam comprometer a segurança do cliente e do servidor.

3. **Web Server**

Servidor que trata as requisições da internet fornecendo os recursos necessários para se acessar uma determinada aplicação Web.

4. **Email Server**

Servidor responsável pelo fluxo de e-mails.

5. **Database Server**

Servidor que se conecta a um banco de dados para uma determinada aplicação.

6. **DNS (Domain Name Service)**

Servidor que guarda uma lista de nomes e IP's de determinadas máquinas conectadas. Ele traduz um determinado IP para um domínio, já armazenado na lista, e redireciona a conexão para o site especificado.

<br>

## Introdução ao HTML na Prática

<br>

### **Estrutura Básica do HTML**

```html
<html>
  <head>
    <title>Minha página HTML</title>
  </head>

  <body>
    <h1>Olá mundo :)</h1>
  </body>
</html>
```

Toda a página HTML deve estar contida na sua própria tag `html`. A tag `head` guarda arquivos de configuração da sua página HTML (metadados). Na tag `body` ficam contidos todos os conteúdos disponíveis para o usuário.

<br>

### **Textos**

```html
<h1>Este é o Título Principal</h1>
<h2>Este é o título secundário</h2>
<h3>Este é o título terciário</h3>
<p>Este é um parágrafo</p>
```

As tags de `h1` a `h6` possuem semântica de título e a tag `p` possui semântica de parágrafo.

<br>

### **Listas Ordenadas e Não Ordenadas**

```html
<!-- Lista Ordenada -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<!-- Lista Não Ordenada -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Utiliza-se as tags `ol` e `ul` para criar listas ordenadas e não ordenadas, respectivamente. Para criar itens das listas utiliza-se a tag filha `li`.

<br>

### **Links**

```html
<a href="https://google.com.br" target="_blank">Navegando para link externo</a>

<a href="#linkInterno">Navegando para link interno</a>

<h2 id="linkInterno">Título 2</h2>
```

A tag `a` é utilizada para criar _links_ e possui o atributo `href` para realizar a navegação.

<br>
