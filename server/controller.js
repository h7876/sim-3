module.exports = {
    getPosts: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_posts()
        .then(posts => {res.status(200).send(posts);
            console.log(posts);
       }).catch(err => {
        console.log(err);
        res.status(500).send(err)
       });
    }
};