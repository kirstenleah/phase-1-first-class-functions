function receivesAFunction(mealPlan) {
    mealPlan();
}

function returnsANamedFunction() {
    return function thisFunction() {
    console.log("I should work out");
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log("function");
};
