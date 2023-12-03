/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#main-area-box div.mainBox\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Live Cams\"]]}]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/maps\"],[\"spath\",\".toponym-service-orgs > div[data-chunk=\\\"search-snippet\\\"]:has(> a.search-lavka-view)\"]]}"],["{\"selector\":\"\",\"action\":[\"style\",\"padding-right: 0 !important; overflow: auto !important;\"],\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\"body[style]\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\".Distribution-Splashscreen\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\".HeaderDesktopActions-Distribution\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\"div.Root[id]:has(> button.SplashscreenDefault-DeclineButtonOuter)\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/^\\\\/$|\\\\/\\\\?/\"],[\"spath\",\"div[data-zone-data*=\\\"bannerUrl\\\"]:not([data-zone-name=\\\"deals-banner\\\"])\"]]}"],["{\"selector\":\"div[itemtype=\\\"https://schema.org/Product\\\"] div[id^=\\\"merch_html_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id] .mfe-header > h2.mfe-pull-left\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}","{\"selector\":\"div[itemtype=\\\"https://schema.org/Product\\\"] div[id^=\\\"merch_html_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id] h2.mfe-card-group-title\",\"tasks\":[[\"has-text\",\"sponsored\"]]}]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/Topadvertentie|Pub au top/\"]]}]]}"],["{\"selector\":\"article > h4\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Читайте и подписывайтесь на нас\"]]}]]}"],["{\"selector\":\".searchlist > ul > li > a[href^=\\\"cplayer://search.minna.cc/rss/word.jsp\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar-block > div.block-header\",\"tasks\":[[\"has-text\",\"Рекомендуем\"],[\"spath\",\" ~ div[style^=\\\"margin-bottom: 10px\\\"]\"]]}","{\"selector\":\".sidebar-block > div.block-header\",\"tasks\":[[\"has-text\",\"Рекомендуем\"]]}"],["{\"selector\":\"#eachDownloadedModal .ac-btn[href^=\\\"https://premium.\\\"]\",\"tasks\":[[\"upward\",\"#eachDownloadedModal\"]]}"],["{\"selector\":\".sticky-tagline\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^These Pretty Faces Are/\"]]}]]}"],["{\"selector\":\"body style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"],["{\"selector\":\".elementor-column-wrap div.elementor-widget\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] .elementor-heading-title\",\"tasks\":[[\"has-text\",\"Get Our Best tips\"]]}]]}"],["{\"selector\":\".join-byjus-form-widget\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"header + article > div[class^=\\\"sc-\\\"] > div[class] > div[class] > a[href^=\\\"https://app.clipchamp.com/\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".stickyColumn + div[data-video-player] .videoPlayer\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".c-avStickyVideo\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".alert-wrapper > div > div > div > a[href$=\\\"/offers\\\"]\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"#root > header ~ div[class] > span.theme-light > a[href$=\\\"/users/login\\\"]\",\"tasks\":[[\"upward\",\"header ~ div[class]\"]]}","{\"selector\":\"div[data-hook=\\\"deviation_meta\\\"] ~ div[class] > a[href=\\\"https://www.deviantart.com/core-membership\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[sizes^=\\\"[object Object]\\\"]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}"],["{\"selector\":\"iframe[src^=\\\"https://www.obilet.com/widget/\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#containerIncognitoLayer\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"] > h2 > span\",\"tasks\":[[\"has-text\",\"Follow Us\"]]}]]}"],["{\"selector\":\"div[data-mcomponent=\\\"MContainer\\\"] > div[data-mcomponent=\\\"MContainer\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-mcomponent=\\\"TextArea\\\"] > div > .native-text\",\"tasks\":[[\"has-text\",\"Sugggested Videos\"]]}]]}","{\"selector\":\"div[data-type=\\\"vscroller\\\"] > div[data-mcomponent=\\\"MContainer\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-actual-height] > div[data-actual-height] > div[data-mcomponent*=\\\"TextArea\\\"] > .native-text\",\"tasks\":[[\"has-text\",\"Suggested post from a public group\"]]}]]}"],["{\"selector\":\".banner-ad-mark\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".l-contents-block\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > .heading__title\",\"tasks\":[[\"has-text\",\"PR TIMES\"]]}]]}","{\"selector\":\".l-contents-block\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > .heading__title\",\"tasks\":[[\"has-text\",\"特設・企画\"]]}]]}"],["{\"selector\":\"div[class] > div[class] > a[class^=\\\"c-cntCard-110\\\"][class*=\\\"_thumb\\\"][href*=\\\"/?tag=\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".relative > div.absolute\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"Remove ads\"]]}]]}"],["{\"selector\":\"div[class^=\\\"css-\\\"] > div\",\"tasks\":[[\"has\",{\"selector\":\"> div[dir]\",\"tasks\":[[\"has-text\",\"/^AD$/\"]]}]]}"],["{\"selector\":\"#unic-gdpr\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget span\",\"tasks\":[[\"has-text\",\"DISCLOSURE\"]]}]]}"],["{\"selector\":\".sticky-inner-wrapper > div > aside[class^=\\\"_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > div[class] > div[class] > h2[class]\",\"tasks\":[[\"has-text\",\"/^(Upgrade to|Dissenter Shop)/\"]]}]]}","{\"selector\":\"div[tabindex=\\\"-1\\\"] ~ div > div\",\"tasks\":[[\"has\",{\"selector\":\"span[data-text]\",\"tasks\":[[\"has-text\",\"/^(Upgrade to|Help keep Gab online|Invest in Gab|Dissenter Shop)/\"]]}]]}"],["{\"selector\":\".l-container p[class]\",\"tasks\":[[\"has-text\",\"Подписывайтесь\"]]}"],["{\"selector\":\"#sidebar div.block\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"/Помоги проекту, оставь комментарий/\"]]}]]}"],["{\"selector\":\"head > style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\".unselectable\"]]}"],["{\"selector\":\".page-conent > p\",\"tasks\":[[\"has-text\",\"/^Recommend for you:/\"],[\"spath\",\" + div.post-btn\"]]}","{\"selector\":\".page-conent > p\",\"tasks\":[[\"has-text\",\"/^Recommend for you:/\"]]}"],["{\"selector\":\"iframe[src^=\\\"https://ogs.google.com\\\"][src*=\\\"/widget/callout/\\\"]\",\"tasks\":[[\"upward\",\"div[style^=\\\"overflow: hidden; position: absolute; top: 0px; width:\\\"]\"]]}"],["{\"selector\":\"section[class] > div[jsaction][jscontroller]\",\"tasks\":[[\"has\",{\"selector\":\"button > span\",\"tasks\":[[\"has-text\",\"Install Chrome\"]]}]]}"],["{\"selector\":\".blog-post-body span > [style*=\\\"text-align: center;\\\"]:has(> a[href^=\\\"https://offers.hubspot.com/\\\"])\",\"tasks\":[[\"has-text\",\"Featured Resource:\"],[\"spath\",\" + p:has(> a[href^=\\\"https://offers.hubspot.com/\\\"])\"]]}","{\"selector\":\".blog-post-body span > [style*=\\\"text-align: center;\\\"]:has(> a[href^=\\\"https://offers.hubspot.com/\\\"])\",\"tasks\":[[\"has-text\",\"Featured Resource:\"]]}"],["{\"selector\":\"p + a[href=\\\"/toi-plus/plans\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".left-column-inner > div.plugin-memo\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidetitlebody > div.sidetitle\",\"tasks\":[[\"has-text\",\"Amazon\"]]}]]}"],["{\"selector\":\"section.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.clearfix > div h3\",\"tasks\":[[\"has-text\",\"/Print|ads/\"]]}]]}"],["{\"selector\":\".alignC > div.mTop10 > div[style=\\\"border:1px solid #ccc;\\\"]\",\"tasks\":[[\"has-text\",\"-PR-\"]]}","{\"selector\":\".c-feed_cell > a > .c-feed_visual-pr\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"div[class^=\\\"contType00\\\"] > div > div > div > a[href*=\\\"/?lid=ads_makerselect\\\"]\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\"li .p-siteNews_general_visual-pr\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\"li .icnPr\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\"#matchesTable div.footballco-container\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".main_body > div.wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> h1.bottom_border\",\"tasks\":[[\"has-text\",\"Sponsored Articles\"]]}]]}"],["{\"selector\":\".inside-right-sidebar > aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget span.title-text\",\"tasks\":[[\"has-text\",\"ONLINE MUSIC COURSES\"]]}]]}"],["{\"selector\":\".customScrollBar > div > div[class^=\\\"_\\\"] > div > div.full:not([aria-label]):not([data-convid]):not([role=\\\"option\\\"])\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".customScrollBar[tabindex] .customScrollBar > div[style] > div:first-child\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-animatable] div[class] > div[class] > div[class] > span\",\"tasks\":[[\"has-text\",\"Microsoft Outlook\"]]}]]}","{\"selector\":\"div[data-app-section=\\\"MessageList\\\"] .customScrollBar > div[class] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class]:first-child > div[id][class] div[class] > span\",\"tasks\":[[\"has-text\",\"Microsoft Outlook\"]]}]]}","{\"selector\":\"div[data-app-section=\\\"MessageList\\\"] > div:first-child\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > div div > span\",\"tasks\":[[\"has-text\",\"Microsoft Outlook\"]]}]]}","{\"selector\":\"div[data-focuszone-id] + div > button > div > img[class][src$=\\\"/leftNavUpsellIcons/premium-diamond-01.svg\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".list-box div.list-data > p.list-cat\",\"tasks\":[[\"has-text\",\"Sponsored\"],[\"upward\",\".list-box\"]]}"],["{\"selector\":\".title > div\",\"tasks\":[[\"has-text\",\"Webcam LuxureTV Club\"]]}"],["{\"selector\":\".video div.header\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"Madness Webcam\"]]}]]}"],["{\"selector\":\".article_listItem > a > h3 > span.is-advertising\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"main > div > section\",\"tasks\":[[\"has\",{\"selector\":\"> div > h2\",\"tasks\":[[\"has-text\",\"Learn From the Best\"]]}]]}"],["{\"selector\":\".download-option-btn > button > a[href*=\\\"download\\\"][href*=\\\".html\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\" \\\"] > h2[class*=\\\" \\\"]\",\"tasks\":[[\"has-text\",\"/^Get unlimited access/\"]]}]]}"],["{\"selector\":\".has-black-color.has-text-color\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"関連商品\"]]}]]}"],["{\"selector\":\".inside-right-sidebar > aside.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> h4.widget-title\",\"tasks\":[[\"has-text\",\"ПОДПИСЫВАЙТЕСЬ\"]]}]]}"],["{\"selector\":\"div[class^=\\\"Setsuzoku_ourServicesDList\\\"] > dl > dt\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"ニフティのサービス\"]]}]]}"],["{\"selector\":\"div[class^=\\\"adsArea_\\\"] > section > div > div[class^=\\\"__item_\\\"] img[alt=\\\"PR\\\"]\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"upward\",\"div[class^=\\\"__item_\\\"]\"]]}"],["{\"selector\":\".p-items_main > div > section ~ div > a[href^=\\\"/signup?\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[data-testid=\\\"frontpage-sidebar\\\"] > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class][data-redditstyle=\\\"false\\\"] > div[class] > div[class] > button\",\"tasks\":[[\"has-text\",\"Try Now\"]]}]]}"],["{\"selector\":\".sidebar-box > h3\",\"tasks\":[[\"has-text\",\"Featured\"],[\"upward\",1]]}"],["{\"selector\":\".main-items > .col-container > .col-item\",\"tasks\":[[\"has\",{\"selector\":\"> .story-card-feed > .col-container > article.storycard:first-child:has(span.sponsored) + article.storycard:last-child:has(span.sponsored)\"}]]}","{\"selector\":\".piano-information-default li > a > span.sponsored\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"div[class^=\\\"grid__col--lg-\\\"] span.sponsored\",\"tasks\":[[\"upward\",\"div[class^=\\\"grid__col--lg-\\\"]\"]]}"],["{\"selector\":\"td[width=\\\"160\\\"] > div[style] > div[id][style]\",\"action\":[\"style\",\"font-size: 0 !important;\"],\"tasks\":[[\"has\",{\"selector\":\"> div[class]\",\"tasks\":[[\"has-text\",\"定期的に配置が\"]]}]]}"],["{\"selector\":\"button ~ div[id] > div[id] div[class$=\\\"promoted\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".wpb_wrapper > div.tdm_block\",\"tasks\":[[\"has\",{\"selector\":\"> div.td-block-row h3\",\"tasks\":[[\"has-text\",\"/^Stay in touch/\"]]}]]}"],["{\"selector\":\".resources-bar-header\",\"tasks\":[[\"has-text\",\"Sponsored News\"]]}"],["{\"selector\":\"body > style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"@media print\"]]}"],["{\"selector\":\".row-fluid > div.widget-span > div.widget-type-linked_image\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class^=\\\"tcp-headline-\\\"][style]\",\"tasks\":[[\"has\",{\"selector\":\"> div.tcp-headline__title-container > h2.tcp-headline__title\",\"tasks\":[[\"has-text\",\"Mastercard\"]]}],[\"spath\",\" + div[style]\"]]}","{\"selector\":\"div[class^=\\\"tcp-headline-\\\"][style]\",\"tasks\":[[\"has\",{\"selector\":\"> div.tcp-headline__title-container > h2.tcp-headline__title\",\"tasks\":[[\"has-text\",\"Mastercard\"]]}]]}"],["{\"selector\":\"section[aria-labelledby^=\\\"accessible-list\\\"] div[style^=\\\"transform\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-testid=\\\"card.wrapper\\\"] span[style]\",\"tasks\":[[\"has-text\",\"/^(asahsi\\\\.com|bnc\\\\.lt|fanlink\\\\.to|gamerzz\\\\.net|jp\\\\.cookie-food\\\\.com|keeping-healthy\\\\.com|kinmirainews\\\\.com|helpgive\\\\.to|(n9oi1|mainichi|nhk|nikkei|sankei|sokuhou|tokyo-np|yomiuri|yytbe)\\\\.app\\\\.link|sancei\\\\.com|sankeii\\\\.com|sokuhou\\\\.onelink\\\\.me|tongari-tent\\\\.blue)$/\"]]}]]}"],["{\"selector\":\"div:not([class])\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/plus?referrer=\\\"] > div\",\"tasks\":[[\"has-text\",\"Unsplash+\"]]}]]}"],["{\"selector\":\".widget_llama_widget > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-title > h3\",\"tasks\":[[\"has-text\",\"Our Popular\"]]}]]}"],["{\"selector\":\".article-main-data > p > strong\",\"tasks\":[[\"has-text\",\"WATCH\"]]}"],["{\"selector\":\"div[data-test-id=\\\"efv-header\\\"] > div[data-test-id=\\\"efv-subheader\\\"]\",\"tasks\":[[\"matches-css\",{\"name\":\"font-size\",\"value\":\"^13px$\"}]]}","{\"selector\":\"div[style=\\\"width:640px;height:360px\\\"][id=\\\"video-player\\\"]\",\"tasks\":[[\"upward\",\"div:not([class])\"]]}"],["{\"selector\":\".webPlayerElement .atvwebplayersdk-player-container div:not([class]):not([tabindex]) > div[class]:not([style*=\\\"margin\\\"]) > div[class] > div[class] > div[class] > span\",\"tasks\":[[\"has-text\",\"Bewertung\"]]}"],["{\"selector\":\"section[class^=\\\"artikel-\\\"] > ul > li:not([class])\",\"tasks\":[[\"has\",{\"selector\":\"> a[href] > h3.post\",\"tasks\":[[\"has-text\",\"Anzeige\"]]}]]}"],["{\"selector\":\".srp-list > .s-item\",\"tasks\":[[\"has\",{\"selector\":\"> div > .s-item__info > a > div[style=\\\"display:flex;\\\"] span[role=\\\"text\\\"] > span\",\"tasks\":[[\"has-text\",\"A\"]]}]]}"],["{\"selector\":\".box-reload > .media:not(:has(> *))\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/[a-zA-Z0-9]/\"]]}],[\"spath\",\" + hr\"]]}","{\"selector\":\".box-reload > .media:not(:has(> *))\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/[a-zA-Z0-9]/\"]]}]]}"],["{\"selector\":\".ho-modules-container > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > div[class]\",\"tasks\":[[\"has-text\",\"Eigenwerbung\"]]}]]}","{\"selector\":\"article[data-component=\\\"TeaserContainer\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > div[data-component=\\\"TeaserLinkContainer\\\"] > footer[data-component=\\\"TeaserMeta\\\"] > .font-bold\",\"tasks\":[[\"has-text\",\"heise-Angebot\"]]}],[\"spath\",\" + hr.border-gray-100\"]]}","{\"selector\":\"article[data-component=\\\"TeaserContainer\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > div[data-component=\\\"TeaserLinkContainer\\\"] > footer[data-component=\\\"TeaserMeta\\\"] > .font-bold\",\"tasks\":[[\"has-text\",\"heise-Angebot\"]]}]]}"],["{\"selector\":\"style#kameleoonLoadingStyleSheet\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".blog-widget-list > .infinite-post\",\"tasks\":[[\"has\",{\"selector\":\"> span.shortlist\",\"tasks\":[[\"has-text\",\"Tarife\"]]}]]}"],["{\"selector\":\".newsTicker > li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/(Anzeige)|Schnäppchen|sale|(?<!-)Angebot(?!s)/\"]]}]]}","{\"selector\":\".topnews > div\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/(Anzeige)|Schnäppchen|sale|(?<!-)Angebot(?!s)|für nur [0-9]{1,} Euro/\"]]}]]}","{\"selector\":\".topnews > div\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/(Anzeige)|Schnäppchen|sale|(?<!-)Angebot(?!s)|für nur [0-9]{1,} Euro|nur bis[\\\\s\\\\S]*Euro|günstig/\"]]}]]}","{\"selector\":\"div[class^=\\\"hp_\\\"] div\",\"tasks\":[[\"has\",{\"selector\":\"> .topteaser\",\"tasks\":[[\"has-text\",\"/(Anzeige)|wieder lieferbar|Schnäppchen|sale|An(?<!-)Angebot(?!s)gebot|Rabatt|nur bis[\\\\s\\\\S]*Euro/\"]]}]]}"],["{\"selector\":\"#main > h2\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/(Anzeige)|wieder erhältlich:|Schnäppchen|sale|(?<!-)Angebot(?!s)|für nur [0-9]{1,} Euro|Chance!|günstig/\"]]}]]}"],["{\"selector\":\"#app > div.fixed > a[href=\\\"/#buy\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"body > style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"],["{\"selector\":\"head > style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/@media print.*WARNING:/\"]]}"],["{\"selector\":\"bsp-subscription-popup\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"ul[data-aut-id=\\\"itemsList\\\"] > li[class]:not([data-aut-id])\",\"tasks\":[[\"has\",{\"selector\":\"h3 > div\",\"tasks\":[[\"has-text\",\"Want to see your stuff here?\"]]}]]}"],["{\"selector\":\".GeneralMaterial-article > p[class^=\\\"SimpleBlock-module_p__\\\"] > a[href$=\\\"-skachat-v-pdf\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".post_content > p\",\"tasks\":[[\"has-text\",\"ПРОИЗВЕДЕН И РАСПРОСТРАНЕН ИНОСТРАННЫМ АГЕНТОМ\"]]}"],["{\"selector\":\".l-main > div.b-top > div[class^=\\\"news-section-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[rel=\\\"nofollow\\\"] > span\",\"tasks\":[[\"has-text\",\"Поддержите команду\"]]}]]}"],["{\"selector\":\".stackable .red.floating.message > p > .adversal\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".c-app-card-block > div.c-app-card_rank > span.app-ranking_label--pr\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".p-richcard div.c-app-icon > a[data-ad-id]\",\"tasks\":[[\"upward\",\".p-richcard\"]]}"],["{\"selector\":\".entries-item-link[href^=\\\"javascript:\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".block-header\",\"tasks\":[[\"has-text\",\"SPECIAL\"]]}"],["{\"selector\":\".news-box-article-list > li\",\"tasks\":[[\"has\",{\"selector\":\"span.date\",\"tasks\":[[\"has-text\",\"広告\"]]}]]}"],["{\"selector\":\".p-grid__item h2.c-heading-h2__text > a[href=\\\"/content/editorialad/\\\"]\",\"tasks\":[[\"upward\",\".p-grid__item\"]]}"],["{\"selector\":\".block-recommend-list > div.gameScrollArea\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"li[class^=\\\"ListItem-sc-\\\"] img[src$=\\\"_stop/376_376.png\\\"]\",\"tasks\":[[\"upward\",\"li\"]]}"],["{\"selector\":\".l-contents__sub > section.l-contents__section\",\"tasks\":[[\"has\",{\"selector\":\"> ul.c-list-article--vertical span.c-text-note\",\"tasks\":[[\"has-text\",\"PR\"]]}]]}"],["{\"selector\":\".l-sidebar > aside.l-sidebar__block\",\"tasks\":[[\"has\",{\"selector\":\"> div.l-sidebar-ranking > h2\",\"tasks\":[[\"has-text\",\"SAMURAI JAPAN\"]]}]]}"],["{\"selector\":\".walkthrough-recruit-banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".p-slider1-cardItem > article > ul > li.p-slider1-cardAssistSponsored\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\".p-sliderSmall1-card1 > article > p > a[href^=\\\"https://s-adserver.cxad.cxense.com\\\"]\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\".p-timeline-card1 > div > div > ul > li.p-timeline-card1AssistSponsored\",\"tasks\":[[\"upward\",4]]}","{\"selector\":\".p-timeline-cardItem > article > div > ul > li.p-timeline-cardAssistSponsored\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".middlelabel\",\"tasks\":[[\"has-text\",\"[PR]\"]]}"],["{\"selector\":\".osusume > .pickup-list > li.item .title\",\"tasks\":[[\"has-text\",\"【PR\"],[\"upward\",\"li\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/corez\"],[\"spath\",\"#ad\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/corez\"],[\"spath\",\".plugin-box:has(> a[href=\\\"https://blog.livedoor.com/matomeportal/\\\"])\"]]}"],["{\"selector\":\".prom > a.prom-all\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#main > .ttl07\",\"tasks\":[[\"has-text\",\"編集部オススメ記事\"]]}"],["{\"selector\":\".r-article-content > .kakomi\",\"tasks\":[[\"has\",{\"selector\":\"> .img_sentence > .img_sentence_right > font\",\"tasks\":[[\"has-text\",\"Sponsored by\"]]}]]}"],["{\"selector\":\".public-DraftEditor-content div.article-show-page__text\",\"tasks\":[[\"has\",{\"selector\":\"> div div[class]\",\"tasks\":[[\"has-text\",\"事業所運営のお困りを１つ選んでください\"]]}]]}"],["{\"selector\":\"#pickup-box > article img[src^=\\\"/image/pr/\\\"]\",\"tasks\":[[\"upward\",\"article\"]]}"],["{\"selector\":\".col-right > div.widget-group\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget div.item-info > div.item-category\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]]}"],["{\"selector\":\".home-block > h3\",\"tasks\":[[\"has-text\",\"Промо фанфиков\"]]}"],["{\"selector\":\"#root > div:not([class]):not([id]) > div[class^=\\\"sc\\\"] > div[class]:not([class^=\\\"sc\\\"]) > div[class^=\\\"sc\\\"] > section[class]:not([class^=\\\"sc\\\"]) > div[class^=\\\"sc\\\"] > .gtm-toppage-premium-close\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"section[class] aside[class*=\\\"-0 \\\"] > iframe[src^=\\\"https://imp.pixiv.net/premium_\\\"][class^=\\\"sc-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".col-lg-4 > strong.small\",\"tasks\":[[\"has-text\",\"おすすめ文章作成エディタ\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/p/rblink\"],[\"spath\",\".separator > *:not(.blockLink)\"]]}"],["{\"selector\":\".main-container > h3\",\"tasks\":[[\"has-text\",\"PR記事\"]]}"],["{\"selector\":\"body style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"/-webkit-tap-highlight-color:|::selection/\"]]}"],["{\"selector\":\"div[data-ad-sticky-reference] > div[class^=\\\"RCP__sc-\\\"] > div[class^=\\\"RCP__sc-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.MuiPaper-rounded > button\",\"tasks\":[[\"has-text\",\"Commandez vos ingrédients\"]]}]]}","{\"selector\":\"div[data-ad-sticky-reference] > div[class^=\\\"RCP__sc-\\\"] > div[class^=\\\"RCP__sc-\\\"]\",\"tasks\":[[\"has-text\",\"ou sur Amazon.fr\"]]}"],["{\"selector\":\".GridContainer > div.GridItem\",\"tasks\":[[\"has\",{\"selector\":\"> div.border > div.GridContainer > div.GridItem > p\",\"tasks\":[[\"has-text\",\"/^Try the PDFCreator desktop|^Take your PDF/\"]]}]]}"],["{\"selector\":\".article__media__title\",\"tasks\":[[\"has-text\",\"/^Le [cC]oup/\"]]}"],["{\"selector\":\".main-wrapper > div[data-box-name=\\\"Belka-desktop\\\"] > .opbox-sheet-wrapper > .opbox-sheet > div[data-prototype-id=\\\"allegro.advertisement.video\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"advertisement-module\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"section[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > a[href=\\\"/oferta/\\\"][style=\\\"cursor: pointer; text-decoration: none;\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#right > p\",\"tasks\":[[\"has-text\",\"/Подписывайтесь|Рассылка/\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/pogoda\"],[\"spath\",\".debug-ad\"]]}"],["{\"selector\":\".single-article > div.widgets-renderer .article-card__middle-observer\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > span\",\"tasks\":[[\"has-text\",\"/Промо|Партнерский/\"]]}]]}"],["{\"selector\":\".pulse-lenta div[class*=\\\"_\\\"] > div > div[class*=\\\" \\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class] > a[href^=\\\"https://pulse.mail.ru/\\\"][target=\\\"_blank\\\"] > div[class] span[class]\",\"tasks\":[[\"has-text\",\"Промо\"]]}]]}"],["{\"selector\":\".textwidget > center > strong\",\"tasks\":[[\"has-text\",\"Подпишись\"]]}"],["{\"selector\":\".currentnews__subtitle > noindex\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"РАСПРОСТРАНЕН ИНОСТРАННЫМ АГЕНТОМ\"]]}]]}"],["{\"selector\":\"div[data-stk-css][data-ce-tag]\",\"tasks\":[[\"has-text\",\"PaperVPN\"]]}"],["{\"selector\":\"footer div.delivery-notify-text\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[class^=\\\"stories-feed_\\\"] > article.story > div.story__main span.story__sponsor\",\"tasks\":[[\"upward\",\"article.story\"]]}"],["{\"selector\":\".commercial-branding [data-special*=\\\":okko:\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\"div[class^=\\\"SerpWarning__warning\\\"]\"]]}"],["{\"selector\":\".list-item > a.list-item__link\",\"tasks\":[[\"has-text\",\"Отключить рекламу\"]]}"],["{\"selector\":\"head > style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"user-select:none\"]]}"],["{\"selector\":\"div[class^=\\\"item\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[class^=\\\"banner-\\\"] > div[class^=\\\"contentWrapper-\\\"] > div > div[class^=\\\"label-\\\"]\",\"tasks\":[[\"has-text\",\"БЕСПЛАТНЫЙ КУРС\"]]}]]}"],["{\"selector\":\"div[cells] > div.articles-cards-list__cell > div.grid-cell__body > a.card-banner-priorityclub\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"\",\"action\":[\"style\",\"overflow: auto !important; padding-right: 0 !important;\"],\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\"body[style=\\\"padding-right: 17px; overflow: hidden;\\\"]\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/search\"],[\"spath\",\"body[style=\\\"padding-right: 17px; overflow: hidden;\\\"] > div.DistrSplashscreen_outer-cross\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/video/search\"],[\"spath\",\".prevention_instance_rknWarning\"]]}"],["{\"selector\":\".v-alert.info a.white--text[href=\\\"/about\\\"]\",\"tasks\":[[\"upward\",\".info\"]]}"],["{\"selector\":\"#sidebar1-wrap > div.section\",\"tasks\":[[\"has\",{\"selector\":\"> div.secondaryContent > h3\",\"tasks\":[[\"has-text\",\"Радио Online\"]]}]]}"],["{\"selector\":\"div[class^=\\\"index-module__wrapper\\\"] > div#btn_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> button[class]\",\"tasks\":[[\"has-text\",\"Отключить рекламу\"]]}]]}"],["{\"selector\":\".card-body > div.card-right div.card-shop\",\"tasks\":[[\"has\",{\"selector\":\"> div.card-shop-top > div[class]\",\"tasks\":[[\"has-text\",\"Реклама\"]]}]]}"],["{\"selector\":\"div[data-ui-id=\\\"post\\\"] > div.stk-grid\",\"tasks\":[[\"has\",{\"selector\":\"a[target=\\\"_blank\\\"]\",\"tasks\":[[\"has-text\",\"Donate\"]]}]]}"],["{\"selector\":\".inside-sidebar h3\",\"tasks\":[[\"has-text\",\"Featured services\"],[\"spath\",\" ~ p\"]]}","{\"selector\":\".inside-sidebar h3\",\"tasks\":[[\"has-text\",\"Featured services\"]]}"],["{\"selector\":\".wpb_wrapper > div.td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"> div > h4 > span\",\"tasks\":[[\"has-text\",\"Подпишитесь на нас\"]]}]]}"],["{\"selector\":\"#app > div[class]\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/data-v-/\",\"value\":\"\"}],[\"spath\",\" > div > div:has(> a[href=\\\"https://namu.news\\\"])\"]]}","{\"selector\":\"aside > div[class]\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/data-v-/\",\"value\":\"\"}],[\"spath\",\":has(> a[href=\\\"https://namu.news\\\"])\"]]}"]];

const hostnamesMap = new Map([["ya.ru",2],["ebay.com.au",4],["ebay.com",4],["ebay.co.uk",4],["2ememain.be",5],["minsknews.by",6],["search.minna.cc",7],["yummyanime.club",8],["yummyanime.com",8],["ac-illust.com",9],["photo-ac.com",9],["silhouette-ac.com",9],["adultdvdempire.com",10],["bestxiaomiproducts.com",11],["moviesrush.in",11],["blunt-therapy.com",12],["byjus.com",13],["clipchamp.com",14],["cnet.com",15],["download.cnet.com",16],["deezer.com",17],["deviantart.com",18],["discovermagazine.com",19],["e-yasamrehberi.com",20],["elpais.com",21],["store.epicgames.com",22],["m.facebook.com",23],["famitsu.com",24],["contents.fc2.com",25],["flightradar24.com",26],["flipkart.com",27],["fotor.com",28],["freetutorialonline.com",29],["gab.com",30],["gagadget.com",31],["games-xxx.com",32],["genuineactivator.com",33],["lapandilladelarejilla.es",33],["gihosoft.com",34],["calendar.google.com",35],["docs.google.com",35],["drive.google.com",35],["mail.google.com",35],["news.google.com",35],["chromewebstore.google.com",36],["blog.hubspot.com",37],["timesofindia.indiatimes.com",38],["jisaka.com",39],["journalstar.com",40],["kakaku.com",41],["s.kakaku.com",42],["kooora.com",43],["ktar.com",44],["libertyparkmusic.com",45],["outlook.live.com",46],["lurenewsr.com",47],["luxuretv.com",48],["madnessporn.com",49],["marry-xoxo.com",50],["masterclass.com",51],["down.mdiaload.com",52],["medium.com",53],["menuguildsystem.com",54],["modelist-konstruktor.com",55],["nifty.com",56],["nikkei.com",57],["qiita.com",58],["reddit.com",59],["reddittorjg6rue252oqsxryoxengawnmo46qy4kyii5wtqnwfj4ooad.onion",59],["saashub.com",60],["sankei.com",61],["sekai-kabuka.com",62],["simsdom.com",63],["techgoing.com",64],["techtarget.com",65],["theaircurrent.com",66],["tinypulse.com",67],["hk.trip.com",68],["twitter.com",69],["unsplash.com",70],["upgrad.com",71],["wionews.com",72],["mail.yahoo.com",73],["amazon.de",74],["drwindows.de",75],["ebay.de",76],["gamestar.de",77],["heise.de",78],["lidl.de",79],["mobiflip.de",80],["winfuture.de",81],["m.winfuture.de",82],["epicweb.dev",83],["world4.eu",[84,85]],["sudya-dredd.ru",84],["lopinion.fr",86],["olx.in",87],["meduza.io",88],["thebell.io",89],["zerkalo.io",90],["adshrink.it",91],["app-liv.jp",92],["aumo.jp",93],["bunshun.jp",94],["iwate-np.co.jp",95],["nishinippon.co.jp",96],["oricon.co.jp",97],["auctions.yahoo.co.jp",98],["dailyshincho.jp",99],["full-count.jp",100],["gamewith.jp",101],["gizmodo.jp",102],["imepic.jp",103],["inside-games.jp",104],["blog.livedoor.jp",105],["biglobe.ne.jp",106],["ren-ai.jp",107],["roomie.jp",108],["snabi.jp",109],["tsuiran.jp",110],["15min.lt",111],["ficbook.net",112],["pixiv.net",113],["privatter.net",114],["rockmods.net",115],["kumin.news",116],["moviesrush.one",117],["marmiton.org",118],["pdfforge.org",119],["programme-television.org",120],["allegro.pl",121],["portal.librus.pl",122],["videostar.pl",123],["pilot.wp.pl",123],["colta.ru",124],["dzen.ru",125],["lifehacker.ru",126],["mail.ru",127],["mywebpc.ru",128],["netprizyvu.ru",129],["paperpaper.ru",130],["perekrestok.ru",131],["pikabu.ru",132],["rambler.ru",133],["nova.rambler.ru",134],["smotrim.ru",135],["teammy.ru",136],["journal.tinkoff.ru",137],["vedomosti.ru",138],["yandex.ru",139],["fistia.proj.tokyo",140],["megatrack.top",141],["more.tv",142],["besplatka.ua",143],["the-village.com.ua",144],["infolaw.co.uk",145],["nuz.uz",146],["namu.wiki",147]]);

const entitiesMap = new Map([["pussyspace",0],["yandex",[1,2]],["market.yandex",3]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/