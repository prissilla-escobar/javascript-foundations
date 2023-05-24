
function createCustomer(customerName, bill, bookings) {
  var customer = {
      name: customerName,
      bill: bill,
      bookings: bookings
    }
    return customer
  }

  function greeting(name) {
    if (name.bookings.length >= 1) {
      return `${name.name}! Welcome back to Happy Spa`
    } else {
    return `${name.name}! Welcome to Happy Spa`
  }
  }

  function createService(name, cost) {
    var service = {
      name: name,
      cost: cost
    }
    if (service.cost > 1) {
      return service
    } else {
    return "Please provide service name and cost."
    }
  }

  function bookServices(who, serviceAdded) {
    who.bookings.push(serviceAdded.name)
    who.bill = who.bill + serviceAdded.cost
    return who
  }

  function applyGiftCard(serviceName, price) {
    var affordable = []
    for (var i =0; i < serviceName.length; i++)
    if (serviceName[i].price <= price) {
      affordable.push(serviceName[i].name)
    }
    return affordable
  }

module.exports = { 
  createCustomer, 
  greeting, 
  createService,
  bookServices, 
  applyGiftCard 
}
