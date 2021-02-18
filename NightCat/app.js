new Vue({
    el: '#app',
    vuetify: new Vuetify({
        theme: {
            dark: true
        }
    }),
    data() {
        return {
            isDark: false
        }
    },
    methods: {
        dark: function () {
            if (this.isDark) {
                executeScriptToCurrentTab("set_white();")
                this.isDark = false
            } else {
                executeScriptToCurrentTab("set_dark();")
                this.isDark = true
            }
        }
    },
    mounted() {
        //this.dark()
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