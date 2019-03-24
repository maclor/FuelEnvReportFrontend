```
ng build --prod
docker image build -t maclor/fuel-app-fe .
docker run --name fuel-app-fe -p 80:80 --rm -d maclor/fuel-app-fe
```
