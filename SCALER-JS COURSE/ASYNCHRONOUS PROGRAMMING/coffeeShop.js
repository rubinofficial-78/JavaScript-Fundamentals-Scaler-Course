function PlaceOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve('Order is taken');
        }else{
            reject('Order is rejected');
        }
    });
};

function ProcessOrder(order){
    return new Promise((resolve) => {
        console.log('Order is being processed');
        resolve(`${order} is served`);
    });
};

// PlaceOrder('coffee').then((orderPlaced) => {
//     console.log(orderPlaced);
//     let orderIsPlaced = ProcessOrder(orderPlaced);
//     return orderIsPlaced;
// }).then((orderprocess) => {
//     console.log(orderprocess);
// });

async function serveOrder(){
    let orderPlaced = await PlaceOrder('coffee');
    return orderPlaced;
    
}

serveOrder();