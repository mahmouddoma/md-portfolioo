import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import {
  provideRouter,
  Router,
  TitleStrategy,
  UrlSerializer,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { LocaleTitleStrategy } from '../../core/i18n/locale-title.strategy';
import { PORTFOLIO_CONTENT } from './portfolio.content';
import { NormalizedUrlSerializer } from '../../core/routing/normalized-url.serializer';

describe('Bilingual portfolio', () => {
  let harness: RouterTestingHarness;
  let document: Document;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideRouter(
          routes,
          withComponentInputBinding(),
          withRouterConfig({ paramsInheritanceStrategy: 'always' }),
        ),
        { provide: TitleStrategy, useClass: LocaleTitleStrategy },
        { provide: UrlSerializer, useClass: NormalizedUrlSerializer },
      ],
    });
    document = TestBed.inject(DOCUMENT);
    harness = await RouterTestingHarness.create();
  });

  for (const code of ['en', 'ar'] as const) {
    it(`renders the complete ${code} home with document metadata and contact`, async () => {
      await harness.navigateByUrl(`/${code}`);
      expect(document.documentElement.lang).toBe(code);
      expect(document.documentElement.dir).toBe(code === 'ar' ? 'rtl' : 'ltr');
      expect(document.title).toBe(PORTFOLIO_CONTENT[code].meta.home.title);
      const root = harness.routeNativeElement!;
      expect(root.querySelector('h1')?.textContent).toContain(PORTFOLIO_CONTENT[code].hero[0]);
      expect(root.querySelector('a[href="mailto:devdoma2002@gmail.com"]')).toBeTruthy();
      const resume = root.querySelector<HTMLAnchorElement>('a[download]')!;
      expect(resume.getAttribute('href')).toBe('documents/mahmoud-doma-cv.pdf');
      expect(resume.textContent?.trim()).toBe(PORTFOLIO_CONTENT[code].resources.resume);
      expect(resume.hreflang).toBe('en');
      expect(root.querySelector('a[href="https://github.com/mahmouddoma"]')).toBeTruthy();
      expect(
        root.querySelector('a[href="https://www.linkedin.com/in/mahmoud-doma-4520a222a"]'),
      ).toBeTruthy();
      expect(document.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(
        PORTFOLIO_CONTENT[code].meta.home.description,
      );
    });

    it(`renders the CV-backed background on /${code}/about`, async () => {
      await harness.navigateByUrl(`/${code}/about`);
      const root = harness.routeNativeElement!;
      expect(root.textContent).toContain(PORTFOLIO_CONTENT[code].expertiseTitle);
      expect(root.textContent).toContain(PORTFOLIO_CONTENT[code].learningTitle);
      expect(root.textContent).toContain('MCIT');
      expect(root.textContent).toContain('SoloLearn');
      for (const language of PORTFOLIO_CONTENT[code].languages) {
        expect(root.textContent).toContain(language.name);
        expect(root.textContent).toContain(language.level);
      }
      expect(root.querySelector('app-about a[download]')).toBeTruthy();
    });

    for (const project of ['traffic', 'devora', 'customer-survey']) {
      it(`directly loads /${code}/work/${project} with localized case content`, async () => {
        await harness.navigateByUrl(`/${code}/work/${project}`);
        const root = harness.routeNativeElement!;
        expect(root.querySelectorAll('.case-sections section').length).toBeGreaterThanOrEqual(3);
        expect(root.querySelector('app-case-study img')?.getAttribute('alt')).toBeTruthy();
        expect(root.querySelector('app-case-study .capture-link')?.getAttribute('href')).toBe(
          `images/projects/${project}/interface.webp`,
        );
        expect(document.documentElement.lang).toBe(code);
        if (project === 'traffic' || project === 'customer-survey') {
          expect(root.textContent).toContain(PORTFOLIO_CONTENT[code].employerNote);
          expect(root.querySelector('.case-facts a[rel="external"]')).toBeNull();
        }
      });
    }
  }

  it('preserves the equivalent case, query string and anchor when switching languages', async () => {
    await harness.navigateByUrl('/en/work/traffic?source=review#contact');
    const link = harness.routeNativeElement!.querySelector<HTMLAnchorElement>('a[hreflang="ar"]')!;
    expect(link.getAttribute('href')).toBe('/ar/work/traffic?source=review#contact');
    link.click();
    await harness.fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/ar/work/traffic?source=review#contact');
    expect(document.documentElement.dir).toBe('rtl');
    expect(harness.routeNativeElement!.querySelector('h1')?.textContent).toBe('نظام إدارة المرور');
  });

  it('opens and closes the menu with Escape and closes it after navigation', async () => {
    await harness.navigateByUrl('/en');
    const button = harness.routeNativeElement!.querySelector<HTMLButtonElement>('#menu-toggle')!;
    button.click();
    await harness.fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    button.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await harness.fixture.whenStable();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    await harness.navigateByUrl('/en/about');
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('lists ten real projects and keeps contact links functional', async () => {
    await harness.navigateByUrl('/en/work');
    const root = harness.routeNativeElement!;
    expect(root.querySelectorAll('.engineering-spread')).toHaveLength(3);
    expect(root.querySelectorAll('.enterprise-item')).toHaveLength(3);
    expect(root.querySelectorAll('.independent-project')).toHaveLength(4);
    const entries = root.querySelectorAll('[data-project]');
    expect(entries).toHaveLength(10);
    expect(new Set(Array.from(entries, (entry) => entry.getAttribute('data-project'))).size).toBe(
      10,
    );
    expect(root.querySelectorAll('app-work img')).toHaveLength(10);
    for (const entry of entries) {
      expect(entry.querySelector('img')?.getAttribute('alt')).toBeTruthy();
      expect(entry.querySelector('.capture-link')?.getAttribute('href')).toMatch(
        /^images\/projects\/.+\/interface\.webp$/,
      );
    }
    expect(root.querySelector('.scope-diagram')).toBeNull();
    expect(
      root.querySelector('[data-project="customer-survey"] details')?.hasAttribute('open'),
    ).toBe(true);
    expect(root.querySelector('[data-project="customer-survey"] img')).toBeTruthy();
    expect(
      root.querySelector('[data-project="karim-dawod"] a[rel="external"]')?.getAttribute('href'),
    ).toBe('https://karimdawodgroup.com');
    expect(root.querySelector('[data-project="el-mostafa"] a[rel="external"]')).toBeNull();
    expect(root.querySelector('.site-navigation a[href$="#contact"]')?.getAttribute('href')).toBe(
      '/en/work#contact',
    );
  });

  for (const [url, expected] of [
    ['/', '/en'],
    ['/ar/unknown', '/ar/not-found'],
    ['/en/work/unknown', '/en/not-found'],
    ['/fr', '/en/not-found'],
    ['/ar/work/devora/', '/ar/work/devora'],
  ]) {
    it(`handles ${url} safely`, async () => {
      await harness.navigateByUrl(url);
      expect(TestBed.inject(Router).url).toBe(expected);
      expect(harness.routeNativeElement!.querySelector('h1')).toBeTruthy();
    });
  }
});
