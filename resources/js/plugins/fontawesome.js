import Vue from 'vue';
import {config, library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

// import { } from '@fortawesome/free-regular-svg-icons'
import {faCog, faLock, faSignOutAlt, faUser,} from '@fortawesome/free-solid-svg-icons';

import {faGithub,} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;

library.add(faUser, faLock, faSignOutAlt, faCog, faGithub);

Vue.component('Fa', FontAwesomeIcon);
