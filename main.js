// create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    let list = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] == 'number') {
        list.push(l[i])
      }
    }
    return list;
  }