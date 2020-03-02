import m from 'mithril';

export function MainView({attrs}) {

    function view({attrs}) {
        return m('div', [
            m('h2', "electron-mithril-boilerplate"),
            m('h1', 'Hello World')
        ]);
    }

    return {view};
}
