all: install build apply_build clear_cache

install:
	-echo "Installing dependencies in page."
	-cd page && npm install && cd ..

build: 
	-echo "Running build process in page"
	-cd page && npm run build && cd ..

apply_build: 
	-echo "Copying the packed page project into the python project's folder."
	-cp ./page/build/index.html ./function/templates && cp -r ./page/build/* ./function && rm ./function/index.html && mkdir ./function/app/sources

clear_cache:
	-echo "Removing uploaded photos"
	-rm ./function/app/sources/*
	-echo "Removing the output image"
	-rm ./function/app/output.png

run:
	-echo "Starting the project"
	-python3 ./function/server.py

start:
	-echo "Starting the react project to debug."
	-cd page && npm start

clear:
	-echo "Removing dependencies in page."
	-cd page && rm -rf node_modules && cd ..