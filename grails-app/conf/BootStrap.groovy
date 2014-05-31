import angulardemo.Product

class BootStrap {

    def init = { servletContext ->
        5.times {
            new Product(name: "Product${it + 1}", category: "Category${it % 2 ? 1 : 2}", serialNumber: "100${it}", price: 1000 * (it + 1), description: "Description ${it + 1}").save(failOnError: true, flush: true)
        }
    }

    def destroy = {

    }
}
