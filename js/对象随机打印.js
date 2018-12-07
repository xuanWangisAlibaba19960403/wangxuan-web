const obj = {
            abc:1,
            b3:2,
            c5:3,
            d6:4,
            e1:5
        };
        const arr = [];
        function getCode (str) {
            let code = 0;
            for (let i = 0; i < str.length;i++) {
                code += str[i].charCodeAt();
            }
            return code;
        }
        for (var k in obj) {
            arr.push(getCode(k));  // 65
        }
        arr.sort( (a, b) => {
            return Math.random() - 0.5;
        })
        console.log(arr);