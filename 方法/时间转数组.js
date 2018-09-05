const str = '13:18,16:17';
        function strChangeArr (str, ...sign) {
            function arrStr(arr) {
                let str ='';
                arr.forEach(item => {
                    str += item;
                });
                return str;
            }
            let newsign = '';
            newsign = arrStr(sign).split('')
            const obj = {};
            for(let i = 0;i < newsign.length;i++) {
                if(!obj[newsign[i + 1]]) {
                    obj[newsign[i + 1]] = newsign[i];
                    i = i + 1;
                }
            }
            console.log(obj);
            let arr = str;
            let sortarr = [];
            for (let k in obj) {
                sortarr.push(obj[k]);// console.log(k);
            }
            let newarr = [];
            for(i = 0;i < sortarr.length;i++){
                if (i === 0) {
                    arr = arr.split(sortarr[i]);
                }else {
                    for(let j = 0;j < arr.length;j++) {
                        newarr.push(arr[j].split(sortarr[i]));
                    }
                }
            }
            }
        strChangeArr(str,',1',':2');