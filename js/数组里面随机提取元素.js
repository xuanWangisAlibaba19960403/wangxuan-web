function arrGetArray(arr) {
            var newarr = []
            for(var k in arr) {
                    newarr.push(arr[k][getRandom(arr[k].length - 1)])
            }
            console.log(newarr)
        }
function getRandom(max) {
            max = Math.floor(max);
            return Math.floor(Math.random() * (max + 1));
}