class Foo {
    constructor() {
    }

    static configure(appName) {
        Foo.appName = appName;
    }
}

Foo.configure(process.env.APP_NAME);

export default function handler(req, res) {
    res.status(200).json({ message: `Hello from ${Foo.appName}` })
}