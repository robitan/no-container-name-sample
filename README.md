# No Container Name Sample

https://qiita.com/robitan/items/4d6eda90d957aae20ab1

1. prepare

```sh
$ docker-compose build
$ docker-compose up -d
$ docker-compose run --rm -it app npm install
```

2. check

```sh
$ docker-compose run --rm -it app node sample_container_name.js
$ docker-compose run --rm -it app node sample_service_name.js
```
