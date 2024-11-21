const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/restaurants', (req, res) => {
    const dummyRestaurants = [
        { id: 1, name: 'Chez Paul', city: 'Paris', rating: 4.5 },
        { id: 2, name: 'Mama Italia', city: 'Rome', rating: 4.8 },
    ];
    res.json(dummyRestaurants);
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
