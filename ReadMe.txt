Configurações necessárias para rodar a aplicação: 

- Nodejs devidamente instalado (v18.16.0 ou maior) 
- VS Code devidamente instalado (versão mais recente) 
- Instalação do Yarn (que é um package manager mais poderoso/rápido/performático comparado ao npm nativo do Nodejs, ver: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)  

- Extensões do VS Code recomendadas: 
	- Dracula Official (Dracula Theme); 
	- Auto Rename Tag (Jun Han); 
	- Color Highlight (Sregii Naumov);
	- Rainbow Brackets (2gua); 
	- Material Icon Theme (Philipp Kief); 
	- Svg Preview (Simon Siefke);
	- vscode-styled-components (Julien Poissonnier);

- Quanto aos styles components, é necessário instalar o pacote (via comando 'npm install styled-components' ou 'yarn add styled-components' - o comando deve ser executado na raiz do projeto) e depois é recomendada a instalação da extensão 'vscode-styled-components' no VS Code para uma experiência mais agradável durante o desenvolvimento; 

- IMPORTANTE: após rodar o comando de instalação do pacote styled-components, é necessário executar o comando para instalar o pacote de tipagens typescript do styled-components ('npm install @types/styles-components' ou 'yarn add @types/styles-components' - o comando deve ser executado na raiz do projeto). Isso caso esse pacote não tenha sido instalado após rodar o comando 'npm install styled-components'.

- Quanto ao 'Material Icon Theme', é possível customizar pastas alterando o arquivo 'settings.json' do VS Code, incluindo as linhas: 
	- '"workbench.iconTheme: "material-icon-theme"' Para ativar a extensão;
	-  "material-icon-theme.folders.associations": {
		"nomedapasta": "materialIconName"
	} -> isso permite a customização dos ícones das pastas; 


- Fonte 'Fira Code' melhora a visualização/leitura do código (https://github.com/tonsky/FiraCode). Para instalar, basta copiar e colar os arquivos de 
fonte baixados dentro do SO (no caso do windows, Painel de Controle -> Aparência e Personalização -> Fontes). Feito isso basta alterar a fonte do VS Code para Fira Code no arquivo 'settings.json' (incluindo a linha '"editor.fontFamily":"Fira Code"') do VS Code.

- Esse projeto foi criado usando o comando 'npx create-react-app minha_carteira --template typescript' 

- Esse projeto usa uma ferramenta do React (um component pronto) chamada 'react-switch' que é instalada executando o comando 'npm install react-switch' ou 'yarn add react-switch' (o comando deve ser executado na raiz do projeto)

- Esse projeto usa ícones do react-icons, que são instalados ao executar o comando 'npm install react-icons' ou 'yarn add react-icons' (o comando deve ser executado na raiz do projeto)

- Esse projeto usa a ferramenta 'react-router-dom' que possibilita a navegação entre as páginas alterando a url. O pacote é instalado no projeto ao executar o comando 'npm install react-router-dom' ou 'yarn add react-router-dom'. O comando deve ser executado na raiz do projeto 

- Esse projeto tentou usar o pacote 'uuidv4' para gerar ids únicos para os components. O pacote é instalado com o comando 'npm install uuidv4' ou 'yarn add uuidv4' e o uuid deve ser gerado com a chamada do método 'uuid()' dentro do código. PORÉM não funcionou e então foi adotado o uso do pacote 'react-uuid' que pode ser instalado executando o comando 'npm install react-uuid' ou 'yarn add react-uuid'. Em seguida o pacote 'uuidv4' foi desinstalado/removido executando o comando 'npm uninstall uuidv4' ou 'yarn remove uuidv4'

- Esse projeto usa uma ferramenta oficial do React chamada 'React CountUp' que 
cria um efeito visual agradável de quantias numéricas carregando em tempo real e também facilita a formatação das quantias numéricas. Para instalar o pacote no projeto é necessário rodar o comando 'npm i react-countup' ou 'yarn add react-countup' 
 
- Esse projeto usa uma ferramenta para geração/criação de gráficos (charts) chamada "Recharts" (ver em 'https://recharts.org/en-US') para melhor visualização de dados, que pode ser instalada via cli do node executando comando 'npm install recharts' ou 'yarn add recharts'. Caso a IDE não reconheça ou não encontre a importação do Recharts, é necessário instalar a tipagem do Recharts para typescript executando o comando 'npm install @types/recharts' ou 'yarn add @types/recharts' na cli do npm 

- Durante o desenvolvimento desse projeto foi usada e recomenda-se o uso da ferramenta Responsively cujo download está disponível em: 'https://responsively.app/download'. Após o download, é necessário executar o arquivo e realizar a instalação. Essa ferramenta facilita o desenvolvimento do front-end de aplicações web responsivas porque fornece uma visualização simultânea em vários tamanhos de display diferentes. 