var arrInfor = [
            {
                num: 2001,
                user: "zs"
            },
            {
                num: 2003,
                user: "ww"
            },
            {
                num: 2002,
                user: "ls"
            },
            {
                num: 2018,
                user: "ls"
            }
        ]
        var newarr = [];
        for (var i = 0; i < arrInfor.length; i++) {
            newarr.push(arrInfor[i])
        }
        var temp = 0;
        for (var i = 0; i < newarr.length - 1; i++) {
            for (var j = 0; j < newarr.length - i - 1; j++) {
                if (newarr[j].num < newarr[j + 1].num) {
                    temp = newarr[j + 1];
                    newarr[j + 1] = newarr[j];
                    newarr[j] = temp;
                }
            }
        }
        for (var i = 0; i < newarr.length; i++) {
            console.log(newarr[i].num + newarr[i].user + newarr[i].scroe);
        }