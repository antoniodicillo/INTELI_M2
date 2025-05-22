# As perguntas


### Explique com suas palavras o papel de cada camada da arquitetura MVC usada neste projeto. 
_Como o Model, o Controller e a View interagem entre si?_
Na arquitetura MVC deste projeto de cadastro de alunos, professores e cursos, cada camada tem um papel específico. O Model gerencia a interação com o banco de dados do Supabase, definindo a estrutura das tabelas e executando operações como consultas ou inserções, por exemplo, buscar a lista de alunos matriculados em um curso específico. O Controller recebe as requisições do usuário, valida os dados, solicita ações ao Model e decide qual View deve ser renderizada. A View exibe a interface ao usuário, como páginas HTML com formulários para cadastro ou tabelas que listam professores e alunos, utilizando dados dinâmicos enviados pelo Controller. A interação entre elas ocorre de forma sequencial: o usuário acessa uma rota, o Controller processa a requisição, consulta o Model para persistir os dados no Supabase e, finalmente, direciona a View para exibir uma mensagem de confirmação ou a lista atualizada.

### Como ocorre o envio e o recebimento de dados no formato JSON neste projeto? 
_Cite uma rota que responde em JSON e explique seu funcionamento._  
Para o envio e recebimento de dados em JSON, uma rota como GET /api/alunos pode ser implementada para retornar a lista de alunos em formato JSON. Nessa rota, o Controller consultaria o Model para buscar os registros da tabela alunos no Supabase e responderia com res.json(alunos), permitindo que aplicações front-end ou sistemas externos consumam esses dados de maneira padronizada.

### Qual a importância de usar HTML básico com formulários e tabelas para organizar e manipular dados no navegador? 
_Por que esse tipo de estrutura ainda é útil em projetos back-end com Node.js?_
O uso de HTML básico com formulários e tabelas é essencial para organizar e manipular dados de forma intuitiva, mesmo em projetos back-end. Formulários HTML permitem que usuários cadastrem alunos, vinculem professores a cursos ou insiram notas, enquanto tabelas exibem informações de maneira estruturada. Essa simplicidade facilita a manutenção e a compreensão do sistema, especialmente em etapas iniciais, sem depender de frameworks complexos. Além disso, o HTML básico integra-se facilmente com tecnologias como EJS ou Handlebars para dinamizar conteúdo, mantendo o foco na lógica de negócio gerenciada pelo Node.js e Supabase.