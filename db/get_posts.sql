SELECT posts.id, users.id, message, posts.img, users.img as profile_img, users.user_name
FROM posts
LEFT JOIN users ON posts.id = users.id;