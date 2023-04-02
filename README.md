
<img style="width:20%; height:20%;" src="https://user-images.githubusercontent.com/83772913/229309933-1df193a4-dad9-415d-a32d-7ff674dab66f.png">

# **AIShacKs**
AIShacks is a content media app that allows users to generate images and other content by entering a description and posting it directly within the app. Users can engage with each other by liking, commenting, following, or adding friends. The app utilizes the DALL-E API from OpenAI to generate images, and it was developed using the MERN stack.

The app also features gamification, where users receive 15 credits every month that they can use to generate images. Each image requires one credit. Moreover, users can earn additional credits based on the number of likes their posts receive. Specifically, for every 10,000 likes on a user's post, they will receive one credit.

Please let us know if you need any further details regarding the app.

# **Basic overview**
### Register page
<img style="width:60%; height:60%"  src="https://user-images.githubusercontent.com/83772913/229307921-b6db2df0-d670-483b-871d-75903c7f58a7.png"/>

### Login page
<img style="width:60%; height:60%" src="https://user-images.githubusercontent.com/83772913/229307949-597f7bc1-4e57-43bc-80c8-a8a31ecaa58b.png"/>

### Home page UI
<img style="width:70%; height:70%"   src="https://user-images.githubusercontent.com/83772913/229308008-d4fc0e0f-37cb-44f5-a65d-1ae3242e84d8.png"/>

### Posts UI
<div style="display:flex; flex-direction:column" >
<img style="width:40%; height:40%"  src="https://user-images.githubusercontent.com/83772913/229308923-42296d7b-a646-4462-980d-c9b443ed384c.png"/>
<img style="width:40%; height:25%" src="https://user-images.githubusercontent.com/83772913/229308126-0d96984b-1afe-4f05-be16-f2eaa61ec5eb.png"/>
<img  style="width:40%; height:40%" src="https://user-images.githubusercontent.com/83772913/229308146-224e4242-2b3e-4c40-ba6f-ac41cac5760d.png"/>
<img style="width:40%; height:40%" src="https://user-images.githubusercontent.com/83772913/229308171-86cc1900-205e-4771-8dcb-0982ac041ab1.png"/>
</div>


### Light mode page UI
<img style="width:60%; height:60%"  src="https://user-images.githubusercontent.com/83772913/229308208-86a266ae-1214-4501-9e6b-f845d85a8e9e.png"/>

### Profile page UI
<img style="width:60%; height:60%" src="https://user-images.githubusercontent.com/83772913/229308446-911b01d6-8e78-45d0-a674-eb1a6c8c984f.png"/>

## Image generation example

### Before :
<img style="width:50%; height:50%" src="https://user-images.githubusercontent.com/83772913/229308648-4f366d13-1440-4cb9-b048-5ac43d972a60.png">

### Generation :
<img style="width:50%; height:50%" src="https://user-images.githubusercontent.com/83772913/229308660-70b6a996-7ccd-4da8-8bc4-52a1e24f6511.png">

### Generated Image :
<img style="width:50%; height:50%" src="https://user-images.githubusercontent.com/83772913/229308672-86958933-62b6-4796-a4de-8a99c6a95815.png">

### Posted Image :
<img style="width:50%; height:40%" src="https://user-images.githubusercontent.com/83772913/229308737-b38a7bdf-c9f5-4143-814a-26e6845426f6.png">

### Overview : 
As shown above, Given UI elements are creates using MaterialUi framework. You can switch between dark and ligh mode in the App. The count of post, nunber of likes, credits are all Dynamic (inc and dec based on logic of app). I Used all my openAi credits while creating and testing the app, so currently using my friends credits.


### Resources used :
- Open AI's API to generate image
- Cloudinary's API to store images of post
- MongoDB Atlas to store data related to post and users.
- NODEJS, REACTJS etc to create Application

### Installation Guide :
```
GIVE a Star to the repository in top-right corner
```

```
Fork the repo into Your account
```

```
Go into the local IDE and write git clone "forked repo's link" in CLI
```

```
cd client 
npm install
npm start
```

```
cd server 
npm install
node index.js/ nodemon index.js
```

### Future scopes :
- Adding chat feature to chat with friends
- As the newer versions of Gpt will be launched in near future, GPT can come up with generating video feature. so that also can be included in the app.
- UI/UX can be improved more for better experience.
- Profile image can also be edited using this API
- New version of GPT could be trained on newer data daily, so user can also generate latest news post in the app and share with everyone else.
- future of this app is really leveraging


