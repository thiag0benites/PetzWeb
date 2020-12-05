$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Menu.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "#Autor: thi.fam2014@gmail.com"
    }
  ],
  "line": 4,
  "name": "Testes na funcionalidade de navegar pelos itens do sistema",
  "description": "\tEu como usuario \r\n\tQuero navegar pelos itens do menu",
  "id": "testes-na-funcionalidade-de-navegar-pelos-itens-do-sistema",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@SMOKETEST"
    }
  ]
});
formatter.before({
  "duration": 6481168600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Abrir o site",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acesso o sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContextoSteps.que_acesso_o_sistema()"
});
formatter.write("Passou! Acesso ao blog realizado!");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 7105388800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Teste de fumaça navegação menu",
  "description": "",
  "id": "testes-na-funcionalidade-de-navegar-pelos-itens-do-sistema;teste-de-fumaça-navegação-menu",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 12,
  "name": "seleciono e valido o item \u003citemMenu\u003e do menu",
  "rows": [
    {
      "cells": [
        "Adoção"
      ],
      "line": 13
    },
    {
      "cells": [
        "Aquário"
      ],
      "line": 14
    },
    {
      "cells": [
        "Cães"
      ],
      "line": 15
    },
    {
      "cells": [
        "Gatos"
      ],
      "line": 16
    },
    {
      "cells": [
        "Espécies"
      ],
      "line": 17
    },
    {
      "cells": [
        "Bem-Estar"
      ],
      "line": 18
    }
  ],
  "keyword": "Quando "
});
formatter.match({
  "location": "MenuSteps.seleciono_e_valido_o_item_itemMenu_do_menu(DataTable)"
});
formatter.write("Passou! Item ADOÇÃO foi selecionado!");
formatter.embedding("image/png", "embedded1.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item ADOÇÃO do menu");
formatter.embedding("image/png", "embedded2.png");
formatter.write("Passou! Item AQUÁRIO foi selecionado!");
formatter.embedding("image/png", "embedded3.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item AQUÁRIO do menu");
formatter.embedding("image/png", "embedded4.png");
formatter.write("Passou! Item CÃES foi selecionado!");
formatter.embedding("image/png", "embedded5.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item CÃES do menu");
formatter.embedding("image/png", "embedded6.png");
formatter.write("Passou! Item GATOS foi selecionado!");
formatter.embedding("image/png", "embedded7.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item GATOS do menu");
formatter.embedding("image/png", "embedded8.png");
formatter.write("Passou! Item ESPÉCIES foi selecionado!");
formatter.embedding("image/png", "embedded9.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item ESPÉCIES do menu");
formatter.embedding("image/png", "embedded10.png");
formatter.write("Passou! Item BEM-ESTAR foi selecionado!");
formatter.embedding("image/png", "embedded11.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item BEM-ESTAR do menu");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 28136044500,
  "status": "passed"
});
formatter.after({
  "duration": 1166497000,
  "status": "passed"
});
});