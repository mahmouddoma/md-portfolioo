import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../core/i18n/locales';
import { ScrollRevealDirective } from '../../../../core/animation/scroll-reveal.directive';
import { PORTFOLIO_CONTENT } from '../../portfolio.content';
import {
  SELECTED_ENGINEERING_PROJECTS,
  MORE_ENTERPRISE_PROJECTS,
  INDEPENDENT_PROJECTS,
  CASE_STUDY_PROJECTS,
} from '../../projects';
import { ProjectEvidenceComponent } from '../../components/project-evidence/project-evidence.component';

@Component({
  selector: 'app-work',
  imports: [RouterLink, ProjectEvidenceComponent, ScrollRevealDirective],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkComponent {
  readonly locale = input.required<Locale>();
  protected readonly content = computed(() => PORTFOLIO_CONTENT[this.locale().code]);
  protected readonly selectedProjects = SELECTED_ENGINEERING_PROJECTS;
  protected readonly moreEnterpriseProjects = MORE_ENTERPRISE_PROJECTS;
  protected readonly independentProjects = INDEPENDENT_PROJECTS;
  protected readonly caseStudyIds = new Set(CASE_STUDY_PROJECTS.map((p) => p.id));
}
