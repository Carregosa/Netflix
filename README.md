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

