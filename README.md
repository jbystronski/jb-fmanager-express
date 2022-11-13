<p><a href="https://github.com/jbystronski/jb-fmanager-react">@jb_fmanager/react</a> setup for express.js</p>

<h4>Installation</h4>

<p>Include the routes and the utility package <a href="https://github.com/jbystronski/jb-fmanager-node-utils">@jb_fmanager/node-utils</a></p>

```bash

npm i @jb_fmanager/express @jb_fmanager/node-utils

yarn add @jb_fmanager/express @jb_fmanager/node-utils

```

<h4>Options</h4>

<p style="font-weight: bold;">root</p>
<p>Root folder for the frontend component</p>
<p style="font-weight: bold;">prefix</p>
<p>Must match the namespace provided to the manager, default is "api/fm".</p>
<p style="font-weight: bold;">maxUploadSize</p><p>If you want to override the value provided to the manager. Accepts bytes, ie 5242880 (5mb).</p>
<p style="font-weight: bold;">errorHandler</p>
<p>To handle errors your way, optional</p>

<h4>Example use</h4>

```js
const server = require("express");
const app = server();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
require("@jb_fmanager/express")(app, {
  root: "public",
  prefix: "/api/fm",
  errorHandler: undefined,
});

app.use(cors());
app.use(server.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(server.static("./public"));

app.listen(4000, () => console.log("listening on port 4000"));
```
