/**
 * ====================================================================
 * CONFIGURAÇÃO CENTRAL — KIT RETA FINAL ENEM 2026
 * ====================================================================
 * Este arquivo centraliza todas as URLs de checkout, preços, dados da
 * oferta, bônus, datas oficiais e rastreamento.
 *
 * Todos os componentes (Hero, Planos, Pop-up de Upgrade, Urgência e FAQ)
 * consomem essas informações automaticamente.
 */

window.PAGE_CONFIG = {
  // ------------------------------------------------------------------
  // 1. INFORMAÇÕES DA OFERTA
  // ------------------------------------------------------------------
  oferta: {
    nome: "Kit Reta Final ENEM 2026",
    ano: 2026,
    totalMapasPremium: 200,
    totalMapasBasico: 100,
    garantiaDias: 7,
    moeda: "BRL",
    formaPagamento: "Pagamento único via Pix ou Cartão",
  },

  // ------------------------------------------------------------------
  // 2. CHECKOUTS (GG CHECKOUT / PLATAFORMA DE PAGAMENTO)
  // Edite as URLs abaixo quando seus links finais estiverem prontos.
  // Os parâmetros UTM da URL da página serão preservados automaticamente!
  // ------------------------------------------------------------------
  checkouts: {
    // Plano Básico (100 mapas mentais) — R$ 9,90
    // Acionado se o lead recusar o upgrade no pop-up:
    basico: "https://ggcheckout.app/checkout/v5/WZz4IWHeUh5x6qGGgNop?plano=basico_990",

    // Plano Premium Direto (200 mapas + 5 bônus) — R$ 19,90
    // Acionado ao clicar diretamente no botão do card Premium:
    premium: "https://ggcheckout.app/checkout/v5/WZz4IWHeUh5x6qGGgNop?plano=premium_1990",

    // Plano Premium com Upgrade Especial — R$ 16,90
    // Acionado quando o lead clica em "SIM, QUERO O PREMIUM POR R$ 16,90" no pop-up:
    premiumUpgrade: "https://ggcheckout.app/checkout/v5/WZz4IWHeUh5x6qGGgNop?plano=upgrade_1690",
  },

  // ------------------------------------------------------------------
  // 3. TABELA DE PREÇOS (CENTRALIZADA)
  // ------------------------------------------------------------------
  precos: {
    basico: {
      valor: 9.90,
      formatado: "R$ 9,90",
      mapas: 100,
      rotulo: "Kit Reta Final Essencial",
    },
    premium: {
      valor: 19.90,
      formatado: "R$ 19,90",
      mapas: 200,
      bonus: 5,
      rotulo: "Kit Reta Final Completo",
    },
    upgrade: {
      valor: 16.90,
      formatado: "R$ 16,90",
      diferenca: "R$ 7,00",
      deValor: "R$ 19,90",
    },
  },

  // ------------------------------------------------------------------
  // 4. DATAS DO ENEM 2026 (HORÁRIO OFICIAL DE BRASÍLIA - UTC-3)
  // ------------------------------------------------------------------
  enem2026: {
    dia1: "2026-11-08T13:00:00-03:00", // Domingo, 08/11/2026 às 13h
    dia2: "2026-11-15T13:00:00-03:00", // Domingo, 15/11/2026 às 13h
    dataExibicaoDia1: "08 de Novembro de 2026",
    dataExibicaoDia2: "15 de Novembro de 2026",
  },

  // ------------------------------------------------------------------
  // 5. RASTREAMENTO META ADS & ANALYTICS
  // ------------------------------------------------------------------
  tracking: {
    metaPixelId: "", // Insira o ID do Pixel Meta aqui se não usar via UTMify
  },
};
