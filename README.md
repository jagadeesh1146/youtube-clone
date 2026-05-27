# YouTube Clone

A modern YouTube clone built with React, Redux Toolkit, Tailwind CSS, and YouTube Data API.

## Features

- Home page with trending videos
- Video watch page
- Dynamic video details
- Nested comments UI
- Live chat simulation
- Send your own chat messages
- Redux state management
- Search suggestions
- Responsive UI

## Tech Stack

- React.js
- Redux Toolkit
- Tailwind CSS
- React Router DOM
- YouTube Data API v3

## Project Structure

src/
├── components/
│   ├── Header.js
│   ├── Sidebar.js
│   ├── Buttonlist.js
│   ├── Videocontainer.js
│   ├── Videocard.js
│   ├── WatchPage.js
│   ├── Commentscontainer.js
│   ├── Livechat.js
│   ├── Chatinput.js
│   └── Chatmessages.js
│
├── utils/
│   ├── appSlice.js
│   ├── searchSlice.js
│   ├── chatSlice.js
│   ├── store.js
│   └── constants.js

## Installation

```bash
git clone https://github.com/jagadeesh1146/youtube-clone.git
cd youtube-clone
npm install
npm start