# Render Workstation Webserver Bare

```bash
docker stack deploy -c docker-compose.traefik.yml renderws
docker stack deploy -c docker-compose.tinaandcarlton.yml renderws
docker stack deploy -c docker-compose.tinaandcarlton.hawaii.yml renderws
docker stack rm renderws
```
