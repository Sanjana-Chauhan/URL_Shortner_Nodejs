const urlModel = require("../models/urlModel");
const shortid = require("shortid");
const handleGenerateShortUrl = (req, res, next) => {
  const body = req.body;
  const URL = body.RedirectURL;

  if (!URL) {
    res.status(500).json({
      msg: "Bad request Types. A url is required",
    });
  } else {
    const shortUrl = shortid();
    const urlObj = new urlModel({
      ShortUrl: shortUrl,
      RedirectUrl: URL,
      Visited: [],
    });

    urlObj
      .save()
      .then(() => {
        res.status(200).json({ msg: "URL generated", shortUrl: shortUrl });
      })
      .catch((err) => {
        console.log("Something went wrong", err);
        res.json({ message: err });
      });
  }
};
const handleRedirectUrl = async (req, res, next) => {
  try {
    const shortUrl = req.params.shortUrl;
    if (!shortUrl) {
      return res.status(400).json({ error: "Short URL is required" });
    }
    const obj = await urlModel.findOne({ ShortUrl: shortUrl });

    if (!obj) {
      return res.status(404).json({ error: "Short URL not found" });
    }
    await urlModel.findOneAndUpdate(
      { ShortUrl: shortUrl },
      { $push: { VisitedHistory: Date.now(),
        $inc: { Visits: 1 } 
       } }
    );
    return res.redirect(obj.RedirectUrl);
  } catch (error) {
    next(error);
  }
};

//HandleGenerateLog
const handleAnalytics = async (req, res, next) => {
  const shortUrl = req.params.shortUrl;
  if (!shortUrl) {
    res.status(500).json({
      msg: "Bad request Types. A url is required",
    });
  }

  const obj = await urlModel.findOne({ ShortUrl: shortUrl });
  if (!obj) {
    res.status(404).json({
      msg: "Short URL not found",
    });
  } else {
    res.json(obj.VisitedHistory);
  }
};

module.exports = {
  handleGenerateShortUrl,
  handleRedirectUrl,
  handleAnalytics,
};
