import {
  DOCUMENT,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Locale, LOCALES } from '../../../core/i18n/locales';
import { PORTFOLIO_CONTENT } from '../portfolio.content';
import { PROFILE } from '../profile';
import { ProfileLinksComponent } from '../components/profile-links/profile-links.component';

@Component({
  selector: 'app-portfolio-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ProfileLinksComponent],
  templateUrl: './portfolio-shell.component.html',
  styleUrl: './portfolio-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(keydown.escape)': 'closeMenu()',
    '(document:keydown.escape)': 'closeMenu()',
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class PortfolioShellComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
  protected readonly menuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly email = PROFILE.email;
  private readonly router = inject(Router);
  private readonly document = inject(DOCUMENT);
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly injector = inject(Injector);
  private readonly navigation = toSignal(
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)),
  );
  protected readonly alternateLocale = computed(() => (this.locale().code === 'en' ? 'ar' : 'en'));
  protected readonly alternateLabel = computed(
    () => LOCALES.find((locale) => locale.code === this.alternateLocale())!.label,
  );
  protected readonly contactUrl = computed(() => {
    this.navigation();
    const tree = this.router.parseUrl(this.router.url);
    tree.fragment = 'contact';
    return tree;
  });
  protected readonly alternateUrl = computed(() => {
    this.navigation();
    const tree = this.router.parseUrl(this.router.url);
    const primary = tree.root.children['primary'];
    if (primary?.segments.length) primary.segments[0].path = this.alternateLocale();
    return tree;
  });

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      window.addEventListener(
        'scroll',
        () => {
          this.isScrolled.set(window.scrollY > 15);
        },
        { passive: true },
      );
    }
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.closeMenu(false);
        if (event.id > 1 && !this.router.parseUrl(event.urlAfterRedirects).fragment) {
          afterNextRender(
            () => this.document.getElementById('main-content')?.focus({ preventScroll: true }),
            { injector: this.injector },
          );
        }
      });
  }

  protected onDocumentClick(event: MouseEvent): void {
    if (!this.menuOpen()) return;
    const path = event.composedPath();
    const headerWrapper = this.elementRef.nativeElement.querySelector('.site-header-wrapper');
    if (headerWrapper && !path.includes(headerWrapper)) {
      this.closeMenu(false);
    }
  }

  protected closeMenu(restoreFocus = true): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      if (restoreFocus) {
        this.document.getElementById('menu-toggle')?.focus();
      }
    }
  }

  protected toggleMenu(): void {
    if (this.menuOpen()) {
      this.closeMenu(true);
    } else {
      this.menuOpen.set(true);
    }
  }

  protected skipToContent(event: Event): void {
    event.preventDefault();
    const main = this.document.getElementById('main-content');
    main?.focus({ preventScroll: true });
    main?.scrollIntoView({ block: 'start' });
  }
}
