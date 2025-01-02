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
        "image_url": "https://media.ed.edmunds-media.com/porsche/panamera/2015/oem/2015_porsche_panamera_sedan_4s_fq_oem_1_600.jpg"
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
        "model": "Mercedes G63 AMG",
        "horsepower": 592,
        "discount_price": "$75,000",
        "actual_price": "$90,000",
        "image_url": "https://car-images.bauersecure.com/wp-images/13656/mercedesg63amg03.jpg"
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
        "image_url": "https://images.collectingcars.com/058594/mainimage.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85"
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
        "image_url": "https://spots.ag/2023/05/02/ferrari-f8-tributo-c832002052023235351_1.jpg?1683064470"
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
        "image_url": "https://spots.ag/2019/11/03/porsche-991-gt2-rs-weissach-package-c283603112019183159_1.jpg"
    },
    {
        "id": 15,
        "category": "Supercar",
        "model": "Aston Martin DBS",
        "horsepower": 630,
        "discount_price": "$160,000",
        "actual_price": "$220,000",
        "image_url": "https://spots.ag/2023/07/09/aston-martin-dbs-c841309072023080633_1.jpg?1688882830"
    },
    {
        "id": 16,
        "category": "Sport Sedan",
        "model": "Jaguar XF",
        "horsepower": 385,
        "discount_price": "$75,000",
        "actual_price": "$105,000",
        "image_url": "https://spots.ag/2021/08/15/jaguar-xfr-2011-c861115082021113228_1.jpg?1629019955"
    },
    {
        "id": 17,
        "category": "Supercar",
        "model": "Bentley Continental Supersports",
        "horsepower": 700,
        "discount_price": null,
        "actual_price": "$130,000",
        "image_url": "https://spots.ag/2017/09/11/bentley-continental-supersports-coupe-2018-c101911092017210854_1.jpg"
    },
    {
        "id": 18,
        "category": "Sport Sedan",
        "model": "BMW M5",
        "horsepower": 634,
        "discount_price": "$63,000",
        "actual_price": "$70,000",
        "image_url": "https://www.platinumautohaus.com/imagetag/14364/9/l/Used-2021-BMW-M5.jpg"
    },
    {
        "id": 19,
        "category": "Supercar",
        "model": "Audi R8",
        "horsepower": 565,
        "discount_price": "$120,000",
        "actual_price": "$190,000",
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/R8_Coupe_V10_performance-1.jpg/560px-R8_Coupe_V10_performance-1.jpg"
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
        "model": "Jeep Trackhawk",
        "horsepower": 707,
        "discount_price": null,
        "actual_price": "$70,000",
        "image_url": "https://i.pinimg.com/originals/f9/a1/e4/f9a1e441554bcd81518f18871b3ed5a9.jpg"
    },
    {
        "id": 25,
        "category": "Supercar",
        "model": "Lamborghini Gallardo",
        "horsepower": 623,
        "discount_price": null,
        "actual_price": "$250,000",
        "image_url": "https://spots.ag/2020/03/16/lamborghini-gallardo-lp570-4-superleggera-c975716032020120728_3.jpg"
    }
]

export default carData
        