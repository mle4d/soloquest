const pants = {
    id: 'pants',
    title: 'Pick a Bottom',
    image: 'pantsquest.png',
    description: `
    Start your outfit by choosing a bottom. Pick what suits your style best, or have fun & pick something a little different than your usual go-to!
    `,
    choices: [{
        id: 'pick-jeans',
        description: 'Skinny Denim Jeans',
        result: `
      Classic choice! Denim goes with everything. Except for more denim, maybe.
    `,
        cash: 10,
        fauxpas: 0

    }, {
        id: 'pick-black-pants',
        description: 'Black Distressed Jeans',
        result: `
      Cool and edgy, just like you!
    `,
        cash: 20,
        fauxpas: 0
    }, {
        id: 'pick-skirt',
        description: 'Teal Floral Midi Skirt',
        result: `
      Bold and beautiful choice!
      `,
        cash: 25,
        fauxpas: 0
    }]
};

const tops = {
    id: 'tops',
    title: 'Pick a Top',
    image: 'shirtquest.png',
    description: `
        Now that you have your bottoms picked out, choose a top! Match to your pants, or your mood.
        `,
    choices: [{
        id: 'pick-denim',
        description: 'Denim Button Down',
        result: `
          A strong choice!
          `,
        cash: 10,
        fauxpas: 0
    }, {
        id: 'pick-blouse',
        description: 'Pink Blouse',
        result: `
          Pink & pretty, this top adds femininity to any outfit
          `,
        cash: 15,
        fauxpas: 0
    }, {
        id: 'pick-tshirt',
        description: 'Dead Kennedys Baseball Tee',
        result: `
          Bad ass. Perfect for a holiday in cambodia or punching Nazis
          `,
        cash: 50,
        fauxpas: 0
    }]
};
const jackets = {
    id: 'jackets',
    title: 'Pick a Jacket',
    image: 'jacketsquest.png',
    description: `
        Your final layer. How will you stay warm by looking cool?
        `,
    choices: [{
        id: 'pick-pleather',
        description: 'Vegan Leather Double Rider',
        result: `
          Boss choice. Cruelty free & kick ass.
          `,
        cash: 100,
        fauxpas: 0
    }, {
        id: 'pick sweater',
        description: 'White Sweater',
        result: `
          Grandma would be proud. And what's better than sweater weather?
          `,
        cash: 0,
        fauxpas: 5

    }]
};

const questArray = [pants, tops, jackets];
export default questArray;