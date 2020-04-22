const router = require("express").Router();

router.use("/testing", require("./testRouter"));
// export
module.exports = router;
