var $ = {
    //参数1: 访问后端程序的地址
    get: function (url, data, success, dataType) {
        //this：就是当前对象 ---> $
        var xhr = this.createXhr();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                //alert (xhr.responseText);
                var msg = xhr.responseText;
                //判断dataType的值，如果是json，则使用JSON.parse进行转换
                if (dataType == 'json') {
                    msg = JSON.parse (msg);
                }
                success (msg);
            }
        }
        
        var str = this.parmas (data);

        url = url + "?" + str;
        xhr.open ('get', url);
        xhr.send (null);
    },
    createXhr: function () {
        var xmlhttp = '';
        try {
            xmlhttp = new XMLHttpRequest ();
        } catch (e) {
            xmlhttp = new ActiveXObject ('Msxml2.XMLHTTP');
        }
        return xmlhttp;
    },
    //目标: {"id":1, "name":"zs"} --->  id=1&name=zs
    parmas: function (json) {
        // 处理data
        var str = '';
        for (var key in json) {
            str += key + "=" + json[key] + '&'; //id=1&name=zs&
        }
        str = str.slice(0, -1);
        //alert(str);
        return str;
    },
    post: function (url, data, success, dataType) {
        var xhr = this.createXhr ();

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                //alert(xhr.responseText);
                var msg = xhr.responseText;
                if (dataType == 'json') {
                    msg = JSON.parse (msg);
                }
                success (msg);
            }
        }

        xhr.open ('post', url);
        var str = this.parmas (data);
        xhr.setRequestHeader ('content-type', 'application/x-www-form-urlencoded');
        xhr.send (str);
    },
    // url
    // data
    // type
    // dataType
    // success
    ajax: function (json_conf) {
        // 定义变量，接收json_conf中的配置项
        var url = json_conf.url;
        var data = json_conf.data || {};
        var type = json_conf.type || 'get';
        var dataType = json_conf.dataType || 'text';
        var success = json_conf.success;

        //判断 type是get还是post
        if (type == 'get') {
            this.get (url, data, success, dataType);
        } else {
            this.post (url, data, success, dataType);
        }
    }
}