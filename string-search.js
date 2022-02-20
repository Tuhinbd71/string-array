const products = [
    'iphone 11pro',
    'laptop',
    'smart phone',
    'smart watch',
    'samsung Phone s11',
    'nakia phone',
    'htc Phone 12px camera',
];

const searching = 'phone';

// cearching indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);