import 'regenerator-runtime/runtime';
import './jquery';
import 'spectrum-colorpicker';
import 'jquery-hotkeys';
import selfoss from './selfoss-base';
import './selfoss-shares';
import './selfoss-db-online';
import './selfoss-db-offline';
import './selfoss-db';
import './selfoss-ui';
import './selfoss-events';
import './selfoss-events-navigation';
import './selfoss-shortcuts';
import '@fancyapps/fancybox';

selfoss.init();

// make selfoss available in console for debugging
window.selfoss = selfoss;
