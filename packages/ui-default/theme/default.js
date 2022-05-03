import 'normalize.css/normalize.css';
import 'pickadate/lib/themes/classic.css';
import 'pickadate/lib/themes/classic.date.css';
import 'pickadate/lib/themes/classic.time.css';
import 'katex/dist/katex.min.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import 'material-icons/iconfont/material-icons.css';

import '@fontsource/fira-code';
import '@fontsource/source-code-pro';
import '@fontsource/roboto-mono';
import '@fontsource/inconsolata';
import '@fontsource/ubuntu-mono';
import '@fontsource/pt-mono';
import '@fontsource/dm-mono';
import '@fontsource/jetbrains-mono';

import 'vj/misc/float.styl';
import 'vj/misc/typography.styl';
import 'vj/misc/textalign.styl';
import 'vj/misc/grid.styl';
import 'vj/misc/slideout.styl';

import 'vj/misc/.iconfont/webicon.styl';
import 'vj/misc/immersive.styl';
import 'vj/misc/structure.styl';
import 'vj/misc/section.styl';
import 'vj/misc/nothing.styl';

import 'vj/components/editor/cmeditor.styl';
import 'vj/components/datepicker/datepicker.styl';
import 'vj/components/katex/katex.styl';

// load all page stylesheets
const pageStyleReq = require.context('../', true, /\.page\.styl$/i);
pageStyleReq.keys().map((key) => pageStyleReq(key));
const pageStyleReqDefault = require.context('../', true, /\.page\.default\.styl$/i);
pageStyleReqDefault.keys().map((key) => pageStyleReqDefault(key));

import './dark.styl';
