// 把data.json中的数据 -> mysql

var fs = require('fs')


// 体验mysql包

// 1 加载mysql包
var mysql = require('mysql');
// 2 创建数据库连接
var connection = mysql.createConnection({
    host: 'localhost', // 主机
    user: 'root', // 数据库的用户名
    password: '123456', // 数据库密码
    database: 'sqldemo' // 数据库的名字
});
// 3 开启连接
// 第三步不是必须的 因为第四步执行时,会自动执行第三步
connection.connect();
// 4 SQL query(增删改查sql)
// 
fs.readFile('./data.json', (err, data) => {
    if (err) {
        throw err
    }
    data = data.toString()
    data = JSON.parse(data)
    var posts = data.posts
    posts.forEach((item, index) => {
        // {"name":"","time":"","mail":"","content":"111"}
        var sqlstr = 'INSERT INTO `posts` VALUES (NULL,?,?,?,?)'
        connection.query(sqlstr, [
            item.name,
            item.content,
            item.mail,
            item.time
        ], function(error, results) {
            if (error) throw error;
            console.log(results);
        });
    });
})


// 5 关闭掉
// connection.end();