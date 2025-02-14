# Change Log


## v2.15.0 (2022-01-04)

#### :boom: Breaking Change
* `api-db-mongodb`, `api`, `editor`
  * [#436](https://github.com/wepublish/wepublish/pull/436) payment method with slugs ([@roosnic1](https://github.com/roosnic1))
* `api`
  * [#435](https://github.com/wepublish/wepublish/pull/435) rename resetPassword to sendWebsiteLogin ([@roosnic1](https://github.com/roosnic1))
  * [#449](https://github.com/wepublish/wepublish/pull/449) Some subscription changes ([@roosnic1](https://github.com/roosnic1))

#### :heart: New Feature
* `api-db-mongodb`, `api`, `editor`
  * [#436](https://github.com/wepublish/wepublish/pull/436) payment method with slugs ([@roosnic1](https://github.com/roosnic1))
* `api`
  * [#435](https://github.com/wepublish/wepublish/pull/435) rename resetPassword to sendWebsiteLogin ([@roosnic1](https://github.com/roosnic1))
  * [#433](https://github.com/wepublish/wepublish/pull/433) Use mailproviders with templates ([@roosnic1](https://github.com/roosnic1))
  * [#429](https://github.com/wepublish/wepublish/pull/429) manual checkIntentStatus for Stripe and Payrexx ([@roosnic1](https://github.com/roosnic1))
  * [#451](https://github.com/wepublish/wepublish/pull/451) catch stripe errors and send mail ([@roosnic1](https://github.com/roosnic1))
  * [#449](https://github.com/wepublish/wepublish/pull/449) Some subscription changes ([@roosnic1](https://github.com/roosnic1))
  * [#469](https://github.com/wepublish/wepublish/pull/469) Member context improvements ([@roosnic1](https://github.com/roosnic1))
* `api`, `editor`
  * [#432](https://github.com/wepublish/wepublish/pull/432) Send Login Links from the Editor ([@roosnic1](https://github.com/roosnic1))
  * [#452](https://github.com/wepublish/wepublish/pull/452) added oauth2Accounts to the GraphQLUser ([@roosnic1](https://github.com/roosnic1))


#### :bug: Bug Fix
* `api`
  * [#428](https://github.com/wepublish/wepublish/pull/428) bug fix for updating user subscription ([@roosnic1](https://github.com/roosnic1))
  * [#455](https://github.com/wepublish/wepublish/pull/455) make the mailgun from.submit use https ([@roosnic1](https://github.com/roosnic1))
  * [#463](https://github.com/wepublish/wepublish/pull/463) only send custom_missing mail to offSession payments ([@roosnic1](https://github.com/roosnic1))
  * [#462](https://github.com/wepublish/wepublish/pull/462) encode all url parameters that are sent with node-fetch ([@roosnic1](https://github.com/roosnic1))
  * [#468](https://github.com/wepublish/wepublish/pull/468) tiny fixes ([@roosnic1](https://github.com/roosnic1))
  * [#473](https://github.com/wepublish/wepublish/pull/473) bug fix for checking invoice states ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#426](https://github.com/wepublish/wepublish/pull/426) F/wpc 568 fix upload image error ([@lakeside763](https://github.com/lakeside763))

#### :nail_care: Polish
* `editor`
  * [#418](https://github.com/wepublish/wepublish/pull/418) f/wpc-579 missing fields highlighted in orange in page publish panel ([@camilleory](https://github.com/camilleory))
  * [#417](https://github.com/wepublish/wepublish/pull/417) F/wpc 578 highlight missing field article metadata ([@camilleory](https://github.com/camilleory))
* `api`
  * [#441](https://github.com/wepublish/wepublish/pull/441) Add invoice email to payrexx create gateway request ([@tomaszdurka](https://github.com/tomaszdurka))

#### :house: Internal
* `api`
  * [#440](https://github.com/wepublish/wepublish/pull/440) implemented a quick fix for failed registrations ([@roosnic1](https://github.com/roosnic1))
  * [#434](https://github.com/wepublish/wepublish/pull/434) use SEND_LOGIN_JWT_EXPIRES_MIN for sendWebsiteLogin ([@roosnic1](https://github.com/roosnic1))
  * [#431](https://github.com/wepublish/wepublish/pull/431) Make public jwt expiry time ajustable ([@elias-summermatter](https://github.com/elias-summermatter))
  * [#458](https://github.com/wepublish/wepublish/pull/458) better logging ([@roosnic1](https://github.com/roosnic1))
  * [#464](https://github.com/wepublish/wepublish/pull/464) Stripe improvements ([@roosnic1](https://github.com/roosnic1))
  * [#469](https://github.com/wepublish/wepublish/pull/469) Member context improvements ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#450](https://github.com/wepublish/wepublish/pull/450) Updated editor graphql codegen api ([@roosnic1](https://github.com/roosnic1))

#### Committers: 4
- Camille ([@camilleory](https://github.com/camilleory))
- Elias Summermatter ([@elias-summermatter](https://github.com/elias-summermatter))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- [@lakeside763](https://github.com/lakeside763)
- Tomasz Durka ([@tomaszdurka](https://github.com/tomaszdurka))


## v2.14.0 (2021-12-09)

#### :heart: New Feature
* `api`
  * [#306](https://github.com/wepublish/wepublish/pull/306) Public mutation to cancel membership ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#401](https://github.com/wepublish/wepublish/pull/401) BAJ-5_upload_size ([@michael-scheurer](https://github.com/michael-scheurer))

#### :bug: Bug Fix
* `api`
  * [#428](https://github.com/wepublish/wepublish/pull/428) bug fix for updating user subscription ([@roosnic1](https://github.com/roosnic1))

#### :nail_care: Polish
* `editor`
  * [#422](https://github.com/wepublish/wepublish/pull/422) F/wpc 574 img library translation ([@camilleory](https://github.com/camilleory))

#### :house: Internal
* `api`
  * [#423](https://github.com/wepublish/wepublish/pull/423) Update of stripePaymentProvider ([@roosnic1](https://github.com/roosnic1))

#### Committers: 4
- Camille ([@camilleory](https://github.com/camilleory))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Tomasz Durka ([@tomaszdurka](https://github.com/tomaszdurka))
- [@michael-scheurer](https://github.com/michael-scheurer)



## v2.13.0 (2021-11-24)

#### :heart: New Feature
* `api-db-mongodb`, `api`
  * [#402](https://github.com/wepublish/wepublish/pull/402) changed paymentProviderCustomer to an array ([@roosnic1](https://github.com/roosnic1))
* `api`, `editor`
  * [#398](https://github.com/wepublish/wepublish/pull/398) new block for bildwurf ads ([@roosnic1](https://github.com/roosnic1))

#### :bug: Bug Fix
* `editor`
  * [#404](https://github.com/wepublish/wepublish/pull/404) date fixes on calendar picker ([@penk85](https://github.com/penk85))

#### :nail_care: Polish
* `api`, `editor`
  * [#83](https://github.com/wepublish/wepublish/pull/83) Use E2E Tests for proper integration testing ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#396](https://github.com/wepublish/wepublish/pull/396) F/wpc 567 pending notification for future publications ([@camilleory](https://github.com/camilleory))
  * [#397](https://github.com/wepublish/wepublish/pull/397) initialize calendar with last publication date ([@penk85](https://github.com/penk85))

#### :house: Internal
* `api-db-mongodb`, `api`
  * [#408](https://github.com/wepublish/wepublish/pull/408) updated apollo-server-express to 2.25.3 ([@roosnic1](https://github.com/roosnic1))
  * [#402](https://github.com/wepublish/wepublish/pull/402) changed paymentProviderCustomer to an array ([@roosnic1](https://github.com/roosnic1))
* `api`, `editor`
  * [#83](https://github.com/wepublish/wepublish/pull/83) Use E2E Tests for proper integration testing ([@roosnic1](https://github.com/roosnic1))

#### Committers: 5
- Camille ([@camilleory](https://github.com/camilleory))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- We.Publish Weblate Pusher ([@wepublishweblate](https://github.com/wepublishweblate))
- [@lakeside763](https://github.com/lakeside763)



## v2.12.0 (2021-10-27)

#### :bug: Bug Fix
* `editor`
  * [#394](https://github.com/wepublish/wepublish/pull/394) fix preset buttons on date picker ([@penk85](https://github.com/penk85))

#### Committers: 2
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))


## v2.11.0 (2021-10-13)

#### :heart: New Feature
* `editor`
  * [#375](https://github.com/wepublish/wepublish/pull/375) f/wpc-539-unpublish-pending-pages ([@lakeside763](https://github.com/lakeside763))

#### :bug: Bug Fix
* `api`, `editor`
  * [#372](https://github.com/wepublish/wepublish/pull/372) peering between different versions ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#374](https://github.com/wepublish/wepublish/pull/374) mapping metadata properties to get rid of __typename ([@roosnic1](https://github.com/roosnic1))

#### :nail_care: Polish
* `editor`
  * [#381](https://github.com/wepublish/wepublish/pull/381) F/wpc 500 add hovering ([@camilleory](https://github.com/camilleory))
* Other
  * [#368](https://github.com/wepublish/wepublish/pull/368) f/wpc-526-theme-color-visible-on-website ([@camilleory](https://github.com/camilleory))
* `api-db-mongodb`, `api`, `editor`
  * [#376](https://github.com/wepublish/wepublish/pull/376) F/wpc 522 add font color to peered articles ([@camilleory](https://github.com/camilleory))
* `api`, `editor`
  * [#372](https://github.com/wepublish/wepublish/pull/372) peering between different versions ([@roosnic1](https://github.com/roosnic1))

#### :house: Internal
* Other
  * [#384](https://github.com/wepublish/wepublish/pull/384) Wildcard certificate for feature branches ([@roosnic1](https://github.com/roosnic1))
* `api`
  * [#379](https://github.com/wepublish/wepublish/pull/379) chore(api): prettier cleanup ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#377](https://github.com/wepublish/wepublish/pull/377) make state colors of articles/pages consistent ([@penk85](https://github.com/penk85))

#### Committers: 4
- Camille ([@camilleory](https://github.com/camilleory))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@lakeside763](https://github.com/lakeside763)


## v2.10.0 (2021-09-29)

#### :heart: New Feature
* `api-db-mongodb`, `api`, `editor`
  * [#370](https://github.com/wepublish/wepublish/pull/370) user and session improvements ([@roosnic1](https://github.com/roosnic1))
* `api`, `editor`
  * [#346](https://github.com/wepublish/wepublish/pull/346) keyboard date input ([@penk85](https://github.com/penk85))
* `editor`
  * [#331](https://github.com/wepublish/wepublish/pull/331) image cta on website ([@penk85](https://github.com/penk85))

#### :nail_care: Polish
* `editor`
  * [#369](https://github.com/wepublish/wepublish/pull/369) F/wpc 524 color picker peered articles color ([@camilleory](https://github.com/camilleory))
  * [#348](https://github.com/wepublish/wepublish/pull/348) add my peer info page ([@HanaAyman](https://github.com/HanaAyman))
  * [#365](https://github.com/wepublish/wepublish/pull/365) f/499-translation-rsuite-js ([@camilleory](https://github.com/camilleory))
  * [#358](https://github.com/wepublish/wepublish/pull/358) F/wpc 482 format date with fns ([@camilleory](https://github.com/camilleory))
  * [#351](https://github.com/wepublish/wepublish/pull/351) F/wpc-482-publication-date-without-seconds ([@camilleory](https://github.com/camilleory))
  * [#332](https://github.com/wepublish/wepublish/pull/332) wpc-458-highlight-pending-articles-and-pages ([@HanaAyman](https://github.com/HanaAyman))

#### :house: Internal
* `api-db-mongodb`, `api`, `editor`
  * [#337](https://github.com/wepublish/wepublish/pull/337) Get rid of @ts-ignore ([@gianantoniopini](https://github.com/gianantoniopini))

#### Committers: 5
- Camille ([@camilleory](https://github.com/camilleory))
- Gianantonio Pini ([@gianantoniopini](https://github.com/gianantoniopini))
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))


## v2.9.0 (2021-09-14)

#### :nail_care: Polish
* `editor`
  * [#344](https://github.com/wepublish/wepublish/pull/344) make light teaser option use the original image ([@HanaAyman](https://github.com/HanaAyman))
  * [#352](https://github.com/wepublish/wepublish/pull/352) Translations update from Weblate ([@wepublishweblate](https://github.com/wepublishweblate))
  * [#345](https://github.com/wepublish/wepublish/pull/345) move authors position in the navigation  ([@HanaAyman](https://github.com/HanaAyman))
  * [#338](https://github.com/wepublish/wepublish/pull/338) wpc-462-add-link-input ([@HanaAyman](https://github.com/HanaAyman))
  * [#333](https://github.com/wepublish/wepublish/pull/333) wpc-459-add-image-description ([@HanaAyman](https://github.com/HanaAyman))
* Other
  * [#340](https://github.com/wepublish/wepublish/pull/340) Show comment characters length ([@HanaAyman](https://github.com/HanaAyman))
  * [#339](https://github.com/wepublish/wepublish/pull/339) wpc-444-reply to comments only when logged in ([@HanaAyman](https://github.com/HanaAyman))

#### :house: Internal
* [#350](https://github.com/wepublish/wepublish/pull/350) chore(deps): bump object-path from 0.11.5 to 0.11.7 ([@dependabot[bot]](https://github.com/apps/dependabot))

#### Committers: 3
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- We.Publish Weblate Pusher ([@wepublishweblate](https://github.com/wepublishweblate))


## v2.8.0 (2021-09-14)

#### :boom: Breaking Change
* `api`, `editor`
  * [#290](https://github.com/wepublish/wepublish/pull/290) Use email-templates and pug to render mail templates ([@roosnic1](https://github.com/roosnic1))

#### :heart: New Feature
* `api-db-mongodb`, `api`, `editor`
  * [#310](https://github.com/wepublish/wepublish/pull/310) Add image cta in peer profile ([@penk85](https://github.com/penk85))
  * [#307](https://github.com/wepublish/wepublish/pull/307) added canonicalUrl field for article ([@bishoymelek](https://github.com/bishoymelek))
* `api`, `editor`
  * [#290](https://github.com/wepublish/wepublish/pull/290) Use email-templates and pug to render mail templates ([@roosnic1](https://github.com/roosnic1))
  * [#305](https://github.com/wepublish/wepublish/pull/305) Preview links for pages ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#301](https://github.com/wepublish/wepublish/pull/301) add default peering ([@penk85](https://github.com/penk85))

#### :bug: Bug Fix
* `editor`
  * [#302](https://github.com/wepublish/wepublish/pull/302) wpc-435-fix image dropdown menu ([@HanaAyman](https://github.com/HanaAyman))

#### :nail_care: Polish
* `editor`
  * [#326](https://github.com/wepublish/wepublish/pull/326) wpc-461-add-frame-around-author-bio-info ([@HanaAyman](https://github.com/HanaAyman))
  * [#329](https://github.com/wepublish/wepublish/pull/329) wpc-460 add frame around description in member plan panel  ([@HanaAyman](https://github.com/HanaAyman))
  * [#330](https://github.com/wepublish/wepublish/pull/330) wpc-453-make-articles-highlighted ([@HanaAyman](https://github.com/HanaAyman))
  * [#327](https://github.com/wepublish/wepublish/pull/327) Translations update from Weblate ([@wepublishweblate](https://github.com/wepublishweblate))
  * [#325](https://github.com/wepublish/wepublish/pull/325) wpc-457-reset-password-icon ([@HanaAyman](https://github.com/HanaAyman))
  * [#323](https://github.com/wepublish/wepublish/pull/323) wpc-455-image-library-icon ([@HanaAyman](https://github.com/HanaAyman))
  * [#324](https://github.com/wepublish/wepublish/pull/324) wpc-456-payment-methods-icon ([@HanaAyman](https://github.com/HanaAyman))
  * [#322](https://github.com/wepublish/wepublish/pull/322) WPC-454 Change pages icon  ([@HanaAyman](https://github.com/HanaAyman))
  * [#312](https://github.com/wepublish/wepublish/pull/312) Updated translations from Phrase ([@roosnic1](https://github.com/roosnic1))

#### :memo: Documentation
* [#268](https://github.com/wepublish/wepublish/pull/268) F/wpc 331 docs ([@bishoymelek](https://github.com/bishoymelek))

#### :house: Internal
* `api`
  * [#309](https://github.com/wepublish/wepublish/pull/309) wpc-211-comment-length-validation ([@HanaAyman](https://github.com/HanaAyman))
* `editor`
  * [#313](https://github.com/wepublish/wepublish/pull/313) Update react to v17 ([@roosnic1](https://github.com/roosnic1))

#### Committers: 5
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- We.Publish Weblate Pusher ([@wepublishweblate](https://github.com/wepublishweblate))
- [@bishoymelek](https://github.com/bishoymelek)


## v2.7.0 (2021-08-03)

#### :bug: Bug Fix
* [#295](https://github.com/wepublish/wepublish/pull/295) Handle URLs inside a peer article ([@bishoymelek](https://github.com/bishoymelek))

#### :nail_care: Polish
* `editor`
  * [#296](https://github.com/wepublish/wepublish/pull/296) Use JS SDK instead of iframe  ([@roosnic1](https://github.com/roosnic1))
  * [#294](https://github.com/wepublish/wepublish/pull/294) Add properties tab to metadata ([@penk85](https://github.com/penk85))
  * [#291](https://github.com/wepublish/wepublish/pull/291) b/wpc-423-ui-fixes ([@HanaAyman](https://github.com/HanaAyman))
  * [#283](https://github.com/wepublish/wepublish/pull/283) F/wpc 165 article status indicator ([@penk85](https://github.com/penk85))

#### :house: Internal
* `editor`
  * [#296](https://github.com/wepublish/wepublish/pull/296) Use JS SDK instead of iframe  ([@roosnic1](https://github.com/roosnic1))
* `api`, `editor`, `oauth2`
  * [#293](https://github.com/wepublish/wepublish/pull/293) remove unused deps ([@HanaAyman](https://github.com/HanaAyman))

#### Committers: 4
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@bishoymelek](https://github.com/bishoymelek)


## v2.6.0 (2021-06-23)

#### :boom: Breaking Change
* `api`, `editor`
  * [#288](https://github.com/wepublish/wepublish/pull/288) Allow previews for peered articles ([@roosnic1](https://github.com/roosnic1))

#### :heart: New Feature
* `api`, `editor`
  * [#288](https://github.com/wepublish/wepublish/pull/288) Allow previews for peered articles ([@roosnic1](https://github.com/roosnic1))

#### :bug: Bug Fix
* `api`
  * [#287](https://github.com/wepublish/wepublish/pull/287) reverse enums also for PeerArticleTeasers and PageTeasers ([@roosnic1](https://github.com/roosnic1))
  * [#281](https://github.com/wepublish/wepublish/pull/281) Bug fix for peered article that contain a teaser grid block ([@roosnic1](https://github.com/roosnic1))

#### :nail_care: Polish
* `editor`
  * [#286](https://github.com/wepublish/wepublish/pull/286) F/wpc 408 navbar collapse ([@camilleory](https://github.com/camilleory))
  * [#284](https://github.com/wepublish/wepublish/pull/284) token save notification ([@penk85](https://github.com/penk85))
  * [#279](https://github.com/wepublish/wepublish/pull/279) wpc-397 metadata close button ([@camilleory](https://github.com/camilleory))

#### :house: Internal
* `api`
  * [#285](https://github.com/wepublish/wepublish/pull/285) wpc-421 adding graphql description for public queries and mutations ([@HanaAyman](https://github.com/HanaAyman))

#### Committers: 4
- Camille ([@camilleory](https://github.com/camilleory))
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))


## v2.5.0-alpha.2 (2021-06-16)

#### :bug: Bug Fix
* `api`
  * Peering bug fix also for PeerArticleTeaser and PageTeaser ([@roosnic1](https://github.com/roosnic1))

#### Committers: 1
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))

## v2.5.0-alpha.1 (2021-06-15)

#### :bug: Bug Fix
* `api`
  * [#281](https://github.com/wepublish/wepublish/pull/281) Bug fix for peered article that contain a teaser grid block ([@roosnic1](https://github.com/roosnic1))

#### Committers: 1
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))


## v2.5.0-alpha.0 (2021-06-09)

#### :heart: New Feature
* `api-db-mongodb`, `editor`
  * [#263](https://github.com/wepublish/wepublish/pull/263) f/wpc-341-order-comments-by-state ([@HanaAyman](https://github.com/HanaAyman))

#### :bug: Bug Fix
* `editor`
  * [#278](https://github.com/wepublish/wepublish/pull/278) F/wpc 22 update ([@penk85](https://github.com/penk85))

#### :nail_care: Polish
* `editor`
  * [#274](https://github.com/wepublish/wepublish/pull/274) F/wpc 353 show pending publish date ([@penk85](https://github.com/penk85))
  * [#270](https://github.com/wepublish/wepublish/pull/270) Show publish date in article and page list ([@penk85](https://github.com/penk85))

#### :house: Internal
* Other
  * [#277](https://github.com/wepublish/wepublish/pull/277) fix(website): removed comments from graphql query for peer articles ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#272](https://github.com/wepublish/wepublish/pull/272) validation for url peering to host ([@penk85](https://github.com/penk85))
* `api-db-mongodb`, `editor`
  * [#263](https://github.com/wepublish/wepublish/pull/263) f/wpc-341-order-comments-by-state ([@HanaAyman](https://github.com/HanaAyman))

#### Committers: 3
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))


## v2.4.0 (2021-06-09)

#### :heart: New Feature
* Other
  * [#261](https://github.com/wepublish/wepublish/pull/261) F/wpc 274 redirect back on comment after login ([@bishoymelek](https://github.com/bishoymelek))
* `api`, `editor`
  * [#258](https://github.com/wepublish/wepublish/pull/258) Add polis embed block ([@penk85](https://github.com/penk85))

#### :bug: Bug Fix
* `editor`
  * [#257](https://github.com/wepublish/wepublish/pull/257) placement of date picker in user subscription panel ([@penk85](https://github.com/penk85))
  * [#264](https://github.com/wepublish/wepublish/pull/264) b/wpc-369-make-default-publishing-time-5 ([@HanaAyman](https://github.com/HanaAyman))

#### :nail_care: Polish
* `api`, `editor`
  * [#251](https://github.com/wepublish/wepublish/pull/251) show parent comment in comment review panel ([@penk85](https://github.com/penk85))
* `editor`
  * [#256](https://github.com/wepublish/wepublish/pull/256) Color all rows on comment table ([@penk85](https://github.com/penk85))

#### Committers: 3
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@bishoymelek](https://github.com/bishoymelek)


## v2.3.0 (2021-05-26)

#### :heart: New Feature
* `editor`
  * [#253](https://github.com/wepublish/wepublish/pull/253) added time in modefied coloumn ([@bishoymelek](https://github.com/bishoymelek))
  * [#240](https://github.com/wepublish/wepublish/pull/240) f/wpc-320-create-an-author-in-the-article-metadata ([@HanaAyman](https://github.com/HanaAyman))
  * [#241](https://github.com/wepublish/wepublish/pull/241) changed sorting to be with modification date ([@bishoymelek](https://github.com/bishoymelek))
* `api-db-mongodb`, `api`, `editor`
  * [#238](https://github.com/wepublish/wepublish/pull/238) F/wpc 323 sorting pagination author list ([@bishoymelek](https://github.com/bishoymelek))

#### :bug: Bug Fix
* `editor`
  * [#247](https://github.com/wepublish/wepublish/pull/247) Proper check if the path includes login or logout ([@roosnic1](https://github.com/roosnic1))
  * [#247](https://github.com/wepublish/wepublish/pull/247) Proper check if the path includes login or logout ([@roosnic1](https://github.com/roosnic1))
  * [#243](https://github.com/wepublish/wepublish/pull/243) remove extra lead field from teaser panel ([@penk85](https://github.com/penk85))
  * [#234](https://github.com/wepublish/wepublish/pull/234) wpc-305-change-unpublish-icon ([@HanaAyman](https://github.com/HanaAyman))
  * [#233](https://github.com/wepublish/wepublish/pull/233) wpc-286-image-updated-alert ([@HanaAyman](https://github.com/HanaAyman))
  * [#232](https://github.com/wepublish/wepublish/pull/232) b/wpc-322-make-member-plans-visually-deleted ([@HanaAyman](https://github.com/HanaAyman))
* `api-db-mongodb`
  * [#244](https://github.com/wepublish/wepublish/pull/244) Fix escaping regex ([@bishoymelek](https://github.com/bishoymelek))
* `api`
  * [#231](https://github.com/wepublish/wepublish/pull/231) Always set updatedAt and publishedAt date ([@roosnic1](https://github.com/roosnic1))

#### :nail_care: Polish
* `editor`
  * [#252](https://github.com/wepublish/wepublish/pull/252) Comment list color ([@penk85](https://github.com/penk85))
  * [#230](https://github.com/wepublish/wepublish/pull/230) split time and date picker ([@penk85](https://github.com/penk85))
  * [#242](https://github.com/wepublish/wepublish/pull/242) add spacing to layout of forms in Navigation panel ([@penk85](https://github.com/penk85))
  * [#239](https://github.com/wepublish/wepublish/pull/239) Highlight link button ([@penk85](https://github.com/penk85))

#### :memo: Documentation
* [#237](https://github.com/wepublish/wepublish/pull/237) enh. installation troubleshooting documentation ([@michael-scheurer](https://github.com/michael-scheurer))

#### Committers: 5
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@bishoymelek](https://github.com/bishoymelek)
- [@michael-scheurer](https://github.com/michael-scheurer)


## v2.2.1 (2021-04-15)

#### :bug: Bug Fix
* `editor`
  * [#247](https://github.com/wepublish/wepublish/pull/247) Proper check if the path includes login or logout ([@roosnic1](https://github.com/roosnic1))

#### Committers: 1
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))


## v2.2.0 (2021-04-14)

#### :heart: New Feature
* `api`, `editor`
  * [#228](https://github.com/wepublish/wepublish/pull/228) use Visibility API to check if still logged in ([@bishoymelek](https://github.com/bishoymelek))

#### :bug: Bug Fix
* `editor`
  * [#223](https://github.com/wepublish/wepublish/pull/223) fix table column width ([@penk85](https://github.com/penk85))
  * [#222](https://github.com/wepublish/wepublish/pull/222) Add missing translations to userlist panel ([@penk85](https://github.com/penk85))
  * [#217](https://github.com/wepublish/wepublish/pull/217) Selected authors stay selected during search ([@roosnic1](https://github.com/roosnic1))
* `api`
  * [#227](https://github.com/wepublish/wepublish/pull/227) f/wpc-266-add-getCommentUrl-in-UrlAdapter-interface ([@HanaAyman](https://github.com/HanaAyman))
* `api`, `editor`
  * [#219](https://github.com/wepublish/wepublish/pull/219) Disable save without peer data and handle errors of invalid tokens ([@penk85](https://github.com/penk85))

#### :nail_care: Polish
* `editor`
  * [#225](https://github.com/wepublish/wepublish/pull/225) f/wpc-296-add-slug-guide ([@HanaAyman](https://github.com/HanaAyman))
  * [#216](https://github.com/wepublish/wepublish/pull/216) f/WPC-276-highlight-article-after-being-unpublished ([@HanaAyman](https://github.com/HanaAyman))

#### :house: Internal
* `editor`
  * [#224](https://github.com/wepublish/wepublish/pull/224) f/wpc-255-character-counter-count-more-blocks ([@HanaAyman](https://github.com/HanaAyman))
  * [#214](https://github.com/wepublish/wepublish/pull/214) f/wpc-256-see-the-max-amount-of-characters ([@HanaAyman](https://github.com/HanaAyman))
* `api`
  * [#227](https://github.com/wepublish/wepublish/pull/227) f/wpc-266-add-getCommentUrl-in-UrlAdapter-interface ([@HanaAyman](https://github.com/HanaAyman))
* Other
  * [#218](https://github.com/wepublish/wepublish/pull/218) Added color to the table in the example website ([@roosnic1](https://github.com/roosnic1))

#### Committers: 5
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Pat Mächler ([@valioDOTch](https://github.com/valioDOTch))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@bishoymelek](https://github.com/bishoymelek)

## v2.1.0 (2021-03-31)

#### :heart: New Feature
* Other
  * [#194](https://github.com/wepublish/wepublish/pull/194) F/wpc 88 update comment ([@0815pascal](https://github.com/0815pascal))
* `api-db-mongodb`, `api`, `editor`
  * [#207](https://github.com/wepublish/wepublish/pull/207) Article Preview Links ([@roosnic1](https://github.com/roosnic1))

#### :bug: Bug Fix
* `editor`
  * [#206](https://github.com/wepublish/wepublish/pull/206) B/wpc 245 image selection disabled in edit peer ([@HanaAyman](https://github.com/HanaAyman))

#### :nail_care: Polish
* `editor`
  * [#209](https://github.com/wepublish/wepublish/pull/209) F/wpc 244 infer link protocol ([@penk85](https://github.com/penk85))
  * [#211](https://github.com/wepublish/wepublish/pull/211) hotkey cmd support for macs ([@penk85](https://github.com/penk85))
  * [#205](https://github.com/wepublish/wepublish/pull/205) Add hotkey shortcuts to Richtext Editor ([@penk85](https://github.com/penk85))

#### Committers: 4
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Pascal Witzig ([@0815pascal](https://github.com/0815pascal))
- Penina Cheshin ([@penk85](https://github.com/penk85))



## v2.0.0 (2021-03-17)

#### :boom: Breaking Change
* `api-db-mongodb`, `api`
  * [#198](https://github.com/wepublish/wepublish/pull/198) Enhanced User address ([@roosnic1](https://github.com/roosnic1))

#### :heart: New Feature
* Other
  * [#153](https://github.com/wepublish/wepublish/pull/153) F/WPC-87 & F/WPC-55 comment frontend functionality ([@0815pascal](https://github.com/0815pascal))
* `api-db-mongodb`, `api`
  * [#198](https://github.com/wepublish/wepublish/pull/198) Enhanced User address ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#186](https://github.com/wepublish/wepublish/pull/186) f/wpc-56 & wpc-91 richtext editor link button and URL validation ([@penk85](https://github.com/penk85))

#### :bug: Bug Fix
* Other
  * [#201](https://github.com/wepublish/wepublish/pull/201) wpc-180-fix broken route for breaking articles ([@bishoymelek](https://github.com/bishoymelek))
* `editor`
  * [#196](https://github.com/wepublish/wepublish/pull/196) B/wpc 224 logout ([@penk85](https://github.com/penk85))
* `api`
  * [#188](https://github.com/wepublish/wepublish/pull/188) check first if visitor is authenticated or not ([@bishoymelek](https://github.com/bishoymelek))

#### :nail_care: Polish
* `editor`
  * [#199](https://github.com/wepublish/wepublish/pull/199) Added SEO guide link ([@roosnic1](https://github.com/roosnic1))
* `api`, `editor`
  * [#197](https://github.com/wepublish/wepublish/pull/197) f/WPC-228-more-clear-slug-field ([@0815pascal](https://github.com/0815pascal))

#### :house: Internal
* `editor`
  * [#195](https://github.com/wepublish/wepublish/pull/195) Wpc 205 character counter ([@HanaAyman](https://github.com/HanaAyman))
  * [#200](https://github.com/wepublish/wepublish/pull/200) Remove unmaintained translation files ([@roosnic1](https://github.com/roosnic1))
* `api-db-mongodb`, `api`, `editor`
  * [#192](https://github.com/wepublish/wepublish/pull/192) Added a new seoTitle field to the article metadata ([@roosnic1](https://github.com/roosnic1))

#### Committers: 5
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Pascal Witzig ([@0815pascal](https://github.com/0815pascal))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@bishoymelek](https://github.com/bishoymelek)



## v1.0.1 (2021-03-03)

#### :heart: New Feature
* `editor`
  * [#184](https://github.com/wepublish/wepublish/pull/184) add ability to display only one line ([@bishoymelek](https://github.com/bishoymelek))
  * [#167](https://github.com/wepublish/wepublish/pull/167) WPC-202 rich-text Get characters count method, and get string text method ([@bishoymelek](https://github.com/bishoymelek))
  * [#168](https://github.com/wepublish/wepublish/pull/168) WPC-212 Rich Text in display only mode ([@bishoymelek](https://github.com/bishoymelek))
* `api`, `editor`
  * [#185](https://github.com/wepublish/wepublish/pull/185) Wpc 20 duplicate articles and pages ([@HanaAyman](https://github.com/HanaAyman))
* `api-db-mongodb`, `api`
  * [#181](https://github.com/wepublish/wepublish/pull/181) Unique page slug ([@roosnic1](https://github.com/roosnic1))
* `api-db-mongodb`, `api`, `editor`
  * [#157](https://github.com/wepublish/wepublish/pull/157) Comments ([@bishoymelek](https://github.com/bishoymelek))
  * [#170](https://github.com/wepublish/wepublish/pull/170) Author improvements ([@roosnic1](https://github.com/roosnic1))
  * [#172](https://github.com/wepublish/wepublish/pull/172) Pagination for article and page lists ([@roosnic1](https://github.com/roosnic1))
* Other
  * [#166](https://github.com/wepublish/wepublish/pull/166) Auth in examples/website ([@roosnic1](https://github.com/roosnic1))

#### :bug: Bug Fix
* `editor`
  * [#175](https://github.com/wepublish/wepublish/pull/175) add displayOnly prop to richText ([@bishoymelek](https://github.com/bishoymelek))
  * [#174](https://github.com/wepublish/wepublish/pull/174) Fixing delete image bug ([@HanaAyman](https://github.com/HanaAyman))

#### :nail_care: Polish
* `editor`
  * [#178](https://github.com/wepublish/wepublish/pull/178) F/WPC-199 improve metadata clarity ([@0815pascal](https://github.com/0815pascal))

#### :memo: Documentation
* [#173](https://github.com/wepublish/wepublish/pull/173) Magic module error documentation ([@HanaAyman](https://github.com/HanaAyman))

#### :house: Internal
* `editor`
  * [#180](https://github.com/wepublish/wepublish/pull/180) f/WPC-200-sync-title-lead-with-metadata ([@0815pascal](https://github.com/0815pascal))
  * [#179](https://github.com/wepublish/wepublish/pull/179) f/WPC-3-editeable-slug-field ([@0815pascal](https://github.com/0815pascal))
* `api`
  * [#139](https://github.com/wepublish/wepublish/pull/139) MailProvider Tests ([@roosnic1](https://github.com/roosnic1))
* Other
  * [#166](https://github.com/wepublish/wepublish/pull/166) Auth in examples/website ([@roosnic1](https://github.com/roosnic1))

#### Committers: 4
- Hana Ayman ([@HanaAyman](https://github.com/HanaAyman))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Pascal Witzig ([@0815pascal](https://github.com/0815pascal))
- [@bishoymelek](https://github.com/bishoymelek)


## v1.0.0 (2021-02-16)

#### :bug: Bug Fix
* `api`
  * [#159](https://github.com/wepublish/wepublish/pull/159) Bug Fix: replace cross-fetch with node-fetch ([@roosnic1](https://github.com/roosnic1))

#### :boom: Breaking Change
* Other
  * [#96](https://github.com/wepublish/wepublish/pull/96) F/wep 131 richtext table for website client ([@faebebin](https://github.com/faebebin))
* `api`, `editor`
  * [#88](https://github.com/wepublish/wepublish/pull/88) F/wep 89 editor rich text table ([@faebebin](https://github.com/faebebin))

#### :heart: New Feature
* `api`
  * [#155](https://github.com/wepublish/wepublish/pull/155) Fixes for the next release ([@roosnic1](https://github.com/roosnic1))
  * [#121](https://github.com/wepublish/wepublish/pull/121) API with hooks ([@roosnic1](https://github.com/roosnic1))
* `api-db-mongodb`, `api`, `editor`
  * [#32](https://github.com/wepublish/wepublish/pull/32) WEP-23 member plans ([@roosnic1](https://github.com/roosnic1))
  * [#116](https://github.com/wepublish/wepublish/pull/116) Mail provider adapter ([@roosnic1](https://github.com/roosnic1))
  * [#93](https://github.com/wepublish/wepublish/pull/93) F/wep 87 social media metatags ([@0815pascal](https://github.com/0815pascal))
  * [#102](https://github.com/wepublish/wepublish/pull/102) F/wep 116 add peer call to action info ([@bishoymelek](https://github.com/bishoymelek))
  * [#92](https://github.com/wepublish/wepublish/pull/92) F/wep 88 hide authors ([@penk85](https://github.com/penk85))
  * [#63](https://github.com/wepublish/wepublish/pull/63) f/WEP-90 navigations-menu ([@0815pascal](https://github.com/0815pascal))
* `editor`
  * [#115](https://github.com/wepublish/wepublish/pull/115) F/wep 128 richtext table border colorpicker ([@faebebin](https://github.com/faebebin))
  * [#57](https://github.com/wepublish/wepublish/pull/57) F/wep 78 editor multi language switch ([@0815pascal](https://github.com/0815pascal))
* `api`, `editor`
  * [#125](https://github.com/wepublish/wepublish/pull/125) Magic Login Links ([@roosnic1](https://github.com/roosnic1))
  * [#123](https://github.com/wepublish/wepublish/pull/123) WEP-100 Reader Authentication ([@roosnic1](https://github.com/roosnic1))
  * [#88](https://github.com/wepublish/wepublish/pull/88) F/wep 89 editor rich text table ([@faebebin](https://github.com/faebebin))

#### :bug: Bug Fix
* `editor`
  * [#137](https://github.com/wepublish/wepublish/pull/137) b/WEP-178 chech ImageTeaserBlock if the image prop exist and has value, or set placeholder image instead ([@bishoymelek](https://github.com/bishoymelek))
  * [#134](https://github.com/wepublish/wepublish/pull/134) B/WEP-175-fix-imageBlock ([@0815pascal](https://github.com/0815pascal))
  * [#136](https://github.com/wepublish/wepublish/pull/136) B/wep 174 fix focus empty rtb firefox ([@faebebin](https://github.com/faebebin))
  * [#133](https://github.com/wepublish/wepublish/pull/133) B/WEP-176-missing-userRole-translations ([@0815pascal](https://github.com/0815pascal))
  * [#108](https://github.com/wepublish/wepublish/pull/108) add placeholder image and use it ([@bishoymelek](https://github.com/bishoymelek))
  * [#106](https://github.com/wepublish/wepublish/pull/106) Align new navigation button to the right (#84) ([@matteodem](https://github.com/matteodem))
  * [#101](https://github.com/wepublish/wepublish/pull/101) bug fix - Delete-Dialog not disappearing in pageList ([@persunde](https://github.com/persunde))
  * [#94](https://github.com/wepublish/wepublish/pull/94) Bug fix - Author list now updates the UI after an author is removed ([@persunde](https://github.com/persunde))
  * [#90](https://github.com/wepublish/wepublish/pull/90) Issue 78 emojipicker ref ([@faebebin](https://github.com/faebebin))
* `api`
  * [#132](https://github.com/wepublish/wepublish/pull/132) B/WEP-173-fix-create-navigation-description ([@0815pascal](https://github.com/0815pascal))

#### :nail_care: Polish
* `api`
  * [#124](https://github.com/wepublish/wepublish/pull/124) Mailgun improvements ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#112](https://github.com/wepublish/wepublish/pull/112) F/wep 136 richtext toolbar style ([@faebebin](https://github.com/faebebin))
  * [#97](https://github.com/wepublish/wepublish/pull/97) F/wep 137 richtext menu h icons ([@faebebin](https://github.com/faebebin))
  * [#90](https://github.com/wepublish/wepublish/pull/90) Issue 78 emojipicker ref ([@faebebin](https://github.com/faebebin))
  * [#89](https://github.com/wepublish/wepublish/pull/89) F/wep 110 favicon ([@0815pascal](https://github.com/0815pascal))

#### :memo: Documentation
* Other
  * [#82](https://github.com/wepublish/wepublish/pull/82) Update faq.md ([@0815pascal](https://github.com/0815pascal))
  * [#80](https://github.com/wepublish/wepublish/pull/80) Added code of conduct ([@roosnic1](https://github.com/roosnic1))
* `api-db-karma`, `api-db-memory`
  * [#81](https://github.com/wepublish/wepublish/pull/81) New readme page ([@roosnic1](https://github.com/roosnic1))

#### :house: Internal
* Other
  * [#151](https://github.com/wepublish/wepublish/pull/151) config: explicit-module-boundary-types=off ([@faebebin](https://github.com/faebebin))
  * [#129](https://github.com/wepublish/wepublish/pull/129) Removed unused types ([@roosnic1](https://github.com/roosnic1))
  * [#120](https://github.com/wepublish/wepublish/pull/120) Mail provider for Slack ([@roosnic1](https://github.com/roosnic1))
  * [#104](https://github.com/wepublish/wepublish/pull/104) chore(deps): bump ini from 1.3.5 to 1.3.7 ([@dependabot[bot]](https://github.com/apps/dependabot))
  * [#91](https://github.com/wepublish/wepublish/pull/91) B/wep 90 navigation menu display ([@0815pascal](https://github.com/0815pascal))
  * [#85](https://github.com/wepublish/wepublish/pull/85) F/wep 90 navigation menu display ([@0815pascal](https://github.com/0815pascal))
  * [#80](https://github.com/wepublish/wepublish/pull/80) Added code of conduct ([@roosnic1](https://github.com/roosnic1))
  * [#79](https://github.com/wepublish/wepublish/pull/79) Updated github-actions ([@roosnic1](https://github.com/roosnic1))
* `editor`
  * [#119](https://github.com/wepublish/wepublish/pull/119) F/wep 121 re implement via normalizenode ([@faebebin](https://github.com/faebebin))
  * [#118](https://github.com/wepublish/wepublish/pull/118) F/wep 159 refactor seperate editor tools modules ([@faebebin](https://github.com/faebebin))
  * [#109](https://github.com/wepublish/wepublish/pull/109) F/wep 127 richtextblock refactoring ([@faebebin](https://github.com/faebebin))
  * [#57](https://github.com/wepublish/wepublish/pull/57) F/wep 78 editor multi language switch ([@0815pascal](https://github.com/0815pascal))
* `api`
  * [#130](https://github.com/wepublish/wepublish/pull/130) T/api navigations ([@penk85](https://github.com/penk85))
  * [#126](https://github.com/wepublish/wepublish/pull/126) T/api peer ([@penk85](https://github.com/penk85))
  * [#121](https://github.com/wepublish/wepublish/pull/121) API with hooks ([@roosnic1](https://github.com/roosnic1))
  * [#117](https://github.com/wepublish/wepublish/pull/117) T/api user user role ([@penk85](https://github.com/penk85))
  * [#114](https://github.com/wepublish/wepublish/pull/114) T/api page block ([@penk85](https://github.com/penk85))
  * [#107](https://github.com/wepublish/wepublish/pull/107) test(api): api page tests ([@penk85](https://github.com/penk85))
  * [#105](https://github.com/wepublish/wepublish/pull/105) T/api author tests ([@penk85](https://github.com/penk85))
  * [#100](https://github.com/wepublish/wepublish/pull/100) T/api article tests ([@penk85](https://github.com/penk85))
* `api-db-karma`, `api-db-memory`
  * [#81](https://github.com/wepublish/wepublish/pull/81) New readme page ([@roosnic1](https://github.com/roosnic1))

#### Committers: 7
- Fabian Binder ([@faebebin](https://github.com/faebebin))
- Matteo Demicheli ([@matteodem](https://github.com/matteodem))
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Pascal Witzig ([@0815pascal](https://github.com/0815pascal))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- Per Sunde ([@persunde](https://github.com/persunde))
- [@bishoymelek](https://github.com/bishoymelek)


## v0.8.6 (2020-11-13)

#### :heart: New Feature
* `api-db-mongodb`, `api`, `editor`
  * [#72](https://github.com/wepublish/wepublish/pull/72) page break extend ([@dev7ch](https://github.com/dev7ch))
* `editor`
  * [#53](https://github.com/wepublish/wepublish/pull/53) F/wep 78 editor multi language ([@0815pascal](https://github.com/0815pascal))

#### :bug: Bug Fix
* `editor`
  * [#71](https://github.com/wepublish/wepublish/pull/71) save preTitel in teaser ([@roosnic1](https://github.com/roosnic1))
  * [#56](https://github.com/wepublish/wepublish/pull/56) bug fix - transform metadata properties to avoid errors on save ([@roosnic1](https://github.com/roosnic1))
* `api`
  * [#67](https://github.com/wepublish/wepublish/pull/67) Add delete token permission to AllPermissions ([@yan90wang](https://github.com/yan90wang))

#### :house: Internal
* `editor`
  * [#53](https://github.com/wepublish/wepublish/pull/53) F/wep 78 editor multi language ([@0815pascal](https://github.com/0815pascal))
* `api`
  * [#58](https://github.com/wepublish/wepublish/pull/58) Removed double dependency ([@roosnic1](https://github.com/roosnic1))
* `api-db-mongodb`, `api-media-karma`, `api`, `editor`, `oauth2`
  * [#55](https://github.com/wepublish/wepublish/pull/55) Cleanup of old version number mechanism ([@roosnic1](https://github.com/roosnic1))

#### Committers: 4
- Nicolas Roos ([@roosnic1](https://github.com/roosnic1))
- Pascal Witzig ([@0815pascal](https://github.com/0815pascal))
- Penina Cheshin ([@penk85](https://github.com/penk85))
- [@dev7ch](https://github.com/dev7ch)
- [@yan90wang](https://github.com/yan90wang)


## [0.8.5](https://github.com/wepublish/wepublish/compare/v0.8.4...v0.8.5) (2020-10-01)


### Bug Fixes

* **example-api:** await user creation in db seed ([271fa17](https://github.com/wepublish/wepublish/commit/271fa179b6bd9634ff653bafdb173d545dd57661))
* **mongodb:** await mongoclient calls to avoid memory leaks ([#48](https://github.com/wepublish/wepublish/issues/48)) ([2b73eda](https://github.com/wepublish/wepublish/commit/2b73eda7d93313d1a6d338558fd0ce1918127b22))





## [0.8.4](https://github.com/wepublish/wepublish/compare/v0.8.0...v0.8.4) (2020-08-12)

**Note:** Version bump only for package wepublish
