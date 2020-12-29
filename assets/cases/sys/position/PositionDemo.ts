const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    nodes: cc.Node[] = [];

    // onLoad () {}

    start() {

    }

    update(dt) {
        this._getPos();
    }

    _getPos() {
        for (const child of this.nodes) {
            if (child == null) {
                continue;
            }
            this._logPosInfo(child);
            cc.log('----------------------');
        }
    }

    _logPosInfo(node: cc.Node) {
        let name = node.name;


        let postion = node.position; // postion是在父节点中的坐标
        cc.log(name, 'position (', postion.x.toFixed(2), ',', postion.y.toFixed(2), ')');

        let worldPos = node.parent.convertToWorldSpaceAR(node.position); // 世界坐标
        cc.log(name, '世界坐标(', worldPos.x.toFixed(2), ',', worldPos.y.toFixed(2), ')');

        let label = node.getComponent(cc.Label);
        if (label) {
            label.string = 'p(' + postion.x.toFixed(2) + ', ' + postion.y.toFixed(2) + ')\n'
                + 'w(' + worldPos.x.toFixed(2) + ', ' + worldPos.y.toFixed(2) + ')';
        }
    }
}
