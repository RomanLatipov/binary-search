function binarySearch(arr, target) {
  while (true) {
    if (arr.length < 2 && arr[0] !== target) 
      return false;

    const mid = Math.floor(arr.length/2);

    if (arr[mid] === target) 
      return true;
    else if (target < arr[mid])
      arr = arr.slice(0, mid);
    else
      arr = arr.slice(mid);
  }
}

// BONUS: MODIFY YOUR CODE TO RETURN THE INDEX OF THE TARGET, -1 IF NOT FOUND
function binarySearchIndex(arr, target) {

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", binarySearch([1, 2, 3], 3));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", binarySearch([3, 5, 9], 10));

  // UNCOMMENT FOR BONUS
  // console.log("");
  // console.log("Expecting: 0");
  // console.log("=>", binarySearchIndex([1, 2, 3], 1));

  // console.log("");

  // console.log("Expecting: -1");
  // console.log("=>", binarySearchIndex([4, 7, 20], 100));
}

module.exports = {
  binarySearch,
  binarySearchIndex
};

// Add a written explanation of your solution
