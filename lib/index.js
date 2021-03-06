import * as components from './components';
export default {
    css: {
        main: '@vuefront/opencart-theme/assets/css/main.scss'
    },
    molecules: {
        CartLink: components.mCartLink
    },
    // extensions: {
    //     Menu: components.eMenu
    // },
    organisms: {
        Header: components.oHeader,
        SearchInlineForm: components.oSearchInlineForm
    }
};