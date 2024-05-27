// Interface Visitor
class VehicleVisitor {
    visitCar(car) {}
    visitMotorcycle(motorcycle) {}
    visitTruck(truck) {}
  }
  
  // Concrete Visitor para calcular o custo de manutenção
  class MaintenanceCostCalculator extends VehicleVisitor {
    visitCar(car) {
      return car.age * 200; // Exemplo: R$200 por ano de idade do carro
    }
  
    visitMotorcycle(motorcycle) {
      return motorcycle.age * 100; // Exemplo: R$100 por ano de idade da moto
    }
  
    visitTruck(truck) {
      return truck.age * 300; // Exemplo: R$300 por ano de idade do caminhão
    }
  }
  
  // Concrete Visitor para exibir as características dos veículos
  class VehicleInfoDisplayer extends VehicleVisitor {
    visitCar(car) {
      console.log(`Carro: Marca ${car.brand}, Modelo ${car.model}, Ano ${car.year}`);
    }
  
    visitMotorcycle(motorcycle) {
      console.log(`Moto: Marca ${motorcycle.brand}, Modelo ${motorcycle.model}, Ano ${motorcycle.year}`);
    }
  
    visitTruck(truck) {
      console.log(`Caminhão: Marca ${truck.brand}, Modelo ${truck.model}, Ano ${truck.year}`);
    }
  }
  
  // Interface Element
  class Vehicle {
    accept(visitor) {}
  }
  
  // Concrete Elements
  class Car extends Vehicle {
    constructor(brand, model, year) {
      super();
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.age = new Date().getFullYear() - year;
    }
  
    accept(visitor) {
      return visitor.visitCar(this);
    }
  }
  
  class Motorcycle extends Vehicle {
    constructor(brand, model, year) {
      super();
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.age = new Date().getFullYear() - year;
    }
  
    accept(visitor) {
      return visitor.visitMotorcycle(this);
    }
  }
  
  class Truck extends Vehicle {
    constructor(brand, model, year) {
      super();
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.age = new Date().getFullYear() - year;
    }
  
    accept(visitor) {
      return visitor.visitTruck(this);
    }
  }
  
  // Uso do padrão Visitor
  const vehicles = [
    new Car('volkswagen', 'Golf', 2015),
    new Motorcycle('Honda', 'Hornet', 2018),
    new Truck('Volvo', 'FH', 2010)
  ];
  
  const maintenanceCostCalculator = new MaintenanceCostCalculator();
  const vehicleInfoDisplayer = new VehicleInfoDisplayer();
  
  vehicles.forEach(vehicle => {
    console.log(`Custo de Manutenção: $${vehicle.accept(maintenanceCostCalculator)}`);
    vehicle.accept(vehicleInfoDisplayer);
  });
  