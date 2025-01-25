Passos para Criar um Gerenciador de Catálogos da Netflix

Configuração do Ambiente:

Instale o Azure CLI:
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash

Faça login na sua conta Azure:
az login

Criação das Azure Functions:
Crie um novo projeto de Azure Functions:
func init GerenciadorCatalogos --worker-runtime node

Adicione uma nova função HTTP:
func new --name GetMovies --template "HTTP trigger"

Configuração do Banco de Dados:
Crie uma conta do Cosmos DB:
az cosmosdb create --name minhaContaCosmosDB --resource-group meuGrupoDeRecursos

Crie um banco de dados e um contêiner:
az cosmosdb sql database create --account-name minhaContaCosmosDB --name meuBancoDeDados
az cosmosdb sql container create --account-name minhaContaCosmosDB --database-name meuBancoDeDados --name meuContainer --partition-key-path "/id"

Deploy para o Azure:
Faça o deploy da função para o Azure:
func azure functionapp publish minhaFuncaoApp
