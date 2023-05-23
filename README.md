<div align="center"> 

<img src="https://i.imgur.com/ioA4PNX.png"/>

# 🤖NiBot🚀

A simple Facebook Automatic post generator for pages, fetching posts through Danbooru.
</div>

## 💻 Development

### Install dependencies ⏬

```bash
npm install
```

### Start developing ⚒️

```bash
npm run dev
```

## Additional Commands

```bash
npm run dev # starts application with hot reload
npm run build # builds application, distributable files can be found in "dist" folder

# OR

npm run build:win # uses windows as build target
npm run build:mac # uses mac as build target
npm run build:linux # uses linux as build target
```

Optional configuration options can be found in the [Electron Builder CLI docs](https://www.electron.build/cli.html).
## Project Structure ⌨️

```bash
- scripts/ # all the scripts used to build or serve your application, change as you like.
- src/
  - main/ # Main thread (Electron application source)
  - renderer/ # Renderer thread (VueJS application source)
```

### 🎉 Special Thanks to:

- [Electron Vue Template](https://github.com/Deluze/electron-vue-template) - for the base template.