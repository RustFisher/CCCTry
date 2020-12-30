import DragToTarget from "./DragToTarget";

const { ccclass, property } = cc._decorator;

/**
 * 场景
 * 2020-12-30
 */
@ccclass
export default class DragToControl extends cc.Component {

    @property(cc.Prefab)
    drag_to_item: cc.Prefab = null;

    @property(cc.Node)
    dragTargets: cc.Node[] = [];

    itemNum = 1;

    start() {
        this.createItem();
    }

    // update (dt) {}

    createItem() {
        let d = cc.instantiate(this.drag_to_item);
        this.node.addChild(d);
        let dragTo = d.getComponent(DragToTarget);
        dragTo.targetOfDragList = this.dragTargets; // 设置目的地
        dragTo.nameLabel.string = '' + this.itemNum++;
    }
}
