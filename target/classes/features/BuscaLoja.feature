#language: pt
#Autor: thi.fam2014@gmail.com
@BUSCALOJA
Funcionalidade: Realizar busca por lojas no sistema
    Eu como usuario 
    Quero localizar uma loja no sistema

  Contexto: Abrir o site
    Dado que acesso o sistema

  @CT01
  Esquema do Cenario: CT01:Busca loja por Estado/Cidade
    Quando acesso "Nossas Lojas" no site da Petz
    E preencho os campos Fitrar por <Filtro>, <Estado>, <Cidade>
    Entao valido as lojas encontradas

    Exemplos: 
      | Filtro          | Estado | Cidade    |
      | "Estado/Cidade" | "SP"   | "Barueri" |

  @CT02
  Esquema do Cenario: CT02:Busca loja por CEP
    Quando acesso "Nossas Lojas" no site da Petz
    E preencho os campos Filtrar por <Filtro> e <CEP>
    Entao valido as lojas encontradas

    Exemplos: 
      | Filtro | CEP        |
      | "CEP"  | "06414007" |

  @CT03
  Esquema do Cenario: CT03:Busca e seleciona loja por Cep
    Quando acesso "Nossas Lojas" no site da Petz
    E preencho os campos Filtrar por <Filtro> e <CEP>
    E valido as lojas encontradas
    Entao acesso e valido a loja <Loja>

    Exemplos: 
      | Filtro | CEP        | Loja              |
      | "CEP"  | "06414007" | "Petz Alphaville" |
      | "CEP"  | "04347090" | "Petz Itaim"      |
