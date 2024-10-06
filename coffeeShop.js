class CoffeeShop {
    constructor(name, menu, orders) {
        this.name = name
        this.menu = menu
        this._orders = orders
    }

    addOrder(item) {
        for (let idx = 0; idx < this.menu.length; idx++) {
            if (this.menu[idx].name = item) {
                this._orders.push(item)
                return "order added"
            }
            else {
                return "this item is currently unavailable"
            }
        }
        
    }

    fulfillOrder() {
        if (this._orders.length > 0) {
            const item = this._orders.shift
            return `the ${item} is ready`
        }
        else  {
            return "all orders have been fulfilled"
        }
    }

    listOrders() {
        return this._orders
    }

    dueAmount() {
        let sum = 0
        for (let idx = 0; idx < this.menu.length; idx++) {
            let price = this.menu[idx].price
            sum += price
        }
        return sum
    }

    cheapestItem() {
        let cheapestItem = ''
        let minPrice = Infinity
        for (let idx = 0; idx < this.menu.length; idx++) {
            const item = this.menu[idx]
            if (item.price < minPrice) {
                minPrice = item.price
                cheapestItem = item.name
            }
        }
        return cheapestItem
    }

    drinksOnly() {
        let drinks = []
        for (let idx = 0; idx < this.menu.length; idx++) {
            if (menu[idx].type == 'drink') {
                drinks.push(menu[idx].name)
            }
        }
        return drinks
    }

    foodOnly() {
        let food = []
        for (let idx = 0; idx < this.menu.length; idx++) {
            if (menu[idx].type == 'food') {
                food.push(menu[idx].name)
            }
        }
        return food
    }
}

const menu = [
    { name: "tuna sandwich", type: "food", price: 5.00 },
    { name: "ham and cheese sandwich", type: "food", price: 4.50 },
    { name: "bacon and egg", type: "food", price: 6.00 },
    { name: "steak", type: "food", price: 12.00 },
    { name: "hamburger", type: "food", price: 8.00 },
    { name: "cinnamon roll", type: "food", price: 2.50 },
    { name: "orange juice", type: "drink", price: 3.00 },
    { name: "lemonade", type: "drink", price: 2.00 },
    { name: "cranberry juice", type: "drink", price: 3.50 },
    { name: "pineapple juice", type: "drink", price: 3.00 },
    { name: "lemon iced tea", type: "drink", price: 2.50 },
    { name: "vanilla chai latte", type: "drink", price: 4.00 },
    { name: "hot chocolate", type: "drink", price: 3.50 },
    { name: "iced coffee", type: "drink", price: 4.50 }
]

const tcs = new CoffeeShop('CoffeeHouse', menu, [])

console.log(tcs.foodOnly())

console.log(tcs.drinksOnly())

console.log(tcs.cheapestItem())

console.log(tcs.dueAmount())

console.log(tcs.listOrders())

console.log(tcs.fulfillOrder())

console.log(tcs.addOrder('guirfier'))