Channel Integration
===========

# Install
Using npm
```sh
$ npm install --save https://github.com/RshengYoung/channel-integration.git
```

# Example

## Wiht Javascript
```sh
const bot = require("channel-integration")

const lineClient = new bot.Client(CONFIG)
const clients = new bot.Client([lineClient])
```

## Wiht Typescript
```sh
import * as bot from 'channel-integration'
const lineClient = new bot.Client(CONFIG)
const clients = new bot.Client([lineClient])
or

import { Client, LineClient, WechatClient } from 'channel-integration'
const lineClient = new Client(CONFIG)
const clients = new Client([lineClient])
```

## Add new channel
```sh
const wechatClient = new WechatClient(CONFIG)
clients.use(wechatClient)
```

## Send message

const message = {
    channel: "<Channel name>",
    receiver: "<User id>",
    message: [
        {
            type: "<Message type>",
            text: "Text1"
        }
    ]
}