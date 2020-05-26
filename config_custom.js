/* eslint-disable no-unused-vars, no-var */

const welcomeEle = document.getElementById("welcome-page-additional-content-template");
if (welcomeEle) welcomeEle.innerHTML = interfaceConfig.OFMEET_WELCOME_PAGE_CONTENT;

const settingsEle = document.getElementById("settings-toolbar-additional-content-template");
if (settingsEle) settingsEle.innerHTML = interfaceConfig.OFMEET_WELCOME_PAGE_TOOLBARCONTENT;

if (location.hash.indexOf("config.webinar=true") > -1) config.webinar = true;
if (location.hash.indexOf("config.webinar=false") > -1) config.webinar = false;

if (location.hash.indexOf("interfaceConfig.OFMEET_RECORD_CONFERENCE=true") > -1) interfaceConfig.OFMEET_RECORD_CONFERENCE = true;
if (location.hash.indexOf("interfaceConfig.OFMEET_RECORD_CONFERENCE=false") > -1) interfaceConfig.OFMEET_RECORD_CONFERENCE = false;

if (location.hash.indexOf("interfaceConfig.OFMEET_ENABLE_TRANSCRIPTION=true") > -1) interfaceConfig.OFMEET_ENABLE_TRANSCRIPTION = true;
if (location.hash.indexOf("interfaceConfig.OFMEET_ENABLE_TRANSCRIPTION=false") > -1) interfaceConfig.OFMEET_ENABLE_TRANSCRIPTION = false;

if (location.hash.indexOf("interfaceConfig.OFMEET_SHOW_CAPTIONS=true") > -1) interfaceConfig.OFMEET_SHOW_CAPTIONS = true;
if (location.hash.indexOf("interfaceConfig.OFMEET_SHOW_CAPTIONS=false") > -1) interfaceConfig.OFMEET_SHOW_CAPTIONS = false;

if (location.hash.indexOf("interfaceConfig.OFMEET_ENABLE_BREAKOUT=true") > -1) interfaceConfig.OFMEET_ENABLE_BREAKOUT = true;
if (location.hash.indexOf("interfaceConfig.OFMEET_ENABLE_BREAKOUT=false") > -1) interfaceConfig.OFMEET_ENABLE_BREAKOUT = false;

if (config.webinar)
{
    interfaceConfig.TOOLBAR_BUTTONS = [
        'fullscreen', 'fodeviceselection', 'hangup', 'profile', 'info', 'chat',
        'settings', 'videoquality', 'feedback', 'stats', 'shortcuts', 'raisehand'
    ]

    interfaceConfig.FILM_STRIP_MAX_HEIGHT = 1;
}
