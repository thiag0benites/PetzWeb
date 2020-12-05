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
  "name": "Busca loja por Estado/Cidade",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;busca-loja-por-estado/cidade",
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
  "name": "seleciono \"Lojas\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho os campos Fitrar por \u003cFiltro\u003e, \u003cEstado\u003e, \u003cCidade\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "realizo a busca",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "valido as lojas encontradas",
  "keyword": "Entao "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;busca-loja-por-estado/cidade;",
  "rows": [
    {
      "cells": [
        "Filtro",
        "Estado",
        "Cidade"
      ],
      "line": 20,
      "id": "realizar-busca-por-lojas-no-sistema;busca-loja-por-estado/cidade;;1"
    },
    {
      "cells": [
        "\"Estado/Cidade\"",
        "\"SP\"",
        "\"Barueri\""
      ],
      "line": 21,
      "id": "realizar-busca-por-lojas-no-sistema;busca-loja-por-estado/cidade;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 6528514600,
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
  "duration": 5492742400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Busca loja por Estado/Cidade",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;busca-loja-por-estado/cidade;;2",
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
  "name": "seleciono \"Lojas\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "preencho os campos Fitrar por \"Estado/Cidade\", \"SP\", \"Barueri\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "realizo a busca",
  "keyword": "E "
});
formatter.step({
  "line": 17,
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
formatter.result({
  "duration": 7022800,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.com.steps.BuscaLojaSteps.acesso_no_site_da_Petz(BuscaLojaSteps.java:13)\r\n\tat ✽.Quando acesso \"Nossas Lojas\" no site da Petz(BuscaLoja.feature:13)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Lojas",
      "offset": 11
    }
  ],
  "location": "BuscaLojaSteps.seleciono(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuscaLojaSteps.realizo_a_busca()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 680764800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Acessar loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 23,
      "name": "@CT02"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "acesso \"Nossas Lojas\" no site Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "seleciono \"Lojas\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "preencho os campos Filtrar por \u003cFiltro\u003e e \u003cCEP\u003e",
  "keyword": "E "
});
formatter.step({
  "line": 28,
  "name": "valido as lojas encontradas",
  "keyword": "Entao "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep;",
  "rows": [
    {
      "cells": [
        "Filtro",
        "CEP"
      ],
      "line": 31,
      "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep;;1"
    },
    {
      "cells": [
        "\"CEP\"",
        "\"06414007\""
      ],
      "line": 32,
      "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep;;2"
    },
    {
      "cells": [
        "\"CEP\"",
        "\"04347090\""
      ],
      "line": 33,
      "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5567741000,
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
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 5960352500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Acessar loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 23,
      "name": "@CT02"
    },
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "acesso \"Nossas Lojas\" no site Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "seleciono \"Lojas\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "preencho os campos Filtrar por \"CEP\" e \"06414007\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
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
  "location": "BuscaLojaSteps.acesso_no_site_Petz(String)"
});
formatter.result({
  "duration": 324900,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.com.steps.BuscaLojaSteps.acesso_no_site_Petz(BuscaLojaSteps.java:37)\r\n\tat ✽.Quando acesso \"Nossas Lojas\" no site Petz(BuscaLoja.feature:25)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Lojas",
      "offset": 11
    }
  ],
  "location": "BuscaLojaSteps.seleciono(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 745685100,
  "status": "passed"
});
formatter.before({
  "duration": 5471269100,
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
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 5073876800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Acessar loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 23,
      "name": "@CT02"
    },
    {
      "line": 3,
      "name": "@BUSCALOJA"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "acesso \"Nossas Lojas\" no site Petz",
  "keyword": "Quando "
});
formatter.step({
  "line": 26,
  "name": "seleciono \"Lojas\"",
  "keyword": "E "
});
formatter.step({
  "line": 27,
  "name": "preencho os campos Filtrar por \"CEP\" e \"04347090\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 28,
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
  "location": "BuscaLojaSteps.acesso_no_site_Petz(String)"
});
formatter.result({
  "duration": 363500,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.com.steps.BuscaLojaSteps.acesso_no_site_Petz(BuscaLojaSteps.java:37)\r\n\tat ✽.Quando acesso \"Nossas Lojas\" no site Petz(BuscaLoja.feature:25)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "Lojas",
      "offset": 11
    }
  ],
  "location": "BuscaLojaSteps.seleciono(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuscaLojaSteps.valido_as_lojas_encontradas()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 778254100,
  "status": "passed"
});
});