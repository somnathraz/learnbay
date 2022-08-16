This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



+++++++++++++++++++++++++++++++++++++++++++++++

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First install all npm package
npm install

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For development build

First, run:
npm run build

After build complete:
nom run start

<br>

# Docker

### 1. To build docker image

### ```docker build -t learnbay .```

</br>

### 2. To run docker image

```docker run -p 3000:3000 learnbay```


</br>

### 3. To run docker in contineous mode

### ```docker run -d -t -p 3000:3000 learnbay```

</br>

### 4. To check running docker container

### ```docker ps```

</br>

###5. To stop running docker image/container

```docker stop <container id>```

### Ex: ```docker stop 5tsmdor4vrrg4```

</br>

### 6. To check all docker images

### ```docker images```

</br>

### 7. To remove docker images

### ```docker rmi -f <docker image name>```
### Ex: ```docker rmi -f 4r3rfvdb4gv3```