'use strict';

import frTranslation from './fr.js';
import enTranslation from './en.js';

var en = {id: 'en', displayName: 'English', translation: enTranslation};
var fr = {id: 'fr', displayName: 'Français', translation: frTranslation};

/**
 * Provider of translation files.
 */
export var languages = [en, fr];
