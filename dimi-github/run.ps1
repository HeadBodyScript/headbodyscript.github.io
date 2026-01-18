# docker run --name dimitra -d -p 3000:3000 nextjs-docker3
docker run --name dimitra -d -p 3000:3000 nextjs-docker3
# docker run --name dimitra -d --publish 80:80 nextjs-docker3

# run = run an image that exists
# --name = name the container dimitra
# -p = map port 3000 of the container to port 3000
# nextjs-docker3 = the name of the image to run


# --network host