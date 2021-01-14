const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

//start routes
router.get('/', (req, res) => {
    burger.selectAll((data) => {
    const hbsObject = {
        burgers: data,
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
    });
});

//insert new burger into table
router.post("/api/burgers", (req, res) => {
    burger.insertOne([req.body.burger_name], (result) => {
    res.json({ id: result.insertId });
    });
});

  //update the burger database
router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.updateOne(
    {
        devoured: true,
    },
    condition,
    (result) => {
        if (result.changedRows === 0) {
        return res.status(404).end();
        }
        res.status(200).end();
    }
    );
});

module.exports = router;
