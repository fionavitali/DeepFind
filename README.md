# <p align="center">
[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Pixelify+Sans&size=270&pause=1000&color=2047DF&background=0D1117&vCenter=true&multiline=true&repeat=false&random=true&width=1200&height=300&lines=DEEPFIND)](https://git.io/typing-svg)
</p>
 
 [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Pixelify+Sans&size=100&pause=1000&color=2047DF&vCenter=true&multiline=true&random=true&width=1000&height=245&lines=Deepfake+Detection;~Chrome+Extension~)](https://git.io/typing-svg)
# **About** 
<pre>
  
                                          Welcome! 
    
  This is a personal project combining AI/ML with Software Development to create a useable 
  Chrome extension for YouTube. When you press the button (located on the YouTube controls 
  bar) at a certain part of a YouTube video featuring a face, the popup will display whether 
  the face is a DeepFake or not. 

  A couple of pointers: 
    1. This is a research project with an emphasis on gaining ML and UI/UX skills
    2. This extension was built using platforms accessible to me
    3. The true accuracy of the prediction is not perfect because of the resources I was 
    limited to, however, when I can use more powerful processing power, there will be an 
    update
    4. This extension was made with fun, so I hope you enjoy it well!
  
</pre>
# **Motivation**
<pre>
  
  Deepfakes have emerged as a genuine ethical concern in the realm of deception, privacy, 
  and authenticity of artificial intelligence. A type of synthetic media, deepfakes are 
  regularly known as videos in which a person’s face or body has been digitally manipulated 
  to appear as someone else. 
  
  Frequently, the real and synthetic videos are indistinguishable from each other, raising 
  a multitude of moral issues. These deepfakes can be used to spread misinformation, spread 
  propaganda, or even  blackmail and defame individuals.
  
  To combat this, DeepFind, a deepfake detection algorithm, helps identify whether a provided 
  video is authentic or synthesized—a step forward to eliminate the iniquity from deepfakes. 
  
  However, keep in mind that this was created using limited resources and low processing power 
  (to ML standards) so be considerate when relying on this tool for utmost accuracy. 

</pre>

---

# **Instructions**

  ## Loading the project from github 

### Get the code

- On the main page click the 'Code' dropdown
- Select 'Download Zip'
- Save to a spot on your computer
- Open a new page on VScode
- Open DeepFind's zip on VScode

### Add to Google Chrome

- Open Google Chrome
- Go to Manage Extensions under the three dots in upper right-hand corner
- Select load unpacked
- Inside of DeepFind's Folder, select the 'frontend' folder
- Pin DeepFind under the puzzle piece in upper right-hand corner

## Run the project

We need to install the libraries that will be used by our backend. 
- Uvicorn: Running a local server 
- FastAPI: API library
- Pillow: Handling images 
- Numpy: Handling images as an array of numbers 
- OpenCV for computer vision 


### Install Libraries

- In terminal 
```pip install uvicorn```
```pip install fastapi```
```pip install matplotlib```
```pip install numpy```
```pip install opencv-python```

- Or 
```pip install requirements.txt```



### Install face_recognition 

The face recognition library uses C++, another programming language to recognize faces. To use it, our machine needs a package called cmake, to download that package we will use homebrew. If you don't have homebrew on your computer you can follow these steps. We also need some tools that xcode provides (xcode should already be installed on you mac)

- Install HomeBrew (Package installer)
```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```

- Check that homebrew is installed correctly 
```brew --version```

- If brew is installed successfully -> Install cmake (needed for the face_recognition library)
```brew install cmake```
```xcode-select --install```

- Check that cmake is installed (you might need to close VSCode and re-open it)
```cmake --version```

- Finally 
```pip install face_recognition```

## Run the Backend Server 

- Open a terminal window 
- Run the following command (copy/paste + enter)

```uvicorn backend.src.server.main:app --reload```

This creates a local host that will enable us to make API calls to our python backend from the frontend (our Chrome Extension). To have a better view at our API endpoints and to check that they work well we can go to *http:localhost:8000/docs*

## Make calls to our API! 


# **Contact**
<pre>
  Send me a quick email if you have any questions or concerns!
  Email: fiona.m.vitali@gmail.com
  
  This project is a result of two years of hard work and 3 wonderful mentors: 
    Nathan Kammoun, Yiqiao Yin, and Nowell Closser. 
  
</pre>

**_<p align="center">
  I hope you like it! -Fiona Vitali_**
</p>
