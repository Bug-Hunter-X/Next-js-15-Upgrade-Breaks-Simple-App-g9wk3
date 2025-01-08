```javascript
// app/page.js

export default function Home() {
  return (
    <div>Hello World!</div>
  );
}
```

To solve this, you should migrate your existing code to use the `app` directory. Create an `app` directory in the root of your project, and move the `Home` component to `app/page.js`. Next.js will automatically handle the routing.  If you have more complex routing with nested pages in your `pages` directory, you'll need to adapt those accordingly within the `app` directory structure.