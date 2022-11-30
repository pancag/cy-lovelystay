#Language: pt-BR
Feature: Login no site IMDB

Cenario: 1.1_Efetuar Login (Validacoes)
 	Dado Que acesso a homepage do IMDb
	E clico em Sign In
	E clico em Sign in with IMDb
	Quando realizo login inserindo credenciais <email> e <senha>
	Então valido mensagem <mensagem>