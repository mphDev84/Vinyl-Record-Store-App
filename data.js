//this is a data store in place of web service data - API to be added later
module.exports = function () {
    return { 
        categories: ["Blues", "Rock", "Pop"],
        products: [
            { id: 1, name: "BB King Live", category: "Blues", 
                description: "Live at the Regal 1965", price: 275 },
            { id: 2, name: "Muddy Waters BBC Sessions", category: "Blues", 
                description: "Recorded Live at BBC Studios", price: 48.95 },
            { id: 3, name: "Exile on Main St.", category: "Rock", 
                description: "Studio album by The Rolling Stones", price: 19.50 },
            { id: 4, name: "Led Zeppelin I", category: "Rock", 
                description: "Studio Album by Led Zeppelin", 
                price: 34.95 },
            { id: 5, name: "Dark Side of The Moon", category: "Rock", 
                description: "Studio album by Pink Floyd", price: 79500 },
            { id: 6, name: "Revolver", category: "Pop", 
                description: "Studio album by The Beatles", price: 16 },
            { id: 7, name: "Help!", category: "Pop", 
                description: "Studio album by The Beatles", 
                price: 29.95 },
            { id: 8, name: "Tusk", category: "Pop", 
                description: "Studio Album by Fleetwood Mac", price: 75 },
            { id: 9, name: "If You Can Belive Your Eyes And Ears", category: "Pop", 
                description: "Studio album by The Mammas and The Papas", price: 1200 }
        ],
        orders: []
    }
}