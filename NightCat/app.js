new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: true
        }
    }),
    data() {
        return {

        }
    },
    methods: {
        ss: function () {
            executeScriptToCurrentTab('document.body.style.backgroundColor="";')
        }
    }
})

// 向content-script注入JS片段
function executeScriptToCurrentTab(code) {
    getCurrentTabId((tabId) => {
        chrome.tabs.executeScript(tabId, {
            code: code
        });
    });
}
// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}