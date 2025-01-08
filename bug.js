```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello World!</div>
  );
}
```

This code will work fine with Next.js 13, but when upgraded to Next.js 15, it might throw an error related to the `app` directory.  The error message varies depending on the specific issue, but generally points to a missing or incorrect configuration within the `app` directory. This is because Next.js 15 introduces the `app` directory as the default way of structuring a Next.js application.