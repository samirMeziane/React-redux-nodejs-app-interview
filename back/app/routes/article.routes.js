module.exports = app => {
  const Articles = require("../controllers/article.controller.js");

  var router = require("express").Router();

  // Create a new Article
    router.post("/addarticle", Articles.create);

  // Retrieve all Articles
    router.get("/articlelist", Articles.findAll);


  // Update a Article with id
  router.put("/editarticle/:id", Articles.update);

  // Delete a Article with id
    router.delete("/removearticle/:id", Articles.delete);

  app.use("/api/Articles", router);
};
