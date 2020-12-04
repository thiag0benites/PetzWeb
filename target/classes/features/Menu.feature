#language: pt
#Autor: thi.fam2014@gmail.com
@SMOKETEST-MENU
Funcionalidade: Testes na funcionalidade de navegar pelos itens do sistema
  	Eu como usuario 
  	Quero navegar pelos itens do menu

  Contexto: Abrir o site
    Dado que acesso o sistema

  @CT01
  Esquema do Cenario: Navegar pelo sistema
    Quando seleciono o item <Item>
    Entao valido o resultado da pesquisa

    Exemplos: 
      | Item                |
      | "Adoção"            |
      | "Aquário"           |
      | "Cães"              |
      | "Gatos"             |
      | "Espécies"          |
      | "Bem-Estar"         |
      | "Eventos"           |
      | "Posse responsável" |
