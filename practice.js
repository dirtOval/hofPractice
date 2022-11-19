// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var counter = 0;
  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

// use _.each to build an array containing only tweets belonging to a specified user.
var getUserTweets = function(tweets, user) {
  var resultArray = [];
  _.each(tweets, function(tweet) {
    if (tweet.user === user) {
      resultArray.push(tweet);
    }
  });
  return resultArray;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var result = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var result = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var result = _.filter(desserts, function(dessert) {
    return dessert.type === 'cookie';
  });
  return result;
};

// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  var result = _.filter(tweets, function(tweet) {
    return tweet.user === user;
  });
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  var result = _.map(desserts, function(dessert) {
    if (dessert.ingredients.indexOf('flour') === -1) {
      dessert.glutenFree = true;
      return dessert;
    } else {
      dessert.glutenFree = false;
      return dessert;
    }
  });
  return result;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
var allUserMessages = function(tweets) {
  return _.map(tweets, function(tweet) {
    return tweet.message;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  return _.map(groceries, function(grocery) {
    var discount = parseFloat(grocery.price.slice(1)) * coupon;
    grocery.salePrice = '$' + (parseFloat(grocery.price.slice(1)) - discount).toFixed(2);
    return grocery;
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var result = _.reduce(products, function(acc, product) {
    return acc + parseFloat(product.price.slice(1));
  }, 0);
  return result;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var result = _.reduce(desserts, function(acc, dessert) {
    if (acc.hasOwnProperty(dessert.type)) {
      acc[dessert.type] += 1;
    } else {
      acc[dessert.type] = 1;
    }
    return acc;
  }, {});
  return result;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var result = _.reduce(tweets, function(acc, tweet) {
    if (acc.hasOwnProperty(tweet.user)) {
      acc[tweet.user] += 1;
    } else {
      acc[tweet.user] = 1;
    }
    return acc;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var result = _.reduce(movies, function(acc, movie) {
    if (movie.releaseYear < 2000 && movie.releaseYear > 1989) {
      acc.push(movie.title);
      return acc;
    } else {
      return acc;
    }
  }, []);
  console.log(result);
  return result;
};


//I: array of movie objects, timeLimit integer
//O: boolean stating whether there is a movie shorter than time limit
//C: must use _.reduce()
//E: can't think of any

//maybe use timeLimit as the accumulator start, and subtract movie run times from it
//have a bool variable that starts out false and becomes true if subtraction results in
//number greater than or equal to 0


// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  var timeForOneMovie = false;
  var result = _.reduce(movies, function(acc, movie) {
    var timeAfterMovie = acc - movie.runtime;
    if (timeAfterMovie >= 0) {
      timeForOneMovie = true;
    }
    return acc;
  }, timeLimit);
  return timeForOneMovie;
};
