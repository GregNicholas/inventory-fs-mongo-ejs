const Items = require("../models/Item")

module.exports = {
    getEdit: async (req, res) => {
        const id = req.params.id;
        try {
            const items = await Items.find()
            res.render("edit.ejs", {itemList: items, itemId: id})
        }catch(err) {
            return res.status(500).send(err)
        }
    },
    deleteItem: async (req, res) => {
        try{
            await Items.findOneAndDelete({_id:req.params.id})
            res.redirect("/")
        }catch(err){
            console.log(err)
        }
    },
    updateItem: async (req, res) => {
        console.log(req.body)
        try{
            await Items.findOneAndUpdate({_id:req.params.id}, req.body)
            res.redirect("/")
        }catch(err){
            console.log(err)
        }
    }
}