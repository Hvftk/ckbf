/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banners",".float-ck-center-lt","#custom_html-42",".top-mobile-banner",".cash-fish",".cash-fish-pc,\n.preload-pc",".banner-sticky-footer-wrapper","#catfish","#chilladv,\n#headermbads,\n#headerpcads,\n#mobiads,\n#pcads","a[rel=\"nofollow\"]",".below_ads","#overlay","#hide_float_right","#middle-box-screen,\ndiv[style^=\"position: fixed; bottom: 0px;\"]","#popup-giua-man-hinh","#quang-cao",".item-more,\n.widget-sidebar-block","#backgroundPopupp,\n#popupContact",".btn-single-cuoc","#mp-adbk,\n#mp-adx-b32",".mp-adz",".v4j-header > a[target=\"_blank\"]",".code-block",".jw-logo",".banner-top",".module_ahlaejaba",".float-ck","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]","#player + div[id]",".catfish-ck",".t_logo","#qc_clgt",".advertisement","#fbox-background,\n.gnarty-offads","#mobile-ads",".ads",".ai-close-fit",".fade.show",".btn-user.r-btn,\n.sidebar-right",".mct_-bet",".modal-backdrop.show",".ibs-bet","div[class*=\"size-\"]","#m-bet","#BaoMoi_HalfPage,\n[id=\"__next\"] > div:has(#BaoMoi_Masthead)",".bm_B > div,\ndiv.ad-banner-list,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".aHrefAff,\n.adsInPlayer,\n.bet-list,\n.buttonFabet,\n.top-bet-list","#wap_bottombanner",".company","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]","#right_float,\n.art_header_text,\n[id$=\"float_banner\"]","[class*=\"_banner\"]",".menu-mobile.hot-menu",".container-banner,\n.logo-top-right-append-custom,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".button-bottom-center-append-custom",".button-in-player-box",".sticky",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".banner-bottom-append-custom",".footer-banner",".widget.widget_text",".block-bookmaker.block.most-view",".banner-preload","#text-13,\n#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".adblock,\n.popup",".adsv","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#custom_html-7",".div_box_adv","div.box-aside","#content > div[align=\"right\"],\n#login-ads,\n#playerDailymotion,\n.video-player,\n.wt-ads,\n.wt-ads2",".ad-pin-right-bottom",".adv",".top-right",".line-ads",".ad-container","#home_header","#fixedban,\ndiv[class^=\"banner-mobile\"]",".samCustomSize.samAlignCenter.samCodeUnit,\n.samItem","#mobileCatfishz","#antiblocker,\n#antiblocker_underplayer","#layerLogo",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense","#sideAdsLeft,\n#sideAdsRight",".banner-bot-mobile,\n.banner-top-mobile,\n.preload",".catfishLoader","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".ads-embed,\n.float-ck-center-lt1,\n.separator_mb,\n.separator_pc,\n.topbaner,\n.topbaner_mb","#ads_preload",".bn-lg-sidebar",".anhbn-qc",".ezo_ad,\n.ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)","[id^=\"bdaia-widget-html\"]:has(.widget-inner > [href*=\"premiumvns.com\"])",".dwpb-action,\n.fixtop",".adsHOC_wrapper__i5MTn,\n.homePage_adsHomeLeft__3_ruz.adsHOC_wrapper__Se0cN,\n.style_wrapperAll__jFIbb,\n.style_wrapperAll__oHfiq,\n.style_wrapper__2LeQp,\n.style_wrapper__YEwSi,\n.textlinkBox_notwrap__scC4g.textlinkBox_wrapper__1C2P9,\n.textlinkBox_wrapper,\np[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown","div[id^=\"adsphim-\"]",".ff-banner",".player-midpoint-progress",".player-vast-blocker","#sponsor-balloon","#js-read__body + .mt-3,\n#tpads-pc-top-page,\n.nh-read__alert,\n.px-3.nh-read__body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination,\ndiv.text-center.pt-3:nth-of-type(1),\ndiv.text-center.pt-3:nth-of-type(2)","div[class*=\"ads\"]",".adv_phim",".fixed_bottom","[class^=\"box_adv_ele\"]","#tdi_129",".container div:not(.top) > div.mrb5.mrt5.text-center > a,\n.mrb5.text-center.container",".pcs-modal","#IMAPointernctPlayer,\n#PL_R01,\n#PL_R02,\n.adv_home_300_250,\n.nqc-zone","#adsTopInPageBanner,\n#popup,\n.adsContainer",".pcCatfish","#itro_opaco","#video_player ~ div[id],\ndiv[style^=\"position:fixed;inset:0px;z-index:100000;\"]",".ads_popup","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".adpia_banner",".popUpBannerBox",".popmake",".box_option,\n.event_loader_e,\n.fix_bottom,\n.popup_center",".uniad-player + div[style]","#catfish-banner,\n.center-screen.backdrop,\n.ibetlogo,\n.topless","#itro_popup","#float_content_right",".preload-banner",".sticky-footer",".sgpb-popup-dialog-main-div-wrapper,\n.sgpb-popup-overlay",".ads-container",".ads-bottom-margin,\n.ads_blocks_advice,\n.bs-callout[style=\"min-height: 400px; margin-top:0px;\"]",".top-banner","#adsposttop","#adrighttop",".adbox",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide","#divFLRALeft,\n#divFLRARight,\np[style^=\"display: block; position: fixed;\"]","#tut4ktream_idAdLink",".no-auto-popup,\n.qc-adskeeper",".add-logo-ads",".stream-item","#footer-widget-area,\n.e3lan.e3lan-top",".box,\n.pum",".truct-catfish,\n.truct-widget","#ad_info_top","#sticky-footer","#topbanner,\n.footer-info","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#preload-zing,\n#uniad-head,\n.uniad-head",".sda-catfish",".happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar-mobile","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt",".row > div > center","div[class^=\"adbox\"]","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads","#adstop2,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1","#invideo_wrapper,\n.Ads,\n.mobile-catfixx,\n.pc-catfixx,\ndiv.Dvr-300,\ndiv[style^=\"position: fixed; top: 60px\"]","#preload-2","#hide_catfish","#top_oddd","#ballon-right,\n.most-view:nth-child(2)",".ab1",".single-video",".box_odds,\n.widget_custom_html.widget.widget_text",".fixed",".entry > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".dcmm-button-player.row",".widget",".show-ads-banner",".adLogoPlayer","#btn-skip,\n.vjs-banner-bar,\n[href=\"https://8xbet259.com/\"]","#app-web + .container[style=\"margin-bottom: 30px\"],\n.box-content .text-center[style],\n.item.item-betnow,\n.sv-link.btn-bet-top",".mmo-inner",".btn-betnow",".show.fade",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".show.fade.modal",".marquee-container","#quangcaopc",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex","div[id^=\"dnn_\"]",".button-ads-header,\n.main-carousel-wrapper,\n.top-bookies,\n.tvc-link-ads-full","#sec_top_bet,\n.banner-bellow-append-custom,\n.banner_ctn,\n.banner_fixed,\n.banner_left,\n.banner_right,\n.bet-btn,\n.bet_now,\n.block_banner,\n.btn-in-player.btn-bottom-right-append-player,\n.click_blank,\n.logo-top,\n[href=\"/top-bet.html\"]",".banner",".btn-odds",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#accordion",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".ad599div,\n.bets-now-button,\n.bets-now-ct,\n.pc_header,\na[data-wpel-link=\"external\"]","#closeAds",".v4j-header > center",".a--d-wrapper","div.container:nth-of-type(5)","#adx,\n.catfish-bottom,\ndiv.banner-catfish-bottom","#_AM_POPUP_FRAME","#menubentrai,\n.gnartyx-offads","[href*=\"cellphones.com.vn\"]",".textwidget",".expand-static-banner,\n.head--banner,\n.static-banner",".link-gold,\n[id^=\"banner\"]",".col-xl-3.col-lg-6.d-md-block.d-none,\n.lazyloaded.mx-auto.d-block.text-center.mb-20,\n.quangcao-down > p,\n.text-down",".ads_zone","#footer_fixed_ads",".cp-modal-popup-container,\n.simple-banner",".parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".adsbygoogle","#ad_global_below_navbar",".other-ads-container,\n.show-load-ad","#pc-top-banner","#boxmsgthongbaopopup","#custom_html-2,\n#custom_html-4",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]",".banner-sidebar","#sticker",".info-footer:nth-child(4)","#myModal",".preload-backdrop",".ads-wrapper",".mobile-catfix",".fancybox-container,\n.flex-wrap-banner,\n.movie-banner,\n.mv-banner,\n.ws-banner","#js-read-body > .text-center.pb-3,\n.text-center.pb-3.nh-read__pagination > .mb-1 > .text-muted,\n[href=\"https://metruyencv.com/goout/lazada\"],\nsection.nh-section:nth-of-type(5)",".single-box,\n[href^=\"//dooloust.net/\"]",".banner_top","#npads","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"],\nlixi88-ads-left,\nmb_catfish_1xbet,\nmobile-catfix,\npreload-11bet,\nsobet-ads-right","#headwrap > .computer,\n#headwrap > .mobile,\n.pc-catfix",".container > .right-box","#popup_banner_beta",".ad-script,\n.elementor-widget-container > .widget_custom_html","[href^=\"https://gotrackecom.info\"]","#desktopPopupBanner,\n.ads-floatingads,\n.banner-item,\n.top-nha-cai",".mct_-bet-bot",".mmo",".fixed-bottom",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit","#catfish-adv,\n#overlay-pop,\n.mobile-catfish,\n.pc-catfish",".ads-menu-item,\n.dcmm-button-player-item",".divdatcuoc",".elementor-widget-image",".box-rating","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar","#catfish_content","#idAdLink",".adsShowMobile",".ads-menu","#fixed-advert-center-panel",".PanelScroller.Notices",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads",".homePageAds",".logo2 > center",".box-host,\n.captain-sb,\n.vb-pr-box",".ft-box","[id^=\"Balloon_\"]","div.vebo-sp.container:nth-of-type(7)",".sticky_bottom","#bar_float_r,\n.quangcaomb",".adsMobile,\n.adsShowPc,\n.offer-rating.widget-offers__list",".offer__btn",".lixitt","#top-banner-pc",".container > .row > center",".footer-fixed-br-container","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-cuoc-8xbet,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2),\ndiv#match-child-1.d-lg-none.d-flex.col-sm-6.col-lg-6.grid-matches__item:nth-of-type(4),\nspan.btn-odds",".d-lg-none.d-block.p-1.text-center",".match-detail__offer","#ad-floating-right,\n.ad-floating-left","div.text-center:nth-of-type(7),\ndiv[style=\"min-height: 250px\"]","#menu-item-52424,\n.btn-od,\n.d-lg-none.d-flex.btn-odds.text-center,\n.style-1.ml-2.d-none.d-lg-block.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-52424,\n.text-center.btn-odds.d-none.d-lg-block","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".movies-list-wrap > center","#bnc1","#bnc0",".widget_media_image.widget_block.widget,\nimg.wp-image-1283,\nimg.wp-image-1285",".xx-ads","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.sk_balloon,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)",".menu-cuoc-8xbet,\n.menu-top-nha-cai",".d-lg-flex.d-none.p-0.company.flex-1.table,\n.grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)","#qc-kpgame","#ad-container","#ads,\n#overlay-close,\n#play",".banner-top-box","#position_full_top_banner_pc,\n.window_popup","#newmenu + div > div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double",".box-ads-bar","div[id^=\"adsWeb\"]",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"],\ndiv[style*=\"position: fixed;\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#maiContent > div > div.colLt > aside,\n.bnr,\n.cate-24h-foot-box-adv-view-news > .row > .col-6:first-child,\nDIV[class=\"banner-LR\"],\ndiv.pos-rel:has(a[rel=\"nofollow sponsored\"])",".admicro",".top-header","#onefootball,\n.top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#dta_inpage_wrapper,\n#dtads_inpage_wrapper,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page",".widget_media_image.widget",".banner-cs",".banner-top-main,\n.baohaiquan_bottom_970x250",".top-advertisment",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".columns-widget .col-right",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".box_ads_d",".exp_qc_share",".c-banner",".warp-banner-vip",".sidebar > div[style]","#div-ub-docbao","#ouibounce-modal,\ndiv[id^=\"adsbg\"]","#widget-12",".banr-Rt,\n.banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_baiviet_dexuat,\n.box_quangcao_mobile_320x50,\n.box_text_qc","#tubia","[id^=\"admzone\"]",".ads-right1,\n.adv-row",".adx-zone,\n.underlay",".khw-ads-wrapper.clearfix","#qcRight,\n.banner-advertisements",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".qc-benphai,\n.qc-bentrai","[class^=\"size\"]","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion","#modal-ads-olm",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_chan_trang_pc,\n.quang_cao_pc_right_hoc_tap",".advHolder",".ads_shortcode",".admicro_top","#adop_bfd,\n.adsbypubpower,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.baseHtml.noticeContent,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner",".banner-ads-home,\n.banner-in","div[class^=\"adv-\"]",".ads-970x280","#mobi-top,\n#pc-top,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".modal-di__button-wrapper,\n.sam-slot",".ads-general-banner",".LeftFloatBanner,\n.RightFloatBanner,\n.ads_top_left",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail-tab > .container,\n.detail__foru,\n.super-masthead,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"],\ndiv[data-id=\"2\"]",".ads_660x90,\n[class^=\"ads_\"]",".bannerTOP1,\n.pc.bannerAuto","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".in-article-promo,\n.jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\n.promo-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".bannerqc,\n[class^=\"sticky-top\"],\n[href*=\"/default/template/\"],\n[href*=\"hungthinhcorp.com.vn\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header",".vfs_banner","#headerProxy,\n.rightleftads","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone",".zone--ad","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".v-element > .v-responsive,\ndiv.message--post",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab,\n#banner2ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n#site-header,\n.znews-banner",".most-view:first-child","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".click-ads,\n.click-ads ~ p,\ndiv.mrb10"];

const hostnamesMap = new Map([["*",0],["bongda365.asia",1],["keoso.club",[1,17]],["bongdatructuyen25.com",[1,55]],["soikeoz.net",[1,250]],["cliphot69.biz",[2,3]],["hh3dhay.com",[2,86]],["khoaiphim.com",[2,96,97]],["phimtn.com",[2,15,135]],["phimhay.in",2],["mobiblog.lol",2],["animesub.me",[2,15]],["phimhay.mobi",[2,27,212,213]],["hdphim18.net",[2,230]],["chillhayy.online",2],["phimvuihd.org",2],["cliphotvn.pro",2],["phimtuoitho.tv",[2,296]],["vietphims.tv",[2,299]],["phim18hd.biz",[4,5]],["phim18vn.biz",[5,6]],["biphims.cc",7],["biphims.co",7],["biphim.in",[7,10,178]],["phimmoiaz.cc",8],["phimbocn.com",8],["phimhoathinh3d.com",[8,15]],["phimmoiv2.com",[8,80,132]],["phimchill3.net",8],["phimmoipro2.net",[8,15,21,24,249]],["xemphimchill.net",[8,15,80,129]],["hhtqvietsub.top",[8,112,284,285]],["hhninja1.tv",8],["hoathinhtq.tv",[8,15]],["hhtq.vip",8],["phimmoichill79.cc",9],["subnhanhvl.cc",[10,11,12]],["phimmoi4s.com",[10,131]],["stream.tructiepnba.com",[10,153]],["xemtivi4k.com",[10,173]],["subnhanh.im",[10,11,12]],["vidian.me",[10,210]],["ketqua3.net",[10,234]],["ketqua9.net",[10,234]],["truyenchu.com.vn",[10,339]],["nghean24h.vn",10],["vbfast.xyz",10],["vkoolsss.net",[12,27,30,262]],["tructiepdabong21.site",[12,185,269,282,283]],["mitomv.tv",[12,41,50,51,195,196,197,198,199,200,289,293]],["tuoinung.cc",13],["animehay.city",14],["anivn.club",[15,16]],["animevietsub.boctem.com",15],["phimdinhcao.com",[15,127,128,129]],["8phimmoi.net",[15,24,80,215]],["hhhtq.net",[15,159]],["mephimgi.net",[15,80]],["phimdinhcao.net",[15,127,128,129]],["phimlongtieng.net",[15,127,128,129]],["vkool2.net",[15,21]],["motchillz.org",[15,24,80]],["fimfast.pro",[15,80,91]],["bongda21h.co",[18,19]],["phym18.org",[18,50,272]],["motchill.co",[20,21]],["motphimtw.com",[20,21]],["phimmoichillh.net",21],["ophim.vip",[21,80,132,305]],["phimsexhay669.co",22],["phimvietsub.co",23],["gocphimvn.com",[23,84]],["p.thoctv.co",24],["api.anime3s.com",[24,31]],["bongda365c.com",[24,25,49]],["cakhia18.com",[24,56,57,58,59,60,61,62]],["rakhoi7.com",[24,58,59,60,61,62,145]],["p.thoctv.com",24],["player.4shares.live",24],["cakhia22.live",[24,56,57,58,59,60,61,62]],["animet.net",[24,34,216]],["mephimtv.net",[24,242]],["ssplay.net",[24,215]],["play.vnupload.net",24],["tvhayb.org",[24,31,250]],["vebo3.org",[24,40,41,42,43,44,191,193,255,276,277]],["xoilac12.org",[24,38,42,43,44,192,277,279]],["caheo7.tv",[24,56,57,58,59,60,61,62]],["cakhia27.tv",[24,56,57,58,59,60,61,62]],["rakhoi12.tv",[24,58,59,60,61,62,145]],["livefb.xyz",[24,57,58,61]],["mphimmoi1.xyz",[24,36,93,123,415]],["123nhadatviet.com",25],["123nhadatviet.net",25],["tuoitre.vn",[25,399]],["tuoitrenews.vn",25],["4rkinggame.com",[26,27]],["dailyphimz.com",27],["listnhacai1.com",[27,105]],["phim18vipb.com",27],["phimplay24h.com",[27,134]],["kenhgamez.info",27],["rphang.me",[27,208]],["gunnylau360.net",27],["gunnymienphi.net",27],["mythethao.net",[27,245]],["thiendia1.net",[27,257]],["vuonhoalan.net",[27,265]],["checkgaigoi.one",27],["phim33.tv",[27,294]],["phe3x.xyz",27],["phimno4.xyz",[27,416]],["live.7mvn2.com",28],["abysscdn.com",29],["freeplayervideo.com",29],["player-cdn.com",29],["ahaphimz.com",30],["vphims.net",30],["tvhay2.net",[31,97,258]],["phimmoivn.pro",[31,280]],["anime47.com",[32,33]],["doctruyen3qmax.com",33],["toptruyenne.com",33],["animetvn2.com",[34,35]],["appvn.com",36],["huphimtv.com",[36,91,92,93]],["javtopxx.com",[36,95]],["laptrinhx.com",36],["linkerpt.com",[36,104]],["tinnhac.com",36],["xemphimvuis.com",[36,93]],["animevietsub.fan",[36,175]],["film365.in",[36,179,180]],["vlxx.moe",[36,65,109,214]],["ghienphim8.net",[36,203,225,226]],["ophimhdvn2.net",[36,241,247]],["phimgigi.net",[36,241,247,248]],["soikeo365.net",[36,253]],["vieclam123.net",36],["xemphimviet1.net",[36,203,226]],["cungthi.online",36],["antt.vn",36],["bongda24h.vn",36],["kienthuc.net.vn",[36,372]],["nhadautu.vn",36],["saostar.vn",[36,382]],["vietnamplus.vn",[36,406]],["audiotruyenfull.com",37],["banhkhuc6.com",[38,39,40,41,42,43,44]],["90phut9.live",[38,41,43,44,190]],["bongcam.live",[41,44,191,192,193]],["cakhiav.live",[41,50,51,194,195,196,197,198,199,200]],["khomuc9.live",[41,193,201]],["vebov.live",[41,50,51,62,193,196,197,198,200,204,205]],["thapcam.net",[41,44,193,204,254,255]],["90phutk.tv",[41,50,51,195,196,197,288,289,290]],["xoilac87.tv",[41,50,51,193,196,197,199,200,283,290,301,302]],["baomoi.com",45],["m.baomoi.com",46],["baonga.com",47],["bongda12h365.com",48],["bongdainfoz.com",[50,51]],["xoilaczc.tv",[50,204,290,302,303]],["bongdalu6.com",52],["bongdaso12.com",[53,54]],["bongdaso66.net",[53,54]],["tvso1.com",54],["blog.abit.vn",[54,310]],["hoatieu.vn",[59,142,167,362]],["canhrau.com",63],["topthuthuat.com",63],["chillphim1.com",[64,65]],["zuiphim.com",65],["chouc.com",66],["clbgamesvn.com",67],["cmangaaz.com",68],["coccoc.com",69],["contuhoc.com",70],["cryptoviet.com",71],["dexuat.com",72],["diadiem.com",73],["doisongphapluat.com",74],["dtruyen.com",75],["dubaotiente.com",[76,77]],["ducvietonline.de",77],["bongda.com.vn",[77,324]],["giadinhonline.vn",[77,342]],["taichinhdoanhnghiep.net.vn",[77,203]],["nongnghiep.vn",[77,342]],["vietnamnet.vn",[77,405]],["ebookbkmt.com",78],["ephoto360.com",[79,80]],["thiepmung.com",80],["fsharetv.com",81],["game4v.com",82],["forum.gocmod.com",83],["hayghe2.com",85],["hoahoc247.com",87],["hoidap247.com",88],["homedy.com",89],["hotruyen.com",90],["phim18zz.com",[93,123]],["hdphimhay1.xyz",93],["javtiful.com",94],["khosinhvien.com",98],["lacaigi.com",99],["laptrinhcanban.com",100],["lichngaytot.com",101],["lichvannien365.com",102],["link1s.com",103],["lmssplus.com",106],["loigiaihay.com",107],["luotphimtv1.com",108],["luotphim1.net",[108,238]],["luotphim2.net",108],["luotphimtv.vip",108],["mehoathinh3.com",[109,110]],["mephimmy2.com",109],["mephimnhat2.com",[109,110,111,112]],["mephimthai2.com",109],["animevip.tv",109],["phimmoi2.com",[110,111,112]],["phimnhanh2.com",[110,111,112]],["vuighe2.com",[110,169]],["hhchina.tv",[112,285,291]],["metruyencv.com",113],["mmo4me.com",114],["baodauthau.vn",[114,315]],["mphim14.com",[115,116]],["phimmoinay.tv",[115,159,250]],["phimanimehd.net",[116,136,239]],["muabanraovat.com",117],["muaxegiatot.com",118],["nettruyenus.com",119],["nhattruyenup.com",119],["tin2.news25link.com",120],["nhaccuatui.com",121],["ophimhay.com",122],["phim202.com",124],["player.phimbocn.com",125],["cliphotvn.2tenz.top",125],["phimchat2.com",126],["saytruyenmoi.com",126],["phimbo88vn.net",126],["truyentuan.com",[128,157]],["tenovi.net",128],["phimhaymoi.com",130],["phimnhua.com",133],["phimyeuthich.com",[136,137]],["boophim.net",[136,219]],["lxmanga.net",[136,137,239,240]],["phimnet.vip",[136,180,306]],["truyensextv.com",[137,155]],["truyensextv.org",[137,275]],["photoshoponlinemienphi.com",138],["gameviet.mobi",138],["phuongtrinhhoahoc.com",[139,140,141]],["ketqua247vn.org",139],["tructiepbongda26.com",141],["thanhnien.vn",[141,388]],["quantrimang.com",[142,143,144]],["vndoc.com",[144,167]],["khoahoc.tv",144],["download.com.vn",144],["download.vn",[144,347]],["gamevui.vn",[144,347,356]],["meta.vn",144],["razorphimzz.com",146],["sexhay2023.com",147],["tctruyen.com",148],["tctruyen.net",148],["thoctv.com",149],["thuthuatjb.com",150],["thuthuattienich.com",151],["toithuthuat.com",152],["truyenqqvn.com",154],["truyensieuhay.com",156],["tvzinghd.com",[158,159]],["vailonxx.com",160],["vatlypt.com",161],["vesotantai.com",162],["vietcetera.com",163],["vietgiaitri.com",164],["vietjack.com",165],["vietyo.com",166],["vtruyen.com",168],["webhoctienganh.com",170],["webphim2.com",171],["webtretho.com",172],["xosodaiphat.com",174],["chillhay.im",176],["phimmoi.im",177],["a3manga.info",181],["motphim1.info",182],["phimhaytv.info",183],["maclife.io",184],["xoivo7.life",[185,186,187,188]],["vaoroi13.online",[185,186,188,260,268,269]],["vaoroi365.net",[186,187,259,260]],["gavang.link",189],["mannhan2.live",[202,203]],["thichxemphim1.net",[203,256]],["baoxaydung.com.vn",203],["oj.husc.edu.vn",203],["tienphong.vn",[203,315,392,393]],["toquoc.vn",203],["zingnews.vn",[203,366,414]],["chotlo.me",206],["ngaytho.me",207],["thethao12h.me",209],["javhay.media",211],["mephimnhez.net",[212,241]],["zophim.net",215],["bantincongnghe.net",217],["blogkiienthuc.net",218],["chodansinh.net",220],["daominhha.net",221],["designervn.net",222],["dongphim3s.net",223],["dongchill.tv",223],["gamenoob.net",224],["giavang.net",227],["romgoc.net",227],["truongblogger.top",227],["gockhuat.net",228],["gocphimk.net",229],["hoc247.net",231],["iphimchilla.net",232],["vn.javbabe.net",233],["kienviet.net",235],["laptrinhvb.net",236],["linkneverdie.net",237],["metruyencv.net",243],["mitub.net",244],["nhacpro.net",246],["phimtho.net",250],["protruyen.xyz",[250,418]],["qthang.net",251],["sachmoi.net",252],["vietmoz.net",261],["vnexpress.net",263],["vtipster.net",264],["phimbathu.one",266],["tut4ktream.online",267],["bongdahomnay.org",270],["btcvn.org",271],["vn.phym18.org",273],["traderviet.org",274],["xemtivingon.org",278],["keonhacai5.top",[278,286]],["tuoi69.pro",281],["viet69.tube",287],["hhhkungfu.tv",292],["phimdacap.tv",295],["vieclam.tv",[297,298]],["xskt.com.vn",298],["vlxyz.tv",300],["khiphach.vip",304],["24hmoney.vn",307],["2banh.vn",308],["2game.vn",309],["afamily.vn",311],["sport5.vn",311],["m.afamily.vn",312],["autodaily.vn",313],["xehay.vn",[313,412]],["baodansinh.vn",314],["blogtruyen.vn",316],["cafebiz.vn",317],["cafef.vn",318],["ttvn.toquoc.vn",318],["careerlink.vn",319],["chap.vn",320],["24h.com.vn",321],["autopro.com.vn",322],["baohaugiang.com.vn",323],["congan.com.vn",325],["daklak24h.com.vn",326],["dantri.com.vn",327],["ecci.com.vn",328],["fptshop.com.vn",329],["haiquanonline.com.vn",330],["nld.com.vn",331],["tamlinh247.com.vn",332],["tapchikientruc.com.vn",333],["thanhtra.com.vn",334],["thoidai.com.vn",335],["petrotimes.vn",335],["thuongtruong.com.vn",336],["thuysanvietnam.com.vn",337],["trithuc24h.com.vn",338],["voh.com.vn",340],["congluan.vn",[341,342]],["congly.vn",343],["dangtinbatdongsan.vn",344],["realty.vn",[344,379]],["danviet.vn",345],["docnhanh.vn",346],["kienthucykhoa.edu.vn",348],["eva.vn",349],["fshare.vn",350],["game24h.vn",351],["game8.vn",352],["gameio.vn",353],["gamek.vn",354],["soha.vn",354],["gametv.vn",355],["genk.vn",357],["giaoducthoidai.vn",358],["vnews.gov.vn",359],["plus.gtv.vn",360],["helpex.vn",361],["hoc24.vn",363],["hosocongty.vn",364],["kenh14.vn",365],["kinhtedothi.vn",366],["minhngoc.net.vn",366],["vn-z.vn",366],["lazi.vn",367],["luatvietnam.vn",368],["lucloi.vn",369],["muare.vn",370],["myeva.vn",371],["phunumoi.net.vn",373],["nhipcaudautu.vn",373],["nhacdj.vn",374],["nhatrangclub.vn",375],["olug.vn",376],["phapluatplus.vn",377],["qdnd.vn",378],["reatimes.vn",380],["rung.vn",381],["sharecode.vn",383],["softonic.vn",384],["startalk.vn",385],["stockbiz.vn",386],["techrum.vn",387],["thethao247.vn",389],["thethaovanhoa.vn",390],["thitruongtaichinhtiente.vn",391],["tinnhanhchungkhoan.vn",393],["tiin.vn",394],["timdaily.vn",395],["tinhte.vn",396],["tintucvietnam.vn",397],["truyenfull.vn",398],["tuyengiao.vn",400],["tvphapluat.vn",401],["v4u.vn",402],["vietfones.vn",403],["vietnamgsm.vn",404],["vietq.vn",407],["viettelstore.vn",408],["voz.vn",409],["vungoctuan.vn",410],["webthethao.vn",411],["yellowpages.vn",413],["plvb.xyz",417]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
