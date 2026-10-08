// Emplacement prévu pour la V4 : branchement de l'IA (Claude).
// Le site fonctionne entièrement sans. Quand l'IA sera branchée, ces fonctions
// appelleront un petit intermédiaire serveur (Netlify/Cloudflare) qui garde la clé API cachée.
// Ne JAMAIS mettre de clé API directement dans ce fichier.
CAP.ia = {
  active: false,

  // pointsFaibles : résultat de CAP.stats.pointsFaibles()
  // Doit renvoyer des questions au même format que dans data/chapitres/*.js
  async genererQuestions(pointsFaibles) { return []; },

  // Explication personnalisée après une erreur.
  async expliquer(question, reponseChoisie) { return null; }
};
