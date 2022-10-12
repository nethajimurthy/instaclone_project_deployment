import postDataModule from "../Models/dataModel.js";

const postData = postDataModule;

export const getPosts = async (req,res) => {
  try {
    res.status(200).json(await (await postData.find({})).reverse());
  } catch (error) {
    res.status(404).json({ message: this.error.message });
  }
};

export const addPost = async (req,res) => {
        const newData = new postData({
          author: req.body.author,
          location: req.body.location,
          description: req.body.description,
          image: req.file.image,
        });
        await newData.save((err) => {
          if (err) console.log('error at saving post'+err.message);
          else console.log('saved new post data');
        });
      }
