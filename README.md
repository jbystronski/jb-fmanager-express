<p style="font-size:15px;"><a href=https://github.com/jbystronski/jb-fmanager-react">@jb_fmanager/react</a> setup for express.js</p>

<h5>Installation</h5>

<p style="font-size:15px;">Include the routes and the utility package <a href="https://github.com/jbystronski/jb-fmanager-node-utils">@jb_fmanager/node-utils</a></p>

```bash

npm i @jb_fmanager/express @jb_fmanager/node-utils

yarn add @jb_fmanager/express @jb_fmanager/node-utils

```

<h5>Options</h5>

<p style="font-size:15px; font-weight: bold">prefix</p>
<p style="font-size:15px;">Must match the namespace provided to the manager, default is "/api/fm".</p>
<p style="font-size:15px; font-weight: bold">maxUploadSize</p>
<p style="font-size:15px;">If you want to override the value provided to the manager. Accepts bytes, ie 5242880 (5mb).</p>

<h5>Example use</h5>

```js
const server = require("express");
const app = server();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("@jb_fmanager/express")(app, { prefix: "/api/fm" });

app.use(cors());
app.use(server.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(server.static("./public"));

app.listen(4000, () => console.log("listening on port 4000"));
```
