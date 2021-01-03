let productsDb = [
    {
         id :1,
         titel : "Headphone",
         imageUrl : "img/headphone.jpg",
         size : "small"
    },
    {
         id :2,
         titel : "Labtop",
         imageUrl : "img/labtop.jpg",
         size : "Large"
    },
    {
        id :3,
        titel : "Camera",
        imageUrl : "img/camera.jpg",
        size : "medieum"
    },
    {
        id :4,
        titel : "Glasses",
        imageUrl : "img/glasses.jpg",
        size : "small"
    }
];

localStorage.setItem("product",JSON.stringify(productsDb));