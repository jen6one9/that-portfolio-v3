import rework from 'rework';
import pureGrids from 'rework-pure-grids';

const css = rework('').use(pureGrids.units({
    mediaQueries: {
        sm: 'screen and (min-width: 35.5em)', // 568px
        md: 'screen and (min-width: 48em)',   // 768px
        lg: 'screen and (min-width: 64em)',   // 1024px
        xl: 'screen and (min-width: 80em)'    // 1280px
    }
})).toString();

// This will log-out the grid CSS.
console.log(css);