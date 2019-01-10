const shows = require('../models/show')

shows.deleteMany({})
    .then(() => {
        const nyfw = shows.create({
            name: "NYFW",
            date: "September 3rd, 2019",
            address: "Roosevelt Hotel NY,NY",
            email: "nyfw2019@gmail.com",
            flyer: "https://8349d58011c5510bf8dd-3ee251ec7a34c14fb9efdb604a2ad7c3.ssl.cf1.rackcdn.com/d4a55c16cc361b6b49d108eca88d03a9-550x600.jpg"
        })
        const atlfw = shows.create({
            name: "ATLFW",
            date: "January 12th, 2019",
            address: "Ponce City Market",
            email: "atlfw2019@gmail.com",
            flyer: "https://pbs.twimg.com/profile_images/2358741439/hlq1brj29k3akr6osa3r.jpeg"
        })
        const walk = shows.create({
            name: "Walk Fashion",
            date: "June 12th, 2019",
            address: "DoubleTree Hilton Buckhead",
            email: "walkfashion@yahoo.com",
            flyer: "https://www.google.com/imgres?imgurl=http%3A%2F%2Fstatic1.squarespace.com%2Fstatic%2F5507aacce4b0115fc60b1864%2Ft%2F5507b3e2e4b0e513c005c769%2F1538340612026%2F%3Fformat%3D1500w&imgrefurl=http%3A%2F%2Fwww.walkfashionshows.com%2F&docid=oKehgqF1ucoYmM&tbnid=uZU0yto4cTonXM%3A&vet=10ahUKEwjj2YbMmOHfAhXxmOAKHYaQDRMQMwhVKAAwAA..i&w=360&h=216&bih=821&biw=1440&q=walk%20fashion&ved=0ahUKEwjj2YbMmOHfAhXxmOAKHYaQDRMQMwhVKAAwAA&iact=mrc&uact=8"
        })           
            .then((shows) => {
                        Promise.all([nyfw, atlfw, walk]).then(() => {
                            shows.save()
                            console.log('successfully seeded')
                        })
                    })
            })
        