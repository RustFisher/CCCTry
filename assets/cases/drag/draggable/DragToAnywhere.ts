const {ccclass, property} = cc._decorator;

/**
 * 拖动
 * 2020-12-28
 */
@ccclass
export default class DragToAnywhere extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    start () {
        
    }

    onEnable() {
        //注册TOUCH_MOVE事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
    }

    // update (dt) {}

    _onTouchMove(touchEvent) {
        let location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location); // 确定位置
    }

    _onTouchEnd(touchEvent) {
        // 放下
    }
}
