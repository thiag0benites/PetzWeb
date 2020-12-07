$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuscaLoja.feature");
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
  "name": "Realizar busca por lojas no sistema",
  "description": "  Eu como usuario \r\n  Quero localizar uma loja no sistema",
  "id": "realizar-busca-por-lojas-no-sistema",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.scenarioOutline({
  "line": 12,
  "name": "CT01:Busca loja por Estado/Cidade",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct01:busca-loja-por-estado/cidade",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@CT01"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "preencho os campos Fitrar por \u003cFiltro\u003e, \u003cEstado\u003e, \u003cCidade\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "valido as lojas encontradas",
  "keyword": "Entao "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct01:busca-loja-por-estado/cidade;",
  "rows": [
    {
      "cells": [
        "Filtro",
        "Estado",
        "Cidade"
      ],
      "line": 18,
      "id": "realizar-busca-por-lojas-no-sistema;ct01:busca-loja-por-estado/cidade;;1"
    },
    {
      "cells": [
        "\"Estado/Cidade\"",
        "\"SP\"",
        "\"Barueri\""
      ],
      "line": 19,
      "id": "realizar-busca-por-lojas-no-sistema;ct01:busca-loja-por-estado/cidade;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 6223721000,
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
  "duration": 2671975900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "CT01:Busca loja por Estado/Cidade",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct01:busca-loja-por-estado/cidade;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 11,
      "name": "@CT01"
    },
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "preencho os campos Fitrar por \"Estado/Cidade\", \"SP\", \"Barueri\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "valido as lojas encontradas",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Nossas Lojas",
      "offset": 8
    }
  ],
  "location": "BuscaLojaSteps.acesso_no_site_da_Petz(String)"
});
formatter.write("Passou! Item Nossas Lojas foi selecionado!");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 3387074000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Estado/Cidade",
      "offset": 31
    },
    {
      "val": "SP",
      "offset": 48
    },
    {
      "val": "Barueri",
      "offset": 54
    }
  ],
  "location": "BuscaLojaSteps.preencho_os_campos_Fitrar_por(String,String,String)"
});
formatter.write("Passou! Os campos Estado e Cidade foram preenchidos: SP - Barueri");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 9431805900,
  "status": "passed"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.write("Passou! A busca retornou 2 lojas");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 2577041500,
  "status": "passed"
});
formatter.after({
  "duration": 672081100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "CT02:Busca loja por CEP",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct02:busca-loja-por-cep",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@CT02"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "preencho os campos Filtrar por \u003cFiltro\u003e e \u003cCEP\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "valido as lojas encontradas",
  "keyword": "Entao "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct02:busca-loja-por-cep;",
  "rows": [
    {
      "cells": [
        "Filtro",
        "CEP"
      ],
      "line": 28,
      "id": "realizar-busca-por-lojas-no-sistema;ct02:busca-loja-por-cep;;1"
    },
    {
      "cells": [
        "\"CEP\"",
        "\"06414007\""
      ],
      "line": 29,
      "id": "realizar-busca-por-lojas-no-sistema;ct02:busca-loja-por-cep;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5245010400,
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
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 2524899500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "CT02:Busca loja por CEP",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct02:busca-loja-por-cep;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 21,
      "name": "@CT02"
    },
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 24,
  "name": "preencho os campos Filtrar por \"CEP\" e \"06414007\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "valido as lojas encontradas",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Nossas Lojas",
      "offset": 8
    }
  ],
  "location": "BuscaLojaSteps.acesso_no_site_da_Petz(String)"
});
formatter.write("Passou! Item Nossas Lojas foi selecionado!");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 4153042900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP",
      "offset": 32
    },
    {
      "val": "06414007",
      "offset": 40
    }
  ],
  "location": "BuscaLojaSteps.preencho_os_campos_Filtrar_por_e(String,String)"
});
formatter.write("Passou! O campo CEP foi preenchido: 06414007");
formatter.embedding("image/png", "embedded6.png");
formatter.result({
  "duration": 1866639200,
  "status": "passed"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.write("Passou! A busca retornou 6 lojas");
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 2537716900,
  "status": "passed"
});
formatter.after({
  "duration": 668698300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 32,
  "name": "CT03:Busca e seleciona loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 31,
      "name": "@CT03"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "preencho os campos Filtrar por \u003cFiltro\u003e e \u003cCEP\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "valido as lojas encontradas",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "acesso e valido a loja \u003cLoja\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep;",
  "rows": [
    {
      "cells": [
        "Filtro",
        "CEP",
        "Loja"
      ],
      "line": 39,
      "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep;;1"
    },
    {
      "cells": [
        "\"CEP\"",
        "\"06414007\"",
        "\"Petz Alphaville\""
      ],
      "line": 40,
      "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep;;2"
    },
    {
      "cells": [
        "\"CEP\"",
        "\"04347090\"",
        "\"Petz Itaim\""
      ],
      "line": 41,
      "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5374503600,
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
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 2764886800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "CT03:Busca e seleciona loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 31,
      "name": "@CT03"
    },
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "preencho os campos Filtrar por \"CEP\" e \"06414007\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "valido as lojas encontradas",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "acesso e valido a loja \"Petz Alphaville\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Nossas Lojas",
      "offset": 8
    }
  ],
  "location": "BuscaLojaSteps.acesso_no_site_da_Petz(String)"
});
formatter.write("Passou! Item Nossas Lojas foi selecionado!");
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 5850146800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP",
      "offset": 32
    },
    {
      "val": "06414007",
      "offset": 40
    }
  ],
  "location": "BuscaLojaSteps.preencho_os_campos_Filtrar_por_e(String,String)"
});
formatter.write("Passou! O campo CEP foi preenchido: 06414007");
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 573446000,
  "status": "passed"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.write("Passou! A busca retornou 6 lojas");
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 2543229800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petz Alphaville",
      "offset": 24
    }
  ],
  "location": "BuscaLojaSteps.acesso_e_valido_a_loja(String)"
});
formatter.write("Passou! A loja Petz Alphaville foi selecionada!");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 1824038800,
  "status": "passed"
});
formatter.after({
  "duration": 694036600,
  "status": "passed"
});
formatter.before({
  "duration": 5327926200,
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
formatter.embedding("image/png", "embedded13.png");
formatter.result({
  "duration": 3392913500,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "CT03:Busca e seleciona loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;ct03:busca-e-seleciona-loja-por-cep;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 31,
      "name": "@CT03"
    },
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "acesso \"Nossas Lojas\" no site da Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "preencho os campos Filtrar por \"CEP\" e \"04347090\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 35,
  "name": "valido as lojas encontradas",
  "keyword": "E "
});
formatter.step({
  "line": 36,
  "name": "acesso e valido a loja \"Petz Itaim\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "Nossas Lojas",
      "offset": 8
    }
  ],
  "location": "BuscaLojaSteps.acesso_no_site_da_Petz(String)"
});
formatter.write("Passou! Item Nossas Lojas foi selecionado!");
formatter.embedding("image/png", "embedded14.png");
formatter.result({
  "duration": 5462107800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP",
      "offset": 32
    },
    {
      "val": "04347090",
      "offset": 40
    }
  ],
  "location": "BuscaLojaSteps.preencho_os_campos_Filtrar_por_e(String,String)"
});
formatter.write("Passou! O campo CEP foi preenchido: 04347090");
formatter.embedding("image/png", "embedded15.png");
formatter.result({
  "duration": 626169800,
  "status": "passed"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.write("Passou! A busca retornou 6 lojas");
formatter.embedding("image/png", "embedded16.png");
formatter.result({
  "duration": 13730833300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Petz Itaim",
      "offset": 24
    }
  ],
  "location": "BuscaLojaSteps.acesso_e_valido_a_loja(String)"
});
formatter.write("Passou! A loja Petz Itaim foi selecionada!");
formatter.embedding("image/png", "embedded17.png");
formatter.result({
  "duration": 2465797300,
  "status": "passed"
});
formatter.after({
  "duration": 667921600,
  "status": "passed"
});
formatter.uri("Menu.feature");
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
  "duration": 5317105900,
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
formatter.embedding("image/png", "embedded18.png");
formatter.result({
  "duration": 3067946900,
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
formatter.embedding("image/png", "embedded19.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item ADOÇÃO do menu");
formatter.embedding("image/png", "embedded20.png");
formatter.write("Passou! Item AQUÁRIO foi selecionado!");
formatter.embedding("image/png", "embedded21.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item AQUÁRIO do menu");
formatter.embedding("image/png", "embedded22.png");
formatter.write("Passou! Item CÃES foi selecionado!");
formatter.embedding("image/png", "embedded23.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item CÃES do menu");
formatter.embedding("image/png", "embedded24.png");
formatter.write("Passou! Item GATOS foi selecionado!");
formatter.embedding("image/png", "embedded25.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item GATOS do menu");
formatter.embedding("image/png", "embedded26.png");
formatter.write("Passou! Item ESPÉCIES foi selecionado!");
formatter.embedding("image/png", "embedded27.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item ESPÉCIES do menu");
formatter.embedding("image/png", "embedded28.png");
formatter.write("Passou! Item BEM-ESTAR foi selecionado!");
formatter.embedding("image/png", "embedded29.png");
formatter.write("Passou! Foram carregados 10 artigos na primeira página do item BEM-ESTAR do menu");
formatter.embedding("image/png", "embedded30.png");
formatter.result({
  "duration": 22038495700,
  "status": "passed"
});
formatter.after({
  "duration": 639089400,
  "status": "passed"
});
});