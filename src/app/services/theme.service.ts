import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.loadTheme(); // Chargez le thème lors de l'initialisation du service
  }

  setTheme(theme: 'dark' | 'light'): void {
    this.renderer.setAttribute(document.body, 'data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme(): void {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }

  isDarkMode(): boolean {
    return this.getTheme() === 'dark';
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem('theme');
    // Utilisez une assertion de type pour s'assurer que storedTheme est 'dark' | 'light'
    const theme =
      storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light'; // Utilisez 'light' comme valeur par défaut
    this.setTheme(theme);
  }

  private getTheme(): 'dark' | 'light' {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'light';
  }
}
