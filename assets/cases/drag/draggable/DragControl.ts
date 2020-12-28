import DragToAnywhere from "./DragToAnywhere";

const { ccclass, property } = cc._decorator;

/**
 * 2020-12-28
 */
@ccclass
export default class DragControl extends cc.Component {

    @property(cc.Prefab)
    drag_item: cc.Prefab = null;

    // onLoad () {}

    start() {
        this._addStar1();
    }

    // update (dt) {}

    _addStar1() {
        let node1 = cc.instantiate(this.drag_item);
        this.node.addChild(node1);
        node1.x = 100;
        node1.y = 100;
        node1.getComponent(DragToAnywhere).label.string = '水星';
    }
}
