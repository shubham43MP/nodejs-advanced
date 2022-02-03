# Advanced NodeJS

Even if you use multiple clusters(cluster.fork) result can still depend upon the no. of cores you are using

Increasing cluster may not increase your speed of your server

## pm2 for improving performance of server

PM2 is a good load balancer and building battle hardened NodeJS application

[PM2 documentation](https://pm2.io/)

Used heavily in production.

```
pm2 start index.js -i 0 // Zero means I DONT KNOW WHAT TO DO JUST FIGURE IT OUT FOR ME
```

To delete a process and stop them:

```
pm2 delete index
```

Gives information about the processes

```
pm2 show index
```

```
pm2 monit
```

pm2 has ability to restart the app or process if they fail
