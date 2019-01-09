const shows = require('../models/show')

shows.deleteMany({})
    .then(() => {
        const nyfw = shows.create({
            Name: "NYFW",
            Date: "September 3rd, 2019",
            Address: "Roosevelt Hotel NY,NY",
            Email: "nyfw2019@gmail.com",
            Flyer: "https://8349d58011c5510bf8dd-3ee251ec7a34c14fb9efdb604a2ad7c3.ssl.cf1.rackcdn.com/d4a55c16cc361b6b49d108eca88d03a9-550x600.jpg"
        })

                    .then((show) => {
                        Promise.all([nyfw]).then(() => {
                            show.save()
                            console.log('successfully seeded')
                        })
                    })
            })
        