import User from './UserData';

const { ccclass, property } = cc._decorator;

/**
 * 2020-1-4
 */
@ccclass
export default class CallLocal extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    // onLoad () {}

    start() {
        this.runtimeInfo();
        let info1 = this.callNative();
        this.label.string += '\n' + info1;

        let webUser = new User();
        this.label.string += '\n网页的用户 ' + webUser.num + ', ' + webUser.enable;

        let anUser = this.getOneObject();
        this.label.string += '\ndata from android: ' + anUser.num + ", " + anUser.enable;
    }

    // update (dt) {}

    runtimeInfo() {
        let info = 'cc.sys.isNative: ' + cc.sys.isNative + ' ; cc.sys.isMobile: ' + cc.sys.isMobile;
        info += ('\n' + 'cc.sys.os:         ' + cc.sys.os);
        info += ('\n' + 'cc.sys.platform:   ' + cc.sys.platform);
        info += ('\n' + 'cc.sys.ANDROID:    ' + cc.sys.ANDROID);
        info += ('\n' + 'cc.sys.OS_IOS:     ' + cc.sys.OS_IOS);
        info += ('\n' + 'cc.sys.OS_ANDROID: ' + cc.sys.OS_ANDROID);
        this.label.string = info;
    }

    callNative(): string {
        let result = window.androidInterface.getStringInfo();
        return result;
    }

    getOneObject(): User {
        let json = window.androidInterface.getOneJson();
        let user: User = JSON.parse(json);
        return user;
    }
}
