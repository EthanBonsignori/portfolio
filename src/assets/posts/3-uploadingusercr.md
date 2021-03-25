<div style='display: flex; justify-content: center; align-items: center;'>
  <div style='padding-right: 8px; text-align: right;'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Published</span>
    <br />
    March 17, 2021
  </div>
    <img alt='Profile Pic' src='https://i.imgur.com/k0Py8Ex.jpg?1' height='auto' width='50' style='border-radius: 50%;' />
  <div style='padding-left: 8px'>
    <span style='font-size: 0.8em; opacity: 0.5;'>Written By</span>
    <br />
    Ethan Bonsignori
  </div>
</div>

<div style='text-align: center; font-style: italic; margin: 30px 0;'>
This is a three part tutorial that will teach you how to add a profile picture feature to your React application by allowing the user to crop and upload an image to block storage on Digital Ocean Spaces. We will then save a reference to the photo in your database for that user and display it on your site.
</div>

## Contents
* [Overview](#overview)
* [Setting up the Frontend](#frontend)
  1. [Creating a React App](#react)
  2. [Configuring the Image Upload Input](#input)
  3. [Setting up the Crop Modal](#modal)
  4. [Setting up Image Cropping](#crop)
* [Setting up the Backend](#back)

## Overview

In part one of this tutorial I will walk you through how to crop a user's desired profile image and prepare it to be stored in Digital Ocean Spaces. I will guide you in setting up a React App with an image input and modal for cropping. Part two of this tutorial will detail how to set up your Space on Digital Ocean and subsequently upload the cropped image to it. In part three, we will setup a simple Express server and SQLite database to save the URL of the photo in the Database entry for the user and retrieve it on page load. This is a multi-step process that can seem overwhelming, so I'll start by giving a overview of each step. When a user attempts to change their profile picture these are the steps they will take:

1. A user clicks on upload new profile picture
2. They are presented with an image selection screen and navigate to/select an image file
3. Selected image is sent to a modal where they can see what their image will look like when cropped and edit it how they see fit
4. The cropped image is sent to Spaces in the form of a Base64 png
6. The user receives a success message and the uploaded image's url is stored in the database

To create an app with this functionality we will use:
 * [```React```](https://reactjs.org/) for the front end
 * [```react-modal```](https://www.npmjs.com/package/react-modal) and [```react-image-crop```](https://www.npmjs.com/package/react-image-crop/) for image cropping

[In part two](https://ethanbon.com/blog/) (WIP) we will add:
 * [Digital Ocean Spaces](https://www.digitalocean.com/products/spaces/) (*DO Spaces* or just *Spaces*) to store the image

[In part three](https://ethanbon.com/blog/) (WIP) we will add:
 * An [```express```](https://expressjs.com/) server backend to act as our API
 * A [```sqlite```](https://www.sqlite.org/index.html) database for storing DO Spaces image links

<div class="blog-info">Digital Ocean Spaces costs $5 per month. I chose to use Spaces for storage instead of other services like Amazon's S3 because of its ease of use and low barrier to entry. You can compare costs with <a href="https://www.digitalocean.com/pricing/calculator/" target="_blank">Space's cost comparison calculator</a> to find out which service works best for your application.</div>

By the end of this guide, you will have an app with working user-uploaded and cropped profile photos. If you'd like to skip ahead, **the [finished repository for this tutorial can be found here](https://github.com/EthanBonsignori/picture-upload-tutorial)**.

## Setting up the Frontend<a name="frontend">
I will be starting with ```create-react-app``` to easily create a platform to demonstrate uploading and cropping, and to make this tutorial easier to follow. It's likely you may already have a working app with a form of user authentication and profiles, so I won't spend time adding those. I will add some basic CSS in this part to give some style to any elements I may add through the rest of this tutorial. If you are adding this functionality to an existing app, I would recommend jumping ahead to [configuring the image upload input](#input). From there on it should be structure agnostic.

### 1. Creating a React App<a name="react">
As mentioned, I will be using [```create-react-app```](https://create-react-app.dev/) to quickly get my app up and running.

Start by opening a terminal and navigating to where you want your project folder to live, then run the following commands replacing *picture-upload-tutorial* with the desired name of your app:
```bash
npx create-react-app picture-upload-tutorial
```
Wait for create-react-app to run and then:
```bash
cd picture-upload-tutorial
npm start
```

If all everything worked, your browser should open a window and navigate to ```http://localhost:3000``` and display your React app.

To improve the project structure, create two directories both inside the ```src``` folder. One called ```components``` and one called ```styles``` which will hold our components and styles respectively.
Move ```App.js``` into the ```components``` folder, move ```index.css``` into ```styles``` and feel free to delete the following files: ```App.test.js```, ```App.css```, ```setupTests.js```, ```reportWebVitals.js```, and ```logo.svg``` since we won't be using any of them.

Replace ```index.js``` with the following:

<div>
<a class="github-link" href="https://gist.github.com/EthanBonsignori/06a55e99ee25ef602e6d8f2e46c24cc9" target="_blank">
<img class="github-logo" />
<span>index.js gist</span>
</a>

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

</div>

If you plan on following my JSX structure and classNames, replace the contents of ```styles/index.css``` with the following for some basic styling:

<div>
<a class="github-link" href="https://github.com/EthanBonsignori/picture-upload-tutorial/blob/main/src/styles/index.css" target="_blank">
<img class="github-logo" />
<span>.../src/styles/index.css</span>
</a>

```css
body {
  margin: 0;
  background: #1c1c1c;
  color: #fff;
}

.App {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.upload-label {
  cursor: pointer;
  margin: 1em;
  padding: 5px 10px;
  border: 1px solid #fff;
  border-radius: 4px;
}

.upload-label:hover {
  background: rgba(255, 255, 255, 0.2);
}

.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 50vw;
  min-height: 50vh;
  max-height: 100vh;
  max-width: 100vw;
  background: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
```

</div>

Lastly, let's edit ```App.js``` to upload and display our profile picture. In a larger application I would separate this functionality into a new component, but for the sake of this tutorial I'm leaving it in ```App.js``` but feel free to create a new component. A few things to note about the input element; the ```accept``` tag is used to only allow image type files to be selected (later all image types will be converted to png before being stored). I've styled it with ```display: "none"``` so I can style the label as a button and replace the default appearance of the HTML file input, though this is personal preference. Finally, the placeholder ```handleChange``` function will only log the user's file to the console for now. We can use this to test the upload and will add more functionality in the [following section](#input).

<div>
<a class="github-link" href="https://gist.github.com/EthanBonsignori/5794af1e9c9716f261ae9eaa96b9cf16" target="_blank">
<img class="github-logo" />
<span>App.js gist 1</span>
</a>

```javascript
import React from 'react';

function App() {

  // Placeholder, will fetch url from Database when setup
  const profilePictureUrl = "https://placehold.it/200x200";

  const handleChange = (evt) => {
    const file = evt.target.files[0];
    console.log(file); // log file for now
  };

  return (
    <div className="App">
      <h3>Profile Picture Upload</h3>
      <img className="profile-picture" alt="profile" src={profilePictureUrl} />
      <label className="upload-label" htmlFor="upload">Change Profile Picture</label>
      <input
        id="upload"
        type="file"
        accept="image/*" // Only accept image files (.jpg, .png, .gif, etc)
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;

```

</div>

You can now upload an image to your browser! Open the console to see how your browser interprets an image file.

<a target="_blank" href="https://i.imgur.com/hXWMizq.png" title="View original image">
<img class="blog-screenshot" src="https://i.imgur.com/hXWMizq.png" alt="react app console">
</a>

### 2. Configuring the Image Input <a name="input">

Now that we have a working file input, we need to edit the ```handleChange``` function to convert the image to [Base64](https://en.wikipedia.org/wiki/Base64) so we can send it to be cropped [in the following section](#crop). For this we will use the browser's built in [```FileReader```](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) object to asynchronously read the image and temporarily log it to the console. We can also catch any errors that may appear with the ```onerror``` method. Edit the ```handleChange``` function in ```App.js``` as follows:

<div>
<a class="github-link" href="https://gist.github.com/EthanBonsignori/570297cf73eac1a24e2245da30e4c608" target="_blank">
<img class="github-logo" />
<span>App.js gist 2</span>
</a>

```javascript
...
  const handleChange = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      console.log(reader.result) // log Base64 for now
    }

    reader.onerror = (err) => {
      console.error(err)
    }
  };
...

```

</div>

### 3. Setting up the Crop Modal<a name="modal" />
<div class="blog-info">
<b>Q: </b><i>Why crop the image instead of sending it straight to the database now?</i>

<b>A: </b>Uniformity of profile images across your app as well as reduced total storage size. Your backend always knows what it'll receive, which is beneficial for keeping things streamlined and reducing potential bugs. This also gives us a chance to show the user what their picture will look like when it's displayed and lets them choose what part of the image gets cropped.
</div>

We now have access to the Base64 image and can send it to be cropped. As stated previously, I will be using ```react-modal``` for easy access to a modal to display cropping, and ```react-image-crop``` for a highly configurable cropping component. Let's install those dependencies now. In your terminal run the following:

```bash
npm install react-modal react-image-crop
```

Let's start by setting up the modal. Create a new file in the ```components``` folder called ```CropModal.js``` and import ```React``` and ```react-modal```. We'll control it's open/close state with ```useState``` and a toggle function in ```App.js``` that will be passed down as ```props``` to ```CropModal```. The third prop, ```imageBase64``` will be the Base64 image from our FileReader. For now we'll simply log it again so we can be sure our modal has access to it. In ```CropModal.js``` add the following:

<div>
<a class="github-link" href="https://gist.github.com/EthanBonsignori/175d7469c3672472cd23435f0b0266b9" target="_blank">
<img class="github-logo" />
<span>CropModal.js gist 1</span>
</a>

```javascript
import Modal from 'react-modal';

// For accessibility (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function CropModal(props) {
  const {
    isOpen,
    toggleModal,
    imageBase64,
  } = props;

  console.log(imageBase64);

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={toggleModal}
    >
      <h2>Crop Your Image</h2>
      // Crop element will go here
    </Modal>
  );
};

export default CropModal;


```

</div>

Back in ```App.js``` we need to import ```CropModal``` and add the function to toggle it's open/close state. We will also import the [React Hook](https://reactjs.org/docs/hooks-intro.html) [```useState```](https://reactjs.org/docs/hooks-state.html) to store both the modal state and our Base64 image string so we can provide them to ```CropModal``` as props. Let's add the ```toggleModal``` function and call it at the end of our current ```handleChange``` so we can test opening the Modal after an image is selected for cropping. Edit ```App.js``` as follows:

<div>
<a class="github-link" href="https://github.com/EthanBonsignori/picture-upload-tutorial/blob/main/src/components/App.js" target="_blank">
<img class="github-logo" />
<span>.../src/components/App.js</span>
</a>

```javascript
import React, { useState } from 'react';
import CropModal from './CropModal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);

  // Placeholder, will fetch url from Database when setup
  const profilePictureUrl = "https://placehold.it/200x200"

  const toggleModal = () => {
    setIsOpen(!isOpen)
  };

  const handleChange = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setImageBase64(reader.result)
      toggleModal();
    }

    reader.onerror = (err) => {
      console.error(err)
    }
  };

  return (
    <div className="App">
      <CropModal
        isOpen={isOpen}
        toggleModal={toggleModal}
        imageString={imageBase64}
      />
      // other jsx here
      ...

```

</div>

Selecting an Image now should open your newly created modal and look like something like my screenshot below. You can click anywhere outside the modal (on the overlay) to close it. Be sure to check the console to make sure you have properly passed the ```imageBase64``` prop to your Crop Modal.

<a target="_blank" href="https://i.imgur.com/80UELmT.png" title="View original image">
<img class="blog-screenshot" src="https://i.imgur.com/80UELmT.png" alt="crop modal test">
</a>

## 4. Setting up Image Cropping<a name="crop">
For the final section of Part 1, we will configure [```react-image-crop```](https://www.npmjs.com/package/react-image-crop) to take the inputted Base64 image and output the user's desired crop as a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob). Because we are using React Hooks, I will essentially be copying their [codesandbox.io react hooks example](https://codesandbox.io/s/react-image-crop-demo-with-react-hooks-y831o?file=/src/App.js) but because its a large amount of code, I'll add it in segments to explain as I go. Feel free to jump ahead if that's more your style.

Let's start with the imports. We need **four** different hooks for this one, all for different purposes. We'll also go ahead and import ```react-image-crop``` and its css so it looks nice.

<div>
<a class="github-link" href="https://gist.github.com/EthanBonsignori/cba0c8ca2623279c4a169e223bfb0bff" target="_blank">
<img class="github-logo" />
<span>CropModal.js gist 2</span>
</a>

```javascript
import { useCallback, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
...
```

</div>

Now we can setup the hooks required. If any hooks are unfamiliar to you I would highly recommend clicking to read the doc for that hook. They are short and very well explained. Here I've briefly summarized what each hook you will see in the next code block is used for:
  * [```useCallback```](https://reactjs.org/docs/hooks-reference.html#usecallback) is passed to ReactCrop's ```onLoad``` which uses [memoization](https://en.wikipedia.org/wiki/Memoization) to set ```imgRef``` on each load.
  * [```useEffect```](https://reactjs.org/docs/hooks-reference.html#useeffect) will handle the *meat* of our functionality - the actual cropping. This hook executes every time the crop changes by passing ```[completedCrop]``` as the second argument.
  * [```useRef```](https://reactjs.org/docs/hooks-reference.html#useref) holds a ref object whose ```.current``` property references a DOM node.
    * ```imgRef``` holds a reference to the image being cropped, in our case this will be ```imageBase64``` prop
    * ```previewCanvasRef``` refers to the canvas we will be cropping the image on
  * [```useState```](https://reactjs.org/docs/hooks-reference.html#usestate) for handling of ReactCrop's State.
    * ```crop, setCrop``` holds the current crop state object. We'll pass some defaults here like ```aspect: 1 / 1``` to keep the crop even.
    * ```completedCrop, setCompletedCrop``` is passed to ReactCrop's ```onComplete``` which stores the crop after any user change.

While it may seem confusing at first, looking through the code and following each function helps with understanding. Luckily a lot of this code is *set it and forget it* and you won't ever need to fully understand or edit it. Here's the (extensive) code we need to get ```react-image-crop``` up and running as well as the jsx for ReactCrop:

<div>
<a class="github-link" href="https://gist.github.com/EthanBonsignori/cba0c8ca2623279c4a169e223bfb0bff" target="_blank">
<img class="github-logo" />
<span>CropModal.js gist 2</span>
</a>

```javascript
...

function CropModal(props) {
  const {
    isOpen,
    toggleModal,
    imageBase64,
  } = props;

  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: '%', width: 50, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={toggleModal}
    >
      <h3>Crop Your Image</h3>
      <ReactCrop
        src={imageBase64}
        onImageLoaded={onLoad}
        crop={crop}
        onChange={(c) => setCrop(c)}
        onComplete={(c) => setCompletedCrop(c)}
        minHeight={100} // change to your desired minimum crop height/width
        minWidth={100}
        ruleOfThirds // shows a grid pattern for centering
        circularCrop // remove this if your profile images are square
        keepSelection // crop won't reset on click
        imageStyle={{ maxHeight: '75vh'}} // prevents image from pushing modal off-screen
      />
    </Modal>
  );
};

export default CropModal;

```

</div>

I'd encourage you to test it now and play around with the various options to configure cropping to your needs. You can see a list of all the options on the [props section of react-image-crop's npm page](https://www.npmjs.com/package/react-image-crop#props).

The final functionality we're missing is to save our cropped image. The way that ```react-image-crop``` handles saving is by using a [```canvas```](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) element to display only the cropped portion of the image and making use of one of its built in "download" methods:
  * [```.toDataURL```](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) to turn to canvas into a base64 image string. Synchronous and blocks the main thread which could add seconds to larger images.
  * [```.toBlob```](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob) both faster and asynchronous. Returns a [```blob```](https://developer.mozilla.org/en-US/docs/Web/API/Blob) type object.
I am opting to use ```.toDataURL``` for simplicity. We'll need to add both canvas and a button to execute the save function. The canvas has a style of ```display: "none"``` because it's just there for the download. Our ```handleSave``` function is just two lines and will log our cropped image.

<div>
<a class="github-link" href="https://github.com/EthanBonsignori/picture-upload-tutorial/blob/part-1-frontend/src/components/CropModal.js" target="_blank">
<img class="github-logo" />
<span>.../src/components/CropModal.js</span>
</a>

```javascript
...

  const handleSave = () => {
    const croppedBase64 = previewCanvasRef.current.toDataURL('image/png');
    console.log(croppedBase64);
  }

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={toggleModal}
      >
        <h2>Crop Your Image</h2>
        <ReactCrop
          src={imageBase64}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={(c) => setCrop(c)}
          onComplete={(c) => setCompletedCrop(c)}
          minHeight={100} // change to your desired minimum height/width
          minWidth={100}
          ruleOfThirds // shows a grid pattern for centering
          circularCrop // remove this if your profile images are square
          keepSelection // crop won't reset on click
          imageStyle={{ maxHeight: '75vh'}} // prevents image from pushing modal off-screen
        />
        <canvas ref={previewCanvasRef} style={{ display: 'none' }} />
        <button class="upload-label" onClick={handleSave}>Save</button>
    </Modal>
  );
};

export default CropModal;

```

</div>

And there you have it! You can click ```copy``` on the base64 string from your console and paste it into a tool like [codebeautify's base64 to image converter](https://codebeautify.org/base64-to-image-converter) to view the cropped image.

<a target="_blank" href="https://i.imgur.com/vZS3z16.png" title="View original image">
<img class="blog-screenshot" src="https://i.imgur.com/vZS3z16.png" alt="Image cropping base64">
</a>

That wraps up part one of this tutorial. In part two we will send our Base64 image string from the front end to Digital Ocean Spaces to save the cropped image. If you would like the code for this tutorial, [it can be found here](https://github.com/EthanBonsignori/picture-upload-tutorial/tree/part-1-frontend). I've split each part into it's own branch, so be sure to check which branch you're viewing.

*Last updated March 25, 2021*
