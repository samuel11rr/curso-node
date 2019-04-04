"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = require("../mysql/mysql");
const router = express_1.Router();
router.get('/heroes', (req, res) => {
    const query = `
                    SELECT * 
                    FROM heroes;
                    `;
    mysql_1.default.executeQuery(query, (err, data) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroes: data
            });
        }
    });
});
router.get('/heroes/:id', (req, res) => {
    const id = req.params.id;
    const escapedId = mysql_1.default.instance.connection.escape(id);
    const query = `
                    SELECT * 
                    FROM heroes
                    WHERE id = ${escapedId};
                    `;
    mysql_1.default.executeQuery(query, (err, data) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err
            });
        }
        else {
            res.json({
                ok: true,
                heroe: data[0]
            });
        }
    });
});
exports.default = router;
