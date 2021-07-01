const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
];

  function getTotalAmountForProducts(products) {
    let totalPrice = 0;
  
    for (const product of products) {
      totalPrice += product.price;
    };
  
    return totalPrice;
  }
  
//console.log(getTotalAmountForProducts(products)); // LOG: 33.46

  // this is a reducer
  const couponLocations = [
    { room: 'Living room', amount: 5 },
    { room: 'Kitchen', amount: 2 },
    { room: 'Bathroom', amount: 1 },
    { room: 'Master bedroom', amount: 7 }
  ];
  //reducers cycle through arrays
  function ourReduce(arr, reducer, init) {
      let accum = init;
      for (const element of arr) {
          accum = reducer(accum, element);
      };
      return accum;
  }
  
  function couponCounter(totalAmount, location) {
    return totalAmount + location.amount;
  }
  
//console.log(ourReduce(couponLocations, couponCounter, 0)); // LOG: 15

//simple example of a reducer
const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)
// => 12

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(x, y) {
    return x += y
})
console.log(totalBatteries)

