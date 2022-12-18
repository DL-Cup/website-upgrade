## Table of contents
- [Introduction](#introduction)
- [Folder structure](#folder-structure)
  - [Client](#client)
  - [Screenshots](#screenshots)
  - [Server](#server)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Screenshots](#screenshots-1)
  - [Desktop view](#desktop-view)
  - [Mobile view](#mobile-view)

## Introduction
Dl cup is a website for a University football tournament that includes table standings, match results and statistics. It's one of a series of projects I made for football tournaments while in University, which include motion graphics with css([walk up video](https://github.com/BarokDG/Walk-Up) and [schedule graphics](https://barokdg.github.io/schedule-graphics)), an admin dashboard for dl cup, and a web app similar to dl cup for a different tournament.([source](https://github.com/barokdg/gc-cup)). 

## Folder structure
On the top level, there are three folders - "client", "screenshots", and "server". 

### Client
This is where all the frontend code is. I've setup netlify to update on new commits to this folder. The main folder structure is from the create-react-app template so it's very basic. I plan to migrate to typescript very soon. I also plan on making the website responsive for desktop. When I first built it, I was very busy with school and couldn't come up with a design I was happy with. I will try to get back to that task ASAP.

### Screenshots
This folder contains the images that are at the bottom of this readme file.

### Server
This is where the back end application that serves data to the client is located. It's built with express.js and mongodb.

## Prerequisites
- [NodeJS](https://nodejs.org) version 14+
- [MongoDB](https://mongodb.com)

## Installation
Navigate to the client folder, open the terminal, and run
```bash
npm install
```

AFter everything is installed, run
```bash
npm run start
```

:arrow_right: Repeat the same process inside the server folder, to launch the api

## Screenshots

### Mobile View
#### Api loading screen
<p class="float">
  <img src="./screenshots/1.%20loading.jpg" alt="loading landing page" width="300"/>
</p>

---

#### Table
<p class="float">
  <img src="./screenshots/2.%20table.jpg" alt="table" width="300"/>
</p>

---

#### Matches
<p class="float">
  <img src="./screenshots/3.%20matches.jpg" alt="list of fixtures" width="300"/>
  <img src="./screenshots/4.%20matches-with-match-expanded.jpg" alt="Match details expanded" width="300"/>
  <img src="./screenshots/5.%20matches-sorted-by-team.jpg" alt="matches filtered by team" width="300"/>
</p>

---

#### Stats
<p class="float">
  <img src="./screenshots/6.%20stats.jpg" alt="stats page" width="300"/>
  <img src="./screenshots/7.%20stats-1.jpg" alt="stats page" width="300"/>
  <img src="./screenshots/8.%20top-scorers-modal.jpg" alt="open top scorers stats modal" width="300"/>
  <img src="./screenshots/9.%20top-scorers-sorted-by-team.jpg" alt="top scorers stats modal filtered by team" width="300"/>
</p>

---

#### Empty state
Probably my favorite component😅

<p class="float">
  <img src="./screenshots/10.%20empty-state.jpg" alt="empty state component" width="300"/>
</p>

