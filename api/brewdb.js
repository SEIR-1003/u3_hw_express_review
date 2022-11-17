const locations = [
    {
        locId: 1,
        brewId: 1,
        locName: "BOSQUE NORTH BREWERY",
        street: "834 US-550",
        city: "Bernalillo",
        state: "New Mexico",
        postal_code: 87004,
        country: "United States",
        phone: "505-361-1876",
        locImage: "https://images.squarespace-cdn.com/content/v1/5c6045529b8fe8286a54e234/1549839217970-H5H1T24KXDCPM4CKI4D7/location+-+north.jpg?format=1500w"
    },
    {
        locId: 2,
        brewId: 1,
        locName: "NOB HILL PUBLIC HOUSE",
        street: "106 Girard Blvd SE, Suite. B",
        city: "Albuquerque",
        state: "New Mexico",
        postal_code: 87106,
        country: "United States",
        phone: "505-508-5967",
        locImage: "https://images.squarespace-cdn.com/content/v1/5c6045529b8fe8286a54e234/1550076268425-EC66N5QPVBHPJ0OGDT6F/NobHill_sm.jpg?format=1500w"
    },
    {
        locId: 3,
        brewId: 1,
        locName: "LAS CRUCES PUBLIC HOUSE",
        street: "901 E. University Ave., Bldg. 945, Ste. 3-A",
        city: "Las Cruces",
        state: "New Mexico",
        postal_code: 88001,
        country: "United States",
        phone: "575-888-4110",
        locImage: "https://images.squarespace-cdn.com/content/v1/5c6045529b8fe8286a54e234/1551506628081-BBTFVXJOEAE866R4FLUM/LC2.3.jpg?format=1000w"
    },    
    {
        locId: 4,
        brewId: 2,
        locName: "LA CUMBRE BREWERY TAPROOM",
        street: "3313 Girard NE",
        city: "Albuquerque",
        state: "New Mexico",
        postal_code: 87107,
        country: "United States",
        phone: "505-872-0225",
        locImage: ""
    },    
    {
        locId: 5,
        brewId: 2,
        locName: "LA CUMBRE WESTSIDE TAPROOM",
        street: "5600 Coors Blvd NW C1",
        city: "Albuquerque",
        state: "New Mexico",
        postal_code: 87120,
        country: "United States",
        phone: "505-916-0787",
        locImage: ""
    },    
    {
        locId: 6,
        brewId: 5,
        locName: "LA REFORMA BREWERY",
        street: "8900 San Mateo Boulevard Northeast, Suite I",
        city: "Albuquerque",
        state: "New Mexico",
        postal_code: 87113,
        country: "United States",
        phone: "505-717-1361",
        locImage: ""
    },
]

const breweries = [
    {
        brewId: 1,
        brewName: "Bosque Brewing",
        brewery_type: "micro",
        rating: 3.78,
        website_url: "https://www.bosquebrewing.com",
        logo: "https://assets.untappd.com/site/brewery_logos/brewery-43446_0d582.jpeg"
    },
    {
        brewId: 2,
        brewName: "La Cumbre Brewing Company",
        brewery_type: "micro",
        rating: 3.95,
        website_url: "https://www.lacumbrebrewing.com",
        logo: "https://assets.untappd.com/site/brewery_logos/brewery-3761_c99a3.jpeg"
    },
    {
        brewId: 3,
        brewName: "Marble Brewery",
        brewery_type: "micro",
        rating: 3.77,
        website_url: "https://marblebrewery.com/",
        logo: "https://assets.untappd.com/site/brewery_logos/brewery-825_8c341.jpeg"
    },
    {
        brewId: 4,
        brewName: "Bow & Arrow Brewing Co.",
        brewery_type: "micro",
        rating: 3.96,
        website_url: "https://www.bowandarrowbrewing.com/",
        logo: "https://assets.untappd.com/site/brewery_logos/brewery-251727_0539a.jpeg"
    },
    {
        brewId: 5,
        brewName: "La Reforma Brewery",
        brewery_type: "brewpub",
        rating: 3.88,
        website_url: "https://lareformabrewery.com/",
        logo: "https://assets.untappd.com/site/brewery_logos/brewery-434873_10ff3.jpeg"
    },
    {
        brewId: 5,
        brewName: "La Reforma Brewery",
        brewery_type: "brewpub",
        rating: 3.88,
        website_url: "https://lareformabrewery.com/",
        logo: "https://assets.untappd.com/site/brewery_logos/brewery-434873_10ff3.jpeg"
    },
]

module.exports = {locations, breweries}