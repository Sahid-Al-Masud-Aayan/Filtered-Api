const carData = [
    
    {
        "id": 1,
        "category": "Sport Sedan",
        "model": "BMW M3",
        "horsepower": 473,
        "discount_price": "$53,000",
        "actual_price": "$62,000",
        "image_url": "https://weststarmotors.com.my/wp-content/uploads/2021/08/Front-1-19.jpg"
    },
    {
        "id": 2,
        "category": "Sport Sedan",
        "model": "Mercedes-AMG C63",
        "horsepower": 469,
        "discount_price": null,
        "actual_price": "$75,000",
        "image_url": "https://richmonds.com.au/wp-content/uploads/2023/08/Mercedes-C63-Sedan-White-2.jpg"
    },
    {
        "id": 3,
        "category": "Sport Sedan",
        "model": "Audi RS5",
        "horsepower": 446,
        "discount_price": "$40,000",
        "actual_price": "$53,000",
        "image_url": "https://www.motortrend.com/uploads/sites/11/2019/05/2019-Audi-RS5-Sportback-05.jpg"
    },
    {
        "id": 4,
        "category": "Sport Sedan",
        "model": "Alfa Romeo Giulia Quadrifoglio",
        "horsepower": 505,
        "discount_price": "$32,000",
        "actual_price": "$45,000",
        "image_url": "https://www.topgear.com/sites/default/files/2023/02/topgear_-_alfa_giulia_gta-m026.jpg"
    },
    {
        "id": 5,
        "category": "Sport Sedan",
        "model": "Porsche Panamera Turbo S",
        "horsepower": 420,
        "discount_price": null,
        "actual_price": "$41,000",
        "image_url": "https://edgecast-img.yahoo.net/mysterio/api/D7BE514F948C955B1ACF37AC5BCB072A3AF637DBD98534F4FFF935ECD462970A/autoblog/resizefill_w1200_h675;quality_85;format_webp;cc_31536000;/http://s.aolcdn.com/commerce/blogcdn/www.autoblog.com/media/2012/05/01-2012-porsche-panamera-turbo-s-review.jpg"
    },
    {
        "id": 6,
        "category": "SUV",
        "model": "BMW X5",
        "horsepower": 435,
        "discount_price": "$36,000",
        "actual_price": "$42,000",
        "image_url": "https://www.autoarp.nl/wp-content/uploads/2021/04/BMW-X5-4.8-2-van-35-scaled.jpg"
    },
    {
        "id": 7,
        "category": "SUV",
        "model": "Mercedes-Benz ML",
        "horsepower": 367,
        "discount_price": null,
        "actual_price": "$45,000",
        "image_url": "https://i.gaw.to/content/photos/12/29/122974_2013_Mercedes-Benz_M_Class.jpg"
    },
    {
        "id": 8,
        "category": "SUV",
        "model": "Audi Q7",
        "horsepower": 493,
        "discount_price": "$43,000",
        "actual_price": "$50,000",
        "image_url": "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/Gv4yl3YTqWt0ChDzW7Bi"
    },
    {
        "id": 9,
        "category": "SUV",
        "model": "Porsche Cayenne",
        "horsepower": 434,
        "discount_price": "$45,000",
        "actual_price": "$55,000",
        "image_url": "https://maessencsc.com/wp-content/uploads/2023/12/Porsche-Cayenne-Turbo-Zwart-1-1.jpg"
    },
    {
        "id": 10,
        "category": "SUV",
        "model": "Toyota Land Cruiser",
        "horsepower": 288,
        "discount_price": null,
        "actual_price": "$98,000",
        "image_url": "https://www.cnet.com/a/img/resize/5486410bcb19bfec16f105a0811dfcd036fc5291/hub/2020/08/04/f401f2f5-9711-4954-84a8-7c63f90183d2/ogi-2020-toyota-land-cruiser-001.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
        "id": 11,
        "category": "Supercar",
        "model": "Ferrari F8",
        "horsepower": 661,
        "discount_price": "$220,000",
        "actual_price": "$280,000",
        "image_url": "https://www.carscoops.com/wp-content/uploads/2020/03/Ferrari-F8-Tributo.jpg"
    },
    {
        "id": 12,
        "category": "Supercar",
        "model": "Lamborghini Aventador",
        "horsepower": 631,
        "discount_price": null,
        "actual_price": "$300,000",
        "image_url": "https://images.pistonheads.com/nimg/45077/AventadorSV_01.jpg"
    },
    {
        "id": 13,
        "category": "Supercar",
        "model": "McLaren 720s",
        "horsepower": 710,
        "discount_price": null,
        "actual_price": "$310,000",
        "image_url": "https://spots.ag/2019/01/06/mclaren-720s-c196806012019225048_1.jpg"
    },
    {
        "id": 14,
        "category": "Supercar",
        "model": "Porsche 911 GT2 RS",
        "horsepower": 572,
        "discount_price": "$190,000",
        "actual_price": "$270,000",
        "image_url": "https://www.alainclass.com/wp-content/uploads/2020/03/reshoot-szr-2018-Porsche-911-GT2-RS-Weissach-Package-BLUE-81657-3.jpg"
    },
    {
        "id": 15,
        "category": "Supercar",
        "model": "Aston Martin DBS",
        "horsepower": 630,
        "discount_price": "$160,000",
        "actual_price": "$220,000",
        "image_url": "https://www.supervettura.com/blobs/Cars/7/25a90dfb-fc1d-4635-88af-252b38248b11.jpg?width=1920&height=1080&mode=crop"
    },
    {
        "id": 16,
        "category": "Sport Sedan",
        "model": "Jaguar XF",
        "horsepower": 385,
        "discount_price": "$75,000",
        "actual_price": "$105,000",
        "image_url": "https://scontent.fdac139-1.fna.fbcdn.net/v/t1.6435-9/122291430_3744746575535499_8567150285291035372_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=06a7ca&_nc_eui2=AeG-W94jJ8OJjKCa54hGQ7tfv0rjaNxaM3m_SuNo3FozeUvjzQE2LF7JNV8hMpiQltD-6hdBjOe6IGRGiR4rJ4ga&_nc_ohc=pJGake0sqkMQ7kNvgFDtPSV&_nc_ht=scontent.fdac139-1.fna&oh=00_AYA_leeQhBYfYvzpkNr7B1z6iQMdrUI4ielzRuwACaEtkQ&oe=66B91439"
    },
    {
        "id": 17,
        "category": "Supercar",
        "model": "Bentley Continental Supersports",
        "horsepower": 700,
        "discount_price": null,
        "actual_price": "$130,000",
        "image_url": "https://car-images.bauersecure.com/wp-images/12143/bentleysupersports_02.jpg"
    },
    {
        "id": 18,
        "category": "Sport Sedan",
        "model": "BMW M5",
        "horsepower": 634,
        "discount_price": "$63,000",
        "actual_price": "$70,000",
        "image_url": "https://f90.bimmerpost.com/forums/attachment.php?attachmentid=2941082&stc=1&d=1658865585"
    },
    {
        "id": 19,
        "category": "Supercar",
        "model": "Audi R8",
        "horsepower": 565,
        "discount_price": "$120,000",
        "actual_price": "$190,000",
        "image_url": "https://www.hardwarezone.com.sg/thumbs/705610/og.jpg?1194"
    },
    {
        "id": 20,
        "category": "SUV",
        "model": "Rolls Royce Cullinan",
        "horsepower": 621,
        "discount_price": "$300,000",
        "actual_price": "$320,000",
        "image_url": "https://f.hubspotusercontent00.net/hubfs/2684054/car-review-blog/review_337074_1.jpg"
    },
    {
        "id": 21,
        "category": "Sport Sedan",
        "model": "Dodge Charger Hellcat",
        "horsepower": 717,
        "discount_price": null,
        "actual_price": "$80,000",
        "image_url": "https://www.cnet.com/a/img/resize/116e1407d45a721c97e88e76a853e6f46e8a32e6/hub/2020/10/20/a9f8ebb8-9a43-4d24-9347-f04913ae11f6/2020-dodge-charger-srt-hellcat-widebody-ogi-1.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
        "id": 22,
        "category": "SUV",
        "model": "GMC Yukon Denali",
        "horsepower": 420,
        "discount_price": "$95,000",
        "actual_price": "$120,000",
        "image_url": "https://i.gaw.to/content/photos/56/57/565733-gmc-yukon-denali-ultimate-2023-membre-du-premier-trio.jpeg"
    },
    {
        "id": 23,
        "category": "SUV",
        "model": "Range Rover Sport SVR",
        "horsepower": 518,
        "discount_price": null,
        "actual_price": "$125,000",
        "image_url": "https://cdn.motor1.com/images/mgl/EKOPq/s1/2022-range-rover-sport-svr-ultimate-edition.jpg"
    },
    {
        "id": 24,
        "category": "SUV",
        "model": "Mercedes G53 AMG",
        "horsepower": 550,
        "discount_price": "$75,000",
        "actual_price": "$90,000",
        "image_url": "https://spots.ag/2015/03/14/mercedes-benz-g-63-amg-2012-c141614032015192620_1.jpg"
    },
    
    {
        "id": 25,
        "category": "Supercar",
        "model": "Lamborghini Gallardo",
        "horsepower": 623,
        "discount_price": null,
        "actual_price": "$250,000",
        "image_url": "https://i.pinimg.com/originals/55/c1/bc/55c1bcb2bc55764fe1b7f184e06ef700.jpg"
    }
]

export default carData

