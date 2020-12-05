#language: pt
#Autor: thi.fam2014@gmail.com
@SMOKETEST
Funcionalidade: Testes na funcionalidade de navegar pelos itens do sistema
  	Eu como usuario 
  	Quero navegar pelos itens do menu

  Contexto: Abrir o site
    Dado que acesso o sistema

  Cenario: Teste de fumaça navegação menu
    Quando seleciono e valido o item <itemMenu> do menu
      | Adoção    |
      | Aquário   |
      | Cães      |
      | Gatos     |
      | Espécies  |
      | Bem-Estar |
