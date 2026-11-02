# Project and asset manifest

## Factual sources

Professional content comes from the full-build brief and the supplied two-page `Mahmoud_Doma_Angular_CV_2026_Updated.pdf`. The unchanged CV is served at `public/documents/mahmoud-doma-cv.pdf`. Actual project captures were acquired following the user’s request on 2026-11-02. No generated screenshots, invented product UI, stock filler, mock devices, professional metrics or private demo URLs are used.

## Real interface evidence now included

| Project           | Source                                                                        | Published asset                                     | Capture notes                                                                                                                                                                                                                                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DEVORA            | `https://devora-sa.com/`                                                      | `public/images/projects/devora/interface.webp`      | Actual homepage excerpt after the intro animation. The frame ends before marketing statistic tiles; those figures are not presented as Mahmoud’s achievements.                                                                                                                                                                         |
| Avokatoo          | `https://avokatoo.com/lawyers`                                                | `public/images/projects/avokatoo/interface.webp`    | Actual Arabic search interface. Optional cookies were rejected; the frame excludes lawyer profiles and their personal details.                                                                                                                                                                                                         |
| Karim Dawod Group | `https://karimdawodgroup.com/`                                                | `public/images/projects/karim-dawod/interface.webp` | Actual public homepage. Unlike the earlier text-only web check, the real browser loaded this site successfully, so its live link is now included.                                                                                                                                                                                      |
| El Mostafa        | `https://elmostafafruits.com/`                                                | `public/images/projects/el-mostafa/interface.webp`  | Actual public homepage. Standard HTTPS navigation failed with `ERR_CERT_DATE_INVALID`. A separate read-only, unauthenticated capture context allowed inspection despite the certificate error. No exception is configured in the portfolio; its live link remains omitted until HTTPS is fixed.                                        |
| NPark             | Local `C:/Users/win10/Downloads/NPark_User_Manual_EN_Refactored.pdf`, page 12 | `public/images/projects/npark/interface.webp`       | Original embedded configuration screenshot, extracted directly from the 14-page user manual. Contains no user identities, credentials, addresses or financial records. No report, subscription, login or operational-data screenshot is published. Attributed to NileTronix and labeled as a manual extract, not a fresh live capture. |

Each image has 640px, 960px and 1440px WebP versions. The main file is the 1440px version; alternatives end in `-640` and `-960`. All three sizes are referenced by the shared Angular image loader and width-based srcset. Embedded dimensions reserve layout space; below-the-fold images load lazily. Sources are self-hosted, so the portfolio makes no runtime request to the original project sites. Full-size evidence opens as an ordinary image link.

Original captures and the PDF extraction remain local QA artifacts under `%TEMP%/doma-portfolio-validation/project-captures` and `npark-manual`. Only the reviewed compressed derivatives are copied into public assets. Compression/resizing and the explicit homepage excerpts preserve actual captured pixels; nothing is synthesized.

## Local NileTronix application captures — acquired 2026-11-02

The user explicitly directed opening the projects already on this device. The repositories were located under C:/Users/win10/OneDrive/Desktop. Their actual existing browser builds were served on loopback-only temporary ports; Traffic was run through its installed Angular CLI. No source application code, authentication guards, credentials or business records were modified.

| Project            | Local project           | Captured screen                                                                                                                                                                                                                                                         | Published asset                                       |
| ------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Customer Survey    | cutomer-feedback-survey | Actual /auth/login with empty fields. No authenticated CSAT dashboard is claimed.                                                                                                                                                                                       | public/images/projects/customer-survey/interface.webp |
| Traffic Management | ModernAngularApi        | Actual interactive /map view showing Cairo road network coordinates, signal cabinet marker management, and road routing controls. | public/images/projects/traffic/interface.webp         |
| CRM                | CRM                     | Public /sales/sales-dashboard entry portal. The excerpt excludes customer data and the placeholder contact footer.                                                                                                                                                      | public/images/projects/crm/interface.webp             |
| Q-SYSTEM           | Q-SYSTEM                | /display/main using its existing built-in sample queue. INITIAL_QUEUE and default branding were verified in src/app/features/display/services/display-state/display-state.service.ts. The screenshot is labeled as sample display data, not live patient records.       | public/images/projects/q-system/interface.webp        |
| QBooking           | Q-Booking/qBooking      | Actual branch, specialization and operator filters. The local build depends on an unavailable API during initialization; failing that request normally exposed its existing fallback interface. No mocked API responses, patient records or appointments were injected. | public/images/projects/qbooking/interface.webp        |

NPark’s local login page was also opened and captured for inspection. Its previously extracted configuration screenshot remains the stronger primary evidence, so the portfolio retains that real manual image rather than replacing it with another login form.

These captures replace every CV-based schematic: all ten project records now have actual interface imagery. Sign-in states, built-in sample data and the unavailable-API QBooking fallback are explicitly identified in both languages. They are evidence of actual rendered interfaces, not a claim that all protected workflows or backend services were exercised. No authentication was bypassed, saved user session imported, password used, or application form submitted.

Five applications used existing local browser builds; they are not represented as newly rebuilt or necessarily the latest source revision. Traffic was served from the local source. Original captures and inspection summaries are in %TEMP%/doma-portfolio-validation/local-niletronix. Published derivatives have 640/960/1440px versions using the existing image loader. QBooking and CRM use explicit screen excerpts rather than large empty regions. The whole images preserve actual rendered pixels.

The task-owned local servers on ports 4311–4316 were stopped after capture, including the Traffic CLI child process tree. The user’s pre-existing processes were not stopped. No app source or backend was changed.

## Résumé and profile sources

`profile.ts` owns the CV download, email and the actual LinkedIn/GitHub URLs extracted from PDF hyperlink annotations. About and the contact footer share one profile-links component. The CV copy’s SHA-256 matches the original. The phone remains in the supplied CV; email is the primary site contact.

- GitHub: `https://github.com/mahmouddoma`, resolved to the supplied identity.
- LinkedIn: `https://www.linkedin.com/in/mahmoud-doma-4520a222a`, extracted exactly from the PDF. LinkedIn blocked automated retrieval with HTTP 999, so no new claims are taken from its content.
- The old portfolio URL in the CV is not added as a competing destination.

## Self-hosted typography — provisional

`public/fonts/` contains Latin Newsreader and Source Sans 3, and Arabic/Latin Lemonada and Readex Pro WOFF2 subsets. Original sources are Google Fonts CSS/`fonts.gstatic.com`, with SIL OFL licenses from the official `google/fonts` repository stored beside the fonts. Definitions and Unicode ranges are in `src/_fonts.scss`; fonts use swap loading and no visitor request to Google. Exact typography and palette remain provisional.

No portrait was supplied. No analytics, third-party tracking, synthetic product images or generated logos are installed.
