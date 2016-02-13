// ==UserScript==
// @name            WME KeepMyLayers (Dev)
// @namespace       https://greasyfork.org/users/11629-TheLastTaterTot
// @version         0.4.9
// @description     (Beta) Resets WME layers to the way you want them, plus other fancy stuff. Includes bonus features for Beta WME testers.
// @author          TheLastTaterTot
// @include         https://editor-beta.waze.com/*editor/*
// @include         https://www.waze.com/*editor/*
// @exclude         https://www.waze.com/*user/editor/*
// @grant           GM_info
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_deleteValue
// @grant           GM_setClipboard
// @grant           GM_listValues
// @run-at          document-start
// @icon            data:image/png;base64,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
// ==/UserScript==

/* [TODO]:
    fix saving of layers for different locales - assessing
    provide a sync between beta and production editor - in progress
    allow the option to individually choose settings to sync - in progress
    make layers manually sortable or sort ascending
    make adding and removing layer sets easier
    improve UI and user-friendliness - in progress
    create a welcome msg for first time users and a (?) in pref pane to see it again - in progress
    allow setting of other layers that don't show up in the WME Layers menu
    add the ability assign shortcut keys to layer presets
    ---
     add an option to only auto-reset layers for PLs with layers? - reviewed; not important atm
    show a summary of visible layers for each layer set - √
    make it easier to switch among layer presets - √
*/
// ################################# DEBUG ##################################
/* GLOBALS: KMLayersVersion, KMLayersSync */

// Quiet log outputs from other scripts:
(function() {
    console.__log = console.log;
    console.log = function() {
        var args = arguments;
        //argArray = Object.keys(args).map(function (key) { return args[key] });

        if (!!(args['0'].substr(0, 8).indexOf('WMEKmL') + 1)) {
            console.__log.apply(console, args);
        }
    };

    console.__debug = console.debug;
    console.debug = function() {
        var args = arguments;
        //argArray = Object.keys(args).map(function (key) { return args[key] });

        if (!!(args['0'].substr(0, 8).indexOf('WMEKmL') + 1)) {
            console.__debug.apply(console, args);
        }
    };
})();

function kmllog() {
    var args = arguments,
        argArray = Object.keys(args).map(function(key) {
            return args[key]
        }),
        kmllogCss = 'background: #444; color: #FF2E9A';
    if (argArray.last == '/') argArray = argArray.splice(-1);
    console.debug('%cWMEKmL: %s', kmllogCss, argArray.join(' '));
}

// ############################### DEBUG ##################################

//========================================================================
//     RRRRRR  EEEEEEE DDDDD   IIIII RRRRRR  EEEEEEE  CCCCC  TTTTTTT
//     RR   RR EE      DD  DD   III  RR   RR EE      CC    C   TTT
//     RRRRRR  EEEEE   DD   DD  III  RRRRRR  EEEEE   CC        TTT
//     RR  RR  EE      DD   DD  III  RR  RR  EE      CC    C   TTT
//     RR   RR EEEEEEE DDDDDD  IIIII RR   RR EEEEEEE  CCCCC    TTT
//========================================================================

var kmlPLlayers = '',
    kmlPLlayerFilters,
    kmlPLhref = false,
    kmlPLhost = false,
    kmlPLpath = false,
    kmlayersBetaChk,
    kmlayersLangChk,
    kmlPLhrefLast20 = location.href.substr(-20);

if (localStorage.WME_KMLSettings) {

    var kmlayersStartupChk = [~localStorage.WME_KMLSettings.indexOf('&x'), ~localStorage.WME_KMLSettings.indexOf('&b'), ~localStorage.WME_KMLSettings.indexOf('&l')];

    if (!~kmlPLhrefLast20.lastIndexOf('&kmlayers')) { //not a layers-removal redirect
        if (!kmlayersStartupChk[0]) { // allow autocheck layers at startup

            kmlPLhref = location.href.match(/&layers=(\d+)/);

            if (kmlPLhref && kmlPLhref[1]) {
                kmlPLlayers = ('&kmlayers=' + kmlPLhref[1]);
                var regex = new RegExp('&[a-zA-Z_]+Filter=(true|false|0|1)|' + kmlPLhref[0], 'g')
                kmlPLhref = location.href.replace(regex, '');
                /* if (localStorage.WME_KeepMyLayers_lF) {
                    kmlPLlayerFilters = JSON.parse(localStorage.WME_KeepMyLayers_lF);
                    kmlPLlayers = '&mapProblemFilter=' + kmlPLlayerFilters.mapProblem +
                        '&mapUpdateRequestFilter=' + kmlPLlayerFilters.mapUpdateRequest +
                        '&venueFilter=' + kmlPLlayerFilters.venue +
                        kmlPLlayers;
                }*/
            }
        } // else PL has no layers
    }

    if (kmlayersStartupChk[1] && !~kmlPLhrefLast20.indexOf('&b=0')) { // beta toggle check //&&
        kmlayersBetaChk = GM_getValue("WMEKMLayers_Beta");

        if (kmlayersBetaChk === true && //if set to beta-editor
            !~location.host.indexOf('editor-b')) { //if PL is not editor-beta.waze.com
            kmlPLhost = 'https://editor-beta.waze.com';
        } else if (kmlayersBetaChk === false && //if set to production editor
            !~location.host.indexOf('www.waze')) { //if PL is not www.waze.com
            kmlPLhost = 'http://www.waze.com';
        }
        kmlPLlayers = '&b=0' + kmlPLlayers;
    }

    if (kmlayersStartupChk[2] && !~kmlPLhrefLast20.indexOf('&l=0')) { // language check
        kmlayersLangChk = GM_getValue("WMEKMLayers_Lang");
        //kmllog('kmlayersLangChk', kmlayersLangChk);
        if (kmlayersLangChk === true || kmlayersLangChk === "true") { //if set to filter out language
            if (location.pathname !== '/editor/') {
                kmlPLpath = '/editor/';
            }
        } else if (kmlayersLangChk) { //is truthy
            var kmlPLpath_exemplar = '/' + kmlayersLangChk + '/editor/';
            if (location.pathname !== kmlPLpath_exemplar) {
                kmlPLpath = kmlPLpath_exemplar;
            }
        }
        kmlPLlayers = '&l=0' + kmlPLlayers;
    }

} else { //no save preferences yet... first time running on this (sub)domain

    if (!~kmlPLhrefLast20.indexOf('&b=0')) { //beta-check not temporarily disabled
        kmlayersBetaChk = GM_getValue("WMEKMLayers_Beta");

        if (kmlayersBetaChk === true && //if set to beta-editor
            !~location.host.indexOf('editor-b')) { //if PL is not editor-beta.waze.com
            kmlPLhost = 'https://editor-beta.waze.com';
        } else if (kmlayersBetaChk === false && //if set to production editor
            !~location.host.indexOf('www.waze')) { //if PL is not www.waze.com
            kmlPLhost = 'http://www.waze.com';
        }
        kmlPLlayers = '&b=0' + kmlPLlayers;
    }

    if (!~kmlPLhrefLast20.indexOf('&l=0')) { //prevents accidental looping in case a locale page isn't found
        kmlayersLangChk = GM_getValue("WMEKMLayers_Lang");

        if (kmlayersLangChk === true || kmlayersLangChk === "true") { //if set to filter out language
            if (location.pathname !== '/editor/') {
                kmlPLpath = '/editor/';
            }
        } else if (kmlayersLangChk) { //is truthy
            var kmlPLpath_exemplar = '/' + kmlayersLangChk + '/editor/';
            if (location.pathname !== kmlPLpath_exemplar) {
                kmlPLpath = kmlPLpath_exemplar;
            }
        }
        kmlPLlayers = '&l=0' + kmlPLlayers;
    }
}

switch (true) {
    case (!kmlPLhost && !kmlPLpath && !kmlPLhref): //no modifications are necessary
        break;
    default:
        if (!kmlPLhost) kmlPLhost = location.origin;
        if (!kmlPLpath) kmlPLpath = location.pathname;
        if (!kmlPLhref) kmlPLhref = location.href;
        //remove any query vals greater than 0, and increment query val by 1 to prevent its effects on next refresh
        //if (!kmlPLhref) kmlPLhref = location.href.replace(/(&b|&l)=[1-9]+/,'').replace(/(?!&b=|&l=)0/g,'1');

        //mllog(location.origin, '/');
        //kmllog(location.pathname, '/');
        var kmlPLhref_temp = kmlPLhref.match(/editor\/(.*)/);
        //kmllog(kmlPLhost, kmlPLpath, kmlPLhref_temp[1], kmlPLlayers);
        if (kmlPLhref_temp[1]) location.replace(kmlPLhost + kmlPLpath + kmlPLhref_temp[1] + kmlPLlayers);
        else location.replace(kmlPLhost + kmlPLpath + kmlPLhref_temp[1]);
}



//==========================================================================
var KeepMyLayers = function() {
    var kml = Array(10), //counter
        kml_W_map = unsafeWindow.Waze.map,
        kml_W_model = unsafeWindow.Waze.model,
        kml_translations = unsafeWindow.I18n.translations[unsafeWindow.I18n.locale],
        kml_lFTranslations = {
            closed_problems: [kml_translations.layer_switcher.filters.closed_problems.inactive,
                kml_translations.layer_switcher.filters.closed_problems.active
            ],
            residential: [kml_translations.layer_switcher.filters.residential.inactive,
                kml_translations.layer_switcher.filters.residential.active
            ]
        },
        $ = unsafeWindow.$,
        myKMLayers, minKMLVersion = '0.4.5',
        EXTEND_LAYER_WAITTIME = ['toggleJunctionAngleInfo'];

    for (var kmli = 10; kmli--;) {
        kml[kmli] = 0;
    }
    // ---------------------------------------------------------------------

    // Add methods to myKMLayers object
    var addMethodsToMyKMLayers = function(mykml) {
        /*var hasSavedLayers = function() {
            if (this.visibleInLayersMenu && Object.keys(this.visibleInLayersMenu).length) {
                return true;
            } else {
                return false;
            }
        };
        var numPresets = mykml.SAVED_PRESETS.length;
        if (numPresets) {
            for (var kml_np = numPresets; kml_np--;) {
                mykml.SAVED_PRESETS[kml_np].hasSavedLayers = hasSavedLayers;
            }
        }*/
        mykml.addNewPreset = function(newKMLayerSetName) {
            var newIdx = this.SAVED_PRESETS.length;
            this.idx = newIdx;
            this.SAVED_PRESETS[newIdx] = {
                name: newKMLayerSetName,
                visibleInLayersMenu: {},
                visibleInLayersMenuRealName: [],
                layerFilters: {
                    mapProblem: 0,
                    mapUpdateRequest: 0,
                    venue: 1
                },
                saved: false
                //hasSavedLayers: hasSavedLayers
            };
        };

        mykml.removePreset = function(removeLayerSetIndex) {
            var numPresets = this.SAVED_PRESETS.length;
            if (numPresets > 1) {
                this.SAVED_PRESETS.splice(removeLayerSetIndex, 1);
                this.idx = numPresets - 2;
            }
        }
        return mykml;
    };

    var createNewMyKMLayers = function() {
        return {
            reset: false,
            idx: 0,
            savedonce: false,
            runonce: false,
            syncPresets: false,
            SAVED_PRESETS: []
        };
    };

    //======================================================================
    //   GGGGG EEEEEEE TTTTTTT     SSSSS    AAA   VV     VV EEEEEEE DDDDD
    //  GG     EE        TTT      SS       AAAAA  VV     VV EE      DD  DD
    // GG  GGG EEEEE     TTT       SSSSS  AA   AA  VV   VV  EEEEE   DD   DD
    // GG   GG EE        TTT           SS AAAAAAA   VV VV   EE      DD   DD
    //  GGGGGG EEEEEEE   TTT       SSSSS  AA   AA    VVV    EEEEEEE DDDDDD
    //======================================================================
    var getSavedKMLayers = function() {
        var mykml;

        if (localStorage.WME_KeepMyLayers) {
            //kmllog('Found some saved settings to load!');
            mykml = JSON.parse(localStorage.WME_KeepMyLayers);
            if (typeof KMLayersSync === "undefined") {
                mykml.reset = false;
            }

            /* ~~~~~~~~ TEMP: upgrade to new data structure ~~~~~~~~~~~~~~~ */
            var convertMyKMLayersStructure = function(mykml_old) {
                // Setup new var structure
                var numPresets = mykml_old.visibleInLayersMenu.length,
                    mykml_new = {
                        reset: false,
                        idx: mykml_old.idx,
                        savedonce: true,
                        runonce: true,
                        SAVED_PRESETS: Array(numPresets)
                    },
                    lF;

                if (localStorage.WME_KeepMyLayers_lF) {
                    lF = JSON.parse(localStorage.WME_KeepMyLayers_lF);
                } else {
                    lF = {
                        mapProblem: 0,
                        mapUpdateRequest: 0,
                        venue: 1
                    };
                }

                for (var kml_sp = numPresets; kml_sp--;) {
                    mykml_new.SAVED_PRESETS[kml_sp] = {
                        name: mykml_old.layerSetNames[kml_sp],
                        visibleInLayersMenu: mykml_old.visibleInLayersMenu[kml_sp],
                        visibleInLayersMenuRealName: mykml_old.visibleInLayersMenuRealName[kml_sp],
                        layerFilters: {
                            mapProblem: lF.mapProblem,
                            mapUpdateRequest: lF.mapUpdateRequest,
                            venue: lF.venue
                        },
                        saved: !!(Object.keys(mykml_old.visibleInLayersMenu[kml_sp]).length)
                    }
                }
                return mykml_new;
            };

            // Check for newest object structure
            if (mykml.SAVED_PRESETS === undefined) {
                if (mykml.visibleInLayersMenu !== undefined) { //check that required object key is present
                    // Check for even older object structure and adjust
                    if (mykml.visibleInLayersMenu.constructor !== Array) {
                        var tempHoldingVar = JSON.parse(JSON.stringify(mykml.visibleInLayersMenu));
                        mykml.visibleInLayersMenu = [tempHoldingVar];
                        mykml.layerSetNames = ['My default layers'];
                        mykml.idx = 0;
                    }
                    if (mykml.visibleInLayersMenuRealName === undefined) {
                        mykml.visibleInLayersMenuRealName = Array(mykml.layerSetNames.length);
                    }

                    return mykml = convertMyKMLayersStructure(mykml), localStorage.WME_KeepMyLayers = JSON.stringify(mykml);;
                } else {
                    return mykml = createNewMyKMLayers(), localStorage.WME_KeepMyLayers = JSON.stringify(mykml);
                }

            } else {
                return mykml;
            }
        } else { // myKMLayers has not been saved yet
            /* TODO: Call to popup of instructions for saving default layers set will maybe go here */
            return mykml = createNewMyKMLayers(), localStorage.WME_KeepMyLayers = JSON.stringify(mykml);
        }
    };

    var getMyKMLayersObject = function() {
        var mykml = getSavedKMLayers()

        addMethodsToMyKMLayers(mykml);

        if (mykml.SAVED_PRESETS && !mykml.SAVED_PRESETS.length) {
            mykml.addNewPreset('My default layers');
            localStorage.WME_KeepMyLayers = JSON.stringify(mykml);
        }

        return mykml;
    };

    //======================================================================================
    //  WW     WW   AAA   ZZZZZ EEEEEEE    LL        AAA   YY   YY EEEEEEE RRRRRR   SSSSS
    //  WW     WW  AAAAA     ZZ EE         LL       AAAAA  YY   YY EE      RR   RR SS
    //  WW  W  WW AA   AA   ZZ  EEEEE      LL      AA   AA  YYYYY  EEEEE   RRRRRR   SSSSS
    //  WW WWW WW AAAAAAA  ZZ   EE         LL      AAAAAAA   YYY   EE      RR  RR       SS
    //   WW   WW  AA   AA ZZZZZ EEEEEEE    LLLLLLL AA   AA   YYY   EEEEEEE RR   RR  SSSSS
    //======================================================================================

    // W.map.layers.forEach(function(a,i){console.info('[' + i + ']', a["name"] + ':', a["visibility"])});
    //--------------------------------------------------------------------------
    var getWazeMapLayersFromSwitcher = function(wazeMapLayers) { // get OL layers that show up under the WME Layer switcher panel
        var kml_layIdx = wazeMapLayers.length,
            kml_layerName, kml_layerUniqName, kml_layerHumanReadableName,
            kml_layerSwitcher = {
                accelerator: {},
                uniqueName: {},
                name: {}
            };

        while (kml_layIdx--) {
            kml_layerName = wazeMapLayers[kml_layIdx].accelerator;
            kml_layerUniqName = wazeMapLayers[kml_layIdx].uniqueName;
            kml_layerHumanReadableName = wazeMapLayers[kml_layIdx].name;
            if (kml_layerName !== undefined) { //  accelerator is a marker with high specificity and selectivity of whether the layer appears in the layer switcher menu
                if (kml_layerUniqName !== undefined) { // uniqueName is used by WME for resetting layers to last PL
                    kml_layerSwitcher.uniqueName[kml_layerUniqName] = kml_layIdx;
                    kml_layerSwitcher.accelerator[kml_layerName] = kml_layIdx;
                    kml_layerSwitcher.name[kml_layerName] = kml_layerHumanReadableName;
                } else {
                    kml_layerSwitcher.accelerator[kml_layerName] = kml_layIdx;
                    kml_layerSwitcher.name[kml_layerName] = kml_layerHumanReadableName;
                }
            }
        }
        return kml_layerSwitcher;
    };

    //======================================================================================
    //  SSSSS    AAA   VV    VV EEEEEEE    LL        AAA   YY   YY EEEEEEE RRRRRR   SSSSS
    // SS       AAAAA  VV    VV EE         LL       AAAAA  YY   YY EE      RR   RR SS
    //  SSSSS  AA   AA  VV  VV  EEEEE      LL      AA   AA  YYYYY  EEEEE   RRRRRR   SSSSS
    //      SS AAAAAAA   VVVV   EE         LL      AAAAAAA   YYY   EE      RR  RR       SS
    //  SSSSS  AA   AA    VV    EEEEEEE    LLLLLLL AA   AA   YYY   EEEEEEE RR   RR  SSSSS
    //======================================================================================
    var saveKMLayers = function() {
        //kmllog('saveKMLayers()', '/');
        var kml_j, kml_lname, kml_realname,
            kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers),
            kml_layerNames = Object.keys(kml_layerSwitcher.accelerator),
            kml_numLayers = kml_layerNames.length,
            visibleInLayersMenu = {},
            visibleInLayersMenuRealName = [];


        // Get names of visible menu layers
        for (kml_j = kml_numLayers; kml_j--;) {
            kml_lname = kml_layerNames[kml_j];
            kml_realname = kml_layerSwitcher.name[kml_lname];
            if (kml_W_map.layers[kml_layerSwitcher.accelerator[kml_lname]].getVisibility()) {
                visibleInLayersMenu[kml_lname] = true;
                visibleInLayersMenuRealName.push(kml_realname);
            }
        }
        // Make sure it is the most up-to-date version across windows by loading it new each time:
        var mykml = getMyKMLayersObject();
        if (KMLayersSync.hasSettingEnabled('&p')) KMLayersSync.applysyncSavedPresetsGM(mykml);

        mykml.SAVED_PRESETS[mykml.idx].visibleInLayersMenu = visibleInLayersMenu; //save only visible
        mykml.SAVED_PRESETS[mykml.idx].visibleInLayersMenuRealName = visibleInLayersMenuRealName;
        mykml.SAVED_PRESETS[mykml.idx].layerFilters = {
            venue: kml_W_model.venues.getFilter(),
            mapProblem: kml_W_model.problems.getFilter(),
            mapUpdateRequest: kml_W_model.mapUpdateRequests.getFilter()
        };
        mykml.SAVED_PRESETS[mykml.idx].saved = true;
        mykml.savedonce = true;
        mykml.runonce = true; // failsafe

        // Save
        KMLayersSync.saveKMLObjToLocalStorage(mykml);
        if (KMLayersSync.hasSettingEnabled('&p')) KMLayersSync.upsyncSavedPresetsLS(mykml);

        document.querySelector('#iKMLsaveLayers+div.tooltip>.tooltip-inner').innerHTML = '<div style="padding: 0px 24%; line-height: 2.75">&nbsp;SAVED&nbsp;</div>';
        //document.getElementById('iKMLsaveLayers').classList.remove('kml-icn-nsave');
        updateKMLayersSaveButton(true);

        requestAnimationFrame(function() {
            updateKMLayersMenu(kml_layerSwitcher, mykml);
        });
    };

    //=============================================================================
    //     PPPPPP  LL         LL        AAA   YY   YY EEEEEEE RRRRRR   SSSSS
    //     PP   PP LL         LL       AAAAA  YY   YY EE      RR   RR SS
    //     PPPPPP  LL         LL      AA   AA  YYYYY  EEEEE   RRRRRR   SSSSS
    //     PP      LL         LL      AAAAAAA   YYY   EE      RR  RR       SS
    //     PP      LLLLLLL    LLLLLLL AA   AA   YYY   EEEEEEE RR   RR  SSSSS
    //=============================================================================
    var getLayersFromPL = function() {
        var kmlayers = location.href.match(/&kmlayers=(\d*)/),
            wazelayers = location.href.match(/&layers=(\d*)/);

        if (kmlayers && kmlayers[1]) {
            return kmlayers[1];
        } else if (wazelayers && wazelayers[1]) {
            return wazelayers[1];
        } else {
            return false
        }
    };

    var convertLayersToObj = function() {
        var kml_layerVisibility_orig = {},
            uniqueLayerVal = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
            kml_uniqueName = ['satellite_imagery', 'cities', 'roads', 'gps_points',
                'area_managers', 'landmarks', 'speed_cameras', 'problems',
                'update_requests', 'editable_areas', 'live_users', 'place_updates'
            ],
            kml_layValIdx = uniqueLayerVal.length,
            kmlayers = getLayersFromPL();

        if (kmlayers !== undefined && kmlayers !== null && kmlayers !== false) {
            while (kml_layValIdx--) {
                if (kmlayers >= uniqueLayerVal[kml_layValIdx]) {
                    kmlayers -= uniqueLayerVal[kml_layValIdx];
                    kml_layerVisibility_orig[kml_uniqueName[kml_layValIdx]] = true;
                } else {
                    kml_layerVisibility_orig[kml_uniqueName[kml_layValIdx]] = false;
                }
            }
            return kml_layerVisibility_orig;
        } else {
            return false;
        }
    };

    var togglePLLayersEventListener = function(kml_toggledLayers, mykml) {
            if (mykml === undefined) mykml = getMyKMLayersObject();
            if (kml_toggledLayers === undefined) console.error('togglePLLayersEventListener requires an object containing layers that have been toggled!');

            document.getElementById('iKMLtempUndo').onclick = function togglePLLayers() {
                var kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers),
                    kml_accelNames = Object.keys(kml_layerSwitcher.accelerator),
                    kml_layerVisibility_kmlayers = mykml.SAVED_PRESETS[mykml.idx].visibleInLayersMenu,
                    num_kml_tog = kml_accelNames.length,
                    kml_tog,
                    W_map_layers_idx, toggleLayerStatus;

                for (kml_tog = num_kml_tog; kml_tog--;) {
                    W_map_layers_idx = kml_layerSwitcher.accelerator[kml_accelNames[kml_tog]];

                    //kmllog(kml_accelNames[kml_tog], '=', kml_toggledLayers[kml_accelNames[kml_tog]])
                    if (kml_toggledLayers[kml_accelNames[kml_tog]] !== null && kml_toggledLayers[kml_accelNames[kml_tog]] !== undefined) {

                        kml_toggledLayers[kml_accelNames[kml_tog]] = !kml_toggledLayers[kml_accelNames[kml_tog]];
                        setKMLayerVisibility(W_map_layers_idx, kml_toggledLayers[kml_accelNames[kml_tog]], kml_tog);
                    }
                }
                // Toggle icon
                document.getElementById('iKMLtempUndo').classList.toggle('fa-eye'); //beta editor - fontawesome 4.x
                document.getElementById('iKMLtempUndo').classList.toggle('fa-eye-slash'); //beta editor - fontawesome 4.x
                document.getElementById('iKMLtempUndo').classList.toggle('icon-eye-open'); //prod editor - fontawesome 3.x
                document.getElementById('iKMLtempUndo').classList.toggle('icon-eye-close'); //prod editor - fontawesome 3.x
            };
        }
        //var enableTogglePLBit = false;
    var enableTogglePLLayersButton = function(kmlResetStatus, mykml) {
        //kmllog('enableTogglePLLayersButton()');

        if (mykml === undefined) mykml = getMyKMLayersObject();
        if (kmlResetStatus === undefined) kmlResetStatus = mykml.reset;

        if (document.getElementById('iKMLtempUndo') !== null) {
            kml[2] = 0; //reset counter
            //enableTogglePLBit = true;

            if (kmlResetStatus && mykml.SAVED_PRESETS.length && mykml.SAVED_PRESETS[mykml.idx] && mykml.SAVED_PRESETS[mykml.idx].saved) {
                //kmllog('Checking for toggled layers from PL');

                var kml_layerVisibility_orig = convertLayersToObj(), //kml_layerVisibility_kmlayers = mykml.SAVED_PRESETS[mykml.idx].visibleInLayersMenu,
                    kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers),
                    kml_layeraccelerators = Object.keys(kml_layerSwitcher.accelerator), // kml_layeruniqueNames = Object.keys(kml_layerSwitcher.uniqueName),
                    num_kml_an = kml_layeraccelerators.length,
                    kml_an,
                    kml_toggledLayers = {},
                    nToggled = 0,
                    W_map_layers_idx, accel2uniqueName, accelName, currentVisibility; //uniqueName2accel,

                if (kml_layerVisibility_orig) { // true only if &kmlayers= is in the URL
                    //console.info(kml_layerVisibility_orig);

                    for (kml_an = 0; kml_an < num_kml_an; kml_an++) {
                        //uniqueName2accel = kml_W_map.layers[W_map_layers_idx].accelerator;
                        accelName = kml_layeraccelerators[kml_an];
                        W_map_layers_idx = kml_layerSwitcher.accelerator[accelName];
                        accel2uniqueName = kml_W_map.layers[W_map_layers_idx].uniqueName;

                        currentVisibility = kml_W_map.layers[W_map_layers_idx].getVisibility();

                        if (currentVisibility && kml_layerVisibility_orig[accel2uniqueName]) {
                            kml_toggledLayers[accelName] = null; //leave it alone
                        } else if (currentVisibility && !kml_layerVisibility_orig[accel2uniqueName]) {
                            kml_toggledLayers[accelName] = true;
                            nToggled++;
                        } else if (!currentVisibility && kml_layerVisibility_orig[accel2uniqueName]) {
                            kml_toggledLayers[accelName] = false;
                            nToggled++;
                        } else if (!currentVisibility && !kml_layerVisibility_orig[accel2uniqueName]) {
                            kml_toggledLayers[accelName] = null; //leave it alone
                        }
                    }

                    // var queryCode = !!(location.href.search(/&kmlayers=(\d*)/)+1);
                    var kmlUndoBtnEl = document.getElementById('iKMLtempUndo');
                    if (nToggled !== 0) {
                        //kmllog('Layer visibilities were reset to preferred default setting.', '/');
                        kmlUndoBtnEl.classList.remove('kml-icn-off');
                        togglePLLayersEventListener(kml_toggledLayers, mykml);

                    } else {
                        kmlUndoBtnEl.classList.add('kml-icn-off');
                        try {
                            document.getElementById('iKMLtempUndo').removeEventListener('click', togglePLLayers);
                        } catch (err) {
                            /* do nothing */
                        }
                    }
                } // else do nothing, as there is nothing to undo bc layers were not reset
            }
        } else if (kml[2]++ < 30) {
            //kmllog(waitTime, 'ms');
            setTimeout(function() {
                enableTogglePLLayersButton(kmlResetStatus, mykml)
            }, 300 + (kml[2] * 50));
        } else {
            console.warn('WMEKMLayers:',
                'Unable to activate "Undo KMLayers Reset".',
                'Element #iKMLtempUndo not found on page.');
        }
    };
    //============================================================================================
    // RRRRRR  EEEEEEE  SSSSS  EEEEEEE TTTTTTT    LL        AAA   YY   YY EEEEEEE RRRRRR   SSSSS
    // RR   RR EE      SS      EE        TTT      LL       AAAAA  YY   YY EE      RR   RR SS
    // RRRRRR  EEEEE    SSSSS  EEEEE     TTT      LL      AA   AA  YYYYY  EEEEE   RRRRRR   SSSSS
    // RR  RR  EE           SS EE        TTT      LL      AAAAAAA   YYY   EE      RR  RR       SS
    // RR   RR EEEEEEE  SSSSS  EEEEEEE   TTT      LLLLLLL AA   AA   YYY   EEEEEEE RR   RR  SSSSS
    //============================================================================================
    var checkForReqLayers = function(permalink) {
        //kmllog('checkForReqLayers()');
        switch (true) {
            case !!~permalink.indexOf('&mapUp'):
                return "toggleUpdateRequests";
            case !!~permalink.indexOf('&ven'):
                return "togglePlaces";
            case !!~permalink.indexOf('&mapPr'):
                return "toggleMapProblems";
            case !!~permalink.indexOf('&bigJ'):
                return "toggleJunctionboxes";
            case !!~permalink.indexOf('&cam'):
                return "toggleSpeedcameras";
            default:
                return false;
        }
    };

    //----------------------------------------------------------------------
    function setKMLayerVisibility(layerIdx, visibilityStatus, loadOrder) {
        // Add an offset to spread out the requests
        setTimeout(function() {
            kml_W_map.layers[layerIdx].setVisibility(visibilityStatus);
        }, 10 * loadOrder);
    }

    //----------------------------------------------------------------------

    var waitForMissedLayers = function(waitForThis, visibleMyKMLayersAccelObj, kml_wait) {
        //kmllog('waitForMissedLayers()');
        //kmllog(waitForThis);
        var maxWait = 6, //~10 seconds
            numLayersLeftToLoad = waitForThis.length,
            kmlWaitAccelName_m = [];

        //kmllog('start kml_m = ' + kml_m);
        //kmllog('kml_wait = ' + kml_wait);
        if (numLayersLeftToLoad) {
            var kml_layerSwitcher_m = getWazeMapLayersFromSwitcher(kml_W_map.layers),
                switcherAccelObj_m = kml_layerSwitcher_m.accelerator,
                kml_m_length = waitForThis.length,
                kml_m;

            for (kml_m = 0; kml_m < kml_m_length; kml_m++) {
                if (switcherAccelObj_m[waitForThis[kml_m]] !== undefined) {
                    setKMLayerVisibility(switcherAccelObj_m[waitForThis[kml_m]], !!visibleMyKMLayersAccelObj[waitForThis[kml_m]], kml_m);
                } else {
                    kmlWaitAccelName_m.push(waitForThis[kml_m]);
                }
            } //for-loop
        }

        numLayersLeftToLoad = kmlWaitAccelName_m.length;
        if (kml_wait++ < maxWait && numLayersLeftToLoad) {
            kmllog('Waiting +' + (500 + 500 * kml_wait),'ms for missing layer(s)');
            console.info(kmlWaitAccelName_m.join(' '));
            setTimeout(function() {
                waitForMissedLayers(kmlWaitAccelName_m, visibleMyKMLayersAccelObj, kml_wait)
            }, 500 + 500 * kml_wait);
        } else {
            setTimeout(function() {
                enableTogglePLLayersButton(true);
            }, 300);
            if (kml_wait >= maxWait) {
                kmllog('Gave up waiting for',numLayersLeftToLoad,'layer(s) to load');
            }
        }
    };

    var findMissingLayers = function(switcherAccelObj, visibleMyKMLayersAccelName) {
        //kmllog('findMissingLayers()');
        // check if any W.map.layers are missing compared to saved set
        var kml_m = visibleMyKMLayersAccelName.length,
            kmlWaitAccelName = [];

        while (kml_m--) {
            // Identify missing layers due to slower loading time
            if (switcherAccelObj[visibleMyKMLayersAccelName[kml_m]] === undefined) {
                kmlWaitAccelName.push(visibleMyKMLayersAccelName[kml_m]);
            }
        }
        return kmlWaitAccelName;
        //kmllog('Missed setting layers for ' + kmlWaitAccelName);
    };

    var updateKMLayerFilters = function(lF) {
        // Adjust visibility of secondary layer filters (residential, closed URs/MPs)
        kml_W_model.repositoryFilters.set('venue', lF.venue);
        kml_W_model.repositoryFilters.set('mapUpdateRequest', lF.mapUpdateRequest);
        kml_W_model.repositoryFilters.set('mapProblem', lF.mapProblem);
        unsafeWindow.W.controller.updateModel(true);
        document.querySelector('li[data-layer-id="' + kml_W_map.landmarkLayer.id + '"] a').innerHTML = kml_lFTranslations.residential[lF.venue ^ 1];
        document.querySelector('li[data-layer-id="' + kml_W_map.updateRequestLayer.id + '"] a').innerHTML = kml_lFTranslations.closed_problems[lF.mapUpdateRequest ^ 1];
        document.querySelector('li[data-layer-id="' + kml_W_map.problemLayer.id + '"] a').innerHTML = kml_lFTranslations.closed_problems[lF.mapProblem ^ 1];
    };

    //----------------------
    function resetLayersToSavedKMLayers(kml_exclude, mykml) {
        //kmllog('resetLayersToSavedKMLayers(' + kml_exclude + ')');
        if (mykml === undefined) mykml = getMyKMLayersObject();
        if (kml_exclude === undefined) kml_exclude = false;

        if (mykml !== undefined && mykml.SAVED_PRESETS[mykml.idx] !== undefined && mykml.SAVED_PRESETS[mykml.idx].saved) {

            var kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers),
                switcherAccelObj = kml_layerSwitcher.accelerator,
                switcherAccelNames = Object.keys(switcherAccelObj),
                kml_switcherName,
                visibleMyKMLayersAccelObj = mykml.SAVED_PRESETS[mykml.idx].visibleInLayersMenu,
                visibleMyKMLayersAccelName = Object.keys(visibleMyKMLayersAccelObj),
                togglePlacesAndPURs = false;

            // Adjust layer visibility if necessary
            if (kml_exclude) visibleMyKMLayersAccelObj[kml_exclude] = true;

            for (var kml_sw = 0, kml_sw_length = switcherAccelNames.length; kml_sw < kml_sw_length; kml_sw++) {
                kml_switcherName = switcherAccelNames[kml_sw];

                setKMLayerVisibility(switcherAccelObj[kml_switcherName], !!visibleMyKMLayersAccelObj[kml_switcherName], kml_sw);
            }

            if (document.getElementById('layer-switcher-menu') !== null) {
                setTimeout(function() {
                    updateKMLayerFilters(mykml.SAVED_PRESETS[mykml.idx].layerFilters);
                }, 200);
            }

            mykml.reset = true;
            localStorage.WME_KeepMyLayers = localStorage.WME_KeepMyLayers.replace(/reset":true/, 'reset":false');

            var waitForThis = findMissingLayers(switcherAccelObj, visibleMyKMLayersAccelName);
            waitForThis = waitForThis.concat(EXTEND_LAYER_WAITTIME);
            waitForMissedLayers(waitForThis, visibleMyKMLayersAccelObj, 1);

            try {
                document.getElementById('iKMLtempUndo').classList.toggle('fa-eye', true); //beta editor - fontawesome 4.x
                document.getElementById('iKMLtempUndo').classList.toggle('fa-eye-slash', false); //beta editor - fontawesome 4.x
                document.getElementById('iKMLtempUndo').classList.toggle('icon-eye-open', true); //prod editor - fontawesome 3.x
                document.getElementById('iKMLtempUndo').classList.toggle('icon-eye-close', false); //prod editor - fontawesome 3.x
            } catch (err) {
                /* do nothing */
            }
        }
    };

    //----------------------------------------------------------------------
    var userResetOfLayersToSavedKMLayers = function(myKMLayersStatus, mykml) {
        //kmllog('userResetOfLayersToSavedKMLayers()');
        if (mykml === undefined) mykml = getMyKMLayersObject();
        if (myKMLayersStatus === undefined) myKMLayersStatus = mykml.SAVED_PRESETS[mykml.idx].saved;
        if (myKMLayersStatus) resetLayersToSavedKMLayers(mykml);
        else return false;
    };

    //--------------------------------------------------------------------------------------------
    //  OOOOO  TTTTTTT HH   HH EEEEEEE RRRRRR     LL        AAA   YY   YY EEEEEEE RRRRRR   SSSSS
    // OO   OO   TTT   HH   HH EE      RR   RR    LL       AAAAA  YY   YY EE      RR   RR SS
    // OO   OO   TTT   HHHHHHH EEEEE   RRRRRR     LL      AA   AA  YYYYY  EEEEE   RRRRRR   SSSSS
    // OO   OO   TTT   HH   HH EE      RR  RR     LL      AAAAAAA   YYY   EE      RR  RR       SS
    //  OOOO0    TTT   HH   HH EEEEEEE RR   RR    LLLLLLL AA   AA   YYY   EEEEEEE RR   RR  SSSSS
    //--------------------------------------------------------------------------------------------
    var applyAdditionalKMLSettings = function() {
        //kmllog('applyAdditionalKMLSettings()', '/');
        // ['&x', '&b', '&l', '&1', '&5', '&2']; //disable, beta, lang, city, am, roads
        if (~localStorage.WME_KMLSettings.indexOf('&1')) {
            if (kml_W_map.layers[1].opacity !== 0.8) {
                kml_W_map.layers[1].setOpacity(0.8);
                //kmllog('Opacity of Cities layer increased.');
            }
        } else {
            if (kml_W_map.layers[1].opacity === 0.8) {
                kml_W_map.layers[1].setOpacity(0.5);
                //kmllog('Opacity of Cities layer at default.');
            }
        }

        if (~localStorage.WME_KMLSettings.indexOf('&5')) {
            if (kml_W_map.managedAreasLayer.options.styleMap.styles.default.defaultStyle.fillOpacity !== 0.1) {

                kml_W_map.managedAreasLayer.options.styleMap.styles.default.defaultStyle.fillOpacity = 0.1;
                kml_W_map.managedAreasLayer.setZIndex(334);

                //kmllog('Opacity of AM layer decreased.');
                try {
                    unsafeWindow.Waze.controller.reload();
                } catch (err) {};
            }
        } else {
            if (kml_W_map.managedAreasLayer.options.styleMap.styles.default.defaultStyle.fillOpacity < 0.3) {
                kml_W_map.managedAreasLayer.options.styleMap.styles.default.defaultStyle.fillOpacity = 0.3;
                kml_W_map.managedAreasLayer.setZIndex(350);
                //kmllog('Opacity of AM layer returned to normal.');
                try {
                    unsafeWindow.Waze.controller.reload();
                } catch (err) {};
            }
        }

        if (~localStorage.WME_KMLSettings.indexOf('&2')) {
            if (kml_W_map.layers[2].opacity === 1) {
                kml_W_map.layers[2].setOpacity(0.82);
                //kmllog('Opacity of Roads layer decreased.');
            }
        } else {
            if (kml_W_map.layers[2].opacity !== 1) {
                kml_W_map.layers[2].setOpacity(1);
                //kmllog('Opacity of Roads layer at default.');
            }
        }
    };

    // ---------------------------------------------------------------------
    var runSecondaryKMLayersCheck = function() {
        //kmllog('runSecondaryKMLayersCheck()', '/');
        if (localStorage.WME_KMLSettings === undefined) {
            localStorage.WME_KMLSettings = ':';
        }

        if (~localStorage.WME_KMLSettings.indexOf('&x')) { // user has set WMEKMLayers to be disabled
            kmllog('WMEKMLayers:', 'KeepMyLayers at page load is disabled.');
            return false;
        } else {
            return true;
        }
    };
    /////////////////////////////////////////////////////////////////////////////////////////////
    /////////                                                                           /////////
    /////////                       __ __  __  ___ __                                   /////////
    /////////    ____ ___   __  __ / //_/ /  |/  // /   ____ _ __  __ ___   _____ _____ /////////
    /////////   / __ `__ \ / / / // ,<   / /|_/ // /   / __ `// / / // _ \ / ___// ___/ /////////
    /////////  / / / / / // /_/ // /| | / /  / // /___/ /_/ // /_/ //  __// /   (__  )  /////////
    ///////// /_/ /_/ /_/ \__, //_/ |_|/_/  /_//_____/\__,_/ \__, / \___//_/   /____/   /////////
    /////////            /____/                             /____/                      /////////
    /////////                                                                           /////////
    /////////////////////////////////////////////////////////////////////////////////////////////
    myKMLayers = getMyKMLayersObject();
    //KML = myKMLayers;

    if (runSecondaryKMLayersCheck() &&
        myKMLayers.SAVED_PRESETS &&
        myKMLayers.SAVED_PRESETS[myKMLayers.idx] &&
        myKMLayers.SAVED_PRESETS[myKMLayers.idx].saved) {

        resetLayersToSavedKMLayers(checkForReqLayers(location.href), myKMLayers);
    }

    applyAdditionalKMLSettings();
    kmllog('Loading page elements...');
    //----------------------------------------------------------------------

    var kmlElementMap = {
        ids: {
            betaRedirect: 'cbKML_0',
            altPermalink: 'cbKML_1',
            syncPrefs: 'cbKML_2',
            syncPresets: 'cbKML_3',
            localeRedirect: 'cbKML_4',
            cityLayer: 'cbKML_5',
            amLayer: 'cbKML_6',
            roadLayer: 'cbKML_7',
            disableRedirect: 'cbKML_8'
        },
        idToUsageName: {
            cbKML_0: 'betaToggle',
            cbKML_1: 'altPermalink',
            cbKML_2: 'syncPrefs',
            cbKML_3: 'syncPresets',
            cbKML_4: 'locale',
            cbKML_5: 'cityLayerOpacity',
            cbKML_6: 'amLayerOpacity',
            cbKML_7: 'roadLayerOpacity',
            cbKML_8: 'disableAutoReset'
        },
        queryCodes: {
            betaRedirect: '&b',
            altPermalink: '&a',
            syncPrefs: '&s',
            syncPresets: '&p',
            localeRedirect: '&l',
            cityLayer: '&1',
            amLayer: '&5',
            roadLayer: '&2',
            disableRedirect: '&x'
        },
        queryCodeList: ['&b', '&a', '&s', '&p', '&l', '&1', '&5', '&2', '&x'] //beta, alt-PL, lang, city, am, roads, disable
    };

    //----------------------------------------------------------------------
    KMLayersVersion = {
        currentVersion: GM_info.script.version,
        lastVersionString: function(){return localStorage.WME_KMLUsageHelper.match(/(?!&v)(?:\d{0,2}\.)+\d{0,2}/)},
        convertToNumericVersion: function(versionString) {
            var vMult = [8000, 400, 20, 1],
                versionNumeric = 0;

            if (versionString) {
                if (versionString.constructor === Array) {
                    if (versionString.length === 1) {
                        versionString = versionString[0];
                    } else {
                        console.error('WMEKMLayers:', 'versionString is an array with more than 1 element.')
                    }
                }
                return versionString.match(/(\d)+/g).map(function(d, i) {
                    versionNumeric += d * vMult[i];
                }), versionNumeric;
            } else {
                return null;
            }
        },
        getLastVersionValue: function() {
            return this.convertToNumericVersion(this.lastVersionString());
        },
        updateVersionString: function() {
            localStorage.WME_KMLUsageHelper = localStorage.WME_KMLUsageHelper.replace(/&v(?:\d{0,2}\.?)+\d{0,2}|$/, '&v' + this.currentVersion);
            KMLayersSync.setGM('WMEKMLayers_Usage', localStorage.WME_KMLUsageHelper);
            //this.lastVersionString = this.currentVersion;
        },
        isUpToDate: function(minimumVersionString) {
            var minVersionVal = this.convertToNumericVersion(minimumVersionString),
                lastVersionVal = this.getLastVersionValue();
            return (lastVersionVal >= minVersionVal) ? true : false;
        }
    };
    //----------------------------------------------------------------------
    KMLayersSync = {
        isBeta: !!~location.host.indexOf('editor-b'),
        getGM: GM_getValue,
        setGM: function(gmVar, gmVal) {
            requestAnimationFrame(function() {
                GM_setValue(gmVar, gmVal)
            });
        },
        deleteGM: function(gmVar) {
            requestAnimationFrame(function() {
                GM_deleteValue(gmVar)
            });
        },
        callGM: function(gmVar, callback) {
            requestAnimationFrame(function() {
                callback(GM_getValue(gmVar))
            });
        },
        getPreferencesGM: function() {
            return GM_getValue("WMEKMLayers_Prefs")
        },
        getUsageLogGM: function() {
            return GM_getValue("WMEKMLayers_Usage")
        },
        getBetaTogValueGM: function() {
            return GM_getValue("WMEKMLayers_Beta")
        },
        getLocaleValueGM: function() {
            return GM_getValue("WMEKMLayers_Lang")
        },
        getSavedPresetsGM: function() {
            return GM_getValue("WMEKMLayers_Presets")
        },
        _GM_DEBUG: {
            listNames: GM_listValues,
            getAll: function() { //shows the values of all saved GM variables
                var gmVarNames = GM_listValues(),
                    gmValues = {};

                for (var g=0, gLength = gmVarNames.length; g < gLength; g++) {
                    gmValues[gmVarNames[g]] = GM_getValue(gmVarNames[g]);
                    //console.info(gmVarNames[g], '=', gmValues[gmVarNames[g]]);
                }
                return gmValues;
            },
            deleteAll: function() {
                var gmVarNames = GM_listValues();
                for (var g=0, gLength=gmVarNames.length; g < gLength; g++) {
                    GM_deleteValue(gmVarNames[g]);
                }
            }
        },
        _GM_CALLBACKS: {
            prefs: '',
            usage: '',
            beta: '',
            lang: '',
            presets: {}
        },
        _GM_refreshPrefsAttribute: function() {
            this.callGM("WMEKMLayers_Prefs", function(c) {
                KMLayersSync._GM_CALLBACKS.prefs = c;
                //localStorage.WME_KMLSettings = c;
            })
        },
        _GM_refreshUsageAttribute: function() {
            this.callGM("WMEKMLayers_Usage", function(c) {
                KMLayersSync._GM_CALLBACKS.usage = c;
                //localStorage.WME_KMLUsageHelper = c;
            })
        },
        _GM_refreshBetaAttribute: function() {
            this.callGM("WMEKMLayers_Beta", function(c) {
                KMLayersSync._GM_CALLBACKS.beta = c;
            })
        },
        _GM_refreshLangAttribute: function() {
            this.callGM("WMEKMLayers_Lang", function(c) {
                KMLayersSync._GM_CALLBACKS.lang = c;
            })
        },
        _GM_refreshPresetsToObject: function() {
            this.callGM("WMEKMLayers_Presets", function(c) {
                KMLayersSync._GM_CALLBACKS.presets = c;
            })
        },
        setPreferencesGM: function(gmVal) {
            this.setGM("WMEKMLayers_Prefs", gmVal)
        },
        setUsageLogGM: function(gmVal) {
            this.setGM("WMEKMLayers_Usage", gmVal)
        },
        setBetaTogValueGM: function(gmVal) {
            this.setGM("WMEKMLayers_Beta", gmVal)
        },
        setLocaleValueGM: function(gmVal) {
            this.setGM("WMEKMLayers_Lang", gmVal)
        },
        setSavedPresetsGM: function(gmVal) {
            this.setGM("WMEKMLayers_Presets", gmVal)
        },
        addThisSettingLS: function(queryCode) {
            //Add the query code without possibility of duplicating
            localStorage.WME_KMLSettings = localStorage.WME_KMLSettings.replace(eval('/' + queryCode + '|$/'), queryCode);
        },
        removeThisSettingLS: function(queryCode) {
            localStorage.WME_KMLSettings = localStorage.WME_KMLSettings.replace(queryCode, '');
        },
        updateTheseSettingLS: function(queryCodes) {
            //this._GM_refreshPrefsAttribute();
            var crossDomainKMLPrefs = this.getPreferencesGM(); //this._GM_CALLBACKS.prefs;
            if (crossDomainKMLPrefs) {
                if (queryCodes.constructor === String) queryCodes = [queryCodes];
                for (var q = 0, numQueryCodes = queryCodes.length; q < numQueryCodes; q++) {
                    if (~crossDomainKMLPrefs.indexOf(queryCodes[q])) {
                        this.addThisSettingLS(queryCodes[q]);
                        if (numQueryCodes === 1) return true;
                    } else {
                        this.removeThisSettingLS(queryCodes[q]);
                        if (numQueryCodes === 1) return false;
                    }
                }
            } else {
                kmllog('Missing crossDomainKMLPrefs for synchronizing ' + queryCodes + ' between Beta and Prod WME.')
                console.info(this._GM);
                return null;
            }
        },
        applysyncBetaProdSettingsLS: function() {
            // Updates both beta-prod toggle and toggle-friendly PLs features
            var betaToggleSetting = this.updateTheseSettingLS('&b'),
                altPLSetting = this.updateTheseSettingLS('&a');

            // Check if these settings are incongruent...
            // Alt-PL feature should not be enabled if there is no beta-prod toggle
            if (!betaToggleSetting && altPLSetting) {
                this.removeThisSettingLS('&a');
            }
        },
        applysyncLocaleSettingLS: function() {
            this.updateTheseSettingLS('&l')
        },
        applysyncSyncPrefsSettingLS: function() {
            this.updateTheseSettingLS('&s')
        },
        applysyncAllPreferencesLS: function() {
            this._GM_refreshPrefsAttribute();
            localStorage.WME_KMLSettings = this.getPreferencesGM();
        },
        upsyncAllPreferencesGM: function() {
            this.setGM("WMEKMLayers_Prefs", localStorage.WME_KMLSettings);
        },
        saveKMLObjToLocalStorage: function(mykmlLocalVar) {
            requestAnimationFrame(function() {
                localStorage.WME_KeepMyLayers = JSON.stringify(mykmlLocalVar)
            });
        },
        upsyncSavedPresetsLS: function(mykmlLocalVar) {
            if (mykmlLocalVar && mykmlLocalVar.SAVED_PRESETS && mykmlLocalVar.SAVED_PRESETS.length) {
                this.setGM("WMEKMLayers_Presets", JSON.stringify(mykmlLocalVar.SAVED_PRESETS));
                return true;
            } else {
                return false;
            }
        },
        mergeSavedPresetsGMLS: function(mykmlLocalVar) {
            var presetsGMString = this.getGM("WMEKMLayers_Presets"),
                presetsGM;

            if (presetsGMString) {
                presetsGM = JSON.parse(presetsGMString);
            } else {
                presetsGM = [];
            }

            if (mykmlLocalVar && mykmlLocalVar.SAVED_PRESETS && mykmlLocalVar.SAVED_PRESETS.length) {
                presetsGM = mykmlLocalVar.SAVED_PRESETS.concat(presetsGM);

                this.setGM("WMEKMLayers_Presets", JSON.stringify(presetsGM));
                mykmlLocalVar.syncPresets = true;
                mykmlLocalVar.SAVED_PRESETS = presetsGM;
                this.saveKMLObjToLocalStorage(mykmlLocalVar);
                return mykmlLocalVar;
            } else {
                return false;
            }
        },
        applysyncSavedPresetsGM: function(mykmlLocalVar) {
            var presetsGMString = this.getGM("WMEKMLayers_Presets"),
                presetsGM;

            if (mykmlLocalVar === undefined) mykmlLocalVar = JSON.parse(localStorage.WME_KeepMyLayers);

            if (presetsGMString) {
                presetsGM = JSON.parse(presetsGMString);
            } else {
                return kmllog('Note - No saved presets were found for syncing.'), mykmlLocalVar;
            }

            if (mykmlLocalVar && mykmlLocalVar.SAVED_PRESETS && mykmlLocalVar.SAVED_PRESETS.length) {
                //$.extend('', mykmlLocalVar.SAVED_PRESETS, presetsGM);
                mykmlLocalVar.SAVED_PRESETS = presetsGM;

                this.saveKMLObjToLocalStorage(mykmlLocalVar);
                return mykmlLocalVar;
            } else {
                return false;
            }
        },
        hasSettingEnabled: function(queryCode) {
            if (~localStorage.WME_KMLSettings.indexOf(queryCode)) {
                return true;
            } else {
                return false;
            }
        },
        hasSeenKMLPopup: function(usageQueryCode) {
            if (!~localStorage.WME_KMLUsageHelper.indexOf(usageQueryCode)) {
                return false;
            } else {
                return true;
            }
        },
        logKMLUsageHistory: function(usageQueryCode) {
            if (!~localStorage.WME_KMLUsageHelper.indexOf(usageQueryCode)) {
                localStorage.WME_KMLUsageHelper += usageQueryCode;
                this.setGM('WMEKMLayers_Usage', localStorage.WME_KMLUsageHelper);
                return true;
            } else {
                return false;
            }
        },
        unlogKMLUsageHistory: function(usageQueryCode) {
            if (~localStorage.WME_KMLUsageHelper.indexOf(usageQueryCode)) {
                localStorage.WME_KMLUsageHelper = localStorage.WME_KMLUsageHelper.replace(usageQueryCode,'');
                this.setGM('WMEKMLayers_Usage', localStorage.WME_KMLUsageHelper);
                return true;
            } else {
                return false;
            }
        },
        toggleKMLUsageHistory: function(usageQueryCode) {
            if (!~localStorage.WME_KMLUsageHelper.indexOf(usageQueryCode)) {
                localStorage.WME_KMLUsageHelper += usageQueryCode;
                this.setGM('WMEKMLayers_Usage', localStorage.WME_KMLUsageHelper);
                return true;
            } else {
                localStorage.WME_KMLUsageHelper = localStorage.WME_KMLUsageHelper.replace(usageQueryCode,'');
                this.setGM('WMEKMLayers_Usage', localStorage.WME_KMLUsageHelper);
                return false;
            }
        },
        convertToNumericVersion: KMLayersVersion.convertToNumericVersion,
        parseQueryString: function(queryString) {
            return queryString.match(/&[a-z\d\.]+/g);
        },
        getUniqueQueryString: function(queryString) {
            var uniqobj = {},
                versionStringArray = queryString.match(/&v[\d\.]*/g),
                versionCompare = 0,
                numericVer, highestVersion,
                parsedQueryString = queryString.match(/&[a-uw-z1-9]/g);

                //parsedQueryString = this.parseQueryString(queryString);

            if (versionStringArray && versionStringArray.length > 1) {
                for (var v = 0, vLength = versionStringArray.length; v < vLength; v++) {
                    numericVer = this.convertToNumericVersion(versionStringArray[v].substr(2));
                    if (versionCompare < numericVer) {
                        highestVersion = versionStringArray[v];
                        versionCompare = numericVer;
                    }
                }
            } else {
                highestVersion = '';
            }

            parsedQueryString.map(function(e, i) {
                var qLetter = e.match(/[a-uw-z1-9]/);
                if (qLetter) uniqobj[qLetter] = i;
            });

            return '&' + Object.keys(uniqobj).join('&') + highestVersion;
        },
        callCompleted: false,
        waitForResponse: function(nextStep) {
            if (this.callCompleted) {
                eval(nextStep);
            } else {
                setTimeout(this.watForResponses(nextStep), 100);
            }
        },
        hasNoSetPrefs: localStorage.WME_KMLSettings.length === 1
    };
    KMLayersSync.hasUpsyncedPreferences = !!KMLayersSync.getPreferencesGM();


    // Synchronize...
    if (KMLayersSync.hasUpsyncedPreferences) {
        if (KMLayersSync.hasSettingEnabled('&s')) { //Sync all preferences
            //Synchronize by copying over any changes that were made
            if (localStorage.WME_KMLSettings[0] === '!') { //! is inserted at the beginning to indicate syncing all settings
                KMLayersSync.applysyncAllPreferencesLS();
            } else {
                // First sync
                var mergedPrefsString = KMLayersSync.getPreferencesGM() + localStorage.WME_KMLSettings,
                    uniqueMergedPrefsString = KMLayersSync.getUniqueQueryString(mergedPrefsString);

                localStorage.WME_KMLSettings = '!:' + uniqueMergedPrefsString;
                KMLayersSync.upsyncAllPreferencesGM();
            }
        } else if (KMLayersSync.hasNoSetPrefs) {
            KMLayersSync.applysyncAllPreferencesLS();
        } else { // Sync subset of preferences that must be synced

            //....beta-tog and alt-PL settings between Beta-Prod editors
            KMLayersSync.applysyncBetaProdSettingsLS();
            //....locale specifications between Beta-Prod editors
            //            KMLayersSync.applysyncLocaleSettingLS();
            //....synchronization setting
            //            KMLayersSync.applysyncSyncPrefsSettingLS();
            KMLayersSync.updateTheseSettingLS(['&s', '&l'])
        }

    } else {
        // ~~~~~~~~~~~~~~~~~TEMP~~~~~~~~~~~~~~~~~~~~
        // adjust for separation of popups for beta-tog and alt-PL in current version
        if (~localStorage.WME_KMLSettings.indexOf('&b') && !~localStorage.WME_KMLSettings.indexOf('&a')) {
            localStorage.WME_KMLSettings += '&a';
        }
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        KMLayersSync.upsyncAllPreferencesGM();
        KMLayersSync.hasUpsyncedPreferences = !!KMLayersSync.getPreferencesGM();
    }

    // Synchronize layer presets
    if (KMLayersSync.hasSettingEnabled('&p')) {
        if (myKMLayers.syncPresets) {
            myKMLayers = KMLayersSync.applysyncSavedPresetsGM();
        } else {
            myKMLayers = KMLayersSync.mergeSavedPresetsGMLS(myKMLayers);
        }
    }

    //--------------------------------------------------------------------------
    //  First-time Usage Helper
    //--------------------------------------------------------------------------
    // Sync Usage Helper log between Beta and Prod domains
    var usageHelperHistory = KMLayersSync.getUsageLogGM();
    if (usageHelperHistory) {
        localStorage.WME_KMLUsageHelper = usageHelperHistory;
        KMLayersSync.useFriendlyPLs = !~usageHelperHistory.indexOf('&f');
    } else if (!localStorage.WME_KMLUsageHelper) {
        localStorage.WME_KMLUsageHelper = ':'
        KMLayersSync.useFriendlyPLs = true;

    }

    //~~~~~~~~~ TEMP ~~~~~~~~~~~~
    // Runs only once per designated update...
    if (!KMLayersVersion.isUpToDate(minKMLVersion)) {
        kmllog('Performed catch-up and clean-up functions for current version', KMLayersVersion.currentVersion);
        KMLayersVersion.updateVersionString();
        // adjust this setting one time for this next update to 0.4.5
        if (KMLayersSync.hasSeenKMLPopup('&b')) KMLayersSync.logKMLUsageHistory('&a');
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //                                                                          //
    //////////////////////////////////////////////////////////////////////////////

    //-----------------------------------------------------------------------------
    //  UU   UU  SSSSS    AAA     GGGGG EEEEEEE    HH   HH EEEEEEE LL      PPPPPP
    //  UU   UU SS       AAAAA   GG     EE         HH   HH EE      LL      PP   PP
    //  UU   UU  SSSSS  AA   AA GG  GGG EEEEE      HHHHHHH EEEEE   LL      PPPPPP
    //  UU   UU      SS AAAAAAA GG   GG EE         HH   HH EE      LL      PP
    //   UUUUU   SSSSS  AA   AA  GGGGGG EEEEEEE    HH   HH EEEEEEE LLLLLLL PP
    //-----------------------------------------------------------------------------
    // PINK POPUPS
    //      Note: For greater flexibility, pink popups require separate event listeners to be specified.
    //            that is, it does not automatically add event listeners, unlike kml tooltips.
    //      offScreenSideProp specifies properties for the fly-in effect.
    var insertKMLPinkPopupCssToDOM = function(popupId, arrowSidePosition, arrowPosDistProp, popupWidth, offScreenSideProp) {
        var usageCssEl = document.createElement('style'),
            arrowPosDistProp2, arrowFeatBorder, arrowFeatMargin, popupIdSelector;

        (popupId === '') ? popupIdSelector = '' : popupIdSelector = '#' + popupId;
        if (popupWidth === undefined || popupWidth === '') popupWidth = 'auto';


        switch (arrowSidePosition) {
            case 'top':
                if (arrowPosDistProp == '') arrowPosDistProp = 'left: 50%';
                arrowPosDistProp2 = 'bottom: 100%';
                arrowSpacerMargin = 'margin: 10px 0px';

                arrowFeatBorder = 'border-bottom-color: ';
                arrowFeatMargin = 'margin-left: ';
                break;

            case 'bottom':
                if (arrowPosDistProp == '') arrowPosDistProp = 'left: 50%';
                arrowPosDistProp2 = 'top: 100%'
                arrowSpacerMargin = 'margin: 10px 0px';

                arrowFeatBorder = 'border-top-color: ';
                arrowFeatMargin = 'margin-left: ';
                break;

            case 'right':
                if (arrowPosDistProp == '') arrowPosDistProp = 'top: 50%';
                arrowPosDistProp2 = 'left: 100%';
                arrowSpacerMargin = 'margin: 0px 10px';

                arrowFeatBorder = 'border-left-color: ';
                arrowFeatMargin = 'margin-top: ';
                break;

            case 'left':
                if (arrowPosDistProp == '') arrowPosDistProp = 'top: 50%';
                arrowPosDistProp2 = 'right: 100%;';
                arrowSpacerMargin = 'margin: 0px 10px';

                arrowFeatBorder = 'border-right-color: ';
                arrowFeatMargin = 'margin-top: ';
                break;
        }

        usageCssEl.type = 'text/css'
        usageCssEl.id = 'cssKMLPopup_' + popupId;
        usageCssEl.innerHTML = popupIdSelector + '.kml-popupbox { width: ' + popupWidth + '; z-index: 9999; position: relative; background: #D04294; border: 1px solid #cf38a6; border-radius: 4px; box-shadow: 0px 4px 10px rgba(0,0,0,0.8); padding: 10px 10px 8px ; color: #FFF; ' + arrowSpacerMargin + '; overflow: visible; transition: all .2s ease-out 0s;}\n' +
            popupIdSelector + '.kml-popupbox.kml-grow, ' + popupIdSelector + '.kml-popupbox.kml-grow .kml-header, ' + popupIdSelector + '.kml-popupbox.kml-grow h4, ' + popupIdSelector + '.kml-popupbox.kml-grow i.kml-header-icon, ' + popupIdSelector + '.kml-popupbox.kml-grow div.kml-section {width: 150px !important; height: 1px !important; padding: 0; margin: 0; opacity: 0 !important; overflow: hidden !important; font-size: 1px !important; color: transparent !important; line-height: 0.1 !important; overflow: hidden !important; ' + offScreenSideProp + ' !important; }\n' +
            popupIdSelector + '.kml-popupbox:after, ' + popupIdSelector + '.kml-popupbox:before {' + arrowPosDistProp + '; ' + arrowPosDistProp2 + '; border: solid transparent; content: " "; height: 0; width: 0; position: absolute; pointer-events: none; }\n' +
            popupIdSelector + '.kml-popupbox:after { border-color: transparent; ' + arrowFeatBorder + '#cf38a6; border-width: 8px; ' + arrowFeatMargin + '-8px; }\n' +
            popupIdSelector + '.kml-popupbox:before { border-color: transparent; ' + arrowFeatBorder + '#cf38a6; border-width: 9px; ' + arrowFeatMargin + '-9px; }\n';
        document.body.appendChild(usageCssEl);
        return usageCssEl;
    };

    var insertKMLPinkPopupNode = function(popupId, attachmentNode, usageTitle, usageText, popupStyleProps) {
        // popupStyleProps is for specifying the position of the popup container
        var kmlPopupEl = document.createElement('div');
        kmlPopupEl.id = popupId;
        kmlPopupEl.className = 'kml-popupbox kml-grow';
        (usageTitle === '') ? usageTitle = '&nbsp;KMLayers Usage Tip' : usageTitle = '&nbsp;' + usageTitle;

        if (popupStyleProps !== undefined) {
            kmlPopupEl.setAttribute('style', 'position: absolute; ' + popupStyleProps);
        }

        kmlPopupEl.innerHTML = '<div class="kml-header">' +
            '<i class="kml-header-icon pull-left icon-info-sign fa fa-info-circle fa-pull-left"' +
            ' style="font-size: 26px; margin: auto; color: #54265F; line-height: 28px; height: 28px; width: 28px;"></i>' +
            '<h4 style="margin-top: -5px; margin-bottom: 5px; margin-left: -11px; margin-right: -11px; padding: 4px; padding-left: 36px; font-size: 12pt; font-weight: 600; text-align: left; color: #8D529C; background-color: rgba(255,199,242,0.6);">' +
            usageTitle + '</h4>' +
            '</div><div class="kml-section" style="font-size: 9pt; line-height: normal;">' +
            usageText +
            '</div></div>';

        attachmentNode.appendChild(kmlPopupEl);

        setTimeout(function() {
            kmlPopupEl.classList.remove('kml-grow')
        }, 200);

        return kmlPopupEl;
    };

    var KMLayersUsageHelper = function(kmlHelpTopic, hasSeenOnce) {
        // hasSeenOnce:   [true|false|'none'];
        //                Has the usageHelper popup been displayed at least once before?
        //                  Popup will _not_ display for only boolean `true`
        if (hasSeenOnce !== true) {

            //localStorage.WME_KMLUsageHelper.match(/&0.4(=\d|,\d)*/g)[0].match(/[=|,](\d)/g).map(function(a){return a.substr(-1)})
            var usageTitle, usageText, usageId;

            switch (kmlHelpTopic) {
                case 'layer_presets_runonce':
                    document.getElementById('kmlDropdownMenu').classList.add('kml-keep-open');
                    document.getElementById('kmlDropdownMenu').classList.add('open');
                    localStorage.WME_KeepMyLayers = localStorage.WME_KeepMyLayers.replace(/runonce":false/, 'runonce":true');
                    document.querySelector('#kmlDropdownMenu li').classList.toggle('kml-usage-helper');
                    setTimeout(function() {
                        document.querySelector('#kmlDropdownMenu li').classList.toggle('kml-usage-helper');
                    }, 10000);

                    break;

                case 'stay_open_dropdown_menu':
                    var popupParentEl = document.getElementById('kmlDropdownMenu');
                    usageId = 'kmlStayopenPopup';
                    usageTitle = 'Preset-Switcher Menu';
                    usageText = 'Depress the KMLayers menu button to make it stay open on the screen. It will automatically fade and tuck itself away when not in focus. You can add more presets from within the preference pane.<p></p>Tip: Double-clicking on the WME Layers menu will open KeepMyLayers\' preferences.';

                    if (document.getElementById(usageId) === null) {
                        if (popupParentEl) {
                            var kmlStayopenPopupCssEl = insertKMLPinkPopupCssToDOM(usageId, 'top', 'right: 2px', '240px', 'right: -40px');
                            var kmlStayopenPopupEl = insertKMLPinkPopupNode(usageId, popupParentEl, usageTitle, usageText, 'top: 40px; right: 0px;');

                            document.getElementById(usageId).onclick = function() {
                                kmlStayopenPopupEl.classList.toggle('kml-grow');
                                setTimeout(function() {
                                    kmlStayopenPopupEl.remove();
                                    kmlStayopenPopupCssEl.remove();
                                }, 250);
                                if (hasSeenOnce === false) KMLayersSync.logKMLUsageHistory('&m');
                            };
                        } else {
                            setTimeout(function() {
                                KMLayersUsageHelper('stay_open_dropdown_menu', false)
                            }, 500);
                        }
                    }
                    break;

                case 'beta_toggle':
                    var popupParentEl = document.getElementById('map-search').parentNode;
                    usageId = 'kmlBetaTogPopup';
                    usageTitle = 'Beta-Prod Editor Toggle';
                    usageText = 'Switch to Beta (Red) or to Prod (Blue) to force WME to always load in that editing mode. Double-click on the toggle to disable it. <p></p>Note: If you need to switch back and forth between the two, you can either disable the toggle or use the KMLayers-friendly permalinks feature.';

                    if (document.getElementById(usageId) === null) {
                        if (popupParentEl) {
                            var kmlBetaTogPopupCssEl = insertKMLPinkPopupCssToDOM(usageId, 'left', 'top: 22px', '280px', 'left: -60px');
                            var kmlBetaTogPopupEl = insertKMLPinkPopupNode(usageId, popupParentEl, usageTitle, usageText, 'top: 1px; left: 0px;');

                            document.getElementById(usageId).onclick = function() {
                                kmlBetaTogPopupEl.classList.toggle('kml-grow');
                                setTimeout(function() {
                                    kmlBetaTogPopupEl.remove();
                                    kmlBetaTogPopupCssEl.remove();
                                }, 250);
                                if (hasSeenOnce === false) KMLayersSync.logKMLUsageHistory('&b');
                            };
                        } else {
                            setTimeout(function() {
                                KMLayersUsageHelper('beta_toggle', false)
                            }, 500);
                        }
                    }
                    break;

                case 'alt_permalink':
                    var popupParentEl = document.getElementById('kmlPLContainer');
                    usageId = 'kmlAltPLPopup';
                    usageTitle = 'Beta-Prod Toggle-Friendly PLs';
                    usageText = 'These permalinks are Beta-Prod toggle-friendly. They allow you to switch between editors without having to disable the toggle. When PLs are tagged with \"&b=0\", it prevents KMLayers from checking whether to redirect between Beta or Prod editor.<p></p>Hovering over the links and pressing the Shift key turns friendly-PL tagging on or off.';
                    if (document.getElementById(usageId) === null) {
                        if (popupParentEl) {
                            var kmlAltPLPopupCssEl = insertKMLPinkPopupCssToDOM(usageId, 'bottom', 'right: 20px', '320px', 'bottom: -50px');
                            var kmlAltPLPopupEl = insertKMLPinkPopupNode(usageId, popupParentEl, usageTitle, usageText, 'bottom: 23px; right: -15px;');

                            document.getElementById(usageId).onclick = function() {
                                kmlAltPLPopupEl.classList.toggle('kml-grow');
                                setTimeout(function() {
                                    kmlAltPLPopupEl.remove();
                                    kmlAltPLPopupCssEl.remove();
                                }, 250);
                                if (hasSeenOnce === false) KMLayersSync.logKMLUsageHistory('&a');
                            };
                        } else {
                            setTimeout(function() {
                                KMLayersUsageHelper('alt_permalink', false)
                            }, 500);
                        }
                    }
                    break;

            } //switch
        } //if hasSeenOnce is not boolean true
    };
    //-------------------------------------------------------------------------------------
    // TOOLTIPS - on hover event listeners included...
    var getKMLTooltipCssNode = function(cssTooltipSelector, arrowSidePosition, arrowPosDistProp, tooltipStyleProp, cssUniqueId) {
        var tooltipCssEl = document.createElement('style'),
            arrowPosDistProp2, arrowFeatBorder, arrowFeatMargin;

        //(cssTooltipSelector === '') ? tooltipIdSelector = '' : tooltipIdSelector = '#' + cssTooltipSelector;
        if (tooltipStyleProp === undefined || tooltipStyleProp === '') tooltipStyleProp = 'width: auto;';

        switch (arrowSidePosition) {
            case 'top':
                if (arrowPosDistProp == '') arrowPosDistProp = 'left: 50%';
                arrowPosDistProp2 = 'bottom: 100%';
                arrowSpacerMargin = 'margin: 10px 0px';
                arrowFeatBorder = 'border-bottom-color: ';
                arrowFeatMargin = 'margin-left: ';
                break;
            case 'bottom':
                if (arrowPosDistProp == '') arrowPosDistProp = 'left: 50%';
                arrowPosDistProp2 = 'top: 100%'
                arrowSpacerMargin = 'margin: 10px 0px';
                arrowFeatBorder = 'border-top-color: ';
                arrowFeatMargin = 'margin-left: ';
                break;
            case 'right':
                if (arrowPosDistProp == '') arrowPosDistProp = 'top: 50%';
                arrowPosDistProp2 = 'left: 100%';
                arrowSpacerMargin = 'margin: 0px 10px';
                arrowFeatBorder = 'border-left-color: ';
                arrowFeatMargin = 'margin-top: ';
                break;
            case 'left':
                if (arrowPosDistProp == '') arrowPosDistProp = 'top: 50%';
                arrowPosDistProp2 = 'right: 100%;';
                arrowSpacerMargin = 'margin: 0px 10px';
                arrowFeatBorder = 'border-right-color: ';
                arrowFeatMargin = 'margin-top: ';
                break;
        }

        tooltipCssEl.type = 'text/css';
        if (cssUniqueId) tooltipCssEl.id = cssUniqueId;
        tooltipCssEl.innerHTML = cssTooltipSelector + '.kml-tooltip { z-index: 9999; position: absolute; background: rgba(0,0,0,0.8); border-radius: 5px; -webkit-box-shadow: 0 6px 12px rgba(0,0,0,0.175);  box-shadow: 0 6px 12px rgba(0,0,0,0.175); padding: 10px ; color: #FFF; ' + arrowSpacerMargin + '; overflow: visible; pointer-events: none; transition: opacity .2s ease-in 0.5s; ' + tooltipStyleProp + '}\n' +
            cssTooltipSelector + '.kml-tooltip.kml-fade { opacity: 0 !important; transition: opacity .1s linear 0s; }\n' +
            cssTooltipSelector + '.kml-tooltip>.kml-section { font-size: 8pt; line-height: 1.4; word-wrap: break-word; }\n' +
            cssTooltipSelector + '.kml-tooltip:after, ' + cssTooltipSelector + '.kml-tooltip:before {' + arrowPosDistProp + '; ' + arrowPosDistProp2 + '; border: solid transparent; content: ""; height: 0; width: 0; position: absolute; pointer-events: none; }\n' +
            cssTooltipSelector + '.kml-tooltip:after { border-color: transparent; ' + arrowFeatBorder + '#000; border-width: 5px; ' + arrowFeatMargin + '-5px;}\n' +
            cssTooltipSelector + '.kml-tooltip:before { border-color: transparent; ' + arrowFeatBorder + '#000; border-width: 6px; ' + arrowFeatMargin + '-6px;}\n' +
            cssTooltipSelector + '.kml-tooltip>.kml-section ul { list-style: none; margin: 2px 0px; padding: 0px; }\n' + // margin: 2px 2px 2px -20px;
            cssTooltipSelector + '.kml-tooltip>.kml-section ul>li { text-align: left; padding-left: 3px; }\n' +
            cssTooltipSelector + '.kml-tooltip>.kml-section ul>li:before { content: "+"; padding-right: 6px; }\n';
        return tooltipCssEl;
    };

    var getKMLTooltipNode = function(tooltipId, sourceNode, elTooltipStyleProps) {
        // elTooltipStyleProps is for specifying the position of individual tooltips
        var kmlTooltipEl = document.createElement('div');
        if (tooltipId !== '' || tooltipId !== null) kmlTooltipEl.id = tooltipId;
        kmlTooltipEl.className = 'kml-tooltip kml-fade';

        if (elTooltipStyleProps !== undefined) {
            kmlTooltipEl.setAttribute('style', elTooltipStyleProps);
        }

        kmlTooltipEl.innerHTML = '<div class="kml-section">' +
            sourceNode.getAttribute('data-title') + '</div>';

        return kmlTooltipEl;
    };

    var insertKMLTooltip = function(kmlTooltipEl, eventTriggerNode, containerNode, tooltipCssEl) {
        if (containerNode === 'parent' || containerNode === 'sibling') containerNode = eventTriggerNode.parentNode;
        else if (containerNode === 'child') containerNode = eventTriggerNode;

        eventTriggerNode.addEventListener('mouseenter', function() {
            if (tooltipCssEl !== undefined) document.body.appendChild(tooltipCssEl);
            kmlTooltipEl.className = 'kml-tooltip kml-fade';
            containerNode.appendChild(kmlTooltipEl);
            setTimeout(function(){kmlTooltipEl.classList.remove('kml-fade')},20);
        }, false);

        eventTriggerNode.addEventListener('mouseleave', function() {
            requestAnimationFrame(function(){kmlTooltipEl.classList.add('kml-fade')});
            setTimeout(function() {
                kmlTooltipEl.remove();
                if (tooltipCssEl !== undefined) tooltipCssEl.remove();
            }, 210);

        }, false);
    };

    //============================================================================
    //        KK  KK MM    MM LL         MM    MM EEEEEEE NN   NN UU   UU
    //        KK KK  MMM  MMM LL         MMM  MMM EE      NNN  NN UU   UU
    //        KKKK   MM MM MM LL         MM MM MM EEEEE   NN N NN UU   UU
    //        KK KK  MM    MM LL         MM    MM EE      NN  NNN UU   UU
    //        KK  KK MM    MM LLLLLLL    MM    MM EEEEEEE NN   NN  UUUUU
    //============================================================================
    // Red save button
    var updateKMLayersSaveButton = function(kmlSavedStatus) {
        // Make save button red if nothing saved (nsave)
        setTimeout(function() {
            if (kmlSavedStatus) {
                document.getElementById("iKMLnotSaved").style.visibility = 'hidden';
            } else {
                document.getElementById("iKMLnotSaved").style.visibility = 'visible';
            }
        }, 300);
    };

    // Dropdown menu for selecting layers
    var updateKMLayersMenu = function(kml_layerSwitcher, mykml) {

        if (mykml === undefined) mykml = getMyKMLayersObject();
        if (kml_layerSwitcher === undefined || kml_layerSwitcher === '') kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers);

        var numKMLsets = mykml.SAVED_PRESETS.length,
            findRealNames, missingLayerNames = false,
            layersInTooltipArray, numLayersInTooltip, layerTooltip, ltt, layerRealName,
            selStatus, kmlset, htmlText = '',
            coloredText = Array(2);

        if (mykml.savedonce || numKMLsets > 1) { //both checks included as fail-safes
            coloredText[0] = 'kml-text-nsave';
            coloredText[1] = '';

            kmlset = -1
            while (++kmlset < numKMLsets) {
                findRealNames = false;
                /* ~~~~~~~~~~~~~~~ TEMP: Get real names to update old version of object ~~~~~~~~~~~~~~~ */
                if (mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName === null ||
                    mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName === undefined) {
                    mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName = []; //start with an empty array
                    findRealNames = true;
                } else if (mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName.length !== Object.keys(mykml.SAVED_PRESETS[kmlset].visibleInLayersMenu).length) {
                    mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName = []; //start with an empty array
                    findRealNames = true;
                }

                if (findRealNames) {
                    layersInTooltipArray = Object.keys(mykml.SAVED_PRESETS[kmlset].visibleInLayersMenu).map(function(layerKey) {
                        return layerKey;
                    });
                    numLayersInTooltip = layersInTooltipArray.length;

                    if (numLayersInTooltip === 0) {
                        layerTooltip = '<ul style="font-weight: 600;"><li>none</li></ul>';
                    } else {
                        layerTooltip = '<ul style="font-weight: 600;">';
                        for (ltt = 0; ltt < numLayersInTooltip; ltt++) {
                            layerRealName = kml_layerSwitcher.name[layersInTooltipArray[ltt]];
                            if (layerRealName !== undefined) {
                                mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName.push(layerRealName);
                                layerTooltip += '<li><span>' + layerRealName + '</span></li>';
                            } else { // ~~~~~~ TEMP ~~~~~~~
                                layerTooltip += '<li><span>missing layer? - ' + layersInTooltipArray[ltt] + '</span></li>';
                                missingLayerNames = true;
                            }
                        }
                        layerTooltip += '</ul>'
                        localStorage.WME_KeepMyLayers = JSON.stringify(mykml);
                    }
                } else {
                    layersInTooltipArray = mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName;
                    numLayersInTooltip = mykml.SAVED_PRESETS[kmlset].visibleInLayersMenuRealName.length;
                    if (numLayersInTooltip === 0) {
                        layerTooltip = '<ul style="font-weight: 600;"><li><span>none</span></li></ul>';
                    } else {
                        layerTooltip = '<ul style="font-weight: 600;">';
                        for (ltt = 0; ltt < numLayersInTooltip; ltt++) {
                            layerTooltip += '<li><span>' + layersInTooltipArray[ltt] + '</span></li>';
                        }
                        layerTooltip += '</ul>';
                    }
                }

                //---------------------
                (kmlset === mykml.idx) ? selStatus = 'active ' : selStatus = '';
                if (kmlset !== (numKMLsets - 1)) {
                    htmlText += '<li>';
                } else {
                    htmlText += '<li style="border-bottom: 0;">';
                }
                htmlText += //data-toggle="tooltip" 'data-placement="left" data-container="menu.kml-layers-menu-container" data-html="true" ' +
                    '<a data-title=\'' + layerTooltip + '\' ' +
                    'value=' + kmlset + ' name="kmlSet_' + kmlset + '" ' +
                    'class="kml-layers-menu dropdown-item ' + selStatus + coloredText[0 ^ mykml.SAVED_PRESETS[kmlset].saved] + '" ' +
                    'href="javascript:void(0)">' +
                    '<span>' + mykml.SAVED_PRESETS[kmlset].name + '</span>' +
                    '</a></li>'
            }

            document.querySelector('ul[class*=kml-layers-menu]').innerHTML = htmlText;
            document.getElementById('divKMLlayerName').innerHTML = mykml.SAVED_PRESETS[mykml.idx].name;


            // Init preset's layer list tooltips
            var presetMenuListEl = document.querySelectorAll('a.kml-layers-menu'),
                sourceNode, tooltipEl;

            if (document.getElementById('cssKMLpresetTooltips') === null) {
                var presetsTooltipsCssEl = getKMLTooltipCssNode('menu.kml-layers-menu-container ', 'right', 'top: 18px', 'width: 150px; left: -162px; top: 0px; min-height: 39px; transition-delay: 1s', 'cssKMLpresetTooltips');
                document.body.appendChild(presetsTooltipsCssEl);
            }

            kmlset = -1;
            while (++kmlset < numKMLsets) {
                // Setup event listeners for each preset switcher menu item
                presetMenuListEl[kmlset].onclick = function(eee) {
                    eee.stopPropagation(); // prevent menu from closing upon clicking
                    var mykml = JSON.parse(localStorage.WME_KeepMyLayers);

                    document.getElementsByName('kmlSet_' + mykml.idx)[0].classList.remove('active');
                    var kmlThisName = this.name;
                    //kmllog(kmlThisName)
                    document.getElementsByName(kmlThisName)[0].classList.add('active');
                    mykml.idx = parseInt(document.getElementsByName(kmlThisName)[0].getAttribute("value"));
                    document.getElementById('divKMLlayerName').innerHTML = mykml.SAVED_PRESETS[mykml.idx].name;
                    localStorage.WME_KeepMyLayers = localStorage.WME_KeepMyLayers.replace(/idx":\d?/, 'idx":' + mykml.idx);

                    setTimeout(function() {
                        updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);
                        userResetOfLayersToSavedKMLayers(mykml.SAVED_PRESETS[mykml.idx].saved, mykml);
                        enableTogglePLLayersButton(mykml.SAVED_PRESETS[mykml.idx].saved, mykml);
                    }, 150);
                };

                sourceNode = presetMenuListEl[kmlset];
                tooltipEl = getKMLTooltipNode('', sourceNode);
                insertKMLTooltip(tooltipEl, sourceNode, 'parent');
            }

            updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);
/*
            try {
                $(".kml-layers-menu[data-toggle=tooltip]").tooltip({
                    html: true,
                    delay: {
                        show: 500,
                        hide: 100
                    },
                    template: '<div class="kml-tooltip-spacer" style="min-height: 50px; margin-top: 5px; width: 170px;"></div><div class="tooltip" role="tooltip" style="width: 170px; margin-top: 0px;"><div class="tooltip-arrow" style="display: none; margin-right: 2px;"></div><div class="tooltip-inner" style="margin-left: -5px; padding-right: 0; font-weight: bold; text-align: left; word-wrap: break-word;"></div></div>'
                });
            } catch (err) {
                $(".kml-layers-menu[data-toggle=tooltip]").tooltip();
            }
*/
            return missingLayerNames;
        } else {
            return false;
        }
    };

    //===================================================================
    //    BBBBB   EEEEEEE TTTTTTT   AAA      TTTTTTT  OOOOO    GGGGG
    //    BB   B  EE        TTT    AAAAA       TTT   OO   OO  GG
    //    BBBBBB  EEEEE     TTT   AA   AA      TTT   OO   OO GG  GGG
    //    BB   BB EE        TTT   AAAAAAA      TTT   OO   OO GG   GG
    //    BBBBBB  EEEEEEE   TTT   AA   AA      TTT    OOOO0   GGGGGG
    //===================================================================
    // Beta Editor Toggle Button
    var toggleKMLToggle = function(e, disableBetaTog) {

        var enableKMLBetaToggle = function(betaTogGMCallReply) {
            var setBetaTogStateToThis;
            // kmllog('betaTogGMCallReply = ' + betaTogGMCallReply)
            if (betaTogGMCallReply.constructor === String) {
                setBetaTogStateToThis = (betaTogGMCallReply.substr(betaTogGMCallReply.indexOf('-') + 1) === "true");
            } else if (betaTogGMCallReply.constructor === Boolean) {
                setBetaTogStateToThis = betaTogGMCallReply;
            } else {
                // Most likely it has been removed in another window... assume the user wants to re-enable,
                // since they are trying to un-disable the toggle... set toggle state to current editor
                setBetaTogStateToThis = KMLayersSync.isBeta;
            }

            document.getElementById('cbKMLtoggle').disabled = false;

            // kmllog('WMEKMLayers_Beta = ' + kmlbetaTogGMCallReply)
            //requestAnimationFrame(function() { GM_setValue("WMEKMLayers_Beta", betaTogGMCallReply) });
            KMLayersSync.setBetaTogValueGM(setBetaTogStateToThis);
            document.getElementById('cbKMLtoggle').checked = setBetaTogStateToThis;
            document.getElementsByClassName('kml-toggle')[0].classList.remove('disabled');
        };

        var disableKMLBetaToggle = function() {
            var kmlBetaToggleChecked = document.getElementById('cbKMLtoggle').checked,
                kmlBetaToggleGM = 'disabled-' + kmlBetaToggleChecked;

            KMLayersSync.setBetaTogValueGM(kmlBetaToggleGM);
            //requestAnimationFrame(function() { GM_setValue("WMEKMLayers_Beta", kmlBetaToggleGM) });
            //kmllog('WMEKMLayers_Beta = ' + kmlBetaToggleGM)
            document.getElementById('cbKMLtoggle').disabled = true;
            document.getElementById('cbKMLtoggle').checked = kmlBetaToggleChecked;
            document.getElementsByClassName('kml-toggle')[0].classList.add('disabled');

        };
        //----------------------------------------------------
        //kmllog('disableBetaTog = ' + disableBetaTog)
        // If no input arg, then check if the toggle on the page is currently disabled
        if (disableBetaTog === undefined || disableBetaTog === null) {
            //kmllog("cbKMLtoggle status: " + document.getElementById('cbKMLtoggle').disabled);
            if (document.getElementById('cbKMLtoggle').disabled) { //enable it... call GM for beta val state (i.e., set as beta or prod mode)
                //kmllog('Enabling Beta Toggle...')
                // If currently disabled, then enable it.
                KMLayersSync.callGM("WMEKMLayers_Beta", enableKMLBetaToggle);
            } else {
                //kmllog('Disabling Beta Toggle...')
                // Otherwise, disable if currently enabled.
                disableKMLBetaToggle();
            }
        } else if (disableBetaTog) {
            // If toggleKMLToggle is invoked with arguments, and disableBetaTog arg is true, then disable it.
            disableKMLBetaToggle();
        } else {
            KMLayersSync.callGM("WMEKMLayers_Beta", enableKMLBetaToggle);
        }
    };

    var insertKMLBetaToggle = function(kmlToggleArg) {
        //kmllog('insertKMLBetaToggle()', '/');
        var doInsertBetaToggle = function(kmlBetaTogVal) {
            $('#user-details').prepend(
                '<div class="kml-toggle-container"><div class="kml-toggle">' +
                '<input type="checkbox" name="kml-toggle" class="kml-toggle-checkbox" id="cbKMLtoggle"' +
                kmlBetaTogVal + '>' +
                '<label class="kml-toggle-label" for="cbKMLtoggle">' +
                '<span class="kml-toggle-inner"></span>' +
                '<span class="kml-toggle-switch"></span></label></div></div>');

            //----- Event listeners for beta/prod toggle -----
            // popup prod/beta indicator helper text
            var kmlTogHelpEl = document.createElement('div');
            kmlTogHelpEl.id = 'kmlTogHelp'
            kmlTogHelpEl.setAttribute('style', 'z-index: 1; position: absolute; right: 43px; top: 0px; font-size: 16px; font-weight: 600; letter-spacing: -0.5px; text-align: center; color: #C0C0C0; line-height: 1.4; border-radius: 8px; padding: 0px 4px; background-color: rgba(242, 243, 244, 0.5); transition-duration: .2s; transition-timing-function: ease-in-out; opacity: 0;')
            document.getElementsByClassName('kml-toggle-container')[0].appendChild(kmlTogHelpEl);

            //-------------------------------------------------------------------------
            var cbKMLtoggleEl = document.getElementById('cbKMLtoggle');

            cbKMLtoggleEl.onclick = function() {
                KMLayersSync.setBetaTogValueGM(document.getElementById('cbKMLtoggle').checked);

                setTimeout(function() {
                    switch (true) {
                        case cbKMLtoggleEl.disabled:
                            kmlTogHelpEl.innerHTML = 'DISABLED';
                            break;
                        case cbKMLtoggleEl.checked:
                            kmlTogHelpEl.innerHTML = 'BETA';
                            break;
                        case !cbKMLtoggleEl.checked:
                            kmlTogHelpEl.innerHTML = 'PROD';
                            break;
                    }
                    kmlTogHelpEl.style.opacity = 1;

                    setTimeout(function() {
                        kmlTogHelpEl.style.opacity = 0;
                    }, 800);

                }, 300);
            };

            document.getElementsByClassName('kml-toggle')[0].ondblclick = function(eee) {
                //eee.stopPropagation();
                setTimeout(function() {
                    if (!cbKMLtoggleEl.disabled) {
                        kmlTogHelpEl.innerHTML = 'ENABLED';
                        kmlTogHelpEl.style.opacity = 1;
                    }
                    setTimeout(function() {
                        kmlTogHelpEl.style.opacity = 0;
                    }, 600);
                }, 300);

                toggleKMLToggle(eee);
            };

            //Beta-prod toggle usage helper
            setTimeout(function() {
                KMLayersUsageHelper('beta_toggle', KMLayersSync.hasSeenKMLPopup('&b'))
            }, 1500);

        };

        //-------------------------------------------------------------------------
        if (document.getElementById('user-details') !== null && document.getElementById('cbKMLtoggle') === null) {
            kml[4] = 0; //reset counter
            var kmlBetaTogVal, kmlBetaGMType;

            //kmllog(kmlToggleArg);
            if (kmlToggleArg === undefined || kmlToggleArg === null) {
                kmlToggleArg = KMLayersSync.isBeta;
                kmlBetaGMType = kmlToggleArg;
            } else if (kmlToggleArg.constructor === Boolean) {
                kmlBetaGMType = kmlToggleArg;
                KMLayersSync.setBetaTogValueGM(kmlToggleArg);
                //requestAnimationFrame(function() { GM_setValue("WMEKMLayers_Beta", kmlToggleArg) });
            } else { //insertKMLBetaToggle('disabled')
                kmlToggleArg = (kmlToggleArg.substr(kmlToggleArg.indexOf('-') + 1) === "true"); //bool string
                kmlBetaGMType = 'disabled';
            }

            (kmlToggleArg) ? kmlBetaTogVal = 'checked' : kmlBetaTogVal = '';
            doInsertBetaToggle(kmlBetaTogVal);

            if (~localStorage.WME_KMLSettings.indexOf('&a')) requestAnimationFrame(initAltPermalink);

            // Disable toggle?
            if (kmlBetaGMType === 'disabled') {
                toggleKMLToggle(null, true); // disable toggle
            }

        } else if ($('#cbKMLtoggle').length > 0) {
            kml[4] = 0;
            return true;
        } else if (kml[4]++ < 30) {
            var waitTime = 200 + (kml[4] * 50);
            setTimeout(function() {
                insertKMLBetaToggle(kmlToggleArg)
            }, waitTime);
        } else {
            console.warn('WMEKMLayers:',
                'Unable to insert "Beta-Editor Toggle".',
                'Element #user-details not found on page.')
        }
    };
    //========================================================================
    //              AAA   LL     TTTTTTT      PPPPPP  LL
    //             AAAAA  LL       TTT        PP   PP LL
    //            AA   AA LL       TTT        PPPPPP  LL
    //            AAAAAAA LL       TTT        PP      LL
    //            AA   AA LLLLLLL  TTT        PP      LLLLLLL
    //========================================================================
    var initAltPermalink = function() {

        var getKMLPermalink = function(currPl, inBeta, togSuffix) {
            if (togSuffix === undefined) togSuffix = '';
            if (!KMLayersSync.useFriendlyPLs) togSuffix = '';

            var kmlCurrAltPL = currPl.substr(currPl.lastIndexOf('editor')).replace(/&[a-zA-Z_]+Filter=(true|false|0|1)|&layers=(\d+)/g, '');
            if (inBeta) {
                return 'https://www.waze.com/' + kmlCurrAltPL + togSuffix;
            } else {
                return 'https://editor-beta.waze.com/' + kmlCurrAltPL + togSuffix;
            }
        };

        var copyAltPlToClipboard = function(EEEEE) {
            if (EEEEE.shiftKey) {
                KMLayersSync.useFriendlyPLs = !KMLayersSync.toggleKMLUsageHistory('&f');
                var changeThisPl = document.getElementById('wazePermalink').getAttribute('href').replace(/&layers=\d+|&mapProblemFilter=\d|&mapUpdateRequestFilter=\d|&venueFilter=\d/g, ''),
                    changedPl = getKMLPermalink(changeThisPl, false, '&b=0');
                document.getElementById('tooltipKMLAltPermalink').innerHTML = changedPl.replace(/&b=0/,'<font color="#FF3B49">&b=0</font>');
                document.getElementById('aKMLAltPermalink').setAttribute('href', changedPl);
            }
            if (EEEEE.metaKey || EEEEE.ctrlKey) kmlKeyPresses[0] = true;
            if (EEEEE.which === 67) kmlKeyPresses[1] = true;
            if (kmlKeyPresses[0] && kmlKeyPresses[1]) {
                requestAnimationFrame(function() {
                    GM_setClipboard(document.getElementById('aKMLAltPermalink').getAttribute('href'))
                });
                document.getElementById('kmlAltPLTooltip').style.display = 'none';
                document.getElementById('kmlAltPLTooltipCopied').style.right = '18px';
                document.getElementById('kmlAltPLTooltipCopied').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('kmlAltPLTooltipCopied').style.display = 'none';
                }, 2000);
            }
        };

        var copyPlToClipboard = function(EEEEE) {
            if (EEEEE.shiftKey) {
                KMLayersSync.useFriendlyPLs = !KMLayersSync.toggleKMLUsageHistory('&f');
                var changeThisPl = document.getElementById('wazePermalink').getAttribute('href').replace(/&layers=\d+|&mapProblemFilter=\d|&mapUpdateRequestFilter=\d|&venueFilter=\d/g, ''),
                    changedPl = getKMLPermalink(changeThisPl, true, '&b=0');
                document.getElementById('tooltipKMLAltPermalink').innerHTML = changedPl.replace(/&b=0/,'<font color="#92C2D1">&b=0</font>');
                document.getElementById('aKMLPermalink').setAttribute('href', changedPl);
            }
            if (EEEEE.metaKey || EEEEE.ctrlKey) kmlKeyPresses[0] = true;
            if (EEEEE.which === 67) kmlKeyPresses[1] = true;
            if (kmlKeyPresses[0] && kmlKeyPresses[1]) {
                requestAnimationFrame(function() {
                    GM_setClipboard(document.getElementById('aKMLPermalink').getAttribute('href'))
                });
                document.getElementById('kmlAltPLTooltip').style.display = 'none';
                document.getElementById('kmlAltPLTooltipCopied').style.right = '40px';
                document.getElementById('kmlAltPLTooltipCopied').style.display = 'block';
                setTimeout(function() {
                    document.getElementById('kmlAltPLTooltipCopied').style.display = 'none';
                }, 2000);
            }
        };

        // make sure the welcome log-in screen is not up
        //document.getElementById("welcome-popup").className.lastIndexOf('hide') === -1
        if (document.getElementsByClassName('WazeControlPermalink') && !document.getElementById('kmlPLSpacer')) {

            document.querySelector('.WazeControlPermalink>a.icon-link, .WazeControlPermalink>a.fa-link').id = 'wazePermalink';

            var wazePermalinkEl = document.getElementById('wazePermalink'),
                wazeCopyPlNote = wazePermalinkEl.getAttribute('data-original-title'),
                wazeCurrentPl = wazePermalinkEl.getAttribute('href').replace(/&[a-zA-Z_]+Filter=(true|false|0|1)|&layers=(\d+)/g, ''),
                wazeControlPermalinkEl = document.getElementsByClassName('WazeControlPermalink')[0],
                kmlPLSpacer = document.createElement('div'),
                kmlPLContainer,
                kmlCurrentAltPl, kmlAltPLColor, inBetaEditor;

            var kmlCurrentPl, kmlPLColor;

            kmlPLSpacer.className = 'kml-permalinks';
            kmlPLSpacer.id = 'kmlPLSpacer';
            kmlPLSpacer.style.float = 'right';
            kmlPLSpacer.style.position = 'relative';
            kmlPLSpacer.style.bottom = '0px';
            kmlPLSpacer.style.right = '0px';
            kmlPLSpacer.style.height = '25px';
            kmlPLSpacer.style.width = '50px';
            kmlPLSpacer.style.lineHeight = '24px';
            kmlPLSpacer.style.marginRight = '-4px';
            kmlPLSpacer.style.marginLeft = '-24px';
            kmlPLSpacer.style.paddingLeft = '2px';
            kmlPLSpacer.style.backgroundColor = '#E9E9E9';
            wazeControlPermalinkEl.appendChild(kmlPLSpacer);

            kmlPLContainer = kmlPLSpacer.cloneNode();
            kmlPLContainer.id = 'kmlPLContainer';
            kmlPLContainer.style.backgroundColor = '';
            kmlPLContainer.style.position = 'fixed';
            kmlPLContainer.style.right = '20px';
            kmlPLContainer.style.zIndex = '1005';
            document.getElementById('map').appendChild(kmlPLContainer);

            var altPermalinkEl = document.createElement('div');
            altPermalinkEl.className = 'icon-stack fa-stack';
            altPermalinkEl.id = 'kmlAltPermalink';
            //altPermalinkEl.style.float = 'right';
            altPermalinkEl.style.position = 'relative';
            altPermalinkEl.style.height = '25px';
            altPermalinkEl.style.width = '23px';
            altPermalinkEl.style.lineHeight = 'inherit';
            //altPermalinkEl.style.margin = '-2px 0px 0px';


            //if (!~location.host.indexOf('editor-beta')) { // not beta-editor
            kmlAltPLColor = '#FA5257';
            kmlPLColor = '#59899E';
            inBetaEditor = false;
            /*} else {
                kmlAltPLColor = '#59899E';
                kmlPLColor = '#FA5257';
                inBetaEditor = true;
            }*/

            //---------------
            kmlCurrentPl = getKMLPermalink(wazeCurrentPl, !inBetaEditor, '&b=0');
            var permalinkEl = altPermalinkEl.cloneNode();
            permalinkEl.id = 'kmlPermalink';
            //permalinkEl.style.margin = '1px -1px -1px -21px';
            permalinkEl.innerHTML = '<a id="aKMLPermalink" href="' + kmlCurrentPl + '"><span class="icon-circle fa fa-circle fa-stack-1x" style="color: ' + kmlPLColor + '; font-size: 26px; line-height: 25px; bottom: 0px;"></span><span class="icon-link icon-light fa fa-link fa-stack-1x fa-inverse" style="font-size: 16px; line-height: 25px; bottom: 0px;"></span></a>';
            kmlPLContainer.appendChild(permalinkEl);
            //---------------
            kmlCurrentAltPl = getKMLPermalink(wazeCurrentPl, inBetaEditor, '&b=0');
            altPermalinkEl.innerHTML = '<a id="aKMLAltPermalink" href="' + kmlCurrentAltPl + '"><span class="icon-circle fa fa-circle fa-stack-1x" style="color: ' + kmlAltPLColor + '; font-size: 26px; line-height: 25px; bottom: 0px;"></span><span class="icon-link icon-light fa fa-link fa-stack-1x fa-inverse" style="font-size: 16px; line-height: 25px; bottom: 0px;"></span></a>';
            kmlPLContainer.appendChild(altPermalinkEl);

            // PL popup
            var kmlAltPLTooltipEl = document.createElement('div'),
                kmlAltPLTooltipCopiedEl;
            kmlAltPLTooltipEl.id = 'kmlAltPLTooltip';
            kmlAltPLTooltipEl.style.position = 'fixed';
            kmlAltPLTooltipEl.style.right = '18px';
            kmlAltPLTooltipEl.style.bottom = '26px';
            kmlAltPLTooltipEl.style.color = '#FFF';
            kmlAltPLTooltipEl.style.fontSize = '8pt';
            kmlAltPLTooltipEl.style.backgroundColor = '#000';
            kmlAltPLTooltipEl.style.borderRadius = '5px';
            kmlAltPLTooltipEl.style.paddingLeft = '5px';
            kmlAltPLTooltipEl.style.paddingRight = '5px';
            kmlAltPLTooltipEl.style.display = 'none';
            kmlAltPLTooltipEl.style.zIndex = '1000';
            kmlAltPLTooltipEl.style.pointerEvents = 'none';
            kmlAltPLTooltipEl.innerHTML = '<span id="tooltipKMLAltPermalink">' + kmlCurrentAltPl + '</span><br>' + wazeCopyPlNote;
            kmlPLContainer.appendChild(kmlAltPLTooltipEl);

            // "Copied" popup
            kmlAltPLTooltipCopiedEl = kmlAltPLTooltipEl.cloneNode();
            kmlAltPLTooltipCopiedEl.id = 'kmlAltPLTooltipCopied';
            kmlAltPLTooltipCopiedEl.innerHTML = kml_translations.footer.link_copied;
            kmlPLContainer.appendChild(kmlAltPLTooltipCopiedEl);

            //---------------
            var kmlKeyPresses = Array(2);
            //---------------
            document.getElementById('kmlAltPermalink').addEventListener('mouseover', function(e) {
                var thisPl = document.getElementById('wazePermalink').getAttribute('href').replace(/&layers=\d+|&mapProblemFilter=\d|&mapUpdateRequestFilter=\d|&venueFilter=\d/g, ''),
                    changeThisPl = getKMLPermalink(thisPl, inBetaEditor, '&b=0');

                document.getElementById('tooltipKMLAltPermalink').innerHTML = changeThisPl.replace(/&b=0/,'<font color="#FF3B49">&b=0</font>');
                document.getElementById('aKMLAltPermalink').setAttribute('href', changeThisPl);
                document.getElementById('kmlAltPLTooltip').style.right = '18px';
                document.getElementById('kmlAltPLTooltip').style.display = 'block';

                window.addEventListener("keydown", copyAltPlToClipboard, false);
            }, false);

            document.getElementById('kmlAltPermalink').addEventListener('mouseout', function() {
                kmlKeyPresses = Array(2);
                document.getElementById('kmlAltPLTooltip').style.display = 'none';
                document.getElementById('kmlAltPLTooltipCopied').style.display = 'none';

                window.removeEventListener("keydown", copyAltPlToClipboard);
            }, false);
            //---------------
            document.getElementById('kmlPermalink').addEventListener('mouseover', function(e) {
                var thisPl = document.getElementById('wazePermalink').getAttribute('href').replace(/&layers=\d+|&mapProblemFilter=\d|&mapUpdateRequestFilter=\d|&venueFilter=\d/g, ''),
                    changeThisPl = getKMLPermalink(thisPl, !inBetaEditor, '&b=0');

                document.getElementById('tooltipKMLAltPermalink').innerHTML = changeThisPl.replace(/&b=0/,'<font color="#92C2D1">&b=0</font>');
                document.getElementById('aKMLPermalink').setAttribute('href', changeThisPl);
                document.getElementById('kmlAltPLTooltip').style.right = '40px';
                document.getElementById('kmlAltPLTooltip').style.display = 'block';

                window.addEventListener("keydown", copyPlToClipboard, false);
            }, false);

            document.getElementById('kmlPermalink').addEventListener('mouseout', function() {
                kmlKeyPresses = Array(2);

                document.getElementById('kmlAltPLTooltip').style.display = 'none';
                document.getElementById('kmlAltPLTooltipCopied').style.display = 'none';

                window.removeEventListener("keydown", copyPlToClipboard);
            }, false);


            try {
                // Hide WME permalink, but allow TB to overrule with display: none;
                document.getElementById('wazePermalink').style.visibility = 'hidden';
                // Add a spacer
                //document.getElementsByClassName('WazeControlPermalink')[0].style.marginLeft = '15px';
            } catch (err) {};
            //---------------
            setTimeout(function() {
                KMLayersUsageHelper('alt_permalink', KMLayersSync.hasSeenKMLPopup('&a'))
            }, 1500);
        } else {
            setTimeout(initAltPermalink, 500);
        }
    };

    //==============================================================================
    //    PPPPPP  RRRRRR  EEEEEEE FFFFFFF    PPPPPP    AAA   NN   NN EEEEEEE
    //    PP   PP RR   RR EE      FF         PP   PP  AAAAA  NNN  NN EE
    //    PPPPPP  RRRRRR  EEEEE   FFFF       PPPPPP  AA   AA NN N NN EEEEE
    //    PP      RR  RR  EE      FF         PP      AAAAAAA NN  NNN EE
    //    PP      RR   RR EEEEEEE FF         PP      AA   AA NN   NN EEEEEEE
    //==============================================================================

    var selectLanguageLocale = function() {
        var langLocaleEl = document.createElement('div');
        langLocaleEl.id = 'langLocaleEl';
        langLocaleEl.style.display = 'inline-block';
        langLocaleEl.style.margin = '0px';
        langLocaleEl.style.padding = '0px';
        langLocaleEl.innerHTML = '\
            <div class="language-selector">\
            <div class="btn-group pull-right">\
            <a class="btn btn-default dropdown-toggle toggle-language-selector" data-toggle="dropdown" href="#" style="margin: -3px 10px -7px 10px; width: 82px; padding: 3px 0px;">\
            <i class="icon-globe fa fa-globe"></i>\
            <span class="language_code">none</span>\
            <i class="icon-caret-down fa fa-caret-down"></i>\
            </a>\
            <ul class="dropdown-menu locales">\
            <li class="active"><a data-locale="none" href="#">&nbsp;</a></li>\
            <li><a data-locale="af" href="#">Afrikaans</a></li>\
            <li><a data-locale="ar" href="#">العربية</a></li>\
            <li><a data-locale="bg" href="#">Български</a></li>\
            <li><a data-locale="ca" href="#">Català</a></li>\
            <li><a data-locale="cs" href="#">Čeština</a></li>\
            <li><a data-locale="da" href="#">Dansk</a></li>\
            <li><a data-locale="de" href="#">Deutsch</a></li>\
            <li><a data-locale="en-GB" href="#">English (UK)</a></li>\
            <li><a data-locale="en" href="#">English</a></li>\
            <li><a data-locale="es-419" href="#">Español-América Latina</a></li>\
            <li><a data-locale="es" href="#">Español</a></li>\
            <li><a data-locale="fi" href="#">Suomi</a></li>\
            <li><a data-locale="fr" href="#">Français</a></li>\
            <li><a data-locale="gl" href="#">Galego</a></li>\
            <li><a data-locale="he" href="#">עברית</a></li>\
            <li><a data-locale="hu" href="#">Magyar</a></li>\
            <li><a data-locale="it" href="#">Italiano</a></li>\
            <li><a data-locale="ja" href="#">日本語</a></li>\
            <li><a data-locale="ko" href="#">한국어</a></li>\
            <li><a data-locale="lv" href="#">Latviešu</a></li>\
            <li><a data-locale="ms" href="#">Melayu</a></li>\
            <li><a data-locale="nl" href="#">Nederlands</a></li>\
            <li><a data-locale="pl" href="#">Polski</a></li>\
            <li><a data-locale="pt-BR" href="#">Português-Brasil</a></li>\
            <li><a data-locale="pt-PT" href="#">Português</a></li>\
            <li><a data-locale="ro" href="#">Română</a></li>\
            <li><a data-locale="ru" href="#">Русский</a></li>\
            <li><a data-locale="sl" href="#">Slovenščina</a></li>\
            <li><a data-locale="sk" href="#">Slovenčina</a></li>\
            <li><a data-locale="sv" href="#">Svenska</a></li>\
            <li><a data-locale="tr" href="#">Türkçe</a></li>\
            <li><a data-locale="zh" href="#">中文（简体）</a></li>\
            <li><a data-locale="zh-TW" href="#">中文（簡體）</a></li>\
            <li><a data-locale="id" href="#">Bahasa Indonesia</a></li>\
            <li><a data-locale="et" href="#">Eesti</a></li>\
            <li><a data-locale="hr" href="#">Hrvatski</a></li>\
            <li><a data-locale="sr" href="#">Srpski (Latinica)</a></li>\
            <li><a data-locale="no" href="#">Norsk</a></li>\
            </ul>\
            </div>\
            </div>';

        document.getElementById(kmlElementMap.ids.localeRedirect).parentNode.appendChild(langLocaleEl);

        var kmlLocaleSelectorEl = document.querySelectorAll('div.kml-panel div.language-selector ul.dropdown-menu.locales>li>a'),
            numkmlLocaleSelector = kmlLocaleSelectorEl.length,
            kml_ls = -1,
            kmlLocaleValGM = KMLayersSync.getLocaleValueGM();

        //KMLayersSync._GM_refreshLangAttribute();
        //kmlLocaleValGM = KMLayersSync._GM_CALLBACKS.lang;
        if (!kmlLocaleValGM || kmlLocaleValGM === true) kmlayersLangChk = 'none'; //Bool true means to use default locale (en)

        while (++kml_ls < numkmlLocaleSelector) {
            if (kmlayersLangChk === kmlLocaleSelectorEl[kml_ls].getAttribute('data-locale')) {
                if (kml_ls) {
                    kmlLocaleSelectorEl[kml_ls].parentNode.className = 'active';
                    document.querySelector('div.kml-panel div.language-selector span.language_code').innerHTML = kmlayersLangChk;
                }
            } else {
                kmlLocaleSelectorEl[kml_ls].parentNode.className = '';
            }

            document.querySelectorAll('div.kml-panel div.language-selector ul.dropdown-menu.locales>li>a')[kml_ls].onclick = function() {
                var langLocale = this.getAttribute('data-locale');

                document.querySelector('div.kml-panel div.language-selector ul.dropdown-menu.locales>li.active').className = '';
                document.querySelector('div.kml-panel div.language-selector span.language_code').innerHTML = langLocale;
                this.parentNode.className = 'active'
            };
        }
    };

    //----------------------------------------------------------------------
    var showKMLPrefsPanel = function() {
        //kmllog('showKMLPrefsPanel()');
        //----------------------------------------------------------
        var mykml = getMyKMLayersObject(),
            mlBetaInitState = KMLayersSync.isBeta,
            kmlOptions, kmlOptionsHelpTips, kmlSettingsUI = document.createElement('div');

        if (KMLayersSync.hasSettingEnabled('&p')) KMLayersSync.applysyncSavedPresetsGM(mykml);

        //----------------------------------------------------------
        // setup checkbox list for UI
        kmlOptions = ['Insert a Beta-Production WME toggle into left side-panel', // &b
            'Replace permalink icon with Beta-Prod toggle-friendly permalinks', // &a
            'Synchronize KeepMyLayers preferences between Beta and Prod WME', // &s
            'Synchronize saved presets between Beta and Prod WME', // &p
            'Remove locale from clicked permalinks and force', // &l
            'Increase opacity of cities layer polygons', // layer 1 - &1
            'Reduce opacity of area managers layer polygons', // layer 5 - &5
            'Add a small amount of transparency to roads layer', // layer 2 - &2
            'Disable auto-reset of layers at page load (i.e., use manual reset)' // &x
        ]; //[5] xx

        kmlOptionsHelpTips = ['The <b>Beta-Prod toggle</b> is added to the top of the left side-panel (near your username). Use it to force permalinks to load in either <font color=&quot;#FF3B49&quot;>Beta</font> or <font color=&quot;#93C4D3&quot;>Production</font> WME. Double-click on toggle to quickly disable. <p></p>Note: If you are not a Beta WME tester, it is unlikely that you will find this feature useful.',
            '<b>Beta-Prod toggle-friendly permalinks</b> (PLs) allow you to easily switch back and forth between Beta and Prod WME without having to disable the toggle.<p></p>Enabling this feature will replace the PL icon in the WME footer with two new options that can ignore the toggle\'s setting: use <font color=&quot;#FF3B49&quot;>red PL</font> for Beta and <font color=&quot;#93C4D3&quot;>blue PL</font> for Prod. You can click on these PLs to switch between editors or for reloading the page. Copy the blue PL for sharing the Prod link while in Beta. Any layers and locales are always removed.<p></p>Hovering over the links and pressing the shift key turns friendly-PL tagging on/off.',
            'Synchronize all your settings under KeepMyLayers Preferences between Beta and Prod editors. This does not include your saved layer presets.',
            'Synchronize your saved layer presets between Beta and Prod editors.<p></p>NOTE: The Presets Sync feature is still being developed. Your first sync will involved combining the presets from both editors and you may have to go into the Preference pane to remove any duplicates. In the future, KMLayers will try to check for this. Also, if you added or removed a preset in another WME window, you will have to click on the KMLayers Presets Switcher button to manually refresh the list.',
            '<b>PL locale removal</b> prevents WME from loading in another language. You can optionally force a specific locale by selecting your desired language from the dropdown menu.<p></p>CAUTION: At the moment, KMLayers is unable to switch back and forth between languages. If you saved your layers while using localized WME, you must load WME with the same locale for your saved layer presets to work. If you switch to a different locale, you will be required to resave your layers. This will be fixed in a forthcoming update.',
            'Increasing the opacity of the cities layer makes it easier to see colored polygons.',
            'Reducing the opacity of the area managers (AMs) layer can make it easier to see the underlying map in a region with many AMs.',
            'Adding transparency to the roads layer makes it possible to see through road segments that cover the satellite imagery.',
            'Disabling auto-reset prevents this script from trying to reset your layers each time WME is reloaded. You can still manually reset layers by clicking on a saved preset under the KMLayers Preset Switcher menu or clicking the magic wand icon under the WME Layers menu.'
        ];

        kmlSettingsUI.id = 'KMLsettings';
        kmlSettingsUI.className = 'kml-panel-blackout';

        var selectedKML = Array(kmlOptions.length),
            queryList = kmlElementMap.queryCodeList,
            cbKMLSettingsStr;

        //TODO: Clean the following code up....
        if (localStorage.WME_KMLSettings === undefined) {
            localStorage.WME_KMLSettings = ':';
            cbKMLSettingsStr = ':';
        } else {
            cbKMLSettingsStr = localStorage.WME_KMLSettings;
        }

        //  Setup KMLayers settings panel and select checkbox of set options
        for (var kml_s = 0, numKmlOpt = kmlOptions.length; kml_s < numKmlOpt; kml_s++) {~
            cbKMLSettingsStr.indexOf(queryList[kml_s]) ? selectedKML[kml_s] = ' checked' : selectedKML[kml_s] = ' ';

            kmlSettingsUI.innerHTML += '<div class="controls-container kml-pref-help">' +
                '<input type="checkbox" id="cbKML_' + kml_s +
                '" class="checkbox"' + selectedKML[kml_s] +
                '></input>' +
                '<label for="cbKML_' + kml_s + '">' + kmlOptions[kml_s] + '</label>' +
                '<i class="kml-pref-help fa fa-question-circle icon-question-sign" ' +
                'data-title="' + kmlOptionsHelpTips[kml_s] + '" ' +
                'id="' + kmlElementMap.idToUsageName['cbKML_' + kml_s] + 'Help"></i>' +
                '</div>';
        }

        kmlSettingsUI.innerHTML =
            '<div class="kml-panel">' +
            '  <i id="iKMLsettings" class="icon-cog icon-4x pull-left fa fa-cog fa-4x fa-pull-left"></i>' +
            '  <h2>KeepMyLayers Preferences <span style="font-size: 12px; font-weight: 400;">v.' + KMLayersVersion.currentVersion + '</span></h2>' +
            '  <hr class="kml-panel-hr">' +
            '  <div class="kml-panel-section" style="margin-bottom: 13px;">' +
            kmlSettingsUI.innerHTML +
            '  </div>' +
            '  <hr class="kml-panel-hr">' +
            '  <div class="kml-panel-btn">' +
            '    <div id="KMLnote" style="line-height: 1; margin-top: -2px; color: #FF0080; position: absolute; left: 0px; display: inline-block; text-align: left; ' +
            '        width: 63%; padding: 0px 10px; vertical-align: middle">' + //line-height: 15px; height: 40px;
        '' + // notes and layers menu go here
        '    </div>' +
            '    <div style="position: absolute; right: 0px; width: 35%; display: inline-block;">' +
            '      <button id="btnKMLsave" style="width: 85px" class="btn btn-primary kml-panel-btn">Save</button>' +
            '      <button id="btnKMLcancel" class="btn btn-default kml-panel-btn">Cancel</button>' +
            '    </div>' +
            '</div></div>';
        document.getElementById('map').appendChild(kmlSettingsUI);

        //--------------------------------------------------------------------------
        // Adjust yoked options (beta-prod toggle and alt-PL)
        var altPLOptionEl = document.getElementById(kmlElementMap.ids.altPermalink);
        altPLOptionEl.parentNode.style.marginBottom = '4px';
        altPLOptionEl.parentNode.style.marginTop = '-1px';
        altPLOptionEl.parentNode.innerHTML = '<span class="fa fa-level-up fa-rotate-90 icon-level-up icon-rotate-90" style="color: #DDD; font-size: 16px; margin: auto 6px auto 7px;"></span>' + altPLOptionEl.parentNode.innerHTML;

        var yokeBetaTogAndAltPLOptions = function() {
            var altPLOptionEl = document.getElementById(kmlElementMap.ids.altPermalink);
            if (document.getElementById(kmlElementMap.ids.betaRedirect).checked) {
                altPLOptionEl.removeAttribute('disabled');
                altPLOptionEl.parentNode.style.pointerEvents = 'auto';
                altPLOptionEl.checked = KMLayersSync.hasSettingEnabled('&a');
            } else {
                altPLOptionEl.setAttribute('disabled', '');
                altPLOptionEl.parentNode.style.pointerEvents = 'none';
                altPLOptionEl.checked = false;
            }
        };

        //--------------------------------------------------------------------------
        // Init Help Tooltips
        var allTooltipsCssEl = getKMLTooltipCssNode('', 'left', 'top: 13px'),
            attachmentNode, tooltipEl;

        document.body.appendChild(allTooltipsCssEl);
        for (kml_s = numKmlOpt; kml_s--;) {
            attachmentNode = document.getElementById(kmlElementMap.idToUsageName['cbKML_' + kml_s] + 'Help');
            tooltipEl = getKMLTooltipNode('', attachmentNode, 'width: 200px; left: 99%; top: 0px;');
            insertKMLTooltip(tooltipEl, attachmentNode, 'parent');
        }

        //--------------------------------------------------------------------------
        // Post note about needing to save their first preset
        if (!mykml.savedonce) {
            //'<div style="color: #FF0080; font-size: 11pt; font-style: normal; margin-right: 4px; display:inline-block" class="icon-save icon-fixed-width fa fa-save fa-fw kml-icn-nsave"></div>'
            document.getElementById('KMLnote').innerHTML =
                '<span style="font-size:11px">' +
                'Select some layers under the WME menu and click' +
                '<div class="fa-stack icon-stack kml-icn-btn reload-button" style="margin-right: 5px;" title="Save current set of layers"><div class="icon-save fa fa-save fa-stack-1x" style="color: #59899e;"></div><div class="icon-plus-sign fa fa-plus-circle fa-stack-1x" style="font-size: 10px; margin: -3px -5px 3px 5px; text-shadow: 1px -1px 0px white, 2px -2px 0px white; color: crimson;"></div></div>' +
                'in the bottom corner to save. You can return here later by double-clicking on the Layers icon to add more presets.' +
                '</span>';

            // User-Defined Layer Presets
        } else {
            document.getElementById('KMLnote').innerHTML =
                '<div class="form-inline" style="display: inline-block; vertical-align: middle;">' +
                '   <div style="display: inline-block; vertical-align: middle;">' +
                '<i style="font-size: 16px; margin-right: 5px;" class="kml-pref-help fa fa-question-circle icon-question-sign" ' +
                'data-title="Add or remove additional layer presets that can be accessed under the KeepMyLayers menu from the WME toolbar.<p></p>NOTE: The ability to add/remove presets directly from the menu will be added in a later version, but for now, you must do so here in the Preference pane. If you opted to synchronize your presets between Beta and Prod WME, please also see the current usage notes under the help tooltip for that setting above." ' +
                'id="selectKMLPresetsHelp"></i></div>' +
            '   <select id="selKMLset" class="form-control" style="width: 200px;"></select>' +
                '   <div style="display: inline-block; vertical-align: middle;">' +
                '   <div id="addKMLset" style="color: #AAAAAA; margin-left: 4px; display:inline-block; cursor: pointer;" class="icon-plus-sign icon-2x fa fa-plus-circle fa-2x"></div>' +
                '   <div id="removeKMLset" style="color: #AAAAAA; margin-left: 4px; display:inline-block; cursor: pointer;" class="icon-minus-sign icon-2x fa fa-minus-circle fa-2x"></div>' +
                '</div></div>';

            var presetsTooltipsCssEl = getKMLTooltipCssNode('#tipKMLselectKMLPresetsHelp', 'right', 'top: 13px'),
                attachmentNode, tooltipEl;

            attachmentNode = document.getElementById('selectKMLPresetsHelp');
            tooltipEl = getKMLTooltipNode('tipKMLselectKMLPresetsHelp', attachmentNode, 'width: 240px; left: -250px; top: 5px;');
            insertKMLTooltip(tooltipEl, attachmentNode, 'parent', presetsTooltipsCssEl);


            for (var kml_sel = 0, numSets = mykml.SAVED_PRESETS.length; kml_sel < numSets; kml_sel++) {
                document.getElementById("selKMLset").add(new Option(mykml.SAVED_PRESETS[kml_sel].name));
            };
            // Event-listeners for layer preset customization buttons
            document.getElementById("selKMLset").selectedIndex = mykml.idx;
            document.getElementById("selKMLset").value = mykml.SAVED_PRESETS[mykml.idx].name;

            document.getElementById("selKMLset").onchange = function() {
                mykml.idx = document.getElementById("selKMLset").selectedIndex;
                updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);
            };

            if (KMLayersSync.getLocaleValueGM()) document.getElementById(kmlElementMap.ids.localeRedirect).checked = true;

            document.getElementById("addKMLset").onclick = function() {
                var newKMLayerSetName = prompt("Please enter a name for the new preset", ""),
                    newKMLayerOpt = document.createElement('option');

                newKMLayerOpt.appendChild(document.createTextNode(newKMLayerSetName));
                document.getElementById("selKMLset").appendChild(newKMLayerOpt);
                mykml.addNewPreset(newKMLayerSetName);
                document.getElementById("selKMLset").selectedIndex = mykml.idx;

                updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);
            };


            document.getElementById("removeKMLset").onclick = function() {
                if (mykml.SAVED_PRESETS.length > 1) {
                    var selectedKMLIndex = document.getElementById("selKMLset").selectedIndex;

                    mykml.removePreset(selectedKMLIndex);
                    document.getElementById("selKMLset").removeChild(document.getElementById("selKMLset").options[selectedKMLIndex]);
                    document.getElementById("selKMLset").selectedIndex = mykml.idx;
                    document.getElementById("selKMLset").value = mykml.SAVED_PRESETS[mykml.idx].name;

                    updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);
                }
            };

            // Monitor for yoked preference settings
            yokeBetaTogAndAltPLOptions();
            document.getElementById(kmlElementMap.ids.betaRedirect).onchange = yokeBetaTogAndAltPLOptions;
        };
        //----------------------------------------------------------------//
        //                 APPLY AND SAVE PREFERENCES                     //
        //----------------------------------------------------------------//
        var applyKMLayersSettings = function() {
            var storeStr = ':',
                kmlSyncPresets = false;;

            if (document.getElementById(kmlElementMap.ids.disableRedirect).checked) storeStr += '&x'; //disable KML

            if (document.getElementById(kmlElementMap.ids.betaRedirect).checked) {
                storeStr += '&b'; //beta
                var kmlCurrBetaHostState = KMLayersSync.isBeta;
                setTimeout(function() {
                    insertKMLBetaToggle(kmlCurrBetaHostState)
                }, 250);
            } else if (document.getElementsByClassName('kml-toggle-container').length !== 0) {
                KMLayersSync.deleteGM("WMEKMLayers_Beta");
                //requestAnimationFrame(function() { GM_deleteValue("WMEKMLayers_Beta")});
                document.getElementsByClassName('kml-toggle-container')[0].remove();
                KMLayersSync.unlogKMLUsageHistory('&b');
            }

            if (document.getElementById(kmlElementMap.ids.altPermalink).checked) {
                storeStr += '&a'; //alt-PLs
                if (document.getElementsByClassName('kml-toggle-container').length !== 0) {
                    requestAnimationFrame(function() {
                        initAltPermalink()
                    });
                }
            } else if (document.getElementById('kmlPLContainer') !== null) {
                document.getElementById('kmlPLContainer').remove();
                document.getElementById('kmlPLSpacer').remove();
                document.getElementById('wazePermalink').style.visibility = 'visible';
                KMLayersSync.unlogKMLUsageHistory('&a');
            }

            if (document.getElementById(kmlElementMap.ids.syncPrefs).checked) {
                storeStr = '!' + storeStr + '&s';
            }

            if (document.getElementById(kmlElementMap.ids.syncPresets).checked) {
                storeStr += '&p';
                kmlSyncPresets = true;
                if (mykml && mykml.SAVED_PRESETS && mykml.SAVED_PRESETS.length) {
                    KMLayersSync.setGM("WMEKMLayers_Presets", JSON.stringify(mykml.SAVED_PRESETS));
                } else {
                    KMLayersSync.deleteGM("WMEKMLayers_Presets");
                    mykml.syncPresets = false;
                }
            }

            if (document.getElementById(kmlElementMap.ids.localeRedirect).checked) {
                storeStr += '&l'; //lang
                var langLocale = document.querySelector('div.kml-panel div.language-selector span.language_code').innerHTML;
                if (langLocale === 'none' || langLocale === 'en') {
                    requestAnimationFrame(function() {
                        GM_setValue("WMEKMLayers_Lang", true);
                    });
                } else {
                    requestAnimationFrame(function() {
                        GM_setValue("WMEKMLayers_Lang", langLocale);
                    });
                }
            } else {
                KMLayersSync.deleteGM("WMEKMLayers_Lang");
                //requestAnimationFrame(function() { GM_deleteValue("WMEKMLayers_Lang") });
            }

            if (document.getElementById(kmlElementMap.ids.cityLayer).checked) storeStr += '&1'; //city
            if (document.getElementById(kmlElementMap.ids.amLayer).checked) storeStr += '&5'; //am
            if (document.getElementById(kmlElementMap.ids.roadLayer).checked) storeStr += '&2'; //roads

            document.getElementById("KMLsettings").remove();

            localStorage.WME_KMLSettings = storeStr;
            KMLayersSync.upsyncAllPreferencesGM();
            //requestAnimationFrame(function(){GM_setValue("WMEKMLayers_Prefs", storeStr)}); // Note: prefs are always synced via overwrite, but
            // whether they are applied depends on user setting

            KMLayersSync.saveKMLObjToLocalStorage(mykml);
            requestAnimationFrame(applyAdditionalKMLSettings);

            var kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers);
            if (mykml && mykml.SAVED_PRESETS && mykml.SAVED_PRESETS.length) {
                updateKMLayersMenu(kml_layerSwitcher, mykml);

                if (KMLayersSync.hasSettingEnabled('&p')) KMLayersSync.upsyncSavedPresetsLS(mykml);

                if (mykml.SAVED_PRESETS[mykml.idx].saved) {
                    userResetOfLayersToSavedKMLayers(true, mykml);
                }
            }
            allTooltipsCssEl.remove();
        }; // applyKMLayersSettings()

        // Add locale dropdown
        selectLanguageLocale();

        // Setup event listeners for Save and Cancel buttons
        document.getElementById('btnKMLsave').onclick = applyKMLayersSettings;

        document.getElementById('btnKMLcancel').onclick = function() {
            document.getElementById("KMLsettings").remove();
            var tempResetHolder = myKMLayers.reset;
            mykml = getMyKMLayersObject();
            mykml.reset = tempResetHolder;

            updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);
            allTooltipsCssEl.remove();
        };
    };

    //======================================================================================
    //   KK  KK MM    MM LL         BBBBB   UU   UU TTTTTTT TTTTTTT  OOOOO  NN   NN  SSSSS
    //   KK KK  MMM  MMM LL         BB   B  UU   UU   TTT     TTT   OO   OO NNN  NN SS
    //   KKKK   MM MM MM LL         BBBBBB  UU   UU   TTT     TTT   OO   OO NN N NN  SSSSS
    //   KK KK  MM    MM LL         BB   BB UU   UU   TTT     TTT   OO   OO NN  NNN      SS
    //   KK  KK MM    MM LLLLLLL    BBBBBB   UUUUU    TTT     TTT    OOOO0  NN   NN  SSSSS
    //======================================================================================
    var initKMLButtons = function(mykml) {
        //kmllog('initKMLButtons()');
        if (document.getElementById("layer-switcher-list") && document.getElementById("iKMLsaveLayers") === null) {
            kml[6] = 0; //reset counter
            var panelWidth = 550,
                kmlStyle = document.createElement("style");
            //mykml = JSON.parse(localStorage.WME_KeepMyLayers);

            // Create CSS container element
            kmlStyle.type = "text/css";
            kmlStyle.id = "kml-css-container";

            // CSS for KMLayers icons under Layers dropdown menu and etc
            kmlStyle.innerHTML = '\
                div.kml-icn { display: block; vertical-align: middle; padding: 9px 0px 0px; margin: 0px; \
                   border-top: 1px solid #D4E7ED; font-weight: bold; }\n\
                .kml-icn-nsave { font-weight: 400; color: #D36343 !important; }\n\
                .kml-icn-btn { position: relative; display: inline-block; padding-left: 4px; padding-right: 4px; }\n\
                .fa-stack.kml-icn-btn, .icon-stack.kml-icn-btn { line-height: 1 !important; height: 11px !important; width: 18px !important;}\n\
                .kml-icn:active, .kml-icn:focus, .kml-icn:hover, .kml-icn.active, .kml-permalinks a:link, .kml-permalinks a:hover, .kml-permalinks a:focus, .kml-permalinks a:visited \
                    { text-decoration: none; background-image: none; outline: 0;\
                        -webkit-box-shadow: none; box-shadow: none; cursor: pointer; }\n\
                .kml-icn-off, .kml-icn-off:hover, .kml-icn-off:focus, a.kml-icn.kml-icn-off, a:link.kml-icn.kml-icn-off, a:hover.kml-icn.kml-icn-off, a.kml-icn.kml-icn-off:focus {\
                   color: #B1D4DF !important; cursor: default !important; pointer-events: none; }\n\
                span.kml-icn-btn { padding: 0; margin: 0px 10px 10px 0px; }\n';

            // CSS for KMLayers notice panels
            kmlStyle.innerHTML += '\
                div.kml-panel-blackout { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\
                   background: rgba(0,0,0,0.5); z-index: 2000; }\n\
                div.kml-panel-clear { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;\
                   background: transparent; z-index: 2001; }\n\
                .kml-panel { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);\
                   width:' + panelWidth + 'px; \
                   padding: 10px; margin: 0; overflow: visible !important; word-wrap: normal;\
                   background-color: white; box-shadow: 0px 5px 20px #555555;\
                   border: 1px solid #858585; border-radius: 10px; }\n\
                .kml-panel-section>.controls-container { position: relative; margin: 2px; padding: 2px 5px; height: 23px; border-radius: 5px; width: 100%; white-space: normal; }\n\
                .kml-panel-section>.controls-container.kml-pref-help:hover { background-color: #EEE; }\n\
                .kml-panel-section>.controls-container>input[type="checkbox"], .kml-panel-section>.controls-container>input[type="checkbox"]:checked { margin: 0px }\n\
                .kml-panel-section>.controls-container>input[type="checkbox"]+label, .kml-panel-section>.controls-container>input[type="checkbox"]:checked+label { word-wrap: normal; white-space: normal !important; line-height: 1; margin: auto; }\n\
                .kml-panel-section>.controls-container>input[type="checkbox"]:not(:checked)+label:after, .kml-panel-section>.controls-container>input[type="checkbox"]:checked+label:after {top: 1px;}\n\
                .kml-panel-section>.controls-container>input[type="checkbox"]:not(:checked)+label:before, .kml-panel-section>.controls-container>input[type="checkbox"]:checked+label:before { top: 0px;}\n\
                .kml-panel-section ul.dropdown-menu.locales { max-height: 400px; overflow-y: auto;} \n\
                .kml-panel h2 { margin-top: 10px; margin-bottom: 10px; font-size: 20pt; font-weight: bold; text-align: left; color: #C0C0C0 }\n\
                div.kml-panel-section {display: block; font-size: 11pt; text-align: left; padding: 0px; }\n\
                .kml-panel-hr { display: block; border: 0; height: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);\
                   border-bottom: 1px solid rgba(255, 255, 255, 0.3); margin-top: 8px; margin-bottom: 12px; }\n\
                .kml-panel-btn { margin: 0px 5px 0px; padding: 0px 15px; display: inline-block; height: 32px; }\n\
                div.kml-panel-btn { display: block; position: relative; padding: 0; width: 100%; margin: 15px 0px 8px; vertical-align: middle; }\n\
                .kml-panel ul>li {padding-bottom: 4px}\n\
                i.kml-pref-help { pointer-events: auto; color: #D0D0D0; margin-top: 3px; float: right; }\n\
                i.kml-pref-help:hover, .kml-pref-help:focus, .kml-pref-help:active { color: #9a9a9a; }\n';

            // CSS for beta-editor toggle
            if (KMLayersSync.isBeta) { //rgba(250,82,87,0.5)
                var innerBefore = 'transparent',
                    innerAfter = 'repeating-linear-gradient( 60deg, #93C4D3, #93c4d3 4px, rgba(250, 82, 87, 0.53) 5px, #FF9DA0 7px )',
                    labelBorder = "#FA5257"
                    labelBackground = labelBorder,
                    disabledBorder = 'rgba(250,82,87,0.4)',
                    disabledBackground = 'rgba(250,82,87,0.5)';
            } else { //
                var innerBefore ='repeating-linear-gradient( 60deg, transparent, transparent 3px, #FC6C70 3px, #FC6C70 8px )' ,
                    innerAfter = 'transparent',
                    labelBorder = "#93C4D3"
                    labelBackground = labelBorder,
                    disabledBorder = 'rgba(147, 196, 211, 0.5)',
                    disabledBackground = 'rgba(147, 196, 211, 0.7)';
            }

            kmlStyle.innerHTML += '\
                .kml-toggle-container' + ' { position: absolute; right: 13px; top: 13px; }\n\
                .kml-toggle' + ' { z-index: 0; position: relative; \
                    -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; }\n\
                .kml-toggle-checkbox' + ' { display: none; }\n\
                .kml-toggle-checkbox:checked+.kml-toggle-label .kml-toggle-inner' + ' { margin-left: 0; }\n\
                .kml-toggle-checkbox:checked+.kml-toggle-label .kml-toggle-switch' + ' { right: 2px; }\n\
                .kml-toggle-label' + ' { display: block; background-color: ' + labelBackground + '; border: 2px solid ' + labelBorder + '; border-radius: 23px; width: 40px; height: 23px; margin: 0px; overflow: hidden; cursor: pointer; }\n\
                .kml-toggle-inner' + ' { display: block; width: 200%; margin-left: -100%; transition: all 0.1s cubic-bezier(0.55, 0.09, 0.68, 0.53) 0.15s; }\n\
                .kml-toggle-inner:before, .kml-toggle-inner:after' + ' { display: block; float: left; width: 50%; height: 21px; margin-top: -1px; \
                    padding: 0; box-sizing: border-box; border-radius: 21px; }\n\
                .kml-toggle-inner:before' + ' { content: ""; background: ' + innerBefore + '; }\n\
                .kml-toggle-inner:after' + ' { content: ""; background: ' + innerAfter + '; }\n\
                .kml-toggle-switch' + ' { position: absolute; display: block; background: #F6F7F8; margin: 0px; z-index: 1; \
                    top: 2px; bottom: 2px; right: 19px; width: 19px; height: 19px; border-radius: 50%; \
                    box-shadow: inset 0px 1px 0px #FFF, 0px 2px 4px rgba(0,0,0,0.3); transition: all 0.1s cubic-bezier(0.55, 0.09, 0.68, 0.53) 0.15s; }\n\
                div.kml-toggle.disabled .kml-toggle-label' + ' { border: 3px groove ' + disabledBorder + '; background: ' + disabledBackground + '; }\n\
                div.kml-toggle.disabled .kml-toggle-switch' + ' { right: 3px !important; box-shadow: inset 0px 1px 0px rgba(255,255,255,0.5), 0px 1px 1px rgba(0,0,0,0.3); margin-top: 1px; height: 17px; width: 34px; border-radius: 23px; margin-left: -19px; }\n' + //background: repeating-linear-gradient( 60deg, transparent, transparent 4px, rgba(255,255,255,0.75) 4px, rgba(255,255,255,0.75) 7px );
               'div.kml-toggle.disabled .kml-toggle-inner:before, div.kml-toggle.disabled .kml-toggle-inner:after' + ' { visibility: hidden; }\n\
                div.kml-toggle.disabled label, div.kml-toggle.disabled span { transition: all 0.2s ease-in-out 0s; }';

            // CSS for Preset Switcher Menu
            // #toolbar .toolbar-button:hover:not(.ItemDisabled):not(:disabled) { background-color: transparent; }\n\
            // #kmlDropdownMenu .dropdown-toggle {-webkit-box-shadow: none; box-shadow: none; }\n\
            var mapHeight = $('#WazeMap').css('height'), menuWidthVal = 160;
            if (KMLayersSync.isBeta) {
                var menuHideDist = $('#toolbar').height() + 18 - menuWidthVal + 'px', // add 2 for border
                    toolbarSepColor = '#CFE5EC';
            } else {
                var menuHideDist = $('#layer-switcher-menu').width() + 17 - menuWidthVal + 'px',
                    toolbarSepColor = '#A8CAD5';
            }
            kmlStyle.innerHTML += '\
                .kml-usage-helper { right: 0px !important; border: 1px solid #DDDDDD !important; background-color: #FFF !important; transition-delay: 0s; transition-duration: .3s; }\n\
                #kmlDropdownMenu.toolbar-separator, #kmlDropdownMenu .toolbar-button { float: right; position: relative; top: 0px; right: 0px; margin: 0px; font-size: 18px !important; width: 17px !important; }\n\
                #kmlDropdownMenu .toolbar-button:after { display: none; }\n\
                #kmlDropdownMenu .kml-layers-menu.dropdown-toggle { border-left: 1px solid ' + toolbarSepColor + '; background-color: #BEDCE5; }\n\
                #kmlDropdownMenu div.toolbar-button.kml-layers-icon { line-height: 0; color: #58889E; width: 13px !important; height: 13px !important; right: 0px; top: 50% }\n\
                #kmlDropdownMenu div.toolbar-button.kml-layers-icon:hover { color: #6DA0B6; cursor: pointer; }\n\
                #kmlDropdownMenu div.toolbar-button.kml-layers-icon:after, div.toolbar-button.kml-layers-icon:before { left: 0px !important; right: 0px !important; width: 10px !important; }\n\
                #kmlDropdownMenu div.toolbar-button.kml-layers-menu:after, div.toolbar-button.kml-layers-menu:before { display: none !important; }\n\
                #kmlDropdownMenu menu.kml-layers-menu-container { height: ' + mapHeight + '!important; }\n\
                #kmlDropdownMenu menu.kml-layers-menu-container.dropdown-menu { width: 350px; background: transparent; box-shadow: none; height: 90%; opacity: 1; position: relative; right: 0px; top: initial; overflow-x: hidden; overflow-y: visible; pointer-events: none; border: 0; }\n\
                #kmlDropdownMenu menu.kml-layers-menu-container, #kmlDropdownMenu menu.kml-layers-menu-container>ul.dropdown-menu { z-index: 2; white-space: normal; border-radius: 0px;  margin: 0; padding: 0;}\n\
                #kmlDropdownMenu menu.kml-layers-menu-container>ul.dropdown-menu  { width: ' + menuWidthVal + 'px; pointer-events: auto; position: absolute; overflow-y: visible; border: 1px solid #DDDDDD; top: 0px;}\n\
                #kmlDropdownMenu ul.kml-layers-menu>li { position: relative; border-bottom: 2px solid #D4E7ED; color: #5A898F; }\n\
                #kmlDropdownMenu ul.kml-layers-menu>li>a { font-size: 12px; letter-spacing: 0px; font-weight: 600; color: #5A898F; word-wrap: break-word; white-space: normal; padding: 10px 10px 10px 10px;}\n\
                #kmlDropdownMenu ul.kml-layers-menu>li>a:active, .kml-layers-menu>li>a.active, #kmlDropdownMenu ul.kml-layers-menu>li>a:focus { background-color: #D4E7ED; }\n\
                #kmlDropdownMenu ul.kml-layers-menu>li>a:hover { background-color: #DFECF0; color: #5A898F; }\n\
                #kmlDropdownMenu ul.kml-layers-menu>li>a.kml-text-nsave, .kml-layers-menu>li>a.kml-text-nsave:hover { color: #D36343 !important; }\n\
                #kmlDropdownMenu.dropdown:hover ul.dropdown-menu, #kmlDropdownMenu menu.kml-layers-menu-container.dropdown-menu>ul:hover { display: block; visibility: visible; opacity: 1; transition-delay: 0s; transition-duration: .3s; }\n\
                #kmlDropdownMenu.kml-keep-open-runonce menu.kml-layers-menu-container>ul.kml-layers-menu { right: 0px; border: 1px solid #DDDDDD; background-color: #fff; }\n\
                #kmlDropdownMenu.kml-keep-open .dropdown-toggle { -webkit-box-shadow: inset 0 3px 5px rgba(0,0,0,0.125); box-shadow: inset 0 3px 5px rgba(0,0,0,0.125); }\n\
				#kmlDropdownMenu.kml-keep-open menu.kml-layers-menu-container>ul.kml-layers-menu { display: block; position: absolute; right: ' + menuHideDist + '; width: ' + menuWidthVal + 'px; border: 1px solid rgba(221, 221, 221, 0.7); background-color: rgba(255,255,255,0.5); box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition-duration: 1s; transition-timing-function: linear; transition-delay: .8s;}\n\
				#kmlDropdownMenu.kml-keep-open ul.kml-layers-menu>li { border-bottom: 2px solid rgba(212,231,237,0.4); transition-duration: 1s; transition-timing-function: linear; transition-delay: .8s; }\n\
    			#kmlDropdownMenu.kml-keep-open li>a:active, #kmlDropdownMenu.kml-keep-open li>a.active, #kmlDropdownMenu.kml-keep-open li>a:focus { background-color: rgba(212,231,237,0.4); transition-duration: 1s; transition-timing-function: linear; transition-delay: .8s; }\n\
				#kmlDropdownMenu.kml-keep-open ul.kml-layers-menu:hover>li>a.active {transition-delay: 0s; transition-duration: .1s; }\n\
				#kmlDropdownMenu.kml-keep-open menu.kml-layers-menu-container>ul.kml-layers-menu:hover, #kmlDropdownMenu.kml-keep-open menu.kml-layers-menu-container>ul.kml-layers-menu:active, #kmlDropdownMenu.kml-keep-open menu.kml-layers-menu-container>ul.kml-layers-menu:focus \
					{ right: 0px; border: 1px solid #DDDDDD; background-color: #fff; transition-delay: 0s; transition-duration: .2s; }\n\
				#kmlDropdownMenu.kml-keep-open ul.kml-layers-menu:hover>li, #kmlDropdownMenu.kml-keep-open ul.kml-layers-menu>li:hover, #kmlDropdownMenu.kml-keep-open ul.kml-layers-menu>li:active, #kmlDropdownMenu.kml-keep-open ul.kml-layers-menu>li:focus { border-bottom: 2px solid #D4E7ED;  transition-delay: 0s; transition-duration: .2s; }\n\
				#kmlDropdownMenu.kml-keep-open li>a.active:hover, #kmlDropdownMenu.kml-keep-open li>a:hover { background-color: #D4E7ED; transition-delay: 0s; transition-duration: .1s; }\n';

            document.head.appendChild(kmlStyle);
            kmlStyle = null;

            // Add save layers icon to Layers switcher dropdown panel
            var kmlDiv = document.createElement("div");
            kmlDiv.className = "kml-icn";
            //<div id="iKMLsaveLayers" class="icon-save fa fa-save kml-icn-btn reload-button" data-toggle="tooltip" title="Save current set of layers"></div>
            kmlDiv.innerHTML = '\
                <a href="javascript:void(0)" class="kml-icn"><div class="fa-stack icon-stack kml-icn-btn reload-button" id="iKMLsaveLayers" style="margin-right: 8px;" data-toggle="tooltip" title="Save current set of layers"><div class="icon-save fa fa-save fa-stack-1x"></div><div id="iKMLnotSaved" class="icon-plus-sign fa fa-plus-circle fa-stack-1x" style="font-size: 10px; margin: -3px -5px 3px 5px; text-shadow: 1px -1px 0px white, 2px -2px 0px white; color: crimson; visibility: hidden;"></div></div></a>\
                <a href="javascript:void(0)" class="kml-icn"><div id="iKMLsettings" class="icon-cog fa fa-cog kml-icn-btn reload-button" data-toggle="tooltip" title="KeepMyLayers preferences"></div></a>\
                <a href="javascript:void(0)" class="kml-icn"><div id="iKMLresetLayers" class="icon-magic fa fa-magic kml-icn-btn reload-button" data-toggle="tooltip" title="Reset layers to saved presets"></div></a>\
                <div id="iKMLtempUndo" class="icon-eye-open fa fa-eye kml-icn-btn reload-button kml-icn-off" data-toggle="tooltip" title="Toggle layers from permalink"></div>\
                <div id="divKMLlayerName" style="margin-bottom: -4px; padding-left: 14px; color: #93c4d3; line-height: 1;"></div>';

            document.getElementById("layer-switcher-list").parentNode.insertBefore(
                kmlDiv, document.getElementById("layer-switcher-list").nextSibling);

            //--------------------------------
            // LAYER PRESETS DROPDOWN MENU
            //--------------------------------
            kmlDiv = document.createElement("div");
            kmlDiv.id = 'kmlDropdownMenu'
            kmlDiv.className = "btn-group dropdown toolbar-separator";
            kmlDiv.style.height = '100%';
            kmlDiv.innerHTML = '<div style="position: absolute; right: 0; top: 0; height: 100%; pointer-events: none; width: 100%;">\
                <div class="toolbar-button toolbar-separator kml-layers-menu dropdown-toggle" style="" data-toggle="dropdown">\
                <div class="toolbar-button kml-layers-icon icon-caret-down icon-large fa fa-caret-down fa-lg" style=""></div>\
                </div>\
                <menu class="kml-layers-menu-container dropdown-menu pull-right dropdown-menu-right">\
                <ul class="kml-layers-menu dropdown-menu dropdown-menu pull-right dropdown-menu-right" style="">\
                <li style="padding: 10px">\
                    Your layer presets will go here. \
                    To start, select some layers under the WME Layers menu and click on the save icon at the bottom corner to save the preset. \
                </li>\
                </ul></menu></div>'; //</div>
            document.getElementById("toolbar").insertBefore(kmlDiv, document.getElementById("layer-switcher"));
            if (KMLayersSync.isBeta) document.querySelector('.controls-container.dropdown-menu').style.right = '17px';

            if (mykml && mykml.SAVED_PRESETS && mykml.SAVED_PRESETS.length) {
                var kml_layerSwitcher = getWazeMapLayersFromSwitcher(kml_W_map.layers),
                    tryUpdatingLayerNamesAgain = updateKMLayersMenu(kml_layerSwitcher, mykml);

                if (tryUpdatingLayerNamesAgain) {
                    //kmllog('Trying to update layers set menu again in 3 seconds...')
                    setTimeout(function() {
                        try {
                            kml_layerSwitcher = getWazeMapLayersFromSwitcher(unsafeWindow.Waze.map.layers);
                            tryUpdatingLayerNamesAgain = updateKMLayersMenu(kml_layerSwitcher, mykml);
                        } catch (err) {
                            console.warn(err);
                        }
                    }, 3000);
                }

                updateKMLayersSaveButton(mykml.SAVED_PRESETS[mykml.idx].saved);

                //-----------------------------------------------------------------------------
                // Delayed resetting of secondary layer filters (residential, UR/MPs) due to delayed loading of layer menu
                requestAnimationFrame(function() {
                    updateKMLayerFilters(mykml.SAVED_PRESETS[mykml.idx].layerFilters);
                });
                //-----------------------------------------------------------------------------

            } else {
                updateKMLayersSaveButton(false);
            }

            //------------------ Setup event listeners -------------------
            // Setup event listener for stay open dropdown
            document.getElementById('kmlDropdownMenu').onclick = function(e) {
                updateKMLayersMenu(kml_layerSwitcher);

                if (this.classList.toggle('kml-keep-open')) {
                    this.classList.remove('open');
                }
            };

            // buttons under layer menu
            document.getElementById("iKMLsaveLayers").onclick = saveKMLayers;
            document.getElementById("iKMLsettings").onclick = showKMLPrefsPanel;
            document.getElementById("iKMLresetLayers").onclick = userResetOfLayersToSavedKMLayers;
            $(".kml-icn-btn[data-toggle=tooltip]").tooltip();
            //{	placement: 'bottom'	}

            // doubleclick layer menu shortcut for KMLayers preferences panel
            if (document.getElementById("layer-switcher-menu") !== null) {
                document.getElementById("layer-switcher-menu").ondblclick = showKMLPrefsPanel;
            } else {
                document.getElementsByClassName("waze-icon-layers")[0].ondblclick = showKMLPrefsPanel;
            }

            //-------------------------------------------------------------
            // Insert beta/prod toggle
            //KMLayersSync._GM_refreshBetaAttribute();
            var kmlBetaToggleGM = KMLayersSync.getBetaTogValueGM(); //KMLayersSync._GM_CALLBACKS.beta,
            kmlBetaTogSet = KMLayersSync.hasSettingEnabled('&b');

            // Sync betaTog between prod & beta by relying on the existence of WMEKMLayers_Beta in GM scope
            switch (true) {
                case (!kmlBetaTogSet && kmlBetaToggleGM !== undefined): // if betaTog is not set, but GM var exists
                    localStorage.WME_KMLSettings += '&b'; // then add the setting for betaTog to localStorage
                    insertKMLBetaToggle(kmlBetaToggleGM); // and insert the betaTog -- let the function decide on its state
                    setTimeout(function() {
                        if (document.getElementById(kmlElementMap.ids.betaRedirect) !== null) document.getElementById(kmlElementMap.ids.betaRedirect).checked = true;
                    }, 1000);
                    break;
                case (kmlBetaTogSet && kmlBetaToggleGM === undefined): // if betaTog is set, but GM var does not exist
                    localStorage.WME_KMLSettings = localStorage.WME_KMLSettings.replace('&b', ''); //then remove betaTog from settings and don't insert beta-tog
                    KMLayersSync.deleteGM("WMEKMLayers_Beta");
                    setTimeout(function() {
                        if (document.getElementById(kmlElementMap.ids.betaRedirect) !== null) document.getElementById(kmlElementMap.ids.betaRedirect).checked = false;
                    }, 1000);
                    break;
                case (kmlBetaTogSet && kmlBetaToggleGM !== undefined): // otherwise, if betaTog set in localStorage and GM var exists,
                    insertKMLBetaToggle(kmlBetaToggleGM); // insert the betaTog and determine state using GM var value
                    break;
            }
            //return mykml;

        } else if (document.getElementById("iKMLsaveLayers") !== null) {
            kml[6] = 0;
            return true; //icons already inserted into page
        } else if (kml[6]++ < 30) {
            setTimeout(function() {
                initKMLButtons(mykml)
            }, 200 + (kml[6] * 50));
        } else {
            console.warn('WMEKMLayers:',
                'Unable to insert WME KeepMyLayers under Layers menu.',
                'Element #layer-switcher-list not found on page.')
        }
    };

    ////////////////////////////////////////////////////////////////////////////

    initKMLButtons(myKMLayers);


    /*    window.addEventListener("beforeunload", function() {
        if (localStorage.WME_KMLSettings !== undefined &&
            !~localStorage.WME_KMLSettings.indexOf('&x')) { // user has NOT set WMEKMLayers to be disabled
            resetLocalWithKMLayers();
        }
    }, false);*/

    ////////////////////////////////////////////////////////////////////////////
    // ~~~ TEMP (clean-up) ~~~
    localStorage.removeItem("WME_KML_Settings");
    localStorage.removeItem("WME_KeepMyLayers_lF");
    localStorage.removeItem("WME_KeepMyLayers_lV");
    GM_deleteValue("WMEKML_Beta");
    GM_deleteValue("WMEKML_Lang");
    //kmllog('Done performing cleanup')

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //          NN   NN  OOOOO  TTTTTTT IIIII  CCCCC  EEEEEEE  SSSSS
    //          NNN  NN OO   OO   TTT    III  CC   CC EE      SS
    //          NN N NN OO   OO   TTT    III  CC      EEEEE    SSSSS
    //          NN  NNN OO   OO   TTT    III  CC   CC EE           SS
    //          NN   NN  OOOO0    TTT   IIIII  CCCCC  EEEEEEE  SSSSS
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //-------------------------------------------------------------------------
    //  Update Popup Notice
    //-------------------------------------------------------------------------
    var kmlNoticePanel = function(kmlPanelType, kmlVersion, kmlNoticeText, kmlForumURL) {
        var kmlNoticeUIEl = document.createElement("div");
        kmlNoticeUIEl.id = "divKMLnotice";
        kmlNoticeUIEl.innerHTML =
            '<i id="iKMLnotice" class="icon-exclamation-sign icon-4x pull-left fa fa-exclamation-circle fa-4x fa-pull-left"></i>' +
            '<h2>WME KMLayers Update</h2>' +
            '<hr class="kml-panel-hr">';
        kmlNoticeUIEl.innerHTML +=
            '<div class="kml-panel-section" style="font-size: 10.1pt">' +
            kmlNoticeText +
            '</div>' +
            '<div style="margin-top: 6px; font-size: 10.1pt">' +
            'For details and screenshots of new features, please visit the forum post <a href="' + kmlForumURL + '" target="_blank">here</a>.' +
            '</div>' +
            '<div style="margin-top:10px; font-size: 8pt;"> ' +
            'Note: This is a one-time alert for WME KMLayers v. ' + kmlVersion +
            '</div>';
        kmlNoticeUIEl.innerHTML += '<hr class="kml-panel-hr">' +
            '<div style="position: relative; width: 70px; display: block; left: 148px; bottom: 0px; margin: 10px; vertical-align: middle; padding: 0">' +
            '<button id="btnKMLokay" style="width: 70px" class="btn btn-primary kml-panel-btn">OK</button></div>' +
            '</div>';

        switch (kmlPanelType) {
            case "child": //requires also opening the settings panel beforehand
                kmlNoticeUIEl.className = "kml-panel";
                kmlNoticeUIEl.style.width = "500px";
                kmlNoticeUIEl.style.height = "270px";
                document.getElementsByClassName("kml-panel")[0].appendChild(kmlNoticeUIEl);
                break;
            case "blackout":
                kmlNoticeUIEl.innerHTML = '<div class="kml-panel" style="width: 420px; padding-left: 15px; padding-right: 15px;">' +
                    kmlNoticeUIEl.innerHTML;
                kmlNoticeUIEl.innerHTML += '</div>';
                kmlNoticeUIEl.className = "kml-panel-blackout"
                document.getElementById("map").appendChild(kmlNoticeUIEl);
                break;
            case "clear":
                kmlNoticeUIEl.innerHTML = '<div class="kml-panel" style="width: 420px; padding-left: 15px; padding-right: 15px;">' +
                    kmlNoticeUIEl.innerHTML;
                kmlNoticeUIEl.innerHTML += '</div>';
                kmlNoticeUIEl.className = "kml-panel-clear"
                document.getElementById("map").appendChild(kmlNoticeUIEl);
                break;
        }

        document.getElementById('btnKMLokay').onclick = function() {
            document.getElementById('divKMLnotice').remove();
            localStorage.WME_KMLUsageHelper += '&v' + KMLayersVersion.currentVersion;
        };
    };

    //-------------------------------------------------------------------------
    //if (!~localStorage.WME_KMLSettings.indexOf('&')) showKMLPrefsPanel();
    /*if (!~localStorage.WME_KMLSettings.indexOf('&' + minKMLVersion)) { //Display update notice
        var kmlNoticeText, kmlForumURL = "https://www.waze.com/forum/viewtopic.php?f=819&t=172335&p=1304954#p1304954";

        kmlNoticeText = 'Woohoo! The update to version 0.4 brings you the following new beta features and bug-fixes:<p>' +
            '<ul><li>Thanks to rickzabel\'s help, the bug that caused part of the URL to repeat itself <i>ad infinitum</i> has been found and squashed</li>' +
            '<li>Double-click on the beta/prod toggle to quickly disable/enable</li>' +
            '<li>Alt-editor permalink added to bottom right corner</li>' +
            '<li>Within the preference pane, you can now add additional layer presets to accommodate various editing contexts </li>' +
            '<li>Double-click on the WME Layer menu icon for easy access to the KMLayers preference pane</li>' +
            '</ul>';

        kmlNoticePanel("blackout", minKMLVersion, kmlNoticeText, kmlForumURL);
    }*/

    setTimeout(function() {
        KMLayersUsageHelper('layer_presets_runonce', myKMLayers.runonce);
        KMLayersUsageHelper('stay_open_dropdown_menu', KMLayersSync.hasSeenKMLPopup('&m'))
    }, 1000);

};

////////////////////////////////////////////////////////////////////////////
function waitForWazeMap_KMLayers() {
    var waitCount = 0,
        maxWait = 50; //30++ seconds
    //kmllog('Waiting for Waze...', '/');
    var tryInit_KMLayers = function() {
        try {
            if (waitCount < maxWait &&
                "undefined" !== typeof(unsafeWindow) && unsafeWindow.$ &&
                unsafeWindow.Waze && unsafeWindow.I18n &&
                unsafeWindow.Waze.map && unsafeWindow.Waze.model &&
                unsafeWindow.Waze.map.layers && unsafeWindow.Waze.model.repositoryFilters &&
                unsafeWindow.I18n.translations
            ) {
                KeepMyLayers();
                waitCount++; //for catching returns due to an undetected error
            } else if (waitCount++ < maxWait) {
                setTimeout(tryInit_KMLayers, 25 * waitCount);
            } else {
                console.error('WMEKMLayers:',
                    'KeepMyLayers could not find necessary Waze map objects.');
            }
        } catch (err) {
            try { //try again once more in case it failed due to another script or WME hiccup... >:]
                setTimeout(tryInit_KMLayers, 500);
            } catch (err) {
                console.error(
                    'WMEKMLayers:',
                    'WME KeepMyLayers failed to load',
                    'due to some kind of technical script error. :(');
                console.error(err);
            };
        };
    };
    tryInit_KMLayers();
};

////////////////////////////////////////////////////////////////////////////
var isReady = false;
document.onreadystatechange = function() {
    //kmllog('<' + document.readyState + '>', '/');
    if (!isReady) {
        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            isReady = true;
            //kmllog('Inside DOM interactive event interval.', '/');
            requestAnimationFrame(waitForWazeMap_KMLayers);
        }
    }
};
