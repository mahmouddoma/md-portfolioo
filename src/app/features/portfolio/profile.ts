export type ProfileResourceId = 'resume' | 'linkedin' | 'github';

interface ProfileResource {
  readonly id: ProfileResourceId;
  readonly href: string;
  readonly download?: string;
  readonly language?: string;
  readonly type?: string;
}

/** Contact and profile URLs extracted from the supplied 2026 CV, not inferred. */
export const PROFILE: {
  readonly email: string;
  readonly resources: readonly ProfileResource[];
} = {
  email: 'devdoma2002@gmail.com',
  resources: [
    {
      id: 'resume',
      href: 'documents/mahmoud-doma-cv.pdf',
      download: 'Mahmoud-Doma-CV-2026.pdf',
      language: 'en',
      type: 'application/pdf',
    },
    { id: 'linkedin', href: 'https://www.linkedin.com/in/mahmoud-doma-4520a222a' },
    { id: 'github', href: 'https://github.com/mahmouddoma' },
  ],
};
