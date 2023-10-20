const fs = require('fs');


const productGenerator = async () => {
    let data = await fs.promises.readdir(__dirname + '/public/imgs/clubesActual/', 'utf-8');
    for (let i = 0; i < data.length; i++) {
        let productsData = await fs.promises.readFile("./products.txt")
        let productsDataParse = JSON.parse(productsData)
        const str = data[i].split("ACTUAL ").join("")
        const titleStock = str.split(".")[0].split('(')
        const dirtystock = titleStock[1]
        const title = titleStock[0]
        const stock = dirtystock.split(')')[0]
        /// RENAME PICS ////
        const path = title.split(' ').join('') + '.jpg'
        await fs.promises.rename(__dirname + `/public/imgs/clubesActual/${data[i]}`, __dirname + `/public/imgs/clubesActual/${path}`)
        if (productsDataParse.length) {
            await fs.promises.writeFile("./products.txt", JSON.stringify([...productsDataParse, {
                title: title,
                team: "",
                price: 0,
                category: "Clubes Actual",
                tags: "",
                path: `/public/imgs/clubesActual/${path}`,
                stock: stock
            }], null, 2))
        } else {
            await fs.promises.writeFile("./products.txt", JSON.stringify([{
                title: title,
                team: "",
                price: 0,
                category: "Clubes Actual",
                tags: "",
                path: `/public/imgs/clubesActual/${path}`,
                stock: stock
            }], null, 2))
        }
    }
}
const fillStock = (product) => {
    arr = product.stock.split("_")
    let stock = {
        "s": 0,
        "m": 0,
        "l": 0,
        "xl": 0,
        "xxl": 0
    }
    arr.map((size) => {
        if (size === "S") stock.s = 1;
        if (size === "M") stock.m = 1;
        if (size === "L") stock.l = 1;
        if (size === "XL") stock.xl = 1;
    })
    return stock

}

// console.log(fillStock(product))


const fillProperties = async () => {
    let productsData = await fs.promises.readFile("./products.txt")
    let productsDataParse = JSON.parse(productsData)
    const newData = []
    for (let y = 0; y < productsDataParse.length; y++) {
        const title = productsDataParse[y].title
        const team = title.split(" ")[2]
        const tags = title.split(" ")
        const stock = fillStock(productsDataParse[y])
        productsDataParse[y].team = team;
        productsDataParse[y].tags = tags
        productsDataParse[y].stock = stock
        newData.push(productsDataParse[y])
        await fs.promises.writeFile("./products.txt", JSON.stringify(newData, null, 2))

    }
}

