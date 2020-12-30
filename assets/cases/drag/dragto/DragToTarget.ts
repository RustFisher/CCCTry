const { ccclass, property } = cc._decorator;

/**
 * 拖动到目标位置
 * 2020-12-30
 */
@ccclass
export default class DragToTarget extends cc.Component {

    @property(cc.Label)
    nameLabel: cc.Label = null;

    @property(cc.Node)
    targetOfDragList: cc.Node[] = [];

    _oldPos = null; // 上一个位置

    start() {
        this._oldPos = this.node.position;
    }

    onEnable() {
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
        if (this.targetOfDragList.length === 0) {
            return; // 没有目标位置
        }
        let inTarget = false;
        for (const targetNode of this.targetOfDragList) {
            if (this._withinTarget(targetNode, touchEvent)) {
                inTarget = true;
                break;
            }
        }
        if (!inTarget) {
            this.node.position = this._oldPos; // 回去
        }
    }

    // 判断触摸事件是否在槽位里
    _withinTarget(targetNode: cc.Node, touchEvent) {
        let rect = targetNode.getBoundingBox();
        let location = touchEvent.getLocation();
        let point = targetNode.parent.convertToNodeSpaceAR(location);
        return rect.contains(point);
    }
}
