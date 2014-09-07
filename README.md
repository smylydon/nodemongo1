nodemongo1
==========

I put together this node-express-mongodb project because I wanted to learn how to hook up an Emberjs project to a backend server. As a professional javascript engineer, Node and Mongodb was a natural choice.


MongoDB
-------
The following are the various collections and documents that I created on my system. Use robomongo to edit and insert these documents into mongo.

food
/* 0 */
{
    "_id" : ObjectId("5358a60d1d3fd1ff38c651f8"),
    "food" : 1,
    "name" : "Pizza",
    "image_url" : "images/pizza.png",
    "cents" : 1500
}

/* 1 */
{
    "_id" : ObjectId("5358a60d1d3fd1ff38c651f9"),
    "food" : 2,
    "name" : "Pancakes",
    "image_url" : "images/pancakes.png",
    "cents" : 300
}

/* 2 */
{
    "_id" : ObjectId("5358a60d1d3fd1ff38c651fa"),
    "food" : 3,
    "name" : "Fries",
    "image_url" : "images/fries.png",
    "cents" : 700
}

/* 3 */
{
    "_id" : ObjectId("5358a60d1d3fd1ff38c651fb"),
    "food" : 4,
    "name" : "Hot Dog",
    "image_url" : "images/hotdog.png",
    "cents" : 950
}

/* 4 */
{
    "_id" : ObjectId("5358a60d1d3fd1ff38c651fc"),
    "food" : 5,
    "name" : "Birthday Cake",
    "image_url" : "images/birthdaycake.png",
    "cents" : 2000
}

tabitems
/* 0 */
{
    "_id" : ObjectId("5358a7526edd6d3c365cbae7"),
    "tabitem" : 400,
    "cents" : 1500,
    "foods" : ObjectId("5358a60d1d3fd1ff38c651f8")
}

/* 1 */
{
    "_id" : ObjectId("5358a7526edd6d3c365cbae8"),
    "tabitem" : 401,
    "cents" : 300,
    "foods" : ObjectId("5358a60d1d3fd1ff38c651f9")
}

/* 2 */
{
    "_id" : ObjectId("5358a7526edd6d3c365cbae9"),
    "tabitem" : 402,
    "cents" : 700,
    "foods" : ObjectId("5358a60d1d3fd1ff38c651fa")
}

/* 3 */
{
    "_id" : ObjectId("5358a7526edd6d3c365cbaea"),
    "tabitem" : 403,
    "cents" : 950,
    "foods" : ObjectId("5358a60d1d3fd1ff38c651fb")
}

/* 4 */
{
    "_id" : ObjectId("5358a7526edd6d3c365cbaeb"),
    "tabitem" : 404,
    "cents" : 2000,
    "foods" : ObjectId("5358a60d1d3fd1ff38c651fc")
}

tables
/* 0 */
{
    "_id" : ObjectId("5358a6b96edd6d3c365cbadb"),
    "table" : 1,
    "tabs" : ObjectId("5358a7286edd6d3c365cbae1")
}

/* 1 */
{
    "_id" : ObjectId("5358a6b96edd6d3c365cbadd"),
    "table" : 3,
    "tabs" : ObjectId("5358a7286edd6d3c365cbae3")
}

/* 2 */
{
    "_id" : ObjectId("5358a6b96edd6d3c365cbadc"),
    "table" : 2,
    "tabs" : ObjectId("5358a7286edd6d3c365cbae2")
}

/* 3 */
{
    "_id" : ObjectId("5358a6b96edd6d3c365cbade"),
    "table" : 4,
    "tabs" : ObjectId("5358a7286edd6d3c365cbae4")
}

/* 4 */
{
    "_id" : ObjectId("5358a6b96edd6d3c365cbadf"),
    "table" : 5,
    "tabs" : ObjectId("5358a7286edd6d3c365cbae5")
}

/* 5 */
{
    "_id" : ObjectId("5358a6b96edd6d3c365cbae0"),
    "table" : 6,
    "tabs" : ObjectId("5358a7286edd6d3c365cbae6")
}

tabs
/* 0 */
{
    "_id" : ObjectId("5358a7286edd6d3c365cbae1"),
    "tab" : 1,
    "tabitems" : []
}

/* 1 */
{
    "_id" : ObjectId("5358a7286edd6d3c365cbae2"),
    "tab" : 2,
    "tabitems" : []
}

/* 2 */
{
    "_id" : ObjectId("5358a7286edd6d3c365cbae3"),
    "tab" : 3,
    "tabitems" : []
}

/* 3 */
{
    "_id" : ObjectId("5358a7286edd6d3c365cbae4"),
    "tab" : 4,
    "tabitems" : [ 
        ObjectId("5358a7526edd6d3c365cbae7"), 
        ObjectId("5358a7526edd6d3c365cbae8"), 
        ObjectId("5358a7526edd6d3c365cbae9"), 
        ObjectId("5358a7526edd6d3c365cbaea"), 
        ObjectId("5358a7526edd6d3c365cbaeb")
    ]
}

/* 4 */
{
    "_id" : ObjectId("5358a7286edd6d3c365cbae5"),
    "tab" : 5,
    "tabitems" : []
}

/* 5 */
{
    "_id" : ObjectId("5358a7286edd6d3c365cbae6"),
    "tab" : 6,
    "tabitems" : []
}

