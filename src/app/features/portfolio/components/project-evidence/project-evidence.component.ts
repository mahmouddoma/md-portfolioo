import { IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Locale } from '../../../../core/i18n/locales';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import { ProjectEvidence } from '../../projects';

@Component({
  imports: [NgOptimizedImage],
  selector: 'app-project-evidence',
  styleUrl: './project-evidence.component.scss',
  templateUrl: './project-evidence.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) =>
        config.width && config.width !== 1440
          ? config.src.replace(/\.webp$/, `-${config.width}.webp`)
          : config.src,
    },
  ],
})
export class ProjectEvidenceComponent {
  readonly evidence = input.required<ProjectEvidence>();
  readonly locale = input.required<Locale>();
  readonly sizes = input('(max-width: 45rem) 92vw, 60vw');
  readonly priority = input<boolean>(false);
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
}
