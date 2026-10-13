// ============================================================
//  DOCK TRACKER v8.0 — CONFIG (GitHub Pages)
// ============================================================
window.DT_CONFIG = {
    // Caminho do JSON de dados (relativo ao index.html)
    DATA_URL: 'data/latest.json',

    // Caminho do JSON de campos manuais (DOCA/Login/Obs/Turno/Perfil/Lado +
    // listas de Docas/Logins por FC) sincronizados entre computadores via GitHub
    MANUAL_URL: 'data/manual.json',
    MANUAL_PATH: 'data/manual.json',
    GH_OWNER: 'pedrohenrique-ops87',
    GH_REPO: 'dock-tracker',
    GH_BRANCH: 'main',

    // FC padrão
    FC_DEFAULT: 'REC1',

    // Auto-refresh a cada 5 min
    REFRESH_MS: 5 * 60 * 1000,

    // Versão
    VERSION: '8.1',
};
