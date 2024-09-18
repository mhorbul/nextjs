class Foo {
    constructor() {
    }

    static configure(appName, appNameNextJsVar) {
        Foo.appName = appName;
        Foo.appNameNextJsVar = appNameNextJsVar;
    }
}

Foo.configure(process.env.APP_NAME, process.env.APP_NAME_VAR);

export default function handler(req, res) {
    res.status(200).json({
        "Foo.appName": Foo.appName,
        "Foo.appNameNextJsVar": Foo.appNameNextJsVar,
        "process.env.APP_NAME": process.env.APP_NAME,
        "process.env.APP_NAME_VAR": process.env.APP_NAME_VAR,
    })
}