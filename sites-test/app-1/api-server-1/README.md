# api-server-1

```bash
docker build -t apiserver1 .
docker run -d --name apiserver1 -p 9999:9999 apiserver1
docker run -d --name apiserver2 -p 8888:8888 -e PORT=8888 apiserver1
```
