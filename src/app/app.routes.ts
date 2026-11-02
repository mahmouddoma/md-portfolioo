import { Routes } from '@angular/router';
import { LOCALES } from './core/i18n/locales';
import { PORTFOLIO_CONTENT } from './features/portfolio/portfolio.content';
import { CASE_STUDY_PROJECTS } from './features/portfolio/projects';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'en' },
  ...LOCALES.map((locale) => ({
    path: locale.code,
    data: { locale },
    loadComponent: () =>
      import('./features/portfolio/layout/portfolio-shell.component').then(
        (m) => m.PortfolioShellComponent,
      ),
    children: [
      {
        path: '',
        pathMatch: 'full' as const,
        title: PORTFOLIO_CONTENT[locale.code].meta.home.title,
        data: { description: PORTFOLIO_CONTENT[locale.code].meta.home.description },
        loadComponent: () =>
          import('./features/portfolio/pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'work',
        title: PORTFOLIO_CONTENT[locale.code].meta.work.title,
        data: { description: PORTFOLIO_CONTENT[locale.code].meta.work.description },
        loadComponent: () =>
          import('./features/portfolio/pages/work/work.component').then((m) => m.WorkComponent),
      },
      ...CASE_STUDY_PROJECTS.map((project) => ({
        path: `work/${project.id}`,
        title: `${project.copy[locale.code].name} — ${PORTFOLIO_CONTENT[locale.code].name}`,
        data: { project, description: project.copy[locale.code].summary },
        loadComponent: () =>
          import('./features/portfolio/pages/case-study/case-study.component').then(
            (m) => m.CaseStudyComponent,
          ),
      })),
      {
        path: 'about',
        title: PORTFOLIO_CONTENT[locale.code].meta.about.title,
        data: { description: PORTFOLIO_CONTENT[locale.code].meta.about.description },
        loadComponent: () =>
          import('./features/portfolio/pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'not-found',
        title: PORTFOLIO_CONTENT[locale.code].meta.notFound.title,
        data: { description: PORTFOLIO_CONTENT[locale.code].meta.notFound.description },
        loadComponent: () =>
          import('./features/portfolio/pages/not-found/not-found.component').then(
            (m) => m.NotFoundComponent,
          ),
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  })),
  { path: '**', redirectTo: 'en/not-found' },
];
