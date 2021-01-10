
const { ccclass, property } = cc._decorator;

@ccclass
export default class Network1 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start() {

    }

    clickGet() {
        this.httpGet1();
    }

    // http GET 方法
    httpGet1() {
        let url = 'https://www.mxnzp.com/api/ip/self';
        let xhr = new XMLHttpRequest();
        let label = this.label;
        xhr.onreadystatechange = function () {
            // cc.log('xhr', xhr);
            if (xhr.readyState === 4) {
                cc.log(xhr.responseText);
                label.string = xhr.responseText;
            }
        };
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader('app_id', 'nldmuckoppsvvtzv');
        xhr.setRequestHeader('app_secret', 'bTZ6QmhXa3ZxRmpIZTRNYTBjUlpPdz09');
        xhr.send();
    }

    httpPost() {
        cc.log('发起请求');
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                cc.log(response);
                let respObj = JSON.parse(response);
                cc.log(respObj);
            }
        };
        let url = 'http://intgo.cn:3004/launcherUpdate';
        let params = {
            'userName': 'hngz244'
        };
        cc.log('url', url);
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(params));
    }
}
