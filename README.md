# Render Workstation Webserver

```bash
docker stack deploy -c docker-compose.bare.yml renderws
docker stack deploy -c docker-compose.swarm.yml renderws
docker stack rm renderws
```

## Directories

- **initial** code base on tutorial noted in [History](#History)
- **renderws** setup for the render workstation
  - **bare** traefik uses a setup file and does not query docker
  - **label** traefik querys docker for the configuration
- **sites** not stored in git and has the data for the hosted sites
- **sites-test** stored in git example sites used during debug

## /etc/hosts

```
127.0.0.1       traefik
127.0.0.1       appsfortracking
127.0.0.1       apps4tracking
127.0.0.1       carltonathome
127.0.0.1       carltonjoseph
127.0.0.1       carltonwin8
127.0.0.1       sophieandchampagne
127.0.0.1       tinaandcarlton
```

## Transfers And Backups

```bash
rsync -avz --exclude ".git" --exclude "node_modules" apps4tracking.com:/home/carltonj2000/do20041/sites/tinaandcarlton/ /renderws/carltonData/cj2021/code/docker/renderws-webserver/sites/tinaandcarlton/
```

## History

The setup in this repository is based on.

- [Traefik Crash Course](https://youtu.be/C6IL8tjwC5E)
- [repo for above](https://github.com/hnasr/javascript_playground/tree/master/traefik)

## References

- [Self-Signed Certs](https://meta.discourse.org/t/traefik-ssl-self-signed-certs/154039)
