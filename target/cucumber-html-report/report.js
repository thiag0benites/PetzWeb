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
  "line": 24,
  "name": "Acessar loja por Cep",
  "description": "",
  "id": "realizar-busca-por-lojas-no-sistema;acessar-loja-por-cep",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 23,
      "name": "@CT03"
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
  "duration": 6426768100,
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
formatter.result({
  "duration": 151817500,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.com.steps.ContextoSteps.que_acesso_o_sistema(ContextoSteps.java:12)\r\n\tat ✽.Dado que acesso o sistema(BuscaLoja.feature:9)\r\n",
  "status": "pending"
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
      "name": "@CT03"
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
  "status": "skipped"
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
  "duration": 729699500,
  "status": "passed"
});
formatter.before({
  "duration": 5522562600,
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
formatter.result({
  "duration": 466200,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat br.com.steps.ContextoSteps.que_acesso_o_sistema(ContextoSteps.java:12)\r\n\tat ✽.Dado que acesso o sistema(BuscaLoja.feature:9)\r\n",
  "status": "pending"
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
      "name": "@CT03"
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
  "status": "skipped"
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
  "duration": 624194800,
  "status": "passed"
});
});