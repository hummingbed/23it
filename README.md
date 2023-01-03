# 23it

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### deploy step 1
```npm run build
```


### deploy step 2
```git add dist -f
```

### deploy step 3
```git commit -m "deploying"
```

### deploy step 4
```git subtree push --prefix dist origin gh-pages
```