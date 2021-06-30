const choice = (items) => {
    return items[Math.floor(Math.random() * items.length)];
}

const remove = (items, item) => {
    const index = items.indexOf(item);
    let removedItem = index > -1 ? items.splice(index, 1) : undefined;
    return removedItem; 
}

export {choice, remove}