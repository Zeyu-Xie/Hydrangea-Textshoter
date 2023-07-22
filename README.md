# Hydrangea-Textshoter
## Function

This project aims at transforming text to images. It includes two parts: the front-end and the back-end, separatly built by React Framework and python.

## Usage

### To Junior Users

You can simply choose any version of the formal edition. Just ```clone``` the repository to local environments and run:

```
cd Hydrangea-Textshoter/function
```

Then you'll be in the ```function``` folder, with the ```server.py``` in it. Use this command to run the server:

```
python server.py
```

### To Developers

If you only need the basic functions, just act like a normal user: 

```
cd Hydrangea-Textshoter/function
python server.py
```

In case of making contributions to this project, you can select suitable commands as follows: 

1. **Front-End Developing** ```cd page```
   1. Install the necessary packages ```npm i```
   2. Test the react framework ```npm start```
   3. Pack the react framework ```npm run build```
2. **Copying the Packed Front-End Codes**
   1. ```index.html```: ```cp ./page/build/index.html ./function/templates```
   2. Other static files: ```cp -r ./page/build/* ./function/static```

⚠️ Whatever changes you've made, don't forget to add a ```static``` in front of **every address** in ```./page/templates/index.html```. Or you may not be able to successfully read files from the **static folder**.

