class Foo {
    constructor() {
    }

    static configure(appName) {
        Foo.appName = appName;
    }
}

Foo.configure(process.env.APP_NAME);

export default function handler(req, res) {
    res.status(200).json({ "Foo.appName": Foo.appName, "process.env.APP_NAME": process.env.APP_NAME })
}