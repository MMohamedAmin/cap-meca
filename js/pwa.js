// Installation sur le téléphone (PWA) et fonctionnement hors ligne (sw.js).
// Ne s'active que si le site est servi en http(s) : en double-cliquant sur index.html (file://),
// le navigateur refuse les service workers, et le site marche déjà sans connexion.
CAP.pwa = (function () {
  const servi = location.protocol === 'https:' || location.protocol === 'http:';
  let demande = null; // événement « beforeinstallprompt » mis de côté (Chrome, Edge, Android)

  if (servi) {
    const lien = document.createElement('link');
    lien.rel = 'manifest';
    lien.href = 'manifest.webmanifest';
    document.head.appendChild(lien);

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(() => { /* le site marche quand même */ });
      });
    }
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      demande = e;
      window.dispatchEvent(new Event('capmeca:installable'));
    });
    window.addEventListener('appinstalled', () => { demande = null; });
  }

  function dejaInstalle() {
    return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
  }

  return {
    // L'installation a un sens : site en ligne et pas déjà ouvert comme une appli.
    possible() { return servi && !dejaInstalle(); },
    // Le navigateur propose son bouton d'installation (pas sur iPhone).
    boutonDisponible() { return !!demande; },
    async installer() {
      if (!demande) return false;
      demande.prompt();
      const choix = await demande.userChoice;
      demande = null;
      return choix.outcome === 'accepted';
    }
  };
})();
