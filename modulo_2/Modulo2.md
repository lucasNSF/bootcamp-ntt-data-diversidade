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
- [Trabalhando com Formulários](#trabalhando-com-formulários)
  - [Tag Form](#tag-form)
  - [Tag Input](#tag-input)
  - [Checkbox e Radio](#checkbox-e-radio)
  - [Tag Button](#tag-button)
  - [Tag Select](#tag-select)
  - [Tag TextArea](#tag-textarea)
- [Estruturando o HTML + Formatações](#estruturando-o-html--formatações)
  - [Formatando Textos](#formatando-textos)
  - [Div e Span](#div-e-span)
  - [Fieldset](#fieldset)
  - [Embeds](#embeds)
  - [Iframe](#iframe)
- [Trabalhando com Mídias](#trabalhando-com-mídias)
  - [Tag Img](#tag-img)
  - [Tag Audio](#tag-audio)
  - [Tag Video](#tag-video)
  - [Tag Track](#tag-track)
- [Criando Tabelas](#criando-tabelas)
  - [Tag Table](#tag-table)
  - [Tag Tr](#tag-tr)
  - [Tag Td e Th](#tag-td-e-th)
  - [Tag TBody, THead e TFoot](#tag-tbody-thead-e-tfoot)
- [Desafio de Projeto 02 - Criando seu Primeiro Site Completo com HTML](./desafio-02/desafio-02.html)

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

## Trabalhando com Formulários

<br>

### **Tag Form**

É uma tag utilizada para criar formulários em uma página HTML, estruturada da seguinte forma:

```html
<form
  name="sign-up"
  method="POST"
  action="#"
  autocomplete="on"
  onsubmit="alert('Dados enviados!')"
>
  <h1>Meu formulário</h1>

  Nome: <input type="text" name="nome" /> Idade:
  <input type="number" name="idade" /> Senha:
  <input type="password" name="senha" />

  <button type="submit">Enviar</button>
</form>
```

O atributo `name` presente na tag `form` e `input` serve para identificar um determinado formulário ou input pelo nome passado neste atributo para o servidor.

O atributo `method` identifica o método que o determinado formulário irá utilizar, podendo ser **GET** ou **POST**. No método **GET**, os dados postos no formulário serão enviados para consulta no servidor, diretamente enviados pela URL do navegador. O método **POST** serve para inserir informações no servidor (comumente utilizado em cadastros), nele os dados são encapsulados e enviados pelo corpo da requisição HTTP.

O atributo `action` é usado para indicar para onde as informações postas no formulário serão enviadas, podendo ser um arquivo Javascript, link para um banco de dados ou até mesmo um servidor.

O atributo `autocomplete` é utilizado para controlar se o navegador pode autocompletar os campos do formulário, caso existam palavras-passe salvas.

O atributo `onsubmit` é um evento que ativa um determinado código Javascript quando o botão de **submit** do formulário é pressionado.

<br>

### **Tag Input**

```html
<form>
  <!-- Input para textos -->
  <label>Text:</label>
  <input type="text" />

  <br />

  <!-- Input para números -->
  <label>Number:</label>
  <input type="number" min="0" max="99" step="5" />

  <br />

  <!-- Cria um input como botão -->
  <label>Button:</label>
  <input type="button" value="Enviar" />
  <button>Enviar</button>

  <br />

  <!-- Input com intervalo -->
  <label>Range:</label>
  <input type="range" min="0" max="100" value="10" />

  <br />

  <!-- Input para selecionar cores -->
  <label>Color:</label>
  <input type="color" />

  <br />

  <!-- Input para e-mails -->
  <label>Email:</label>
  <input type="email" />

  <br />

  <!-- Input para URL's -->
  <label>Url:</label>
  <input type="url" />

  <br />

  <!-- Input para datas -->
  <label>Date:</label>
  <input type="date" />

  <br />

  <!-- Input escondido para o usuário -->
  <label>Hidden:</label>
  <input type="hidden" />

  <br />

  <!-- Input para envio de arquivos -->
  <label>File:</label>
  <input type="file" multiple />

  <br />

  <!-- Input formatado para buscas -->
  <label>Search:</label>
  <input type="search" />
</form>
```

Existem muitos tipos de _input's_ com diversas funcionalidades. Atenção: algumas delas só funcionam em determinados browsers.

<br>

### **Checkbox e Radio**

Em inputs do tipo **checkbox** é possível enviar múltiplos valores selecionados passando apenas um único valor do atributo `name` para cada input.

```html
<p>Quais opcionais você deseja?</p>

<input type="checkbox" name="opcional[]" value="queijo" /> + queijo <br />
<input type="checkbox" name="opcional[]" value="calabresa" /> + calabresa <br />
<input type="checkbox" name="opcional[]" value="cebola" /> + cebola <br />
<input type="checkbox" name="opcional[]" value="azeitona" /> + azeitona
```

Dessa forma, podem ser enviados múltiplos valores dos diferentes inputs presentes utilizando a mesma variável **opcional** como lista.

Inputs do tipo **radio** quando possuem o mesmo atributo `name`, só pode ser selecionado apenas um único valor.

```html
<p>Borda Recheada?</p>

<input type="radio" name="borda" value="sim" /> Sim <br />
<input type="radio" name="borda" value="nao" /> Não
```

<br>

### **Tag Button**

Existem vários tipos de botões associados à tag `button`:

1. **button**: Define um botão qualquer.
2. **reset**: Limpa todos os campos do formulário que está contido.
3. **submit**: Envia todos os dados do formulário para um determinado arquivo ou URL.

<br>

### **Tag Select**

Cria uma caixa com opções pré-definidas para o usuário. As opções são criadas com a tag `option`. O atributo `selected` indica qual opção já estará selecionada. A tag `select` também aceita atributo `multiple`.

```html
<select name="role">
  <option value="">Selecione o cargo</option>
  <option value="administrativo">Administrativo</option>
  <option value="gerente">Gerente</option>
  <option value="diretor">Diretor</option>
  <option value="presidente">Presidente</option>
</select>
```

<br>

### **Tag Textarea**

Cria um campo de texto maior para o usuário. É possível definir a quantidade de linhas e colunas do campo com os atributos `rows` e `columns`.

```html
<textarea rows="10" cols="50" name="message"></textarea>
```

<br>

## Estruturando o HTML + Formatações

<br>

### **Formatando Textos**

Existem diversas tags HTML para formatação de textos independentes de CSS. São algumas:

1. **`<b>`** e **`<strong>`** - Deixa em negrito.
2. **`<i>`** - Deixa em itálico.
3. **`<u>`** - Deixa sublinhado.
4. **`<sup>`** - Deixa um texto acima do nível normal.
5. **`<sub>`** - Deixa um texto abaixo do nível normal.
6. **`<blockquote>`** - Formata como um bloco com identação.

<br>

### **Div e Span**

São consideradas tags genéricas, ou seja, não carregam peso semântico na página HTML. São fortemente utilizadas para estruturação do HTML.
A tag `div` possui comportamento de _display_ `block` enquanto a tag `span` não.

<br>

### **Fieldset**

Delimita um formulário muito grande a fim de ficar mais atrativo visualmente. Recebe uma tag `legend` para informar o nome do campo delimitado.

```html
<fieldset>
  <legend>Dados Pessoais</legend>

  <div class="row">
    <label>Nome</label> <input type="text" /> <label>Profissão</label>
    <input type="text" />
    <label>E-mail</label> <input type="email" />
  </div>
</fieldset>
```

<br>

### **Embeds**

Esta tag não é mais utilizada. Feito para carregar mídias externas como plugin Flash Player, Java e vídeos.

<br>

### **Iframe**

É uma tag que requer um pouco mais de atenção por conta da segurança do seu website. Permite abrir um conteúdo de outra página no seu site em uma mini janela personalizada.

```html
<iframe src="http://dio.me" width="500" height="400"></iframe>
```

É comumente utilizado com o Google Maps, incorporando um mapa ao seu website.

<br>

## Trabalhando com Mídias

É possível inserir diversos recursos de mídia em uma página HTML. Serão abordadas algumas tags utilizadas no HTML5.

<br>

### **Tag Img**

Tag utilizada para inserir imagens. Possui um atributo `src` na qual recebe o caminho de onde virá sua imagem (podendo ser da internet ou do seu arquivo local). Suporta todos os tipos de imagem (GIF, PNG, JPG, JPEG, SVG, etc). Recebe também os atributos `title` e `alt` que auxiliam na acessibilidade da imagem.

```html
<img
  src="minha-imagem.png"
  title="título da imagem"
  alt="Descrição da imagem"
/>
```

<br>

### **Tag audio**

É utilizada para carregar arquivos de áudio no navegador (utiliza recursos nativos). Pode receber o atributo `controls` que define se os controles do áudio devem estar visíveis ou não. O atributo `autoplay` indica se o áudio deve tocado assim que a página for carregada.

```html
<audio controls autoplay>
  <source src="minha-musica.mp3" />
  Esta mensagem é mostrada caso o navegador não suporte a tag.
</audio>
```

<br>

### **Tag Video**

Utilizada para inserir vídeos nas páginas HTML. Recebe os mesmos atributos que a tag [`audio`](#tag-audio).

```html
<video controls autoplay>
  <source src="meu-video.mp4" />
  <source src="meu-video.webm" />
  Seu navegador não tem suporte a vídeo.
</video>
```

<br>

### **Tag Track**

É uma tag auxiliar da tag `video`. É possível inserir legendas e capítulos o seu vídeo possui. Similar aos encontrados em vídeos no Youtube. Recebe também o atributo `kind` que especifica o tipo de comportamento da track para o vídeo, o atributo `srclang` para indicar a linguagem das legendas e o atributo `default` para carregar um outro arquivo _vtt_ como padrão.

```html
<video controls>
  <source src="meu-video.mp4" />
  <track src="legenda.vtt" kind="captions" srclang="en" />
  <track default src="legenda-pt-br.vtt" kind="captions" srclang="pt-br" />
</video>
```

<br>

## Criando Tabelas

<br>

### **Tag Table**

É utilizada para criar uma tabela no HTML. Funciona em conjunto com outras tags como `td` e `tr` para ter o formato tabular. Recebe os atributos `border`, para definir tamanho da borda, `width`, para definir largura, `cellspacing`, para definir o _gap_ entre as células, `cellpadding`, para definir a distância da borda para o conteúdo interno da célula e o atributo `summary` para indicar uma descrição da tabela.

```html
<table
  summary="Tabela de alunos da DIO"
  border="1"
  width="200"
  cellspacing="0"
  cellpadding="15"
  align="center"
>
  <tr>
    <td>Nome</td>
    <td>Idade</td>
  </tr>

  <tr>
    <td>Lucas</td>
    <td>20</td>
  </tr>
</table>
```

<br>

### **Tag Tr**

É utilizada para criar uma nova linha na tabela.

<br>

### **Tag Td e Th**

São utilizadas para criar uma nova coluna na tabela. A tag `th` é utilizada para criar colunas de título na tabela.

<br>

### **Tag TBody, THead e TFoot**

Essas tags carregam peso semântico, dividindo a tabela em cabeçalho, corpo e rodapé. A tag `thead` é utilizada para segmentar o **cabeçalho** da tabela, a tag `tbody` para o **corpo** e a tag `tfoot` para o rodapé.

```html
<table summary="Tabela de alunos da DIO" cellspacing="0">
  <!-- Tag para descrição da tabela -->
  <caption>
    Tabela de alunos da DIO
  </caption>

  <thead>
    <tr>
      <th title="nome">Nome</th>
      <th title="idade">Idade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Lucas</td>
      <td>22</td>
    </tr>

    <tr>
      <td>Maria</td>
      <td>19</td>
    </tr>

    <tr>
      <td>João</td>
      <td>30</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <th title="Total de alunos">Total de Alunos:</th>
      <td>3</td>
    </tr>
  </tfoot>
</table>
```

**Dica:** Para mesclar linhas ou colunas de uma tabela utilize os atributos `rowspan` e `colspan`.

<br>
