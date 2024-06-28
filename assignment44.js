function sandwitch(item) {
    console.log('making your sandwitch with ');
    item.forEach(element => console.log(" _ " + element));
    console.log('enjoy your  sandwitch!');
}
sandwitch(['ham', 'cheease', 'tomato']);
sandwitch(['turkey', 'lettuce']);
sandwitch(['baccon', 'chicken']);
export {};
