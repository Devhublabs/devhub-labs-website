export const HERO_INTRO_SESSION_KEY = "devhub-labs-hero-intro-complete";

export function hasCompletedHeroIntro() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.sessionStorage.getItem(HERO_INTRO_SESSION_KEY) === "true";
}

export function markHeroIntroComplete() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(HERO_INTRO_SESSION_KEY, "true");
}
