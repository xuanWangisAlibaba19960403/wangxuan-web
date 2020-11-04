var Interface = function (name, methods) {
    if (!name || !methods) {
        throw new Error('Interface constructor called with "parameter.length less than 2"');
    }

    this.name = name;
    this.methods = [];

    methods.forEach(method => {
        if (typeof method !== 'string') {
            throw new Error('Interface constructor expects method names to be passwd in as a string')
        }
        this.methods.push(method)
    });
}

// Static class method.

Interface.ensureImplements = function (object, ...args) {
    console.log(object, args);
    if (!object || (!args || args.length === 0)) {
        throw new Error('Function Interface.ensureImplements called with "parameter.length exprcted at least 2"');
    }

    for (let i = 0; i < args.length; i++) {
        var interface = args[i];
        if (interface.constructor !== interface) {
            throw new Error('Function Interface.ensureImplements called with "parameter.length exprcted at least 2"')
        }

        for (let j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if (!object[method] || typeof object[method] !== 'function') {
                throw new Error(`Function Interface.ensureImplements: object does not implement the ${interface.name} interface.Method ${method} was not found.`)
            }
        }
    }
    console.log(object, args)
}