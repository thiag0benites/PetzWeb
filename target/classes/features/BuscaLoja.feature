#language: pt
#Autor: thi.fam2014@gmail.com
@BUSCALOJA
Funcionalidade: Realizar busca por lojas no sistema
    Eu como usuario 
    Quero localizar uma loja no sistema

  Contexto: Abrir o site
    Dado que acesso o sistema

  @CT01
  Esquema do Cenario: Busca loja por Estado/Cidade
    Quando acesso "Nossas Lojas" no site da Petz
    E preencho os campos Fitrar por <Filtro>, <Estado>, <Cidade>
    E realizo a busca
    Entao valido as lojas encontradas

    Exemplos: 
      | Filtro          | Estado | Cidade    |
      | "Estado/Cidade" | "SP"   | "Barueri" |

  @CT02
  Esquema do Cenario: Acessar loja por Cep
    Quando acesso "Nossas Lojas" no site Petz
    E preencho os campos Filtrar por <Filtro> e <CEP>
    Entao valido as lojas encontradas

    Exemplos: 
      | Filtro | CEP        |
      | "CEP"  | "06414007" |
      | "CEP"  | "04347090" |
