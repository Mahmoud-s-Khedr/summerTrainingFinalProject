const modl= require("../model/modl");

class ctrl {
    static async viewCtrl(req, res) {
        const result = await modl.viewmodl(req.body);
        res.send(result);
    }

    static async addCtrl(req, res) {
        const result = await modl.addmodl(req.body);
        res.send(result);
    }

    static async deleteCtrl(req, res) {
        const result = await modl.deletemodl(req.body);
        res.send(result);
    }
}

module.exports = ctrl;