/*!/wp-content/plugins/wp-hide-security-enhancer/assets/js/devtools-detect.js*/
/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/
const devtools={isOpen:!1,orientation:undefined,};const threshold=160;const emitEvent=(isOpen,orientation)=>{globalThis.dispatchEvent(new globalThis.CustomEvent('devtoolschange',{detail:{isOpen,orientation,},}))};const main=({emitEvents=!0}={})=>{const widthThreshold=globalThis.outerWidth-globalThis.innerWidth>threshold;const heightThreshold=globalThis.outerHeight-globalThis.innerHeight>threshold;const orientation=widthThreshold?'vertical':'horizontal';if(!(heightThreshold&&widthThreshold)&&((globalThis.Firebug&&globalThis.Firebug.chrome&&globalThis.Firebug.chrome.isInitialized)||widthThreshold||heightThreshold)){if((!devtools.isOpen||devtools.orientation!==orientation)&&emitEvents){emitEvent(!0,orientation)}
devtools.isOpen=!0;devtools.orientation=orientation}else{if(devtools.isOpen&&emitEvents){emitEvent(!1,undefined)}
devtools.isOpen=!1;devtools.orientation=undefined}};main({emitEvents:!1});setInterval(main,300);window.devtools=devtools
;